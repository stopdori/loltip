// app/components/CssLabel.tsx
//
// 조작용 UI 라벨(탭·버튼·스킬 키·태그필 줄 알약·계산기 숫자 등)을 화면에는 그대로 보이게 하되,
// 구글이 본문으로 읽는 DOM 텍스트에서는 빠지게 하는 라벨. 글자를 텍스트 노드 대신
// data-label 속성에 두고 globals.css의 `.css-label::before { content: attr(data-label) }`로 그린다.
// 속성값은 props로만 정해지므로 SSR/클라이언트 렌더 결과가 같다.
//
// - 버튼처럼 이름이 필요한 요소에 쓸 때는 그 요소에 aria-label을 따로 준다(cssLabelProps 참고).
// - 줄바꿈(\n)이 있는 라벨은 부모의 white-space(pre-line 등)를 그대로 따른다.

export default function CssLabel({ label, className = "" }: { label: string; className?: string }) {
  return <span data-label={label} className={`css-label ${className}`.trim()} />;
}

/** 버튼/링크 자체를 CSS 라벨로 만들 때 펼쳐 넣는 속성(글자는 ::before, 이름은 aria-label). */
export function cssLabelProps(label: string) {
  return { "data-label": label, "aria-label": label } as const;
}
