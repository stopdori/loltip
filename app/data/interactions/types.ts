import type { TagId } from "./tags";

export type SkillKey = "P" | "Q" | "W" | "E" | "R";

type SkillBlock = Partial<Record<SkillKey, TagId[]>>;

export type SingleForm = SkillBlock;

export type MultiForms = {
  base: SkillBlock;
  alt: SkillBlock;
  alt2?: SkillBlock;
};

export type ChampSkill = SingleForm | MultiForms;

export interface ChampData {
  id: string;
  skills: ChampSkill;
  vision?: ChampSkill;
  gimmick?: ChampSkill;
  notes?: { ko: string[]; en: string[] };
  ultCooldown?: Partial<Record<6 | 11 | 16, number>>;
}
