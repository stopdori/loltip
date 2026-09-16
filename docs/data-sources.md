# 데이터 소스 예외 규칙

- 기본 원칙은 라이엇 공식 DDragon CDN(ddragon.leagueoflegends.com)을
  데이터/이미지 소스로 쓰는 것이다.
- 단, 일부 챔피언(예: 아펠리오스처럼 스킬 슬롯 하나가 여러 개의 실제
  스킬을 담는 특수 구조)은 DDragon이 해당 데이터/이미지를 구조적으로
  아예 제공하지 않는다 — 실데이터 없는 빈 wrapper만 있고(effectBurn
  전부 "0", vars 빈 배열 등), 무기/폼별 개별 아이콘 필드 자체가 없다.
  이런 "DDragon에 원천적으로 없는" 경우에 한해서만 Community Dragon
  (raw.communitydragon.org)을 예외적으로 허용한다.
- CDragon은 공식 라이엇 CDN은 아니지만, 라이엇 게임 파일을 그대로
  미러링하는 소스라 이미지 자체는 라이엇 원본과 동일하다.
- 예외를 쓰기 전에 먼저 DDragon 원본을 직접 fetch해서 "정말로 없는지"
  확인하는 과정을 거칠 것 — DDragon에 있는데 못 찾은 경우와 혼동하지
  않는다.
- 아펠리오스 무기별 아이콘 예시: https://raw.communitydragon.org/latest/game/assets/characters/{champion}/hud/icons2d/{...}.png
  (정확한 경로는 챔피언/스킬마다 다르므로 CDragon의 plugin JSON
  — raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/{id}.json
  — 의 abilityIconPath를 먼저 참고해서 디렉토리를 확인한 뒤 진행할 것)
