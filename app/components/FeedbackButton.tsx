"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  lang: "ko" | "en";
};

export default function FeedbackButton({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const MAX_LEN = 300;
  const MIN_LEN = 5;

  const title = useMemo(() => {
    return lang === "ko" ? "문의 / 제보" : "Feedback";
  }, [lang]);

  const placeholder = useMemo(() => {
    return lang === "ko"
      ? "메커니즘이 잘못된 부분 제보 부탁드립니다. 정확도 높은 데이터 유지를 위해 짧은 영상(링크)이나 긴 영상(유튜브 어떤영상 OO시간 OO초)이나 리플레이(롤 닉네임, 날짜, 총 게임시간, 어떤 캐릭터 리플레이 OO시간 OO초)를 부탁드립니다."
      : "Please report any incorrect mechanics. To maintain high data accuracy, please provide GIFs (link), videos (YouTube video title, MM:SS), or replays (LoL summoner name, date, total game time, champion name, and MM:SS).";
  }, [lang]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const trimmed = message.trim();
  const len = message.length;

  const tooLong = len > MAX_LEN;
  const tooShort = trimmed.length < MIN_LEN;
  const canSend = trimmed.length >= MIN_LEN;

  const onSend = async () => {
    if (!canSend) return;

    const payload = {
      message: trimmed,
      url: typeof window !== "undefined" ? window.location.href : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      createdAt: new Date().toISOString(),
    };

    try {
      const resp = await fetch("/api/feedback", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

      alert(lang === "ko" ? "전송 완료!" : "Sent!");
      setMessage("");
      setOpen(false);
    } catch (e) {
      console.error(e);
      alert(
        lang === "ko"
          ? "전송 실패. 잠시 후 다시 시도해줘."
          : "Failed. Please try again."
      );
    }
  };

  return (
    <>
      {/* 우측 하단 버튼 */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:fixed absolute bottom-5 right-5 z-50 rounded-full bg-yellow-400 px-4 py-3 text-sm font-black text-black shadow-lg shadow-black/30 ring-1 ring-yellow-300 hover:brightness-95 active:scale-[0.98]"
      >
        {lang === "ko" ? "문의 / 제보" : "Feedback"}
      </button>

      {/* 모달 */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="text-base font-extrabold text-slate-100">
                {title}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-200 hover:bg-slate-700"
              >
                {lang === "ko" ? "닫기" : "Close"}
              </button>
            </div>

            <div className="p-4 space-y-3">
              {/* 내용 */}
              <div>
                <div className="mb-1 text-sm font-semibold text-slate-200">
                  {lang === "ko" ? "내용" : "Message"}
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, MAX_LEN))}
                  placeholder={placeholder}
                  rows={6}
                  maxLength={MAX_LEN}
                  className="w-full resize-none rounded-xl bg-slate-800/70 border border-white/10 px-3 py-3 text-sm text-slate-100 outline-none focus:border-white/20"
                />

                <div className="mt-1 flex items-center justify-between text-xs">
                  <span
                    className={
                      tooLong || tooShort
                        ? "text-rose-400 font-semibold"
                        : "text-slate-400"
                    }
                  >
                    {tooLong
                      ? lang === "ko"
                        ? "300자까지 입력 가능"
                        : "Up to 300 characters"
                      : tooShort
                      ? lang === "ko"
                        ? "5자 이상 입력"
                        : "Minimum 5 characters"
                      : lang === "ko"
                      ? "※ ESC로 닫기 가능"
                      : "Press ESC to close"}
                  </span>

                  <span
                    className={
                      tooLong || tooShort
                        ? "text-rose-400 font-semibold"
                        : "text-slate-400"
                    }
                  >
                    {len} / {MAX_LEN}
                  </span>
                </div>
              </div>

              {/* 전송 */}
              <button
                type="button"
                onClick={onSend}
                disabled={!canSend}
                className={`w-full rounded-xl px-4 py-3 text-sm font-black transition ring-1 ${
                  canSend
                    ? "bg-yellow-400 text-black ring-yellow-300 hover:brightness-95 active:scale-[0.99]"
                    : "bg-slate-800/60 text-slate-500 ring-white/10 cursor-not-allowed"
                }`}
              >
                {lang === "ko" ? "보내기" : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
