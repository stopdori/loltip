import type { ExamTier } from "../types";

const tiers: ExamTier[] = [
  { min: 0,  label: { ko: "아이언",      en: "Iron"        }, tier: "iron"        },
  { min: 10, label: { ko: "브론즈",      en: "Bronze"      }, tier: "bronze"      },
  { min: 20, label: { ko: "실버",        en: "Silver"      }, tier: "silver"      },
  { min: 30, label: { ko: "골드",        en: "Gold"        }, tier: "gold"        },
  { min: 40, label: { ko: "플래티넘",    en: "Platinum"    }, tier: "platinum"    },
  { min: 50, label: { ko: "에메랄드",    en: "Emerald"     }, tier: "emerald"     },
  { min: 60, label: { ko: "다이아몬드",  en: "Diamond"     }, tier: "diamond"     },
  { min: 70, label: { ko: "마스터",      en: "Master"      }, tier: "master"      },
  { min: 80, label: { ko: "그랜드마스터",en: "Grandmaster" }, tier: "grandmaster" },
  { min: 90, label: { ko: "챌린저",      en: "Challenger"  }, tier: "challenger"  },
];

export default tiers;
