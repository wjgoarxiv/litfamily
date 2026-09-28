# Phase B A/B prompt set

Use these ten prompts unchanged in both arms. Phase A defines the prompts; it does not run the benchmark.

## Arm protocol

1. Pin the model, model version, temperature, tools, harness, and system instructions. Record their identifiers with the outputs.
2. Start the baseline in a fresh session with no access to `lit-humanizer`, its references, fixtures, detector rules, or example rewrites. Do not paste or summarize those files into the baseline context. Give it only the prompt and facts below.
3. Start the assisted arm in a separate fresh session with the same settings and the full skill loaded. Do not share the baseline output with it.
4. Keep both raw outputs. Run the same detector version against each output without editing it first. Record block hits and warnings by prompt.
5. For blind review, remove arm names, randomize each pair, and ask the user which reads more naturally while preserving the facts. Do not tell the reviewer the detector score before the pick.

## Prompts

### 1 — English report

```text
Write a 180–220 word project update for a department lead. A pilot ran at 14 clinics from September 1 through September 18, 2026. All 14 submitted the checklist. Regional review has not happened. The next review meeting is October 2. Keep the outcome and pending review distinct; do not invent results.
```

### 2 — Korean report

```text
부서장에게 보낼 180~220자 진행 보고를 작성해 주세요. 시범 운영은 2026년 9월 1일부터 18일까지 14개 의원에서 진행했습니다. 14곳 모두 체크리스트를 제출했습니다. 지역 검토는 아직 열리지 않았고 다음 회의는 10월 2일입니다. 확인된 사실과 예정 사항을 구분하고 새 결과를 만들지 마세요.
```

### 3 — English slide text

```text
Write text for three presentation slides about an application program. Online applications open September 6 and close October 29. In-person applications open September 13 at local service centers and close October 29. An applicant must use the jurisdiction tied to their June 30 address. Use concise slide language and retain every date and condition.
```

### 4 — Korean slide text

```text
지원금 신청 안내 슬라이드 세 장의 문안을 작성해 주세요. 온라인 신청은 9월 6일부터 10월 29일까지입니다. 방문 신청은 9월 13일부터 주민센터에서 받으며 10월 29일에 마감합니다. 신청 지역은 6월 30일 기준 주민등록 주소지 관할 지자체입니다. 날짜와 조건을 모두 남겨 주세요.
```

### 5 — English commit message

```text
Write one commit subject and an optional body. The change updates the setup guide to say that installation uses npm install and the build uses npm run build. Do not claim that commands were run.
```

### 6 — Korean commit message

```text
커밋 제목 한 줄과 필요하면 본문을 작성해 주세요. 변경 사항은 설치 안내에 `npm install`과 빌드 명령 `npm run build`를 추가한 것입니다. 명령을 실행했다고 쓰지 마세요.
```

### 7 — English pull request

```text
Draft a concise pull request description. The patch changes the clinic report so the completed checklist count is separate from the review that is still scheduled for October 2. No product code or launch date changed. State the change and review focus without adding validation claims.
```

### 8 — Korean pull request

```text
간결한 PR 설명을 작성해 주세요. 패치에서 완료된 체크리스트 수와 10월 2일 예정된 지역 검토를 분리했습니다. 제품 코드와 출시일은 바뀌지 않았습니다. 변경 내용과 리뷰할 부분을 쓰고 검증했다고 덧붙이지 마세요.
```

### 9 — English README section

```text
Write a short README setup section for a Node project. The user needs Node 20 or later, runs `npm install`, then `npm run build`. These commands are the documented instructions; no test result is provided. Use headings and preserve the command names.
```

### 10 — Korean README section

```text
Node 프로젝트의 README 설치 절을 짧게 작성해 주세요. Node 20 이상이 필요합니다. 사용자는 `npm install` 후 `npm run build`를 실행합니다. 이는 문서화된 명령이며 테스트 결과는 주어지지 않았습니다. 제목을 붙이고 명령 이름을 그대로 유지해 주세요.
```
