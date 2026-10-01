// app/components/TipDebugOverlay.tsx
// ?tipdebug=1 일 때만 화면 하단에 말풍선 진단 로그를 띄운다.
"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { getTipLogLines, getTipLogVersion, installTipDebugCapture, isTipDebug, subscribeTipLog } from "@/app/lib/tipDebug";

// SkillTagsPanel이 한 페이지에 2개(내/상대 챔피언) 마운트되므로 먼저
// 마운트된 하나만 오버레이를 그린다.
let overlayOwner: string | null = null;

export default function TipDebugOverlay() {
  const id = useId();
  const [enabled, setEnabled] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [copied, setCopied] = useState<"" | "ok" | "fail">("");

  const logVersion = useSyncExternalStore(subscribeTipLog, getTipLogVersion, () => 0);
  const logLines = getTipLogLines();
  const lineCount = logLines.length;

  useEffect(() => {
    if (!isTipDebug()) return;
    setEnabled(true);
    installTipDebugCapture();
    if (overlayOwner === null) {
      overlayOwner = id;
      setIsOwner(true);
    }
    return () => {
      if (overlayOwner === id) overlayOwner = null;
    };
  }, [id]);

  // 위로 스크롤해서 이전 기록을 볼 수 있게 30줄만 "보이는 높이"로 잡고
  // 전체 버퍼는 스크롤 영역에 둔다. 새 줄이 오면 바닥으로 자동 스크롤.
  const [box, setBox] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!box) return;
    const nearBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 40;
    if (nearBottom) box.scrollTop = box.scrollHeight;
  }, [box, logVersion]);

  if (!enabled || !isOwner || typeof document === "undefined") return null;

  const copy = async () => {
    const text = getTipLogLines().join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied("ok");
    } catch {
      // 휴대폰에서 http(LAN IP)로 접속하면 clipboard API가 막히므로 구식 방식으로 대체.
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      setCopied(ok ? "ok" : "fail");
    }
    setTimeout(() => setCopied(""), 1500);
  };

  return createPortal(
    <div
      data-tooltip-layer="debug"
      className="fixed inset-x-0 bottom-0 z-[10001] bg-black/75 text-[10px] leading-[1.35] text-lime-300 font-mono"
    >
      <div className="flex items-center gap-2 px-2 py-1 border-b border-white/10 text-slate-300">
        <span>tipdebug ({lineCount})</span>
        <button type="button" onClick={copy} className="ml-auto rounded bg-slate-700 px-2 py-0.5 text-white">
          {copied === "ok" ? "복사됨" : copied === "fail" ? "복사 실패" : "복사"}
        </button>
      </div>
      <div ref={setBox} className="overflow-y-auto px-2 py-1" style={{ maxHeight: "calc(30 * 1.35 * 10px)" }}>
        {logLines.slice(-300).map((l, i) => (
          <div key={i} className="whitespace-pre-wrap break-all">
            {l}
          </div>
        ))}
      </div>
    </div>,
    document.body
  );
}
