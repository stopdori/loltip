// app/data/matchups/ambessa/ambessa_urgot.ts
import type { MatchupSummary } from "../_types";

export const ambessa_urgot: MatchupSummary = {
  champs: ["ambessa", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 우르곳 E(이동)을 끊을 수 있음.", "암베사 R의 [[SUPPRESS]]으로 우르곳 R(시전 집중)을 끊을 수 없음.", "암베사 R의 [[UNSTOPPABLE]]로 우르곳 E의 [[GRAB]]을 무시할 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 우르곳 R2의 [[SUPPRESS]], [[EXECUTE]]를 무시할 수 없음.\n단, 암베사의 R이 발동은 되지만 결국 [[SUPPRESS]] 당하여 끌려가 [[EXECUTE]]당함."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Urgot's E (dash).", "Ambessa's R [[SUPPRESS]] cannot interrupt Urgot's R (channeling).", "Ambessa's R [[UNSTOPPABLE]] can ignore Urgot's E [[GRAB]].", "Ambessa's R [[UNSTOPPABLE]] cannot ignore Urgot's R2 [[SUPPRESS]] and [[EXECUTE]].\nHowever, Ambessa's R does activate, but she ultimately gets [[SUPPRESS]]ed and dragged in, then [[EXECUTE]]d."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
