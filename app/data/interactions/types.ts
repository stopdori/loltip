import type { TagId } from "./tags";

export type SkillKey = "P" | "Q" | "W" | "E" | "R" | "ETC";

// ✅ notes 추가
export type ChampSkillTags = Partial<Record<SkillKey, TagId[]>> & {
  notes?: string[];
};
