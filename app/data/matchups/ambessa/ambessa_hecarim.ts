// app/data/matchups/ambessa/ambessa_hecarim.ts
import type { MatchupSummary } from "../_types";

export const ambessa_hecarim: MatchupSummary = {
  champs: ["ambessa", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 헤카림 E를 끊을 수 있음.\n단 헤카림이 발굽을 들면 데미지, [[KNOCKBACK]]은 유효", "암베사 R의 [[UNSTOPPABLE]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 무시할 수 있음.\n단, [[FEAR]]는 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Hecarim's E.\nHowever, if Hecarim has already raised his hooves, damage and [[KNOCKBACK]] are still valid.", "Ambessa's R [[UNSTOPPABLE]] can ignore Hecarim's E [[KNOCKBACK]] and R [[FEAR]].\nHowever, [[FEAR]] still applies."],
    },
    hecarim: {
      ko: [],
      en: [],
    },
  },
};
