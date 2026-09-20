"use client";

import { useEffect, useState } from "react";
import ChampClient from "../ChampClient";
import { markChampSideHintMatched, peekChampSideHint } from "@/app/utils/champSideHint";

// /champ/[id] 페이지의 좌/우 표시 위치.
// 서버(page.tsx)는 항상 기본(forcedMe=champId, 왼쪽)만 내려준다. 픽커에서 방금 정해진 위치는
// app/utils/champSideHint.ts의 세션 메모리 힌트로 전달되며, 여기서 마운트 시 한 번 읽어
// forcedMe/forcedEnemy를 뒤집어서 ChampClient에 넘긴다.
// (ChampClient 내부 state가 아니라 prop 단계에서 반영해야 하는 이유: ChampClient는 마운트 시
//  props→state 동기화 effect가 돌아 state가 prop과 다르면 prop 값으로 되돌린다.)
// page.tsx가 key={champId}로 렌더링하므로 챔피언이 바뀌면 리마운트되어 다시 읽는다.
export default function ChampPageClient(props: React.ComponentProps<typeof ChampClient>) {
  const { forcedMe, forcedEnemy, ...rest } = props;
  // 한 명만 고정된 경우(/champ/[id])에만 의미가 있다.
  const champId = forcedMe && !forcedEnemy ? forcedMe : null;

  // 렌더 중에는 순수 조회(peek)만 — StrictMode에서 초기화 함수가 두 번 불려도 결과가 같다.
  const [placement] = useState(() => {
    const side = champId ? peekChampSideHint(champId) : null;
    return {
      hinted: side !== null,
      me: side === "enemy" ? null : forcedMe,
      enemy: side === "enemy" ? champId : forcedEnemy,
    };
  });

  // 힌트를 실제로 사용한 경우에만 "매치됨" 표시(TTL로 무시된 힌트를 되살리지 않음)
  useEffect(() => {
    if (placement.hinted && champId) markChampSideHintMatched(champId);
  }, [placement.hinted, champId]);

  return <ChampClient {...rest} forcedMe={placement.me} forcedEnemy={placement.enemy} />;
}
