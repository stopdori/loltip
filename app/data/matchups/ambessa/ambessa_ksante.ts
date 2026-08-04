// app/data/matchups/ambessa/ambessa_ksante.ts
import type { MatchupSummary } from "../_types";

export const ambessa_ksante: MatchupSummary = {
  champs: ["ambessa", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 크산테 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 크산테 일반폼, 변신폼 Q3의 [[GRAB]] / 일반폼 W의 [[KNOCKBACK]] / 일반폼 R의 [[SUPPRESS]]을 무시할 수 있음.", 
        "크산테 W, R의 [[UNSTOPPABLE]]로 암베사 R의 [[SUPPRESS]]을 무시할 수 있음. \n 단, W의 [[UNSTOPPABLE]]은 판정이 상당히 좋음. \n R의 [[UNSTOPPABLE]]은 하단에 정리 \n \n",
        "암베사와 크산테 R의 [[UNSTOPPABLE]] 판정. \n \n 1. 암베사와 크산테 서로에게 사용했을 때 \n 먼저쓴쪽이 판정을 완전 이김. \n \n  2.암베사가 제 3자에게 R을 사용하고 크산테가 암베사에게 사용했을 때 \n 암베사가 데미지를 입고 크산테는 벽넘어로 이동하며 암베사는 제 3자에게 스킬 유효. \n \n 3.크산테가 제 3자에게 R을 사용하고 암베사가 크산테에게 사용했을 때 \n 제 3자에게 데미지가 들어가고 벽 넘어로 혼자 이동. \n 암베사 R의 [[SUPPRESS]]으로 인해 크산테는 제자리에 있고 스킬 100% 유효."
      ],
      en: ["R [[SUPPRESS]] can interrupt K'Sante's E [[DASH]].", "R [[UNSTOPPABLE]] can ignore K'Sante's normal form / transformed form Q3 [[GRAB]], normal form W [[KNOCKBACK]], and normal form R [[SUPPRESS]].", "K'Sante's W and R [[UNSTOPPABLE]] can ignore Ambessa's R [[SUPPRESS]]. \n However, W's [[UNSTOPPABLE]] window is quite generous. \n R's [[UNSTOPPABLE]] details are summarized below. \n \n"],
    },

    ksante: {
      ko: [],
      en: [],
    },

    common: {
      ko: ["암베사와 크산테 R의 [[UNSTOPPABLE]] 판정. \n \n 1. 암베사와 크산테 서로에게 사용했을 때 \n 먼저쓴쪽이 판정을 완전 이김. \n \n  2.암베사가 제 3자에게 R을 사용하고 크산테가 암베사에게 사용했을 때 \n 암베사가 데미지를 입고 크산테는 벽넘어로 이동하며 암베사는 제 3자에게 스킬 유효. \n \n 3.크산테가 제 3자에게 R을 사용하고 암베사가 크산테에게 사용했을 때 \n 제 3자에게 데미지가 들어가고 벽 넘어로 혼자 이동. \n 암베사 R의 [[SUPPRESS]]으로 인해 크산테는 제자리에 있고 스킬 100% 유효."],
      en: ["Ambessa and K'Sante R [[UNSTOPPABLE]] priority. \n \n 1. When used on each other simultaneously, \n the one who activates first wins the priority entirely. \n \n 2. When Ambessa uses R on a third party and K'Sante uses R on Ambessa, \n Ambessa takes damage and K'Sante moves past the wall, while Ambessa's skill on the third party remains valid. \n \n 3. When K'Sante uses R on a third party and Ambessa uses R on K'Sante, \n K'Sante deals damage to the third party and moves past the wall alone. \n Ambessa's R [[SUPPRESS]] keeps K'Sante in place, and the skill is 100% valid."],
    },
  },
};
