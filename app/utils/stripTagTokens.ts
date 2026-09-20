// SSR(구글이 읽는 hidden div, JSON-LD FAQPage 답변 등)에서 [[TAG]] 토큰이 섞인 문장을
// "사람이 읽는 순수 텍스트"로 바꾸는 서버 세이프 공용 헬퍼. (서버 전용 아님 — "use client" 없음)
// champ/[id]/page.tsx와 matchup/[pair]/page.tsx가 각자 복제해서 쓰던 stripTags를 합친 것이라,
// 앞으로 SSR 텍스트 처리 규칙은 이 파일 한 곳에서만 바꾼다.
//
// 처리 규칙
// 1) 일반 [[TAG]] → 화면(TokenText.tsx)과 동일한 라벨. parseTagTokens는 NOTE_LABEL을
//    GIMMICK_TAG_LABEL/TAG_LABEL보다 우선 조회하므로(예: DURATION_RESET이 노트 문장에선
//    "지속시간 초기화", pill에선 "지속초기"로 다름) 이 함수가 그 결과를 그대로 쓴다.
// 2) [[CLIP:url]] → 완전히 제거. 화면에선 YouTube 클립으로 가는 "클립" 버튼(부가 기능)이라
//    본문 텍스트가 아니다. SSR에 원문 마커가 그대로 남으면 본문/구조화 데이터에 코드 같은
//    잔재가 섞인다. (URL이 비어 있는 "[[CLIP:]]"도 동일하게 제거된다.)
//    parseTagTokens 자체는 화면(TokenText)이 raw/text를 그대로 쓰므로 건드리지 않는다.
// 3) CLIP을 제거한 문장에만 공백을 정리한다 — 마커 바로 앞의 공백(스페이스/탭)을 걷어내고,
//    문장 끝이면 끝 공백/개행도 제거, 뒤에 글자가 바로 이어지면 공백 하나만 남긴다.
//    CLIP이 없는 문장은 정리 없이 기존 결과와 정확히 동일하게 반환한다(회귀 방지).

import { parseTagTokens } from "@/app/data/interactions/parseTagTokens";

export function stripTagTokens(text: string, lang: "ko" | "en"): string {
  let out = "";
  let removedClip = false;
  let pendingSpace = false;

  for (const seg of parseTagTokens(text, lang)) {
    if (seg.raw?.startsWith("CLIP:")) {
      removedClip = true;
      pendingSpace = pendingSpace || /[ \t]+$/.test(out);
      out = out.replace(/[ \t]+$/, "");
      continue;
    }

    // 마커 앞 공백을 걷어낸 뒤 다음 조각이 공백 없이 글자로 시작하면 공백 하나 복원
    if (pendingSpace && seg.text !== "") {
      if (out !== "" && !/^\s/.test(seg.text)) out += " ";
      pendingSpace = false;
    }
    out += seg.text;
  }

  return removedClip ? out.replace(/\s+$/, "") : out;
}
