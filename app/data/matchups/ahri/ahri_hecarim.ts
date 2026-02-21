// app/data/matchups/ahri/ahri_hecarim.ts
import type { MatchupSummary } from "../_types";

export const ahri_hecarim: MatchupSummary = {
  champs: ["ahri", "hecarim"],
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E가 헤카림 E를 끊을 수 있음.\n단, 헤카림이 공격모션을 취하면 헤카림의 이동은 멈추지만 스킬이 유효함"],
      en: [""],
    },
    hecarim: {
      ko: ["헤카림 E로 아리 R을 끊을 수 있음", "헤카림 R의 [[FEAR]]로 아리 R을 끊을 수 없음. 단, [[FEAR]]는 남아있음"],
      en: [],
    },
  },
};
