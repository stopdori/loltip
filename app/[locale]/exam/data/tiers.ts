import type { ExamTier } from "../types";
import { DIFFICULTY_POINTS } from "./config";

// 낮은 티어 → 높은 티어 순서. 결과 화면의 승급 연출(언랭부터 한 단계씩)도 이 순서를 그대로 따른다.
const tiers: ExamTier[] = [
  { label: { ko: "언랭",        en: "Unranked"    }, tier: "unranked"    },
  { label: { ko: "아이언",      en: "Iron"        }, tier: "iron"        },
  { label: { ko: "브론즈",      en: "Bronze"      }, tier: "bronze"      },
  { label: { ko: "실버",        en: "Silver"      }, tier: "silver"      },
  { label: { ko: "골드",        en: "Gold"        }, tier: "gold"        },
  { label: { ko: "플래티넘",    en: "Platinum"    }, tier: "platinum"    },
  { label: { ko: "에메랄드",    en: "Emerald"     }, tier: "emerald"     },
  { label: { ko: "다이아몬드",  en: "Diamond"     }, tier: "diamond"     },
  { label: { ko: "마스터",      en: "Master"      }, tier: "master"      },
  { label: { ko: "그랜드마스터",en: "Grandmaster" }, tier: "grandmaster" },
  { label: { ko: "챌린저",      en: "Challenger"  }, tier: "challenger"  },
];

export default tiers;

// 아이언~마스터: 만점 대비 비율 컷(%, 이상). 높은 티어부터 검사하고, 어느 컷에도 못 미치면 아이언(1점 이상일 때).
// 임시값. 문항 확정 후 실제 롤 KR 티어 분포(op.gg 통계)를 참고해 조정 예정
export const TIER_RATIO_CUTS: { tier: Exclude<ExamTier["tier"], "unranked" | "iron" | "grandmaster" | "challenger">; minPercent: number }[] = [
  { tier: "master",   minPercent: 95 },
  { tier: "diamond",  minPercent: 90 },
  { tier: "emerald",  minPercent: 80 },
  { tier: "platinum", minPercent: 55 },
  { tier: "gold",     minPercent: 45 },
  { tier: "silver",   minPercent: 30 },
  { tier: "bronze",   minPercent: 15 },
];

const byTier = (tier: ExamTier["tier"]) => tiers.find((t) => t.tier === tier)!;

// 티어 판정은 반드시 이 함수 하나로 한다 (결과 화면 티어, 승급 연출의 목표 티어 등 모든 곳 공용).
// totalPoints(만점)는 고정값이 아니라 문항 데이터의 배점 합계를 넘길 것.
// 판정 순서: 언랭(0점) → 챌린저 → 그랜드마스터 → 비율 컷(마스터~브론즈) → 아이언
export function getExamTier(score: number, totalPoints: number): ExamTier {
  // 언랭: 0점일 때만 (만점이 0인 경우도 여기서 걸러져 챌린저로 판정되지 않음)
  if (score <= 0) return byTier("unranked");

  // 챌린저: 만점과 정확히 같을 때만
  if (score === totalPoints) return byTier("challenger");

  // 그랜드마스터: (만점 - 쉬운 문항 1개 배점) 이상, 만점 미만
  // 임시 컷. 추후 응시 데이터가 쌓이면 '마스터 이상 & 만점 미만 중 상위 10%(경계 동점은 아래 티어로)'인 상대평가로 전환 예정
  if (score >= totalPoints - DIFFICULTY_POINTS.easy && score < totalPoints) return byTier("grandmaster");

  // 비율 컷: 부동소수 오차를 피하려고 score/totalPoints >= p/100 을 정수 곱셈으로 비교
  const cut = TIER_RATIO_CUTS.find((c) => score * 100 >= totalPoints * c.minPercent);
  return byTier(cut ? cut.tier : "iron");
}
