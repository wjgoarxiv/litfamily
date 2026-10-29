<p align="center"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/brand/exports/litfamily-cover-motion-still.webp" /><img src="assets/brand/exports/litfamily-cover-motion.webp" width="100%" alt="LitFamily 모션 커버: 일곱 로봇이 차례로 켜지고 깨어난 뒤 LITFAMILY와 KEEP THE WORK LIT. 문구가 밝아지는 영상" /></picture></p>
<p align="center"><a href="assets/brand/exports/litfamily-cover-motion-still.webp">정지 프레임 보기</a> · <a href="assets/brand/exports/litfamily-cover-film.mp4">소리와 함께 11초 영상 보기</a></p>

# LitFamily

**Keep the work lit.**

LitFamily는 AI 코딩 에이전트 일곱 종류에 하나씩 맞춰 만든 오픈소스 확장입니다. 에이전트가 작업을 계획하고, 결과를 스스로 확인하고, 다음 세션이 이어받을 수 있도록 프로젝트에 기록을 남기게 도와줍니다.

<p align="center">
<img src="assets/brand/readme/badge-version.svg" alt="출시: npm" />
<img src="assets/brand/readme/badge-license.svg" alt="MIT license" />
<img src="assets/brand/readme/badge-family.svg" alt="Seven independent ports" />
</p>

