// app/data/matchups/briar/briar_lillia.ts
import type { MatchupSummary } from "../_types";

export const briar_lillia: MatchupSummary = {
  champs: ["briar", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 릴리아 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 릴리아 W의 [[DASH]]를 끊을 수 있음. \n 단, 릴리아 W의 모션에따라 데미지는 적용 될 수 있음. \n ( 자세한건 릴리아 TMI 부분에 설명 )",
        "E의 [[CAST_COMMIT]]으로 릴리아 R의 [[SLEEP]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 릴리아 R의 [[SLEEP]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 릴리아 W의 [[DASH]]을 따라갈 수 있음. \n 단, 릴리아와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Lillia's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Lillia's W [[DASH]]. \n However, depending on the timing of Lillia's W animation, the damage may still apply. \n (See Lillia's TMI section for details.)",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Lillia's R [[SLEEP]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Lillia's R [[SLEEP]].",
        "R2 [[HOMING]] [[DASH]] can follow Lillia's W [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Lillia."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
