const KOR_KEYMAP: Record<string, string> = {
  ㄱ:"r", ㄲ:"R", ㄴ:"s", ㄷ:"e", ㄸ:"E",
  ㄹ:"f", ㅁ:"a", ㅂ:"q", ㅃ:"Q", ㅅ:"t",
  ㅆ:"T", ㅇ:"d", ㅈ:"w", ㅉ:"W", ㅊ:"c",
  ㅋ:"z", ㅌ:"x", ㅍ:"v", ㅎ:"g",

  ㅏ:"k", ㅐ:"o", ㅑ:"i", ㅒ:"O",
  ㅓ:"j", ㅔ:"p", ㅕ:"u", ㅖ:"P",
  ㅗ:"h", ㅘ:"hk", ㅙ:"ho", ㅚ:"hl",
  ㅛ:"y", ㅜ:"n", ㅝ:"nj", ㅞ:"np",
  ㅟ:"nl", ㅠ:"b", ㅡ:"m", ㅢ:"ml",
  ㅣ:"l",
};

// 한글 음절 분해
function decomposeHangul(char: string): string[] {
  const code = char.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return [char];

  const base = code - 0xac00;
  const cho = Math.floor(base / 588);
  const jung = Math.floor((base % 588) / 28);
  const jong = base % 28;

  const CHO = [
    "ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ",
    "ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"
  ];
  const JUNG = [
    "ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ",
    "ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"
  ];
  const JONG = [
    "", "ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ",
    "ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ",
    "ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"
  ];

  return [CHO[cho], JUNG[jung], ...(JONG[jong] ? [JONG[jong]] : [])];
}

export function korToEng(input: string): string {
  return [...input]
    .flatMap(decomposeHangul)
    .map((jamo) => KOR_KEYMAP[jamo] ?? "")
    .join("");
}
