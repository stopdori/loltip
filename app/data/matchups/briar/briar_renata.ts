// app/data/matchups/briar/briar_renata.ts
import type { MatchupSummary } from "../_types";

export const briar_renata: MatchupSummary = {
  champs: ["briar", "renata"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 레나타 글라스크 Q1의 [[ROOT]] / Q2의 [[KNOCKBACK]], [[STUN]] / R의 [[BERSERK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 레나타 글라스크 Q1의 [[ROOT]], Q2의 [[STUN]], R의 [[BERSERK]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Renata Glasc's Q1 [[ROOT]] / Q2 [[KNOCKBACK]], [[STUN]] / R [[BERSERK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Renata Glasc's Q1 [[ROOT]], Q2 [[STUN]], and R [[BERSERK]]."],
    },
    renata: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["특이한 판정 \n 브라이어 R1의 [[PROJECTILE]]를 발사했을 때 \n 레나타 글라스크 R의 [[BERSERK]]에 걸리고 나서 [[PROJECTILE]]가 적중한다면 \n R1의 [[CC_IMMUNE]]이 발동하여 [[BERSERK]]이 즉시 해제되고 R2를 시전. [[CLIP:https://www.youtube.com/shorts/Vs4UZa080h0]]"],
    en: ["Unusual interaction \n When Briar fires R1's [[PROJECTILE]], \n if she gets hit by Renata Glasc's R [[BERSERK]] before the [[PROJECTILE]] lands, \n R1's [[CC_IMMUNE]] activates, immediately clearing the [[BERSERK]] and casting R2. [[CLIP:https://www.youtube.com/shorts/Vs4UZa080h0]]"],
  },
};
