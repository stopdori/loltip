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
3. `_compiled.json`도 함께 커밋 (자동 생성 파일이지만 git에 커밋되는 대상임 — gitignore 대상 아님)
