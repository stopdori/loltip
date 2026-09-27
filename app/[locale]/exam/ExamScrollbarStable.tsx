"use client";

import { useEffect } from "react";

export default function ExamScrollbarStable() {
  useEffect(() => {
    document.documentElement.classList.add("exam-scrollbar-stable");
    return () => {
      document.documentElement.classList.remove("exam-scrollbar-stable");
    };
  }, []);

  return null;
}
