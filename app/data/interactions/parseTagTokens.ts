// app/data/interactions/parseTagTokens.ts
//
// 텍스트 안의 [[TAG]] 토큰을 분리해서, "일반 텍스트 조각"과
// "태그 라벨+톤(색상) 조각"이 순서대로 섞인 배열로 반환하는 순수 함수.
// TokenText.tsx(renderWithTokens 역할)의 파싱 로직을 렌더링과 분리해서
// 재사용할 수 있게 뽑아낸 것 — 여기서는 JSX를 만들지 않고 데이터만 반환한다.
//
// TokenText.tsx는 이 결과를 받아 실제 렌더링(TokenPill/링크/CLIP 아이콘 등)을
// 하고, TagPill.tsx의 툴팁처럼 "정적 표시 전용"으로 쓰고 싶은 곳은
// text/tone만 참고해서 자체적으로 작게 렌더링하면 된다.

import { TAG_LABEL, type TagId } from "./tags";
import { GIMMICK_TAG_LABEL, type GimmickTagId } from "./tags_gimmick";
import { toneOfTag, type Tone } from "./tagTone";

export type TagTokenSegment = {
  /** 표시할 텍스트. 태그로 해석됐으면 라벨, 그 외엔 원본 텍스트 그대로(브라켓 포함) */
  text: string;
  /** 태그로 해석에 성공했을 때만 존재 */
  tone?: Tone;
  /** 태그로 해석에 성공했을 때만 존재 (TAG_LABEL/GIMMICK_TAG_LABEL 조회에 쓰인 원본 키) */
  tagId?: TagId | GimmickTagId;
  /** [[...]] 브라켓 토큰이었을 때만 존재하는 안쪽 원본 문자열(trim됨).
   *  "CLIP:url" 같은 태그 외 특수 토큰을 호출부에서 판별할 때 쓴다. */
  raw?: string;
};

/**
 * text를 [[TAG]] 토큰 기준으로 분리한다.
 * - 태그로 해석되면: { text: 라벨, tone, tagId, raw }
 * - [[...]] 형태이지만 태그로 해석 안 되면(예: CLIP:url, 잘못된 태그명):
 *   { text: 원본 문자열("[[..]]" 포함), raw }
 * - 일반 텍스트 조각: { text: 그 조각 그대로 }
 */
export function parseTagTokens(text: string, lang: "ko" | "en"): TagTokenSegment[] {
  return text.split(/(\[\[.*?\]\])/g).map((part): TagTokenSegment => {
    const rawMatch = part.match(/^\[\[(.+?)\]\]$/);
    if (!rawMatch) {
      return { text: part };
    }

    const raw = rawMatch[1].trim();
    const token = raw as TagId | GimmickTagId;
    const labelData = GIMMICK_TAG_LABEL[token as GimmickTagId] ?? TAG_LABEL[token as TagId];

    if (labelData) {
      return {
        text: labelData[lang],
        tone: toneOfTag(token),
        tagId: token,
        raw,
      };
    }

    // 태그로 해석 안 됨 (CLIP:url 같은 특수 토큰이거나 잘못된 태그명) —
    // 원본 문자열을 브라켓 포함 그대로 반환해 호출부가 각자 판별하게 한다.
    return { text: part, raw };
  });
}
