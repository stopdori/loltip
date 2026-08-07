// app/data/matchups/amumu/amumu_ivern.ts
import type { MatchupSummary } from "../_types";

export const amumu_ivern: MatchupSummary = {
  champs: ["amumu", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[HOMING]] [[DASH]]로 아이번 R(아이번이 데이지와 멀어지면 데이지가 아이번 옆으로 순간이동 하는것)을 따라갈 수 있음. \n 단, [[STUN]]은 R(데이지)에게 남아있음.", 
        "Q의 [[STUN]]로 아이번 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 아이번 Q의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 아이번 Q의 [[DASH]]을 끊을 수 있음.", 
        "Q로 아이번 Q의 [[ROOT]], R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Q [[HOMING]] [[DASH]] can follow Ivern's R (when Ivern moves away from Daisy, Daisy teleports next to Ivern). \n However, the [[STUN]] remains on R (Daisy).", "Q [[STUN]] cannot interrupt Ivern's Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Ivern's Q [[DASH]].", "R [[STUN]] can interrupt Ivern's Q [[DASH]].", "Q can ignore Ivern's Q [[ROOT]] and R [[AIRBORNE]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
