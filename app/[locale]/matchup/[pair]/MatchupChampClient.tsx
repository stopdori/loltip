"use client";

import { useEffect, useState } from "react";
import ChampClient from "@/app/[locale]/champ/ChampClient";
import {
  markMatchupOrderHintMatched,
  peekMatchupOrderHint,
  toPairKey,
} from "@/app/utils/matchupOrderHint";

// 예전엔 여기에 mounted 게이트(클라이언트 마운트 전까지 null)가 있어서
// SiteHeader/footer(Privacy Policy 링크)까지 SSR에서 통째로 빠졌었음.
// 그 게이트는 원래 챔프 스킬 비교 패널의 중복 콘텐츠를 막으려던 것이었는데,
// useIframe=true일 때는 그 패널이 항상 iframe(/champ-embed/[id])으로 렌더링되므로
// 이미 중복 노출이 발생하지 않는다. iframe 관련 진짜 클라이언트 전용 로직은
// ChampClient 내부의 iframeViewportReady 게이트가 별도로 담당하고 있어서
// 이 바깥 게이트는 불필요했음 — 제거.
//
// 좌/우 배치: 서버(page.tsx)는 항상 알파벳순(forcedMe=a, forcedEnemy=b)만 내려준다.
// 픽커에서 방금 고른 순서는 app/utils/matchupOrderHint.ts의 세션 메모리 힌트로 전달되며,
// 여기서 마운트 시 한 번 읽어 forcedMe/forcedEnemy를 뒤집어서 ChampClient에 넘긴다.
// (ChampClient 내부 state가 아니라 prop 단계에서 반영해야 하는 이유: ChampClient는
//  마운트 시 props→state 동기화 effect가 돌아 state가 prop과 다르면 prop 값으로 되돌린다.)
// page.tsx가 key={pair}로 이 컴포넌트를 렌더링하므로 pair가 바뀌면 리마운트되어 다시 읽는다.
export default function MatchupChampClient(props: React.ComponentProps<typeof ChampClient>) {
  const { forcedMe, forcedEnemy, ...rest } = props;

  // 렌더 중에는 순수 조회만(peek) — StrictMode에서 초기화 함수가 두 번 불려도 결과가 같다.
  const [order] = useState(() => {
    if (!forcedMe || !forcedEnemy) return { me: forcedMe, enemy: forcedEnemy, hinted: false };
    const first = peekMatchupOrderHint(toPairKey(forcedMe, forcedEnemy));
    return first === forcedEnemy
      ? { me: forcedEnemy, enemy: forcedMe, hinted: true }
      : { me: forcedMe, enemy: forcedEnemy, hinted: first !== null };
  });

  // 힌트를 실제로 사용한 경우에만 "매치됨"으로 표시(이후 TTL 없이 같은 pair 동안 유지).
  // TTL이 이미 지나 무시된 힌트를 여기서 되살리지 않도록 hinted일 때만 호출한다.
  useEffect(() => {
    if (!order.hinted || !forcedMe || !forcedEnemy) return;
    markMatchupOrderHintMatched(toPairKey(forcedMe, forcedEnemy));
  }, [order.hinted, forcedMe, forcedEnemy]);

  return <ChampClient {...rest} forcedMe={order.me} forcedEnemy={order.enemy} useIframe={true} />;
}
