// app/data/matchups/bard/bard_skarner.ts
import type { MatchupSummary } from "../_types";

export const bard_skarner: MatchupSummary = {
  champs: ["bard", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["Q의 [[STUN]], R(존야)로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R(존야)로 스카너 R을 존야상태로 만드는 경우. \n 1. 스카너 R을 시전하는 도중에 바드 R(존야)을 맞으면 스카너가 존야 상태가 되지만 R은 정상적으로 시전. \n 2. 스카너 R이 적중한 대상에게 바드 R(존야)을 맞히면, 존야상태로 끌려다님."],
      en: ["Q [[STUN]] and R (Zhonya-like stasis) can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "When R (Zhonya-like stasis) puts Skarner's R into stasis: \n 1. If Skarner is hit by Bard's R while casting R, Skarner enters stasis but R still casts normally. \n 2. If Bard's R hits a target already caught by Skarner's R, the target is dragged along while in stasis."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
