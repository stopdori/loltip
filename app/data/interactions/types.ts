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

type GimmickPhase = {
  label: { ko: string; en: string };
  tags: TagId[];
};

export type GimmickSkillData =
  | TagId[]
  | { phases: [GimmickPhase, GimmickPhase?, GimmickPhase?, GimmickPhase?] };

type GimmickSkillBlock = Partial<Record<SkillKey, GimmickSkillData>>;

type ChampGimmick =
  | GimmickSkillBlock
  | { base: GimmickSkillBlock; alt?: GimmickSkillBlock; alt2?: GimmickSkillBlock };

export interface ChampData {
  id: string;
  skills: ChampSkill;
  vision?: ChampSkill;
  gimmick?: ChampGimmick;
  notes?: { ko: string[]; en: string[] };
  ultCooldown?: Partial<Record<6 | 11 | 16, number>>;
}
