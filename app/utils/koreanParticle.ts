// 한국어 조사 "와/과" 선택 유틸.
// 마지막 글자의 종성(받침)이 있으면 "과", 없으면 "와" — ㄹ 받침도 받침이므로 "과"(예: 카밀과, 럼블과).
// ("으로/로"와 달리 와/과에는 ㄹ 예외가 없다.)
// 마지막 글자가 한글 음절이 아니면(영문/숫자/기호) 받침 유무를 알 수 없으므로 "와"로 둔다 —
// 현재 챔피언 KO 이름 173개는 전부 한글 음절로 끝나 이 경로를 타지 않는다.

function hasFinalConsonant(word: string): boolean {
  const ch = word.trimEnd().slice(-1);
  if (!ch) return false;
  const code = ch.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return false;
  return (code - 0xac00) % 28 !== 0;
}

export function waGwa(word: string): "와" | "과" {
  return hasFinalConsonant(word) ? "과" : "와";
}
