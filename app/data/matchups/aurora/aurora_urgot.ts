// app/data/matchups/aurora/aurora_urgot.ts
import type { MatchupSummary } from "../_types";

export const aurora_urgot: MatchupSummary = {
  champs: ["aurora", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 우르곳 E의 [[GRAB]], [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음. \n 단, 우르곳 E의 [[DASH]]을 보고 오로라 E를 사용하면, 오로라가 끌려가다가 [[DASH]] 발동. 실패하면 그냥 끌려감.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 우르곳 E의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Urgot's E [[GRAB]] and [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies. \n However, if Aurora reacts to Urgot's E [[DASH]] and uses E, she gets pulled first and then the [[DASH]] activates. If mistimed, she is simply pulled in.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Urgot's E [[GRAB]] and continue [[DASH]]."],
    },
    urgot: {
      ko: ["우르곳 E의 [[GRAB]], [[STUN]]로 오로라 W의 [[DASH]]을 끊을 수 있음.",
        "우르곳 E의 [[GRAB]], [[STUN]]로 오로라 E의 [[DASH]]를 끊을 수 있음. \n 단, 오로라가 실수해야 끊을 수 있음.",
        "우르곳 R2의 [[SUPPRESS]] [[EXECUTE]]으로 오로라 W, E, R의 [[DASH]]을 끊을 수 있음. \n 단, 오로라 R은 [[UNSTOPPABLE]] [[DASH]]이지만 끌려감."],
      en: ["Urgot's E [[GRAB]] and [[STUN]] can interrupt Aurora's W [[DASH]].",
        "Urgot's E [[GRAB]] and [[STUN]] can interrupt Aurora's E [[DASH]]. \n However, this only works if Aurora mistimes it.",
        "Urgot's R2 [[SUPPRESS]] [[EXECUTE]] can interrupt Aurora's W, E, and R [[DASH]]. \n However, Aurora's R is an [[UNSTOPPABLE]] [[DASH]], yet she still gets pulled in."],
    },
  },
};
