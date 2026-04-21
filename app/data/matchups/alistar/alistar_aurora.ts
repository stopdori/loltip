// app/data/matchups/alistar/alistar_aurora.ts
import type { MatchupSummary } from "../_types";

export const alistar_aurora: MatchupSummary = {
  champs: ["alistar", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 오로라 E, R의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Aurora's W and E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Aurora's E and R [[SLOW]]."],
    },
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]]로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, W의 [[KNOCKBACK]]으로 밀려나다가 [[DASH]] 발동.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음.", 
        "오로라 R의 범위 밖으로 알리스타 W를 맞아 밀려나면 [[UNTARGETABLE]] [[BLINK]] 발동."],
      en: ["If Aurora is knocked outside their R's range by Alistar's W, the R effect triggers."],
    },
  },
};
