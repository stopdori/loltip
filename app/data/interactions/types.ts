import type { TagId } from "./tags";

export type SkillKey = "P" | "Q" | "W" | "E" | "R" | "ETC";


type SkillBlock = Partial<Record<SkillKey, TagId[]>>;

export type ChampSkillTags =
  | (SkillBlock & { notes?: string[] })
  | {
      base: SkillBlock;
      alt: SkillBlock;
      alt2?: SkillBlock;
      notes?: {
  ko: string[];
  en: string[];
};

    };

export type ChampSkill = ChampSkillTags;
export interface ChampData {
  id: string;
  skills: ChampSkill;
  vision?: ChampSkill;
  notes?: string[] | { ko: string[]; en: string[] };

  // 궁 쿨타임 정보 (레벨 6/11/16)
  ultCooldown?: Partial<Record<6 | 11 | 16, number>>;
}