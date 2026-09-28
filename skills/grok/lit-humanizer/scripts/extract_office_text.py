#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = []
# ///

# ─── How to run ───
# 1. Install uv (if not installed):
#      curl -LsSf https://astral.sh/uv/install.sh | sh
# 2. Run directly (no venv, no pip install needed):
#      uv run extract_office_text.py FILE.docx|FILE.pptx
# 3. Or make executable and run:
#      chmod +x extract_office_text.py && ./extract_office_text.py FILE.docx
# ──────────────────

from __future__ import annotations

import re
import sys
import zipfile
from pathlib import Path
from xml.etree.ElementTree import Element, ParseError, fromstring

WORD_NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
DRAWING_NS = "{http://schemas.openxmlformats.org/drawingml/2006/main}"
MAX_XML_BYTES = 32 * 1024 * 1024
MAX_PACKAGE_XML_BYTES = 128 * 1024 * 1024


def paragraph_text(element: Element, text_tag: str, tab_tag: str, break_tag: str) -> str:
    """Return visible text for one Word or DrawingML paragraph."""
    pieces: list[str] = []
    for node in element.iter():
        if node.tag == text_tag and node.text:
            pieces.append(node.text)
        elif node.tag == tab_tag:
            pieces.append("\t")
        elif node.tag == break_tag:
            pieces.append(" ")
    return "".join(pieces).strip()


def xml_text(archive: zipfile.ZipFile, member: str, namespace: str) -> list[str]:
    """Read bounded XML and collect paragraph text in document order."""
    info = archive.getinfo(member)
    if info.file_size > MAX_XML_BYTES:
        raise ValueError(f"refusing oversized Office XML member: {member}")
    root = fromstring(archive.read(member))
    return [
        value
        for paragraph in root.iter(f"{namespace}p")
        if (value := paragraph_text(paragraph, f"{namespace}t", f"{namespace}tab", f"{namespace}br"))
    ]


def extract_document(path: Path) -> list[str]:
    """Extract paragraph text from a DOCX or PPTX package using stdlib ZIP/XML."""
    with zipfile.ZipFile(path) as archive:
        members = archive.namelist()
        total_xml = sum(info.file_size for info in archive.infolist() if info.filename.endswith(".xml"))
        if total_xml > MAX_PACKAGE_XML_BYTES:
            raise ValueError("refusing Office package with oversized aggregate XML")
        if path.suffix.lower() == ".docx":
            return xml_text(archive, "word/document.xml", WORD_NS)
        if path.suffix.lower() == ".pptx":
            slide_names = [name for name in members if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)]
            slide_names.sort(key=lambda name: int(re.search(r"slide(\d+)", name).group(1)))
            return [line for name in slide_names for line in xml_text(archive, name, DRAWING_NS)]
    raise ValueError("expected a .docx or .pptx file")


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: uv run extract_office_text.py FILE.docx|FILE.pptx", file=sys.stderr)
        return 2
    path = Path(sys.argv[1])
    try:
        text = extract_document(path)
    except (OSError, zipfile.BadZipFile, KeyError, ParseError, ValueError) as error:
        print(f"Office text extraction failed: {error}", file=sys.stderr)
        return 2
    sys.stdout.write("\n".join(text))
    if text:
        sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