**[설치](#설치) · [작업 예시](#이런-걸-만들-수-있어요) · [실제 화면](#실제-화면) · [빠른 시작](#빠른-시작) · [주요 기능](#주요-기능) · [명령과 훅](#명령과-훅) · [링크](#링크) · [English](README.md)**

작업 흐름은 절반입니다. 나머지 절반은 완성된 결과물을 만드는 스킬입니다. 도면, 발표자료, 보고서, 웹 페이지, 영상까지 만듭니다. 아래 그림은 LitClaude에 짧은 요청 하나를 입력해 나온 결과이고, 나머지는 [이런 걸 만들 수 있어요](#이런-걸-만들-수-있어요)에 요청과 함께 모아 두었습니다.

<table>
<tr><td width="50%" valign="top"><img src="assets/showcase/pid-column.webp" width="400" alt="ISA 태그, 범례, 표제란이 있는 증류탑 탑정부 P&amp;ID." /><br /><sub>lit-schematic · P&amp;ID</sub></td><td width="50%" valign="top"><img src="assets/showcase/cutaway-reactor.webp" width="400" alt="재질별 색과 한국어 지시선이 붙은 재킷 교반 반응기의 등각 컷어웨이." /><br /><sub>lit-schematic · 등각 컷어웨이</sub></td></tr>
<tr><td width="50%" valign="top"><img src="assets/showcase/architecture.webp" width="400" alt="다섯 가지 색의 번호 붙은 흐름으로 그린 음식 배달 플랫폼 아키텍처." /><br /><sub>lit-diagram-drawer · 아키텍처</sub></td><td width="50%" valign="top"><img src="assets/showcase/ui-dashboard.webp" width="400" alt="수치 카드, 막대 차트, 온도 이탈 목록이 있는 냉장 트럭 운영 대시보드." /><br /><sub>frontend-ui-ux · 대시보드</sub></td></tr>
</table>

## 설치

제품마다 npm 패키지가 따로 있고, 각각 에이전트 하나를 위해 만들어졌습니다. 지금 쓰는 에이전트를 찾아 그 줄의 명령을 터미널에 붙여 넣으면 됩니다. 하나만 설치하면 되고, 다른 제품이 함께 필요하지는 않습니다.

### 에이전트 고르기

| 쓰는 에이전트 | 제품 | 설치 명령 |
|---|---|---|
| Claude Code | [LitClaude](https://github.com/wjgoarxiv/litclaude) | `npm exec --yes --package @litfamily/litclaude@1.0.43 -- litclaude install --yes` |
| Hermes Agent | [LitHermes](https://github.com/wjgoarxiv/lithermes) | `npx --yes --package @litfamily/lithermes@1.0.32 -- lithermes install --yes --no-style` |
| Codex CLI | [LitCodex](https://github.com/wjgoarxiv/litcodex) | `npm exec --yes --package @litfamily/litcodex@1.0.33 -- litcodex install` |
| OpenCode | [LitOpenCode](https://github.com/wjgoarxiv/litopencode) | `npm exec --package @litfamily/litopencode@1.0.34 -- litopencode install` |
| Grok Build | [LitGrok](https://github.com/wjgoarxiv/litgrok) | `npm exec --yes --package @litfamily/litgrok@1.0.29 -- litgrok install` |
| Muse Code | [LitMuse](https://github.com/wjgoarxiv/litmuse) | `npx @litfamily/litmuse@0.1.4 install` |
| Antigravity CLI (`agy`) | [LitGravity](https://github.com/wjgoarxiv/litgravity) | `npx @litfamily/litgravity@0.1.4 install` |

npm이 함께 설치된 Node.js와 해당 에이전트가 있어야 합니다. LitCodex는 Node.js 22 이상, LitHermes는 18 이상이 필요합니다. 설치 프로그램이 무엇을 바꾸는지, 설치 중에 무엇을 묻는지, 바뀔 내용을 미리 보는 방법과 제거하는 방법은 각 제품 README에 정리되어 있습니다.

LitMuse와 LitGravity는 Node.js 20 이상이 필요합니다. LitMuse는 Meta와 제휴하지 않은 독립 커뮤니티 프로젝트입니다.

### 코딩 에이전트에게 설치 맡기기

쓰고 있는 코딩 에이전트에게 설치를 맡기고 싶다면 아래 프롬프트를 붙여 넣으세요. 에이전트가 맞는 LitFamily 제품을 고른 뒤, 그 제품 README에 에이전트용으로 적힌 설치 순서를 그대로 따릅니다.

```text
내가 쓰는 코딩 에이전트에 맞는 LitFamily 제품을 설치해 줘.
1. 어떤 에이전트용인지 모르겠으면 먼저 물어봐. Claude Code, Codex CLI, OpenCode, Hermes Agent, Grok Build, Muse Code, Antigravity CLI(agy) 중 하나야. 각각 맞는 제품은 LitClaude, LitCodex, LitOpenCode, LitHermes, LitGrok, LitMuse, LitGravity야.
2. 그 제품의 GitHub README(github.com/wjgoarxiv/<소문자 제품 이름>)를 열고, 코딩 에이전트용 설치 프롬프트를 따라 해. 공식 npm 패키지 @litfamily/<소문자 제품 이름>만 써.
3. 무엇이든 바꾸기 전에 계획을 먼저 보여 주고 내가 좋다고 할 때까지 기다려.
4. 설치가 끝나면 그 제품의 점검 명령(doctor 또는 status)을 돌리고, 무엇을 어디에 썼는지와 에이전트를 어떻게 다시 시작해야 불러오는지 알려 줘.
```

Claude Code를 쓴다면 Claude Code 안에서 이 허브의 플러그인 마켓플레이스로 LitClaude를 설치할 수도 있습니다.

```text
/plugin marketplace add wjgoarxiv/litfamily
/plugin install litclaude@litfamily
```

LitClaude는 두 경로 가운데 하나만 골라 계속 쓰세요. 같은 플러그인이 두 번 켜지는 일을 막을 수 있습니다. 마켓플레이스로는 플러그인 자체만 설치되고, 선택 사항인 상태 표시줄과 호스트 설정은 npm 설치 프로그램이 맡습니다. 자세한 내용은 [마켓플레이스 안내](docs/marketplaces.md)에 있습니다.

### 설치한 다음에는

- **Claude Code** — [LitClaude](https://github.com/wjgoarxiv/litclaude): 프로젝트 대화에서 `lit`으로 요청.
- **Hermes Agent** — [LitHermes](https://github.com/wjgoarxiv/lithermes): Hermes CLI나 게이트웨이를 다시 시작하고, 플러그인과 스킬이 불러와졌는지 확인한 뒤 `lit`으로 요청.
- **Codex CLI** — [LitCodex](https://github.com/wjgoarxiv/litcodex): 프로젝트 대화에서 `lit`으로 요청.
- **OpenCode** — [LitOpenCode](https://github.com/wjgoarxiv/litopencode): OpenCode를 다시 시작하고 **Tab**을 눌러 `lit-loop` 에이전트를 고른 뒤 작업 요청.
- **Grok Build** — [LitGrok](https://github.com/wjgoarxiv/litgrok): 써볼 프로젝트 안에서 설치 명령을 실행하고(파일은 그 프로젝트의 `.grok/` 폴더에 들어갑니다), 훅 신뢰 설정을 확인한 뒤 `/litwork`로 요청.
- **Muse Code** — [LitMuse](https://github.com/wjgoarxiv/litmuse): 훅과 에이전트 권한을 승인하고 `doctor`로 확인한 뒤, Muse 프로젝트에서 `lit`으로 요청.
- **Antigravity CLI (`agy`)** — [LitGravity](https://github.com/wjgoarxiv/litgravity): `doctor`로 확인한 뒤 프로젝트에서 `lit`으로 요청. 승인한 계획은 `lit start plans/<slug>.md`로 실행.

> [!NOTE]
> **npm에 출시했습니다.** LitMuse·LitGravity 0.1.0 첫 출시를 포함해 일곱 제품 모두 npm `@litfamily` 스코프로 배포되어 있습니다. 버전과 출시 커밋은 [출시 상태](docs/release-status.md)에 있습니다.

같은 명령은 각 npm 페이지에서도 볼 수 있습니다: [`@litfamily/litclaude`](https://www.npmjs.com/package/@litfamily/litclaude) · [`@litfamily/lithermes`](https://www.npmjs.com/package/@litfamily/lithermes) · [`@litfamily/litcodex`](https://www.npmjs.com/package/@litfamily/litcodex) · [`@litfamily/litopencode`](https://www.npmjs.com/package/@litfamily/litopencode) · [`@litfamily/litgrok`](https://www.npmjs.com/package/@litfamily/litgrok) · [`@litfamily/litmuse`](https://www.npmjs.com/package/@litfamily/litmuse) · [`@litfamily/litgravity`](https://www.npmjs.com/package/@litfamily/litgravity). 허브에는 공통 설치기가 없습니다. 호스트 설정, 로그인, 설치 중 선택 항목과 제거 방법은 제품마다 다릅니다.

## 이런 걸 만들 수 있어요

이 절의 그림은 모두 Claude Code용 제품인 LitClaude 1.0.43이 실제로 만든 결과입니다. 그림 밑에 프롬프트가 있으면 Claude Code 세션에서 그 요청으로 만든 것이고(긴 요청은 …로 줄였습니다), 없으면 스킬의 엔진이 스킬에 함께 들어 있는 예시로 만든 것입니다. 꾸며 낸 시안은 하나도 없습니다.

지금 똑같이 만들 수 있는지는 쓰는 제품에 따라 다릅니다. 대부분의 스킬은 일곱 제품 모두에 들어 있고, 제품마다 자기 하네스에서 돌립니다. 가장 새로운 스킬 세 개도 이제 일곱 제품 모두에 들어 있고, 더 꽉 찬 기본 스타일은 LitMuse를 뺀 여섯 제품에 들어 있습니다.

| 무엇 | 지금 들어 있는 곳 |
|---|---|
| `lit-diagram-drawer`, `lit-scientific-visualization`, `lit-pptx`, `lit-docx`, `frontend-ui-ux`, `lit-typographic-motion`, `readme-studio` | 일곱 제품 모두 |
| `lit-schematic`(P&ID, 실험 장치도, 컷어웨이), `lit-adhd`, `lit-hijack` | 일곱 제품 모두 |
| 이 그림들처럼 꽉 찬 기본 스타일(촘촘한 배치, 여러 강조색, 눈에 띄는 한 가지 장치) | LitMuse를 뺀 여섯 제품 |
| 스레드 줄이 보이는 LIT 카드 | LitClaude 1.0.43, Claude Code 상태 표시줄 |

### 그리기

장비, 시스템, 데이터를 각각 그 규칙을 아는 스킬이 그립니다. P&ID에는 ISA-5.1 태그와 표제란이, 컷어웨이에는 재질별 색이, 아키텍처에는 번호 붙은 흐름이, 논문 그림에는 오차 띠가 들어갑니다.

<table>
<tr><td width="50%" valign="top"><img src="assets/showcase/pid-column.webp" width="400" alt="증류탑 탑정부 P&amp;ID. 증류탑, 셸앤튜브 응축기, 환류 드럼, 환류 펌프 두 대, ISA 계기 기호가 있고 오른쪽에 범례, 아래에 표제란이 있다." /><br /><b>lit-schematic</b> · A3 한 장짜리 P&amp;ID<br /><code>lit draw a detailed P&amp;ID of a distillation column overhead section on one A3 sheet: shell-and-tube overhead condenser, reflux drum, duty and standby reflux pumps, LIC to FIC cascade …</code></td><td width="50%" valign="top"><img src="assets/showcase/cutaway-reactor.webp" width="400" alt="재킷 교반 회분 반응기의 등각 컷어웨이. 위에 모터가 있고 잘린 강철 동체 안으로 파란 액체, 임펠러, 코일이 보이며 초록 다리가 콘크리트 받침 위에 서 있다. 양옆에 한국어 지시선이 달려 있다." /><br /><b>lit-schematic</b> · 등각 컷어웨이<br /><code>lit-schematic 교반식 재킷 회분 반응기(jacketed stirred batch reactor)의 등각 단면 사시도를 그려줘</code></td></tr>
<tr><td width="50%" valign="top"><img src="assets/showcase/architecture.webp" width="400" alt="음식 배달 플랫폼 아키텍처 다이어그램. 클라이언트 앱, API 게이트웨이, 주문·결제·배차·위치 추적 서비스, Kafka, PostgreSQL, Redis가 다섯 가지 색의 번호 붙은 흐름으로 이어지고 범례가 붙어 있다." /><br /><b>lit-diagram-drawer</b> · 시스템 아키텍처<br /><code>lit-diagram-drawer 음식 배달 플랫폼의 시스템 아키텍처 다이어그램을 그려줘</code></td><td width="50%" valign="top"><img src="assets/showcase/isotherm-figure.webp" width="400" alt="두 패널 그림. (a)는 273, 298, 323 K에서 압력에 따른 CO2 흡착량으로 반복 측정 점, Langmuir 맞춤선, 확대 삽입 그림이 있고, (b)는 흡착량에 따른 등량 흡착열과 95% 구간 띠다." /><br /><b>lit-scientific-visualization</b> · 두 패널 논문 그림<br /><code>/litclaude:lit-scientific-visualization 현재 폴더의 data.csv(세 온도에서 측정한 CO2 흡착 등온선, 반복 2회)를 논문용 그림으로 만들어줘</code></td></tr>
<tr><td width="50%" valign="top"><img src="assets/showcase/optics-bench.webp" width="400" alt="등각으로 그린 광학 벤치. He-Ne 레이저, 빔 익스팬더, 미러 두 개, 빔 스플리터, 렌즈, 시료, 광검출기 두 개와 주황색 빔 경로에 지시선 이름이 붙어 있다." /><br /><b>lit-schematic</b> · 실험 장치도<br /><code>lit 레이저 광학 벤치 실험 장치를 저널 double column 그림 한 장으로 그려줘 …</code></td><td width="50%" valign="top"><img src="assets/showcase/cutaway-loop.webp" width="400" alt="교반 오토클레이브 컷어웨이 애니메이션. 부품이 조립되고 임펠러가 돌며 냉각수가 내부 코일을 따라 흐른다." /><br /><b>lit-schematic</b> · 컷어웨이 루프 영상<br /><code>lit … 오토클레이브 컷어웨이를 짧은 루프 모션 영상으로 만들어줘: 분해된 부품이 조립되고, 임펠러가 돌고, 냉각수가 코일을 따라 흐르게</code></td></tr>
</table>

### 발표하기

스타일을 말하거나, 열세 가지 가운데 lit-pptx가 고르게 둡니다. 차트와 KPI 줄은 PowerPoint에서 바로 고칠 수 있고, Pretendard가 들어 있으며, 넘침·대비·빈 슬라이드 검사를 통과한 덱만 나옵니다.

<table>
<tr><td width="50%" valign="top"><img src="assets/showcase/deck-newsroom.webp" width="400" alt="뉴스룸 스타일 10장 덱의 한눈 보기. 검은 마스트헤드 띠, 주황색 데이터 계열, 막대·선 차트와 큰 숫자가 보인다." /><br /><b>lit-pptx</b> · 뉴스룸, 10장<br /><code>lit 우리 구 주민에게 보여줄 2026년 대중교통 이용 데이터 브리핑 발표자료 10장, 뉴스룸 스타일로</code></td><td width="50%" valign="top"><img src="assets/showcase/deck-neo.webp" width="400" alt="네오 브루탈리즘 피칭 덱 10장의 한눈 보기. 파랑·노랑 블록, 두꺼운 외곽선, 딱딱한 그림자, 크고 굵은 숫자." /><br /><b>lit-pptx</b> · 네오 브루탈리즘 피칭<br /><code>lit 신규 서비스 투자 피칭 덱 10장, 네오 브루탈리즘 스타일로. 글자와 숫자는 크고 굵게</code></td></tr>
<tr><td width="50%" valign="top"><img src="assets/showcase/deck-themes.webp" width="400" alt="같은 덱을 열세 가지 톤으로 그린 격자. 톤마다 한 줄씩, 밝은 종이 스타일부터 어두운 night, 청록 테마까지." /><br /><b>lit-pptx</b> · 한 덱, 열세 가지 톤<br /><sub>같은 예시 덱을 엔진이 열세 가지 톤으로 모두 그린 것입니다. paper, newsroom부터 riso, night, ledger까지.</sub></td></tr>
</table>

### 쓰기

lit-docx는 계속 고쳐 쓸 수 있는 Word 파일을 만듭니다. 표지, 근거가 붙은 핵심 수치, 숫자가 오른쪽 정렬된 표, 결정 상자를 넣고, 건네기 전에 페이지를 렌더링해 직접 봅니다.

<table>
<tr><td width="50%" valign="top"><img src="assets/showcase/docx-report.webp" width="400" alt="한국어 운영 결과 보고서 세 쪽. 첫 쪽에 핵심 수치 세 개와 승인 요청 상자가 있고, 이어지는 쪽에는 괘선 표와 번호 붙은 절이 있다." /><br /><b>lit-docx</b> · 한국어 보고서, Report 톤<br /><sub>스킬에 들어 있는 예시 <code>references/examples/01-report-ko.md</code>를 스킬의 변환기로 만든 결과이며, 레이아웃 검사를 통과했습니다.</sub></td><td width="50%" valign="top"><img src="assets/showcase/docx-mix.webp" width="400" alt="영어 분기 고객 지원 보고서와 한국어 시범 사업 제안서의 페이지. 표지 처리가 서로 다르다." /><br /><b>lit-docx</b> · 영어 보고서와 제안서<br /><sub>들어 있는 예시 두 개를 더 변환했습니다. <code>07-report-en.md</code>(Report), <code>04-proposal-ko.md</code>(Proposal).</sub></td></tr>
</table>

### 만들기

frontend-ui-ux는 마크업을 쓰기 전에 하우스 스타일부터 정하고, 페이지를 만든 뒤 여러 폭에서 열어 자기 스크린샷을 검토합니다. readme-studio는 프로젝트 표지를 같은 방식으로 만듭니다.

<table>
<tr><td width="50%" valign="top"><img src="assets/showcase/ui-dashboard.webp" width="400" alt="Coldline 운영 대시보드. 정시율 91.7%, 온도 이탈 5건, 운행 트럭, 배송 완료의 수치 카드 네 장과 지금 표시가 있는 계획 대비 배송 막대 차트, 온도 이탈 목록이 있다." /><br /><b>frontend-ui-ux</b> · 운영 대시보드<br /><code>Build the operations dashboard for Coldline, a regional delivery company that runs a fleet of refrigerated trucks. …</code></td><td width="50%" valign="top"><img src="assets/showcase/ui-landing-neo.webp" width="400" alt="라벤더 바탕의 Ledgerline 랜딩 페이지. 아주 큰 검은 제목, 노란 버튼, 두꺼운 외곽선과 딱딱한 그림자를 두른 청구서 카드와 예산 카드." /><br /><b>frontend-ui-ux</b> · 랜딩 페이지, 네오 브루탈리즘<br /><code>Build the marketing landing page for Ledgerline … Make it neo-brutalism: loud, friendly, bold outlines and hard shadows.</code></td></tr>
<tr><td width="50%" valign="top"><img src="assets/showcase/ui-landing-brutalist.webp" width="400" alt="사양서처럼 만든 Ledgerline 랜딩 페이지. 격자 배경, 대문자로 쌓은 제목, 예산 115% 초과를 보여 주는 프로젝트 모니터 패널." /><br /><b>frontend-ui-ux</b> · 랜딩 페이지, 컴퓨테이셔널 브루탈리즘<br /><code>Build the marketing landing page for Ledgerline … Make it retro-futurist computational brutalism: raw, mechanical, like an instrument or a spec sheet.</code></td><td width="50%" valign="top"><img src="assets/showcase/readme-cover.webp" width="400" alt="예시 프로젝트 hydrate-kit의 어두운 README 표지. 라벨 줄, 외곽선으로 바꾼 큰 제목, 주황 줄, 부제가 흐린 반응기 그림 위에 있고 오른쪽에 픽셀 노트 모티프가 있다." /><br /><b>readme-studio</b> · README 표지<br /><sub>스킬의 HyperFrames 표지 템플릿에 스킬의 글꼴 도구로 모든 글자를 외곽선으로 바꿔 넣은, 예시 프로젝트용 표지입니다.</sub></td></tr>
</table>

### 영상 만들기

lit-typographic-motion은 먼저 연출안을 쓰고, 사운드를 깔아 프레임 단위로 렌더링한 뒤 깜빡임, 가독성, 루프 이음매를 검사합니다. 아래 프롬프트에는 도구 이름도, 빽빽하게 채워 달라는 말도 없습니다. 겹겹의 화면, 색, 소리는 기본값에서 나왔습니다.

<table>
<tr><td width="50%" valign="top"><img src="assets/showcase/film-hero.webp" width="400" alt="영상의 포스터 프레임. 어두운 청록 키보드 들판 위에 빛나는 불꽃 키캡, LitClaude 글자, PROMPT, PLAN, WORK 2/2, REVIEW, DONE 단계 막대가 있다." /><br /><b>lit-typographic-motion</b> · 13초 히어로 영상, 포스터<br /><code>lit LitClaude 히어로 영상 13초짜리 만들어줘. LIT 불꽃 키가 주인공으로, 프롬프트 → 계획 → 작업 → 리뷰 → 완료로 lit-loop가 돌아가는 세계를 고퀄리티 3D로 보여줘.</code></td><td width="50%" valign="top"><img src="assets/showcase/film-frames.webp" width="400" alt="히어로 영상의 프레임 열두 장. 키캡에 불이 들어오고 단계마다 한국어 자막이 나오며 마지막 줄에서 LitClaude 제목에 도착한다." /><br /><b>lit-typographic-motion</b> · 같은 영상의 프레임<br /><sub>그 영상의 프레임 열두 장입니다. 어두운 도입부부터 LitClaude 제목까지.</sub></td></tr>
</table>

### 흐름 놓치지 않기

워크플로 두 개와 도우미 세 개가 함께 돌면 LIT 카드가 프롬프트 아래에 그 흐름을 줄로 그립니다. 정신없던 하루 끝에 <code>lit adhd</code>를 치면 무엇을 물었고, 무엇이 끝났고, 무엇이 멈춰 있고, 다음은 무엇인지 한 장으로 정리해 줍니다. 이어서 <code>go</code>를 치면 열려 있는 계획 하나를 이어서 시작합니다.

<table>
<tr><td width="50%" valign="top"><img src="assets/showcase/card-threads.webp" width="400" alt="스레드 줄이 보이는 LIT 카드. GREEN 2/5에서 멈춘 lit-loop, 그 아래 3/6으로 도는 start-work, executor, librarian-researcher, lit-verifier 레인으로 갈라지는 줄이 있다." /><br /><b>LIT card</b> · 스레드 줄<br /><sub>카드 렌더러가 직접 그린 화면입니다. GREEN에서 멈춘 lit-loop 아래로 start-work가 돌고, 레인 세 개가 나란히 움직입니다.</sub></td><td width="50%" valign="top"><img src="assets/showcase/adhd-brief.webp" width="400" alt="lit-adhd 브리핑이 뜬 터미널. 세션 네 개와 다음 단계를 담은 첫 줄, 세션마다 마지막 요청과 끝낸 일, 커밋을 적은 카드, 커밋 두 개와 0/6인 clamp 계획이 있는 로드맵, 상자에 담긴 추천 다음 단계가 나오고 아래에 무지개색 REWIND 카드가 있다." /><br /><b>lit-adhd</b> · 정리 브리핑<br /><code>lit adhd</code></td></tr>
<tr><td width="50%" valign="top"><img src="assets/showcase/adhd-go.webp" width="400" alt="go를 친 뒤의 터미널. start-work가 열린 clamp 계획을 실행하고 테스트가 통과하며 카드에는 review 단계의 start-work가 보인다." /><br /><b>lit-adhd</b> · go로 이어 가기<br /><code>go</code></td></tr>
</table>

### 남의 기법 배워 오기

글, 게시물, PDF, 저장소를 <code>lit hijack</code>에 주고 내 스킬 이름을 적으면 됩니다. 출처마다 어디서 왔고 라이선스가 무엇을 허락하는지 적고, 자기 말로 사양을 쓴 뒤 격리된 곳에서 구현합니다. 같은 미공개 프롬프트로 이전 스킬과 새 스킬을 돌려 보고, 마지막에 이식 보고서를 남깁니다.

<table>
<tr><td width="50%" valign="top"><img src="assets/showcase/hijack-report.webp" width="400" alt="이식 보고서. 가져온 기법 다섯 개와 비교 결과(새 스킬 2/2, 이전 스킬 0/2), 이유를 단 남긴 기법 여섯 개, 출처를 아이디어만으로 표시한 출처 표, 노출·출처 표기·재검토 절이 있다." /><br /><b>lit-hijack</b> · 이식 보고서<br /><code>lit hijack https://x.com/… into .claude/skills/promo-brief</code></td><td width="50%" valign="top"><img src="assets/showcase/hijack-ab.webp" width="400" alt="프로모 브리프 네 개를 나란히 놓은 한눈 보기. 이전 스킬 두 개, 새 스킬 두 개이며 새 브리프에는 핵심 한 줄, 실제 자료, 시간 붙은 장면, 거절 조건 절이 있다." /><br /><b>lit-hijack</b> · 이전 스킬과 새 스킬<br /><sub>증거 화면입니다. 같은 프롬프트로 이전 스킬 두 번, 새 스킬 두 번을 돌려 나란히 놓았습니다. 이전 브리프는 없는 제품 기능을 지어내고, 새 브리프는 대신 묻습니다.</sub></td></tr>
</table>

## 실제 화면

<!-- demo-gif -->
<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wjgoarxiv/litcodex/f7107e147185af19cb020de6a1051aa9fbfdd8c4/docs/assets/screens/screen-lit-ignited-dark.webp" /><img src="https://raw.githubusercontent.com/wjgoarxiv/litcodex/f7107e147185af19cb020de6a1051aa9fbfdd8c4/docs/assets/screens/screen-lit-ignited-light.webp" width="548" alt="세 가지 요청이 보이는 Codex 터미널 창. &quot;lit add input validation to the signup form&quot; 다음에 &quot;Hook ·&quot;, 다섯 줄짜리 LIT 마크와 &quot;🔥 LIT IGNITED · lit-loop 🔥&quot;가 나옵니다. &quot;handoff&quot; 다음에는 같은 마크와 &quot;🔥 LIT IGNITED · lit-handoff 🔥&quot;가, &quot;lit recap&quot; 다음에는 마크와 &quot;🔥 LIT IGNITED · lit-recap 🔥&quot;가 나옵니다." /></picture></p>

Codex CLI 세션에서 LitCodex가 동작하는 모습입니다. `lit`, `handoff`, `lit recap`으로 시작한 요청마다 LIT 마크와 그 요청을 맡은 작업 흐름의 이름이 함께 나오기 때문에, 지금 어떤 모드가 돌고 있는지 한눈에 알 수 있습니다. 다른 제품은 각 호스트에 맞는 방식으로 시작을 알리며, 제품별 화면은 각 README에서 볼 수 있습니다.

## 빠른 시작

제품이 활성화됐는지 확인한 뒤, 빈 프로젝트에서 작은 작업 하나를 맡겨보세요. 외부 데이터나 의존성 설치 없이 시작할 수 있는 예제입니다.

```text
lit 외부 의존성 없이 HTML 파일 하나로 할 일 목록을 만들어줘.
추가·완료·삭제 동작을 구현하고, 확인한 내용과 다음 행동을 남겨줘.
```

**Grok Build**에서는 명시적인 스킬 경로로 시작합니다.

```text
/litwork 외부 의존성 없이 HTML 파일 하나로 할 일 목록을 만들어줘.
추가·완료·삭제 동작을 구현하고, 확인한 내용과 다음 행동을 남겨줘.
```

결과물을 직접 열어 항목을 추가하고, 완료하고, 삭제해보세요. 에이전트에게 무엇을 확인했고 무엇이 남았는지 물어보세요. 브라우저를 사용할 수 없다면 파일을 만들었다는 사실만으로 화면과 동작을 확인했다고 할 수 없습니다. 로고나 활성화 문구는 작업 흐름에 들어왔다는 표시입니다. 작업이 끝났는지는 따로 확인해야 합니다.

## 주요 기능

불씨를 건네받았다. 이제, 당신의 작업에 옮길 차례다.

고치고 싶은 버그 하나. 만들고 싶은 화면 하나. 끝내고 싶은 프로젝트 하나.

시작은 짧은 한 줄이면 됩니다. 어려운 건 그다음입니다. 대화가 길어지고 세션이 바뀌면, 어디까지 했는지부터 다시 짚어야 합니다. 어떤 결정을 내렸는지, 무엇을 확인했는지, 다음에는 무엇을 해야 하는지.

**LIT은 그 불씨를 남깁니다.** 목표와 계획, 확인한 결과, 다음에 할 일을 프로젝트에 기록합니다. 다음 세션에서 그 기록을 읽고 작업을 이어갈 수 있도록. 쓰던 도구에 맞는 LIT 하나면 됩니다.

### 공통 작업 흐름

```text
계획하기 → 만들기 → 확인하기 → 다음 작업에 건네기
```

| 단계 | 남길 내용 |
|---|---|
| **계획** | 원하는 결과, 제약, 동작을 확인할 기준 |
| **구현** | 현재 프로젝트에 필요한 변경 |
| **검증** | 실행한 검사, 결과, 아직 확인하지 못한 부분 |
| **인계** | 결정 사항, 관련 파일 경로, 다음 행동 |

세션을 마치기 전에 이 내용을 인수인계 기록으로 남겨달라고 요청하세요. 다음 세션에서는 저장한 기록의 경로를 알려주고, 읽은 뒤 작업을 이어달라고 요청하세요. 기록 위치와 재개 도구는 제품마다 다르므로 해당 안내를 따르세요.

“꺼지지 않는 불”은 프로그램이 끝없이 돌아간다는 뜻이 아닙니다. **세션이 끝나도, 이어갈 작업을 남긴다는 뜻입니다.**

## 명령과 훅

호스트에 맞는 제품 하나를 고르세요. Bare route를 지원하는 호스트에서는 프롬프트 끝에 `lit`을 붙이고, Grok Build에서는 `/litwork`를 사용합니다. `handoff`로 확인한 결과를 다음 세션에 건네고, 작업 전에는 `lit-plan`, 승인한 계획 실행에는 `/start-work`, 결과 검토에는 `/review-work`를 사용하세요. `litresearch`는 해당 제품이 제공할 때만 사용할 수 있습니다.

| 필요한 일 | 시작 경로 |
| --- | --- |
| 작업 루프 시작 | `lit` (또는 제품이 문서화한 명시적 경로) |
| 다음 작업 건네기 | `handoff` / `/lit-handoff` |
| 계획·실행·검토 | `lit-plan` → `/start-work` → `/review-work` |
| 출처 기반 조사 | 선택한 제품이 제공하는 경우 `litresearch` |

Antigravity CLI에서는 승인한 계획을 `lit start plans/<slug>.md`로 실행하세요.

## 문제 해결

기존 설정을 보관하고, 설치를 교체하기 전에 선택한 제품의 이전 안내를 읽으세요. 소유권 검사에서 설치를 거절하면 오류와 기존 파일을 보존하세요. 재시도를 위해 상태 파일부터 지우지 마세요.

각 제품 문서에 나온 진단·제거 방법을 사용하세요. **LitFamily 공통 `doctor`나 제거 명령은 없습니다.** 특히 LitGrok에는 `doctor` 명령이 없고, LitOpenCode는 문서의 수동 제거 절차를 따릅니다. 직접 수정한 파일이 어떻게 처리되는지 먼저 확인하세요.

문제가 생기면 [지원 안내](SUPPORT.md)에 따라 제품과 호스트 버전, 민감한 내용을 가린 명령, 예상한 동작과 실제 출력을 남겨주세요. 설치, 스킬 발견, 작업 완료는 각각 확인합니다. 공개, 파괴적 작업과 접근 권한 변경에는 프로젝트에서 요구하는 승인이 계속 필요합니다.

## 명예의 벽

LitFamily는 사람들이 서로 알려 주면서 자라요. LitClaude에서 `lit invite @<깃허브-아이디>`를 입력하면 누가 알려 줬는지 기록되고, 내 컴퓨터의 카드에 특별한 꾸밈이 열려요. 어디로도 아무것도 보내지 않아요. 여기에 이름을 올리고 싶다면 이 저장소 Discussions에 고정된 "누가 초대했나요?" 글에 "invited by @<깃허브-아이디>"라고 남겨 주세요. 초대한 사람은 직접 확인해서 올려요.

아직 등록된 사람은 없어요.

## 링크

### 문서

스킬 이름보다 하려는 작업을 먼저 고르세요. [전체 스킬 목록](docs/skills.md)에서 계획, 실행, 검토, 조사, 시각화, 영어와 한국어 문장 편집, Word와 PowerPoint 문서, 다이어그램, 짧은 영상, README 작성 기능과 각 호스트의 요구 사항을 살펴볼 수 있습니다. 이제 모든 제품에 `lit-humanizer`, `lit-docx`, `lit-pptx`, `lit-diagram-drawer`, `lit-typographic-motion`, `readme-studio`가 들어 있습니다. `lit-pptx`와 `lit-docx`는 만들기 전에 누가 읽을 파일인지 따져 그 독자에게 맞는 모양을 발표자료 여덟 가지, 문서 여섯 가지 가운데서 고르고, 답에서 함께 어울릴 다른 두 가지도 알려 줍니다. 새로 생긴 스킬 세 개도 이제 일곱 제품 모두에 들어 있습니다. `lit-adhd`(또는 `lit-rewind`)는 최근 세션들을 읽고 각각 어디까지 왔는지와 다음에 할 일을 알려 주고, `lit-hijack`은 읽고 탐난 기법을 내 스킬로 옮겨 오며, `lit-schematic`은 P&ID, 실험 장치 그림, 컷어웨이를 그립니다. 이름이 같은 스킬이라도 다른 호스트에서 그대로 쓸 수 있는 것은 아닙니다.

실제 설치 위치, 진입점, 권한, 선택 도구와 제약은 위 일곱 제품의 README에 있습니다. 이 허브에서 필요한 제품과 문서를 찾을 수 있습니다. 제품 사이에 공통 실행 환경을 추가하지는 않습니다.

### 스킬과 기본 마켓플레이스

[전체 스킬 목록](docs/skills.md)은 모든 기본 스킬과 보조 문서를 실행 환경별로 분류합니다. 전체 네이티브 워크플로를 쓰려면 사용하는 에이전트에 맞는 제품을 설치하세요. 루트 `skills/`에는 독립 배포를 검토한 스킬을 제공하며, 현재 Grok Build용 `lit-humanizer` 전체 폴더의 파일 해시와 참조 경로를 확인했습니다. 다른 호스트용 변형은 목록의 제품명, 원본 경로와 커밋으로 추적할 수 있습니다.

[Claude 마켓플레이스와 Codex 연결](docs/marketplaces.md) · [브랜드 이미지와 라이선스](assets/brand/README.md) · [기여](CONTRIBUTING.md) · [보안](SECURITY.md) · [지원](SUPPORT.md) · [행동 규칙](CODE_OF_CONDUCT.md) · [개인정보](PRIVACY.md) · [상표](TRADEMARK.md) · [라이선스](LICENSE)

### LITFAMILY

<details>
<summary>추가 제품 안내와 편집 이미지</summary>

## 제품은 어떻게 연결되나요?

허브는 제품과 문서를 찾는 안내서입니다. 작업을 실행하지는 않습니다. 쓰는 호스트에 맞는 제품 하나를 고르면, 그 프로젝트 안에 계획과 작업 파일, 확인 결과, 인수인계 기록을 남깁니다. 기록 위치는 제품별 안내를 따릅니다.

```mermaid
flowchart TB
    Hub["LitFamily 허브: 안내와 스킬 목록"] -. "제품 찾기" .-> User["호스트와 제품 한 쌍 선택"]
    User --> C["Claude Code + LitClaude"]
    User --> H["Hermes Agent + LitHermes"]
    User --> X["Codex CLI + LitCodex"]
    User --> O["OpenCode + LitOpenCode"]
    User --> G["Grok Build + LitGrok"]
    User --> M["Muse Code + LitMuse"]
    User --> A["Antigravity CLI (agy) + LitGravity"]
    C --> CP["해당 프로젝트: 계획 · 작업 · 확인 · 인계"]
    H --> HP["해당 프로젝트: 계획 · 작업 · 확인 · 인계"]
    X --> XP["해당 프로젝트: 계획 · 작업 · 확인 · 인계"]
    O --> OP["해당 프로젝트: 계획 · 작업 · 확인 · 인계"]
    G --> GP["해당 프로젝트: 계획 · 작업 · 확인 · 인계"]
    M --> MP["해당 프로젝트: 계획 · 작업 · 확인 · 인계"]
    A --> AP["해당 프로젝트: 계획 · 작업 · 확인 · 인계"]
```

일곱 제품 가운데 쓰는 도구에 맞는 하나를 고르세요. 공통 실행 환경이나 제품 사이의 의존성은 없습니다. 그림은 작업 흐름을 요약한 것이며, 실제 명령·권한·기록 형식은 각 호스트의 방식을 따릅니다.

### 제품 편집 이미지

<table>
<tr><td><a href="https://github.com/wjgoarxiv/litclaude"><img src="assets/brand/exports/litclaude-emphasis.webp" width="180" alt="LitClaude 강조 표지" /></a><br /><strong>LitClaude</strong><br />npm 배포</td>
<td><a href="https://github.com/wjgoarxiv/lithermes"><img src="assets/brand/exports/lithermes-emphasis.webp" width="180" alt="LitHermes 강조 표지" /></a><br /><strong>LitHermes</strong><br />npm 배포</td></tr>
<tr><td><a href="https://github.com/wjgoarxiv/litcodex"><img src="assets/brand/exports/litcodex-emphasis.webp" width="180" alt="LitCodex 강조 표지" /></a><br /><strong>LitCodex</strong><br />npm 배포</td>
<td><a href="https://github.com/wjgoarxiv/litopencode"><img src="assets/brand/exports/litopencode-emphasis.webp" width="180" alt="LitOpenCode 강조 표지" /></a><br /><strong>LitOpenCode</strong><br />npm 배포</td></tr>
<tr><td><a href="https://github.com/wjgoarxiv/litgrok"><img src="assets/brand/exports/litgrok-emphasis.webp" width="180" alt="LitGrok 강조 표지" /></a><br /><strong>LitGrok</strong><br />npm 배포</td>
<td><a href="https://github.com/wjgoarxiv/litmuse"><img src="assets/brand/exports/litmuse-emphasis.webp" width="180" alt="LitMuse 강조 표지" /></a><br /><strong>LitMuse</strong><br />npm 배포</td></tr>
<tr><td><a href="https://github.com/wjgoarxiv/litgravity"><img src="assets/brand/exports/litgravity-emphasis.webp" width="180" alt="LitGravity 강조 표지" /></a><br /><strong>LitGravity</strong><br />npm 배포</td></tr>
</table>

[![Ignition 모션 포스터](assets/brand/exports/ignition-poster.png)](assets/brand/exports/ignition-film.mp4)

## 실제 시작 경로와 편집 이미지

선택한 제품과 호스트에서 지원하는 경로만 사용하세요. 호스트가 bare route를 지원하면 `lit`이 작업 루프를 시작하고, `handoff`는 확인한 결과와 다음 단계를 남기며, `lit-plan`은 승인할 작업 경로를 정리하고, `/start-work`는 승인한 계획을 실행하며, `/review-work`는 결과를 살핍니다. `litresearch`는 선택한 제품이 문서로 제공할 때만 사용할 수 있습니다. Grok Build는 명시적 진입점으로 `/litwork`를 문서화합니다. 각 경로에는 제품별 호스트 제약이 있습니다. 이 허브는 선택지를 안내할 뿐 경로를 실행하거나 runtime을 설치하지 않으며, 지원하지 않는 경로를 추가하지 않습니다.

<table>
<tr><td><strong>LitClaude</strong><br /><img src="assets/brand/exports/litclaude-ignition-1600.webp" width="100%" alt="LitClaude 점화 장치" /><img src="assets/brand/exports/litclaude-continuity-1600.webp" width="100%" alt="LitClaude 연속 장치" /></td>
<td><strong>LitHermes</strong><br /><img src="assets/brand/exports/lithermes-ignition-1600.webp" width="100%" alt="LitHermes 점화 장치" /><img src="assets/brand/exports/lithermes-continuity-1600.webp" width="100%" alt="LitHermes 연속 장치" /></td></tr>
<tr><td><strong>LitCodex</strong><br /><img src="assets/brand/exports/litcodex-ignition-1600.webp" width="100%" alt="LitCodex 점화 장치" /><img src="assets/brand/exports/litcodex-continuity-1600.webp" width="100%" alt="LitCodex 연속 장치" /></td>
<td><strong>LitOpenCode</strong><br /><img src="assets/brand/exports/litopencode-ignition-1600.webp" width="100%" alt="LitOpenCode 점화 장치" /><img src="assets/brand/exports/litopencode-continuity-1600.webp" width="100%" alt="LitOpenCode 연속 장치" /></td></tr>
<tr><td><strong>LitGrok</strong><br /><img src="assets/brand/exports/litgrok-ignition-1600.webp" width="100%" alt="LitGrok 점화 장치" /><img src="assets/brand/exports/litgrok-continuity-1600.webp" width="100%" alt="LitGrok 연속 장치" /></td>
<td><strong>LitMuse</strong><br /><img src="assets/brand/exports/litmuse-ignition-1600.webp" width="100%" alt="LitMuse 점화 장치" /><img src="assets/brand/exports/litmuse-continuity-1600.webp" width="100%" alt="LitMuse 연속 장치" /></td></tr>
<tr><td><strong>LitGravity</strong><br /><img src="assets/brand/exports/litgravity-ignition-1600.webp" width="100%" alt="LitGravity 점화 장치" /><img src="assets/brand/exports/litgravity-continuity-1600.webp" width="100%" alt="LitGravity 연속 장치" /></td></tr>
</table>

## LITFAMILY

![Claude, Hermes, Codex, OpenCode, Grok, Muse, Gravity를 일곱 아머드 머신으로 그린 일러스트](docs/assets/litfamily-machines.png)

Claude, Hermes, Codex, OpenCode, Grok, Muse, Gravity를 일곱 아머드 머신으로 그린 편집 일러스트입니다. 쓰는 도구에 맞는 제품을 고르세요. 소프트웨어 화면이 아니라 패밀리를 그린 그림입니다.

## 점화 표시

[![Ignition 모션 그래픽: 신호, 맞물림 심볼, 계획·구현·검증](assets/brand/exports/ignition-poster.png)](assets/brand/exports/ignition-film.mp4)

[10초 영상 재생](assets/brand/exports/ignition-film.mp4) · [움직이는 GIF](assets/brand/exports/ignition-demo.gif) · [정지 포스터](assets/brand/exports/ignition-poster.png) · [브랜드 갤러리](assets/brand/gallery.html)

LitFamily의 작업 흐름을 표현한 모션 그래픽입니다. 설치나 실제 호스트 실행을 녹화한 영상은 아닙니다. 움직이는 GIF와 10초 영상은 위 링크에서 볼 수 있습니다.

<p align="center"><img src="assets/brand/readme/ascii-readme.svg" width="300" alt="LIT ASCII B mark" /></p>

<details>
<summary>Copy ASCII logo</summary>

```text
          ▄▖  ▄█▄
▗▄▄▖    ▄██▌  ▜█▛
▐██▌  ▄████████████▜▛
▐██▌ ▐█▀▀▀▀▀▀▀▀▀▀▀▀▘
▐██▌   ▄█▌█████████▌
▐██▌ ▄██▛▘  ▗▄▄  ▗
▐██▌▐█▛▘    ▐██  ▝▀
▐██▌▝       ▐██
▐██████▘    ▐██
▝▀▀▀▀▀      ▝▀▀
```

</details>

<p align="center">
<a href="docs/skills.md"><img src="assets/brand/readme/lucide-book-open.svg" width="16" alt="" /> Docs</a> &nbsp; <a href="assets/brand/exports/ignition-film.mp4"><img src="assets/brand/readme/lucide-play.svg" width="16" alt="" /> Ignition</a> &nbsp; <a href="LICENSE"><img src="assets/brand/readme/lucide-shield-check.svg" width="16" alt="" /> MIT</a>
</p>

<details>
<summary>Ignition 커버</summary>

![LitFamily Ignition 맞물림 심볼, navy 배경의 주황·라임·아이보리](assets/brand/exports/family-cover.svg)

</details>


</details>
