// app/data/matchups/anivia/anivia_chogath.ts
import type { MatchupSummary } from "../_types";

export const anivia_chogath: MatchupSummary = {
  champs: ["anivia", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["W([[TERRAIN]])의 [[AIRBORNE]]으로 초가스 W를 시전 중일 때 뒤로 밀어내면 W 범위도 같이 뒤로 밀림."],
      en: ["If W [[TERRAIN]] [[AIRBORNE]] knocks Cho'Gath back while casting W, the W [[AOE]] also moves with him."],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 애니비아 R의 [[SKILL_CHARGED]] [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Anivia's R [[SKILL_CHARGED]] [[SKILL_CHANNEL]]."],
    },
  },
};
