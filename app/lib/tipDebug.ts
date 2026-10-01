// 말풍선(스킬/태그) 열림·닫힘 진단용 로거. URL에 ?tipdebug=1 이 있을 때만
// 동작하고, 없으면 tipLog는 즉시 반환해서 아무 영향도 주지 않는다.

let enabledCache: boolean | null = null;

export function isTipDebug(): boolean {
  if (typeof window === "undefined") return false;
  if (enabledCache === null) {
    enabledCache = new URLSearchParams(window.location.search).get("tipdebug") === "1";
  }
  return enabledCache;
}

const MAX_LINES = 1000;
const lines: string[] = [];
const listeners = new Set<() => void>();
let t0: number | null = null;
let version = 0;

export function tipLog(msg: string) {
  if (!isTipDebug()) return;
  const now = performance.now();
  if (t0 === null) t0 = now;
  lines.push(`${((now - t0) / 1000).toFixed(3)} ${msg}`);
  if (lines.length > MAX_LINES) lines.splice(0, lines.length - MAX_LINES);
  version++;
  listeners.forEach((l) => l());
}

export function getTipLogLines(): readonly string[] {
  return lines;
}

// useSyncExternalStore 스냅샷용 — 배열은 제자리 변경이라 참조가 안 바뀐다.
export function getTipLogVersion(): number {
  return version;
}

export function subscribeTipLog(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function describeTarget(target: EventTarget | null): string {
  if (!(target instanceof Element)) return String(target);
  const cls = (target.getAttribute("class") ?? "").trim().slice(0, 24);
  const ownLayer = target.getAttribute("data-tooltip-layer");
  return `<${target.tagName.toLowerCase()}${cls ? ` .${cls}` : ""}${ownLayer != null ? ` [layer=${ownLayer}]` : ""}>`;
}

let captureInstalled = false;

// document 캡처 단계(모든 핸들러보다 먼저)에서 이벤트 흐름을 기록한다.
// 오버레이 자체를 조작하는 이벤트는 노이즈라 제외.
export function installTipDebugCapture() {
  if (!isTipDebug() || captureInstalled) return;
  captureInstalled = true;

  const types = ["touchstart", "touchend", "pointerdown", "mousedown", "mouseup", "click"] as const;
  for (const type of types) {
    document.addEventListener(
      type,
      (e) => {
        const t = e.target;
        if (t instanceof Element && t.closest('[data-tooltip-layer="debug"]')) return;
        const layer = t instanceof Element ? t.closest("[data-tooltip-layer]")?.getAttribute("data-tooltip-layer") ?? "-" : "-";
        const icon = t instanceof Element && t.closest("[data-skill-icon]") ? "Y" : "N";
        const ptr = e instanceof PointerEvent ? ` ptr=${e.pointerType}` : "";
        tipLog(`EV ${type}${ptr} ${describeTarget(t)} layer=${layer} icon=${icon}`);
      },
      { capture: true, passive: true }
    );
  }

  // React는 touchstart를 passive로 등록해서 onTouchStart 안의 preventDefault가
  // 무시된다. 모든 핸들러가 끝난 뒤(window 버블) 실제로 막혔는지 확인용.
  window.addEventListener(
    "touchstart",
    (e) => {
      const t = e.target;
      if (t instanceof Element && t.closest('[data-tooltip-layer="debug"]')) return;
      tipLog(`EV touchstart(after-handlers) defaultPrevented=${e.defaultPrevented}`);
    },
    { passive: true }
  );
}
