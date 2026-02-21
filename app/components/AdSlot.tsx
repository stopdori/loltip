// app/components/AdSlot.tsx
const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

export default function AdSlot({
  side,
  className,
}: {
  side: "left" | "right" | "bottom";
  className?: string;
}) {
  // ✅ 광고 없으면 "슬롯" 자체를 렌더링하지 않음 (UI 안 보임)
  if (!ADS_ENABLED) return null;

  return (
    <div
      className={[
        "rounded-xl bg-slate-800/20 ring-1 ring-white/10",
        "text-slate-500 text-xs flex items-center justify-center",
        side === "bottom" ? "h-[120px] w-full" : "h-[600px] w-[160px]",
        className ?? "",
      ].join(" ")}
    >
      AD SLOT ({side})
    </div>
  );
}
