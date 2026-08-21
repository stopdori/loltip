// app/data/matchups/briar/briar_reksai.ts
import type { MatchupSummary } from "../_types";

export const briar_reksai: MatchupSummary = {
  champs: ["briar", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 렉사이 매복폼 W([[BA]])의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 렉사이 메복폼 W([[BA]])의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 렉사이 E의 [[DASH]], R의 [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 렉사이와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Rek'Sai's Burrowed Form E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Rek'Sai's Burrowed Form E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Rek'Sai's Burrowed Form W ([[BA]]) [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Rek'Sai's Burrowed Form W ([[BA]]) [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Rek'Sai's E [[DASH]] and R [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Rek'Sai."],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
