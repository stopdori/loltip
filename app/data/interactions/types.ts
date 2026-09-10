import type { TagId } from "./tags";
import type { GimmickTagId } from "./tags_gimmick";

export type SkillKey = "P" | "Q" | "W" | "E" | "R";

type SkillPhase = {
  label: { ko: string; en: string };
  tags: (TagId | GimmickTagId)[];
};

export type SkillSkillData =
  | (TagId | GimmickTagId)[]
  | { phases: [SkillPhase, SkillPhase?, SkillPhase?, SkillPhase?, SkillPhase?, SkillPhase?] };

type SkillBlock = Partial<Record<SkillKey, SkillSkillData>>;

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
  | { phases: [GimmickPhase, GimmickPhase?, GimmickPhase?, GimmickPhase?, GimmickPhase?, GimmickPhase?] };

type GimmickSkillBlock = Partial<Record<SkillKey, GimmickSkillData>>;

type ChampGimmick =
  | GimmickSkillBlock
  | { base: GimmickSkillBlock; alt?: GimmickSkillBlock; alt2?: GimmickSkillBlock };

type VisionSkillBlock = Partial<Record<SkillKey, GimmickSkillData>>;

type ChampVision =
  | VisionSkillBlock
  | { base: VisionSkillBlock; alt?: VisionSkillBlock; alt2?: VisionSkillBlock };

export type NoteBlock = { ko: string[]; en: string[] };

export type ChampNotes = {
  skill?: {
    note3?: NoteBlock;
    note1?: NoteBlock;
    note2?: NoteBlock;
  };
  vision?: NoteBlock;
  gimmick?: NoteBlock;
};

/**
 * Data Dragon tooltip의 {{ 이름 }} 플레이스홀더를 등장 순서로 추측해
 * effectBurn에 위치 매핑하는 resolvePlaceholders()의 positional 휴리스틱은
 * 이름 기반 플레이스홀더가 여러 개 섞인 복잡한 스킬에서 틀린 값을 낼 수 있다
 * (vars 배열이 비어 있어 공식 매핑을 아예 못 받는 경우 특히 그렇다).
 * 여기에 스킬(P/Q/W/E/R)별로 "이 플레이스홀더 이름엔 이 값"을 직접 지정하면
 * 그 값이 추측보다 항상 우선한다. 키는 tooltip 안 {{ }} 안의 이름 그대로
 * (산술식 제외, 예: "{{ passiveempoweredhealthpercent*100 }}"면 키는
 * "passiveempoweredhealthpercent"), 값은 문장에 그대로 들어갈 최종 문자열이다
 * (override는 이미 계산이 끝난 값으로 간주되어 산술식이 적용되지 않으므로,
 * 원본 tooltip에 곱셈 등이 붙어 있었다면 그 결과값을 직접 넣어야 한다).
 */
export type PlaceholderOverrides = Partial<Record<SkillKey, Record<string, string>>>;

/**
 * 스킬 아이콘 호버 툴팁에 보여줄 P/Q/W/E/R 설명 문장을 챔피언 파일에
 * 직접 하드코딩할 때 쓴다. 여기 값이 있으면 그 문장을 그대로 쓰고,
 * 없으면(또는 해당 언어가 비어있으면) 지금처럼 Data Dragon 실시간 fetch +
 * resolvePlaceholders(placeholderOverrides 적용) 결과로 폴백한다.
 * 아직 다단계(phases) 구조는 지원하지 않는다 — 필요해지면 그때 확장.
 * [[TAG]] 토큰을 문장 안에 넣으면 TokenText로 렌더링되어 태그 툴팁이 뜬다.
 */
export type SkillTooltipText = { ko: string; en: string };
export type SkillTooltips = Partial<Record<SkillKey, SkillTooltipText>>;

export interface ChampData {
  id: string;
  skills: ChampSkill;
  vision?: ChampVision;
  gimmick?: ChampGimmick;
  notes?: NoteBlock | ChampNotes;
  ultCooldown?: Partial<Record<6 | 11 | 16, number>>;
  placeholderOverrides?: PlaceholderOverrides;
  skillTooltip?: SkillTooltips;
}
