export type ChampForm = {
  ko: string;
  en: string;
  icon?: string; // 폼 전환 버튼에 표시할 아이콘 경로. 없으면 텍스트만.
  // 폼 탭 아이콘 테두리 색. 완전한 Tailwind ring 색상 클래스 문자열
  // (예: "ring-emerald-400")을 그대로 넣는다 — Tailwind v4는 이 프로젝트
  // 기준 별도 content 설정 없이 전체 소스를 스캔하므로, 여기 리터럴로
  // 적어두면 SkillTagsPanel.tsx에서 동적으로 참조해도 빌드에 포함된다.
  // 없으면 FormTabIcon 기본 테두리(ring-white/10) 유지.
  color?: string;
  // 이 폼이 선택돼 있는 동안, 스킬 패널(SkillLabelWithTip)의 P/Q/W/E/R
  // 아이콘 중 지정된 슬롯만 이 아이콘으로 덮어쓴다. 지정 안 한 슬롯은
  // 기존 로컬 아이콘(/spells/{champId}/{skillKey}.webp)을 그대로 쓴다.
  // 예: 흐웨이는 화풍(재앙/평온/고문)에 따라 Q/W/E 슬롯 자체가 그
  // 화풍의 서브스킬 아이콘으로 바뀌어야 해서 이 필드가 필요함.
  skillIcons?: Partial<Record<"P" | "Q" | "W" | "E" | "R", string>>;
  // skillIcons와 동일한 패턴 — 이 폼이 선택돼 있는 동안, 스킬 패널
  // 아이콘 위에 겹쳐 그려지는 워터마크 글자(기본은 스킬키 한 글자,
  // 예: "Q")를 지정된 슬롯만 이 문자열로 덮어쓴다. 지정 안 한 슬롯은
  // 기존 기본 글자 그대로. 예: 흐웨이는 화풍별로 Q/W/E 슬롯이 QQ/QW/QE
  // 같은 실제 조합 스킬이라 글자도 그 조합으로 보여줘야 함.
  skillLabels?: Partial<Record<"P" | "Q" | "W" | "E" | "R", string>>;
};

export const CHAMP_FORMS: Record<string, ChampForm[]> = {

  jayce: [
    { ko: "캐논", en: "Ranged" },
    { ko: "해머", en: "Melee" },
  ],

  nidalee: [
    { ko: "인간폼", en: "Human" },
    { ko: "쿠거폼", en: "Cougar" },
  ],

  elise: [
    { ko: "인간폼", en: "Human" },
    { ko: "거미폼", en: "Spider" },
  ],

  gnar: [
    { ko: "미니", en: "Mini" },
    { ko: "메가", en: "Mega" },
  ],

  kaisa: [
    { ko: "기본", en: "Basic" },
    { ko: "진화", en: "Evolutions" },
  ],

  // ✅ 케인 (3폼)
  kayn: [
    { ko: "케인", en: "Base" },
    { ko: "그암", en: "Shadow" },
    { ko: "다르킨", en: "Rhaast" },
  ],

  khazix: [
    { ko: "기본", en: "Basic" },
    { ko: "진화", en: "Evolutions" },
  ],

  kled: [
    { ko: "승마폼", en: "Mounted" },
    { ko: "낙마폼", en: "Dismounted" },
  ],

  ksante: [
    { ko: "기본", en: "Base" },
    { ko: "변신", en: "All Out" },
  ],

  reksai: [
    { ko: "돌출", en: "Base" },
    { ko: "매복", en: "Burrowed" },
  ],

  shyvana: [
    { ko: "기본형", en: "Human" },
    { ko: "용형상", en: "Dragon" },
  ],

  udyr: [
    { ko: "기본", en: "Base" },
    { ko: "각성", en: "Awakened" },
  ],

  // ✅ 흐웨이 (3폼 — Q/W/E 자체가 재앙/평온/고문 화풍 전환 스킬.
  // 아펠리오스와 달리 DDragon에 정상 개별 아이콘이 있어 CDragon 예외 불필요
  // (HweiQ/HweiW/HweiE.png, wrapper 아님 — 16.18.1 기준 확인). DDragon은
  // CDragon의 /latest/ 같은 상시 최신 별칭이 없어 버전을 직접 박아넣었다 —
  // 스킬 아이콘 자체가 리메이크되지 않는 한 파일명은 잘 안 바뀌지만, 만약
  // 이 URL이 나중에 깨지면(404) 최신 버전 번호로 교체해야 한다.)
  // skillIcons: 화풍 진입 후 Q/W/E로 고르는 실제 서브스킬 9개 아이콘
  // (hweiqq~hweiee.png, CDragon icons2d 디렉토리에서 확인됨). P/R은
  // 화풍과 무관하게 고정이라 skillIcons에 안 넣는다(기존 아이콘 유지).
  hwei: [
    { ko: "빨강", en: "Red", icon: "https://ddragon.leagueoflegends.com/cdn/16.18.1/img/spell/HweiQ.png", color: "ring-red-400", skillIcons: {
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweiqq.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweiqw.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweiqe.png",
    }, skillLabels: { Q: "QQ", W: "QW", E: "QE" } },
    { ko: "파랑", en: "Blue", icon: "https://ddragon.leagueoflegends.com/cdn/16.18.1/img/spell/HweiW.png", color: "ring-blue-400", skillIcons: {
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweiwq.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweiww.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweiwe.png",
    }, skillLabels: { Q: "WQ", W: "WW", E: "WE" } },
    { ko: "보라", en: "Purple", icon: "https://ddragon.leagueoflegends.com/cdn/16.18.1/img/spell/HweiE.png", color: "ring-purple-400", skillIcons: {
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweieq.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweiew.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/hwei/hud/icons2d/hweiee.png",
    }, skillLabels: { Q: "EQ", W: "EW", E: "EE" } },
  ],

  // ✅ 아펠리오스 (5폼 — 무기별. 아이콘은 CDragon 예외, docs/data-sources.md 참고.
  // color는 커뮤니티에서 무기 순서를 외울 때 쓰는 색(초록/빨강/보라/파랑/흰색))
  aphelios: [
    { ko: "만월총", en: "Calibrum", icon: "https://raw.communitydragon.org/latest/game/assets/characters/aphelios/hud/icons2d/q_calibrum.png", color: "ring-emerald-400" },
    { ko: "절단검", en: "Severum", icon: "https://raw.communitydragon.org/latest/game/assets/characters/aphelios/hud/icons2d/q_severum.png", color: "ring-red-400" },
    { ko: "중력포", en: "Gravitum", icon: "https://raw.communitydragon.org/latest/game/assets/characters/aphelios/hud/icons2d/q_gravitum.png", color: "ring-purple-400" },
    { ko: "화염포", en: "Infernum", icon: "https://raw.communitydragon.org/latest/game/assets/characters/aphelios/hud/icons2d/q_infernum.png", color: "ring-blue-400" },
    { ko: "반월검", en: "Crescendum", icon: "https://raw.communitydragon.org/latest/game/assets/characters/aphelios/hud/icons2d/q_crescendum.png", color: "ring-white" },
  ],
};

export function hasForms(champId: string) {
  return !!CHAMP_FORMS[champId];
}
