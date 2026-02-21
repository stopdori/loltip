// app/data/matchups/aatrox/aatrox_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const aatrox_jarvaniv: MatchupSummary = {
  champs: ["aatrox", "jarvaniv"],
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W [[GRAB]]효과로 자르반 EQ를 끊을 수 있음"],
      en: [],
    },
    jarvaniv: {
      ko: ["자르반 EQ 타이밍에 따라 판정이 달라짐.\n자르반이 E에 Q를 날리는 순간 아트록스 Q끝 W [[GRAB]]효과가 발동하면 자르반이 무시하고\n자르반이 Q로 날아가는 도중에 발동하면 끊김.", "자르반 R은 [[UNSTOPPABLE]]"],
      en: ["The interaction with Jarvan IV's EQ depends on the timing: if Aatrox's Q (sweet spot) or W pull hits the moment Jarvan casts Q\nhe will ignore it and complete the dash\nHowever, if the effect triggers while Jarvan is already dashing towards the flag, it will be interrupted", "Jarvan IV's R is [[UNSTOPPABLE]]"],
    },
  },
};
