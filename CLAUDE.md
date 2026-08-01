항상 한국어로 답변해줘

## 매치업 파일 추가/수정 후 워크플로우

`app/data/matchups/**/*.ts` (매치업 데이터 파일)을 새로 추가하거나 내용을 수정한 뒤에는
**반드시 `npm run gen:matchup-json`을 실행**해야 한다.

- `app/data/matchups/_index.ts`의 `getMatchupSummary`는 개별 매치업 파일을 직접 import하지 않고,
  `app/data/matchups/_compiled.json`(전체 매치업 데이터를 병합한 파일)을 `fs.readFileSync` + `JSON.parse`로 읽어서 조회한다.
- `_compiled.json`은 `scripts/gen-matchup-json.ts`가 `app/data/matchups` 하위 `.ts` 파일들을 스캔해서 생성하는
  **자동 생성 파일**이며, 소스 `.ts` 파일을 고쳐도 `_compiled.json`을 재생성하지 않으면 실제 서비스(런타임)에는 반영되지 않는다.
- 이 구조는 매치업 라우트(`/matchup/[pair]`, `/champ/[id]`)의 빌드 시 파일 트레이스가 14,000개+ 파일로 폭증해서
  Vercel 빌드가 OOM으로 실패하는 문제를 해결하기 위해 도입됨. `getMatchupSummary`를 파일별 동적 import 방식으로
  되돌리지 말 것.

**절차**
1. `app/data/matchups/<champA>/<champA>_<champB>.ts` 파일 추가/수정
2. `npm run gen:matchup-json` 실행 → `app/data/matchups/_compiled.json` 갱신 확인
   (또는 `npm run watch:matchup`을 미리 켜두면 `.ts` 파일 저장 시 자동으로 재생성됨)
3. `_compiled.json`도 함께 커밋 (자동 생성 파일이지만 git에 커밋되는 대상임 — gitignore 대상 아님)

## 로컬 개발 환경 주의사항

이 프로젝트는 로컬에서 `npm run dev`(개발 서버)와 `npm run watch:matchup`(매치업 파일 자동 감시,
저장 시 `_compiled.json` 자동 재생성)이 **항상 켜져 있는 상태로 작업하는 경우가 많다.**

- 클로드 코드가 로컬에서 `npm run build`, `npm run dev`, `next start` 등을 **직접 실행하기 전에는**,
  먼저 bash로 포트 3000이 이미 사용 중인지 확인할 것(예: `netstat -ano | grep 3000` 또는 유사 명령).
- 이미 실행 중인 서버가 있다면 직접 새 서버를 띄우지 말고 다음 중 하나로 진행할 것:
  a) 격리된 워크트리(`git worktree`)에서 빌드/테스트를 진행한다.
  b) 다른 포트를 사용한다 (`next dev -p 3080` 등).
  c) 사용자에게 "로컬 서버가 켜져 있는 것 같은데, 확인 목적으로 이러이러한 작업을 진행해도 되는지" 먼저 물어본다.
- `.next` 디렉토리의 락 파일(`.next/dev/lock`) 문제로 이전에 충돌이 발생한 적이 있다.
  기존 dev 서버를 임의로 종료(kill)하지 말 것 — 사용자가 직접 켜둔 세션일 수 있다. 종료가 꼭 필요하면
  먼저 사용자에게 확인받을 것.
