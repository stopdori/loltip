// app/data/matchups/cassiopeia/cassiopeia_katarina.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_katarina: MatchupSummary = {
  champs: ["cassiopeia", "katarina"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 카타리나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Katarina's R [[SKILL_CHANNEL]]."],
    },
    katarina: {
      ko: ["E는 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.",
        "[[TIP]] R로 [[SKILL_CHANNEL]] 중일 때 카타리나가 바라보고 있는 방향은 \n 처음 시전할 때 바라본 곳을 계속 바라보는 판정이기 때문에 \n 카시오페아를 상대할 때는 뒤를 돌고 R을 사용해서 카시오페아 R의 [[STUN]] 발동을 피해야 유리함."],
      en: ["E [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].",
        "[[TIP]] While channeling R ([[SKILL_CHANNEL]]), Katarina keeps facing whatever direction she was facing when the cast began — it doesn't turn to track. \n So against Cassiopeia, it's advantageous to turn away before casting R, to avoid triggering Cassiopeia's R [[STUN]]."],
    },
  },
};
