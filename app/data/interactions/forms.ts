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

  // ✅ 제이스 (2폼 — R로 캐논/해머 전환). 기존 로컬 아이콘(/spells/jayce/*.webp)은
  // DDragon 기준이라 해머폼 Q/W/E(JayceToTheSkies 등) + 해머폼 R(JayceStanceHtG =
  // 캐논으로 전환, JayceR_Ranged)로 되어 있음 → 해머폼은 Q/W/E/R 교체 불필요.
  // 캐논폼 Q/W/E/R은 DDragon에 개별 아이콘이 없어(16.20.1 기준 챔피언 JSON에 해머 4개만
  // 존재) CDragon 예외 사용(docs/data-sources.md). 매핑은 jayce.bin.json의 mImgIconName
  // 기준(ShockBlast=Q_Ranged, HyperCharge=W_Ranged, AccelerationGate=E_Ranged,
  // StanceGtH=R_Melee). P도 폼별 아이콘(JayceP_Ranged/JayceP_Melee)이 따로 있어 둘 다 지정.
  // 탭 아이콘: 각 폼으로 전환하는 R 아이콘(캐논 = R_Ranged, 해머 = R_Melee).
  jayce: [
    { ko: "캐논", en: "Ranged", icon: "https://raw.communitydragon.org/latest/game/assets/characters/jayce/hud/icons2d/jaycer_ranged.png", skillIcons: {
      P: "https://raw.communitydragon.org/latest/game/assets/characters/jayce/hud/icons2d/jaycep_ranged.png",
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/jayce/hud/icons2d/jayceq_ranged.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/jayce/hud/icons2d/jaycew_ranged.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/jayce/hud/icons2d/jaycee_ranged.png",
      R: "https://raw.communitydragon.org/latest/game/assets/characters/jayce/hud/icons2d/jaycer_melee.png",
    } },
    { ko: "해머", en: "Melee", icon: "https://raw.communitydragon.org/latest/game/assets/characters/jayce/hud/icons2d/jaycer_melee.png", skillIcons: {
      P: "https://raw.communitydragon.org/latest/game/assets/characters/jayce/hud/icons2d/jaycep_melee.png",
    } },
  ],

  // ✅ 니달리 (2폼 — R로 인간/쿠거 전환). 인간폼 Q/W/E/R은 기존 로컬
  // 아이콘(/spells/nidalee/*.webp, DDragon JavelinToss/Bushwhack/PrimalSurge/
  // AspectOfTheCougar)이 그대로라 skillIcons 불필요. 쿠거폼 Q/W/E와 R(인간
  // 형태로 복귀)은 DDragon에 개별 아이콘이 없어(16.20.1 기준 챔피언 JSON에 인간
  // 형태 4개만 존재) CDragon 예외 사용(docs/data-sources.md). CDragon icons2d의
  // *1 = 인간 형태, *2 = 쿠거 형태(nidalee_r1 = DDragon AspectOfTheCougar와 동일 그림,
  // nidalee_r2 = 인간으로 돌아가는 초록 아이콘). P는 두 폼 공통.
  // 탭 아이콘: 인간폼 = 인간 Q(DDragon), 쿠거폼 = R "쿠거의 상"(DDragon, 쿠거 그림).
  nidalee: [
    { ko: "인간폼", en: "Human", icon: "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/spell/JavelinToss.png" },
    { ko: "쿠거폼", en: "Cougar", icon: "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/spell/AspectOfTheCougar.png", skillIcons: {
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/nidalee/hud/icons2d/nidalee_q2.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/nidalee/hud/icons2d/nidalee_w2.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/nidalee/hud/icons2d/nidalee_e2.png",
      R: "https://raw.communitydragon.org/latest/game/assets/characters/nidalee/hud/icons2d/nidalee_r2.png",
    } },
  ],

  // ✅ 엘리스 (2폼 — R로 인간/거미 전환). 인간폼 Q/W/E/R은 기존 로컬
  // 아이콘(/spells/elise/*.webp)이 그대로 인간 형태 스킬이라 skillIcons
  // 불필요. 거미폼 Q/W/E는 DDragon에 개별 아이콘이 없어(16.19.1 기준
  // EliseSpiderQCast/EliseSpiderW/EliseSpiderEInitial.png 전부 403, 챔피언
  // JSON에도 인간 형태 4개만 존재) CDragon 예외 사용(docs/data-sources.md).
  // 거미폼 R(인간 형태로 복귀) 전용 아이콘은 CDragon icons2d에도 없어서
  // (eliser.png 하나뿐) R 슬롯은 기존 아이콘 유지. P는 두 폼 공통 아이콘.
  // 탭 아이콘: 인간폼 = 인간 Q(DDragon), 거미폼 = R "거미 형태"(DDragon,
  // 거미 그림). 버전 고정 URL이라 깨지면(404) 최신 버전 번호로 교체.
  elise: [
    { ko: "인간폼", en: "Human", icon: "https://ddragon.leagueoflegends.com/cdn/16.19.1/img/spell/EliseHumanQ.png" },
    { ko: "거미폼", en: "Spider", icon: "https://ddragon.leagueoflegends.com/cdn/16.19.1/img/spell/EliseR.png", skillIcons: {
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/elise/hud/icons2d/elisespiderq.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/elise/hud/icons2d/elisespiderw.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/elise/hud/icons2d/elisespidere.png",
    } },
  ],

  // ✅ 나르 (2폼 — 분노 최대치에서 메가 나르로 변신). 미니폼 Q/W/E/R은 기존 로컬
  // 아이콘(/spells/gnar/*.webp, DDragon GnarQ/W/E/R)이 그대로라 skillIcons 불필요.
  // 메가폼 Q/W/E는 DDragon에 개별 아이콘이 없어(16.20.1 기준 챔피언 JSON에 미니 4개만
  // 존재) CDragon 예외 사용(docs/data-sources.md). R은 원래 메가 나르 스킬이라
  // (gnar.bin.json상 GnarR = GnarBig_R, 미니일 땐 Gnar_R_Grey로 회색 처리될 뿐)
  // 교체하지 않음. P는 두 폼 공통.
  // 탭 아이콘: 미니 = 미니 Q(DDragon), 메가 = 메가 나르 변신 버프 아이콘(CDragon
  // gnartransform, DDragon에 없음).
  gnar: [
    { ko: "미니", en: "Mini", icon: "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/spell/GnarQ.png" },
    { ko: "메가", en: "Mega", icon: "https://raw.communitydragon.org/latest/game/assets/characters/gnar/hud/icons2d/gnartransform.png", skillIcons: {
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/gnar/hud/icons2d/gnarbig_q.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/gnar/hud/icons2d/gnarbig_w.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/gnar/hud/icons2d/gnarbig_e.png",
    } },
  ],

  // ✅ 케인 (3폼)
  // ✅ 케인 (3폼 — 기본/그림자 암살자/다르킨). DDragon엔 기본(Primary) 아이콘만 있어
  // (16.20.1 기준 KaynQ/W/E/R, Kayn_Passive_Primary) 그암/다르킨은 CDragon 예외 사용
  // (docs/data-sources.md). kayn.bin.json의 mImgIconName 기준 접미사 _Primary=기본,
  // _Ass=그림자 암살자, _Slay=다르킨. 기본폼은 로컬 아이콘 그대로라 skillIcons 불필요.
  // R은 첫 시전(R1) 아이콘 기준 — KaynR에 Primary/Slay만 있고 Ass가 없어(그암은
  // Primary 공유) 그암 R은 교체하지 않음.
  // 탭 아이콘: 각 폼의 패시브 아이콘(passive_primary/ass/slay).
  kayn: [
    { ko: "케인", en: "Base", icon: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_passive_primary.png" },
    { ko: "그암", en: "Shadow", icon: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_passive_ass.png", skillIcons: {
      P: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_passive_ass.png",
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_q_ass.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_w_ass.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_e_ass.png",
    } },
    { ko: "다르킨", en: "Rhaast", icon: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_passive_slay.png", skillIcons: {
      P: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_passive_slay.png",
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_q_slay.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_w_slay.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_e_slay.png",
      R: "https://raw.communitydragon.org/latest/game/assets/characters/kayn/hud/icons2d/kayn_r1_slay.png",
    } },
  ],

  // ✅ 클레드 (2폼 — 스칼 탑승/낙마). 승마폼은 기존 로컬 아이콘(/spells/kled/*.webp,
  // DDragon KledQ/W/E/R = 승마 상태)이 그대로라 skillIcons 불필요. 낙마폼 아이콘은
  // DDragon에 없어(16.20.1 기준 챔피언 JSON에 승마 4개만 존재) CDragon 예외 사용
  // (docs/data-sources.md). kled.bin.json의 mImgIconName 기준: KledRiderQ(낙마 Q,
  // 권총)=Kled_Q2, KledPassive 낙마 상태=Kled_P2(달아나는 스칼), 낙마 중 사용 불가인
  // E/R은 회색 아이콘(Kled_E_Grey/Kled_R_Grey). W는 회색 아이콘이 따로 없어 유지.
  // (Kled_E2는 낙마가 아니라 E 재시전 아이콘이라 사용 안 함.)
  // 탭 아이콘: 각 상태의 패시브 아이콘(승마 = DDragon Kled_P, 낙마 = Kled_P2).
  kled: [
    { ko: "승마폼", en: "Mounted", icon: "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/passive/Kled_P.png" },
    { ko: "낙마폼", en: "Dismounted", icon: "https://raw.communitydragon.org/latest/game/assets/characters/kled/hud/icons2d/kled_p2.png", skillIcons: {
      P: "https://raw.communitydragon.org/latest/game/assets/characters/kled/hud/icons2d/kled_p2.png",
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/kled/hud/icons2d/kled_q2.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/kled/hud/icons2d/kled_e_grey.png",
      R: "https://raw.communitydragon.org/latest/game/assets/characters/kled/hud/icons2d/kled_r_grey.png",
    } },
  ],

  // ✅ 크산테 (2폼 — R로 총공세 돌입). 기본폼 Q/W/E/R은 기존 로컬 아이콘
  // (/spells/ksante/*.webp, DDragon KSanteQ/W/E/R)이 그대로라 skillIcons 불필요.
  // 총공세 중에도 P/Q/W/E는 아이콘이 안 바뀜(ksante.bin.json상 KSanteW_AllOut도
  // Icons_KSante_W 그대로, Q1/Q2/Q3는 Q 중첩 단계별 아이콘이라 폼과 무관).
  // R만 총공세 조기 종료 스킬(KSanteREndEarly = Icons_KSante_R2)로 바뀌는데 DDragon에
  // 없어 CDragon 예외 사용(docs/data-sources.md).
  // 탭 아이콘: 기본 = 기본 Q(DDragon), 총공세 = R "총공세"(DDragon, 진입 스킬).
  ksante: [
    { ko: "기본", en: "Base", icon: "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/spell/KSanteQ.png" },
    { ko: "총공세", en: "All Out", icon: "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/spell/KSanteR.png", skillIcons: {
      R: "https://raw.communitydragon.org/latest/game/assets/characters/ksante/hud/icons2d/icons_ksante_r2.png",
    } },
  ],

  // ✅ 렉사이 (2폼 — W로 돌출/매복 전환). 돌출폼 Q/W/E는 기존 로컬
  // 아이콘(/spells/reksai/*.webp, DDragon RekSaiQ/W/E = CDragon *_q1/w1/e1)이
  // 그대로라 skillIcons 불필요. 매복폼 Q/W/E는 DDragon에 개별 아이콘이 없어
  // (16.19.1 기준 RekSaiQBurrowed 등 403, 챔피언 JSON에도 돌출 4개만 존재)
  // CDragon 예외 사용(docs/data-sources.md). P/R은 두 폼 공통 아이콘.
  // 탭 아이콘: 돌출폼 = 매복 상태 W "돌출"(CDragon w2), 매복폼 = 돌출 상태
  // W "매복"(DDragon RekSaiW) — 각 폼으로 들어가는 스킬 아이콘.
  reksai: [
    { ko: "돌출", en: "Base", icon: "https://raw.communitydragon.org/latest/game/assets/characters/reksai/hud/icons2d/reksai_w2.png" },
    { ko: "매복", en: "Burrowed", icon: "https://ddragon.leagueoflegends.com/cdn/16.19.1/img/spell/RekSaiW.png", skillIcons: {
      Q: "https://raw.communitydragon.org/latest/game/assets/characters/reksai/hud/icons2d/reksai_q2.png",
      W: "https://raw.communitydragon.org/latest/game/assets/characters/reksai/hud/icons2d/reksai_w2.png",
      E: "https://raw.communitydragon.org/latest/game/assets/characters/reksai/hud/icons2d/reksai_e2.png",
    } },
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
