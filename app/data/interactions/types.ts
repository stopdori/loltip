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

// 최대 5폼(base/alt/alt2/alt3/alt4)까지 지원. 아펠리오스(무기 5개)처럼
// alt3/alt4까지 쓰는 챔피언을 위한 확장 — 기존 13개 챔피언 파일은
// base/alt(/alt2)만 쓰므로 이 확장으로 영향받지 않는다.
export type MultiForms = {
  base: SkillBlock;
  alt: SkillBlock;
  alt2?: SkillBlock;
  alt3?: SkillBlock;
  alt4?: SkillBlock;
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

// MultiForms와 동일하게 alt3/alt4까지 확장(위 주석 참고). alt/alt2의
// 기존 optional 여부는 그대로 유지 — 이번 확장은 5폼 지원을 위한
// alt3/alt4 추가뿐, 기존 필드의 필수/선택 여부는 바꾸지 않는다.
type ChampGimmick =
  | GimmickSkillBlock
  | {
      base: GimmickSkillBlock;
      alt?: GimmickSkillBlock;
      alt2?: GimmickSkillBlock;
      alt3?: GimmickSkillBlock;
      alt4?: GimmickSkillBlock;
    };

type VisionSkillBlock = Partial<Record<SkillKey, GimmickSkillData>>;

type ChampVision =
  | VisionSkillBlock
  | {
      base: VisionSkillBlock;
      alt?: VisionSkillBlock;
      alt2?: VisionSkillBlock;
      alt3?: VisionSkillBlock;
      alt4?: VisionSkillBlock;
    };

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
 * [[TAG]] 토큰을 문장 안에 넣으면 TokenText로 렌더링되어 태그 툴팁이 뜬다.
 *
 * 흐웨이처럼 폼(화풍)마다 Q/W/E 슬롯이 가리키는 실제 서브스킬이 달라지는
 * 챔피언을 위해, skills/vision/gimmick과 동일한 MultiForms 모양(base/alt/
 * alt2/alt3/alt4)도 허용한다 — 폼별로 슬롯 하나당 문장 하나씩(예: base.Q는
 * QQ, alt.Q는 WQ, alt2.Q는 EQ). 이렇게 하면 사용자가 실제로 보는 아이콘
 * 위치(예: Q폼에서 E 슬롯 = QE)에서 바로 그 서브스킬 설명만 짧게 뜨고,
 * 안 맞는 콤보 설명까지 한 문장에 다 욱여넣어 툴팁이 과도하게 길어지는
 * 문제를 피한다. 아펠리오스처럼 무기별로 갈라 쓰기보다 폼 공통 설명이
 * 더 적합한 챔피언은 기존처럼 플랫(Partial<Record<SkillKey,...>>)하게
 * 써도 되며, 폼별 값이 없는 슬롯은 플랫 쪽으로 자동 폴백한다
 * (SkillTagsPanel.tsx getSpellTip 참고).
 * P/R처럼 폼과 무관하게 항상 같은 스킬이면, 각 폼 블록에 동일한 문장을
 * 그대로 중복해서 채운다(skills/gimmick의 기존 컨벤션과 동일).
 * 아직 다단계(phases) 구조는 지원하지 않는다 — 필요해지면 그때 확장.
 */
export type SkillTooltipText = { ko: string; en: string };
type SkillTooltipBlock = Partial<Record<SkillKey, SkillTooltipText>>;
export type SkillTooltips =
  | SkillTooltipBlock
  | {
      base: SkillTooltipBlock;
      alt?: SkillTooltipBlock;
      alt2?: SkillTooltipBlock;
      alt3?: SkillTooltipBlock;
      alt4?: SkillTooltipBlock;
    };

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
