import ChampClient from "@/app/[locale]/champ/ChampClient";

// 예전엔 여기에 mounted 게이트(클라이언트 마운트 전까지 null)가 있어서
// SiteHeader/footer(Privacy Policy 링크)까지 SSR에서 통째로 빠졌었음.
// 그 게이트는 원래 챔프 스킬 비교 패널의 중복 콘텐츠를 막으려던 것이었는데,
// useIframe=true일 때는 그 패널이 항상 iframe(/champ-embed/[id])으로 렌더링되므로
// 이미 중복 노출이 발생하지 않는다. iframe 관련 진짜 클라이언트 전용 로직은
// ChampClient 내부의 iframeViewportReady 게이트가 별도로 담당하고 있어서
// 이 바깥 게이트는 불필요했음 — 제거.
export default function MatchupChampClient(props: React.ComponentProps<typeof ChampClient>) {
  return <ChampClient {...props} useIframe={true} />;
}
