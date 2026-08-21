// app/data/matchups/briar/briar_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const briar_mordekaiser: MatchupSummary = {
  champs: ["briar", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 모데카이저 E의 [[GRAB]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 모데카이저 E의 [[GRAB]]을 무시할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 모데카이저 R을 무시할 수 있음. \n 즉, 죽음의 세계로 가지 않음. \n 단, 모데카이저 R의 [[COOLDOWN]] 소모."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Mordekaiser's E [[GRAB]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Mordekaiser's E [[GRAB]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Mordekaiser's R. \n In other words, Briar is not taken to the Death Realm. \n However, Mordekaiser's R [[COOLDOWN]] is still consumed."],
    },
    mordekaiser: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["특이한 판정 \n 브라이어 R1의 [[PROJECTILE]]를 발사했을 때 \n 모데카이저 R로 브라이어를 죽음의 세계 추방한다면 \n R1의 [[PROJECTILE]]는 적중해도 효과가 없음. [[CLIP:https://www.youtube.com/shorts/qI-HsuSca7Y]]", 
      "브라이어 R1의 [[PROJECTILE]]를 모데카이저에게 맞혔을 때 \n 모데카이저가 R로 죽음의 세계로 이동한다면 \n 브라이어가 R2의 [[DASH]]으로 날아왔을 때 \n 협곡에서 바라본 모데카이저의 구슬 자리에 도착하고 [[HOMING]] 종료. [[CLIP:https://www.youtube.com/shorts/-YBnwcCG-DU]]"],
    en: ["When Mordekaiser vanishes from the Rift via R, \n if Briar's R2 [[DASH]] is already in flight, \n it arrives at the spot of Mordekaiser's orb as seen from the Rift, and the [[HOMING]] ends. [[CLIP:https://www.youtube.com/shorts/-YBnwcCG-DU]]"],
  },
};
