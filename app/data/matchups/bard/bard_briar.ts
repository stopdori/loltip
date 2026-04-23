// app/data/matchups/bard/bard_briar.ts
import type { MatchupSummary } from "../_types";

export const bard_briar: MatchupSummary = {
  champs: ["bard", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음.", 
        "바드 R(존야), 브라이어 R은 여러가지 상황이 있음. \n 1. 브라이어가 R의 [[PROJECTILE]]를 발사 중 일 때 존야에 맞으면, 존야에 걸리지만 [[PROJECTILE]]가 발사됨. 적중하면 정상적으로 발동함. \n 가끔 버그로 브라이어가 엄청 천천히 날아갈 때가 있음. \n 2. 브라이어 R의 [[PROJECTILE]]에 적중하고 날아올 때 존야에 맞으면, 존야를 무시하고 [[DASH]]. \n 3. 브라이어 R의 [[PROJECTILE]]가 적중하고 날아올 때, 맞은 대상이 존야도 맞으면. 정상적으로 대상 주변에 광역 [[FEAR]]를 시전."],
      en: [""],
    },
    briar: {
      ko: [],
      en: [],
    },
  },
};
