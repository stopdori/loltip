// app/data/matchups/aatrox/aatrox_amumu.ts
import type { MatchupSummary } from "../_types";

export const aatrox_amumu: MatchupSummary = {
  champs: ["aatrox", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]효과로 아무무 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Amumu's Q [[DASH]]."],
    },
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 아트록스 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Aatrox's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Aatrox's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Aatrox's E [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Aatrox's Q [[AIRBORNE]] and continue [[DASH]]."],
    },
  },
};
