// app/lib/skillTipText.ts
//
// 스킬 아이콘(P/Q/W/E/R) 말풍선 문장을 조립하는 순수 함수. 서버(챔피언 페이지가 SSR HTML에
// 넣을 문장을 미리 만들 때 — app/data/champPageClientData.ts)와 클라이언트(champ-embed처럼
// 원문 데이터를 받아 브라우저에서 만드는 경로 — SkillTagsPanel.tsx)가 같은 규칙을 쓰도록 한 곳에 둔다.

import type { PlaceholderOverrides, SkillKey, SkillTooltips } from "@/app/data/interactions/types";
import { applyTextOverrides, resolvePlaceholders, stripHtml, type ChampSpells } from "./ddragon";

export type SkillTipSource = {
  skillTooltip?: SkillTooltips;
  ultCooldown?: Partial<Record<6 | 11 | 16, number>>;
  placeholderOverrides?: PlaceholderOverrides;
};

/**
 * 반환값: 헤더("Q - 스킬명") + 본문 문장. 하드코딩 문장이 없고 DDragon 데이터도 아직 없으면 null
 * (호출부가 "불러오는 중..."을 표시하거나, 서버라면 클라이언트 폴백에 맡긴다).
 *
 * comboLabel: 흐웨이처럼 폼별로 슬롯이 가리키는 실제 서브스킬이 다른
 * 챔피언에서, 그 슬롯의 콤보 표기(예: "QE", forms.ts의 skillLabels)를
 * 넘기면 하드코딩 문장의 헤더를 DDragon 실제 스킬명 대신 그 콤보
 * 표기로 대체한다 — Q폼에서 E슬롯(QE)에 "Q - Devastating Fire"라는
 * 엉뚱한 헤더가 붙는 걸 막기 위함. 콤보 표기가 없는 슬롯(P/R처럼
 * 폼과 무관한 스킬)은 기존처럼 DDragon 실제 이름을 헤더로 쓴다.
 */
export function buildSkillTipText({
  k,
  form,
  formed,
  comboLabel,
  lang,
  champ,
  ddragon,
}: {
  k: SkillKey;
  /** 현재 폼 데이터 키(base/alt/alt2…) */
  form: string;
  /** 폼 구조 챔피언인지(hasForms) */
  formed: boolean;
  comboLabel?: string;
  lang: "ko" | "en";
  champ: SkillTipSource | null | undefined;
  ddragon: ChampSpells | null | undefined;
}): string | null {
  // 챔피언 파일에 하드코딩된 문장이 있으면 최우선(DDragon 로딩을 기다릴
  // 필요 없이 즉시 표시). 없으면 아래 기존 DDragon 실시간 로직으로 폴백.
  // 흐웨이처럼 skillTooltip이 폼별(base/alt/alt2)로 나뉘어 있으면 현재
  // 선택된 폼 값을 먼저 찾고, 없으면(또는 애초에 폼 구조가 아니면 —
  // 아펠리오스처럼 플랫하게 쓰는 경우) 플랫 키로 폴백한다(champ.skills
  // 등 다른 필드에서 이미 쓰는 `source?.[form]?.[k] ?? source?.[k]`와
  // 동일한 패턴).
  const tt = champ?.skillTooltip as any;
  const hardcoded: string | undefined = formed ? tt?.[form]?.[k]?.[lang] ?? tt?.[k]?.[lang] : tt?.[k]?.[lang];

  // R 문장 안의 궁극기 쿨타임을 champ.ultCooldown(레벨 6/11/16) 숫자로
  // 문자 그대로 중복 입력하지 않기 위한 {{ultCooldown}} 플레이스홀더.
  // ultCooldown 필드가 유일한 원본이고, 문장은 언제 다듬어도 숫자가
  // 어긋나지 않는다("140/120/100" 형식으로 조립해서 치환).
  const resolveSkillTooltipPlaceholders = (text: string) => {
    if (!text.includes("{{")) return text;
    const uc = champ?.ultCooldown;
    const ultCooldownStr = uc ? ([6, 11, 16] as const).map((lv) => uc[lv] ?? "?").join("/") : "";
    return text.replace(/\{\{\s*ultCooldown\s*\}\}/g, ultCooldownStr);
  };

  // P(패시브)
  if (k === "P") {
    const p = ddragon?.passive;
    if (hardcoded) {
      const header = comboLabel ?? (p ? `P - ${applyTextOverrides(p.name)}` : "P");
      return `${header}\n${resolveSkillTooltipPlaceholders(hardcoded)}`;
    }
    if (!p) return null;

    const body = stripHtml(resolvePlaceholders(p.description, {}, champ?.placeholderOverrides?.P))
      .replace(/\s+\n/g, "\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();

    return `P - ${applyTextOverrides(p.name)}\n${body}`;
  }

  // Q/W/E/R
  const idx = k === "Q" ? 0 : k === "W" ? 1 : k === "E" ? 2 : 3;
  const s = ddragon?.spells?.[idx];
  if (hardcoded) {
    const header = comboLabel ?? (s ? `${k} - ${applyTextOverrides(s.name)}` : k);
    return `${header}\n${resolveSkillTooltipPlaceholders(hardcoded)}`;
  }
  if (!s) return null;

  const body = stripHtml(resolvePlaceholders(s.tooltip || s.description, s, champ?.placeholderOverrides?.[k]))
    .replace(/\s+\n/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();

  return `${k} - ${applyTextOverrides(s.name)}\n${body}`;
}
