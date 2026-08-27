// app/data/matchups/cassiopeia/cassiopeia_yuumi.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_yuumi: MatchupSummary = {
  champs: ["cassiopeia", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 유미(탈착) R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[STUN]]로 유미(탈착) W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 유미 W의 [[COOLDOWN]] 상태가 됨."],
      en: ["R [[STUN]] can interrupt Yuumi's (detached) R [[SKILL_CHANNEL]].",
        "R [[STUN]] cannot interrupt Yuumi's (detached) W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Yuumi's W goes on [[COOLDOWN]]."],
    },
    yuumi: {
      ko: ["W는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 심지어 W가 [[COOLDOWN]] 상태가 됨.",
        "[[TIP]] ( 그냥 신기한 메커니즘 ) \n W로 다른 대상에게 부착할 때 지나가다 [[GROUNDED]] 효과에 걸리면 W가 [[COOLDOWN]] 상태가 되지만 \n 전에 사용해 놓은 [[DASH]]이 해제되지 않고 부착이 완료 되면서 [[COOLDOWN]]이 사라짐."],
      en: ["W [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n It even puts W on [[COOLDOWN]].",
        "[[TIP]] (Just a curious mechanic) \n If Yuumi runs into the [[GROUNDED]] effect while dashing with W to attach to another target, W goes on [[COOLDOWN]], \n but the [[DASH]] already in motion isn't cancelled — once the attach completes, the [[COOLDOWN]] disappears."],
    },
  },
};
