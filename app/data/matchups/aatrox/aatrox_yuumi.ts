// app/data/matchups/aatrox/aatrox_yuumi.ts
import type { MatchupSummary } from "../_types";

export const aatrox_yuumi: MatchupSummary = {
  champs: ["aatrox", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [
      "아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 유미 W의 [[DASH]]을 끊을 수 있음.", 
      "아트록스 W를 맞고 유미가 W를 사용하면 [[TETHER]] 효과가 남아있고, \n 벗어나지 않으면 데미지만 추가로 들어감 \n 즉, [[GRAB]]은 무시하고 내려지지 않음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W [[GRAB]] can interrupt Yuumi's W [[DASH]].", "If Yuumi uses W after being hit by Aatrox's W, the [[TETHER]] remains; if she doesn't escape, she takes additional damage.\nHowever, the [[GRAB]] is ignored and Yuumi is not dismounted."],
    },
    yuumi: {
      ko: ["유미 W는 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 맞으면 W가 쿨타임이 될 수 있음."],
      en: ["Yuumi's W can be put on [[COOLDOWN]] if hit by Aatrox's Q [[AIRBORNE]] or W [[GRAB]]."],
    },
  },
};
