// app/components/VerdictIcon.tsx
//
// [[EXIST]]/[[NOT_EXIST]] 판정 기호(O/X)를 글자 대신 인라인 SVG로 그린다.
// 글자 "O"/"X"로 렌더링하면 SSR HTML 본문 텍스트에 "…있음. O"처럼 문장에 붙어 읽히므로,
// 텍스트 노드 없이(aria-hidden) 모양만 그린다. 색은 currentColor라 부모/className의 글자색을 따른다.
//
// 크기는 본문 폰트(Arial)의 글자 폭·높이에 맞춰 기존 글자와 같은 자리를 차지하게 한다:
// 가로 = 글자 전진폭(O 0.778em, X 0.667em), 세로 = 대문자 높이(0.716em), 기준선에 맞춰 정렬.
// bold는 줄 앞 마커(font-bold)용 — 선 굵기만 다르다.

type Verdict = "EXIST" | "NOT_EXIST";

const CAP_HEIGHT_EM = 0.716;
const VIEW_H = 716;

export default function VerdictIcon({
  verdict,
  bold = false,
  className = "",
}: {
  verdict: Verdict;
  bold?: boolean;
  className?: string;
}) {
  const sw = bold ? 140 : 90;
  const isO = verdict === "EXIST";
  const viewW = isO ? 778 : 667;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${viewW} ${VIEW_H}`}
      className={`inline-block align-baseline overflow-visible ${className}`}
      style={{ width: `${viewW / 1000}em`, height: `${CAP_HEIGHT_EM}em` }}
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
    >
      {isO ? (
        <ellipse cx={viewW / 2} cy={VIEW_H / 2} rx={viewW / 2 - 50 - sw / 2} ry={VIEW_H / 2 - sw / 2} />
      ) : (
        <path d={`M40 0 L${viewW - 40} ${VIEW_H} M${viewW - 40} 0 L40 ${VIEW_H}`} />
      )}
    </svg>
  );
}
