// app/data/matchups/malphite/malphite_sion.ts
import type { MatchupSummary } from "../_types";

export const malphite_sion: MatchupSummary = {
  champs: ["malphite", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 사이온 Q, R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 로 [[AIRBORNE]]을 무시하면 [[STUN]]은 걸리지 않음."],
      en: ["R [[UNSTOPPABLE]] can ignore Sion's Q and R [[AIRBORNE]]. \n However, if [[AIRBORNE]] is ignored via [[UNSTOPPABLE]], the [[STUN]] is not applied."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["말파이트 R의 [[UNSTOPPABLE]] 상태일 때 사이온 R의 [[UNSTOPPABLE]]와 충돌한 경우. \n \n 1. 말파이트 R로 사이온 R을 통과하여 [[DASH]]할 때. \n 사이온 R이 멈추고 전방 [[AOE]] 피해와 [[AIRBORNE]]. \n 말파이트 R은 정상적으로 통과하지만, 사이온 R의 데미지를 받음. \n \n 2. 말파이트 R을 사이온 R에 맞힐 때. \n 사이온 R, 말파이트 R 모두 정상적으로 작동하고, 서로에게 피해. \n 하지만, 말파이트는 [[AIRBORNE]]을 무시, 사이온은 말파이트 R의 [[AIRBORNE]]에 당함. [[CLIP:https://www.youtube.com/shorts/UMkOPkFjCdA]]"],
    en: ["When Malphite's R [[UNSTOPPABLE]] collides with Sion's R [[UNSTOPPABLE]]. \n \n 1. If Malphite [[DASH]]es through Sion with R, \n Sion's R stops, dealing forward [[AOE]] damage and [[AIRBORNE]]. \n Malphite's R passes through normally, but takes damage from Sion's R. \n \n 2. If Malphite's R hits Sion's R, \n both Sion's R and Malphite's R activate normally, dealing damage to each other. \n However, Malphite ignores [[AIRBORNE]], while Sion is hit by Malphite's R's [[AIRBORNE]]. [[CLIP:https://www.youtube.com/shorts/UMkOPkFjCdA]]"],
  },
};
