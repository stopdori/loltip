import type { TagId } from "./tags";
import type { GimmickTagId } from "./tags_gimmick";

export type SkillKey = "P" | "Q" | "W" | "E" | "R";

type SkillBlock = Partial<Record<SkillKey, (TagId | GimmickTagId)[]>>;

export type SingleForm = SkillBlock;

export type MultiForms = {
  base: SkillBlock;
  alt: SkillBlock;
  alt2?: SkillBlock;
};

export type ChampSkill = SingleForm | MultiForms;

type GimmickPhase = {
  label: { ko: string; en: string };
  tags: (TagId | GimmickTagId)[];
};

export type GimmickSkillData =
  | (TagId | GimmickTagId)[]
  | { phases: [GimmickPhase, GimmickPhase?, GimmickPhase?, GimmickPhase?] };

type GimmickSkillBlock = Partial<Record<SkillKey, GimmickSkillData>>;

type ChampGimmick =
  | GimmickSkillBlock
  | { base: GimmickSkillBlock; alt?: GimmickSkillBlock; alt2?: GimmickSkillBlock };

type VisionSkillBlock = Partial<Record<SkillKey, GimmickSkillData>>;

type ChampVision =
  | VisionSkillBlock
  | { base: VisionSkillBlock; alt?: VisionSkillBlock; alt2?: VisionSkillBlock };

export interface ChampData {
  id: string;
  skills: ChampSkill;
  vision?: ChampVision;
  gimmick?: ChampGimmick;
  notes?: { ko: string[]; en: string[] };
  ultCooldown?: Partial<Record<6 | 11 | 16, number>>;
}
