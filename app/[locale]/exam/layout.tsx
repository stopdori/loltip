import { notFound } from "next/navigation";
import ExamScrollbarStable from "./ExamScrollbarStable";

// 공개 전까지 라이브(Vercel)에는 이 변수를 넣지 않아 /exam 하위 전체가 404가 된다. 로컬은 .env.local에서 켠다.
const EXAM_ENABLED = process.env.NEXT_PUBLIC_EXAM_ENABLED === "true";

export default function ExamLayout({ children }: { children: React.ReactNode }) {
  if (!EXAM_ENABLED) notFound();

  return (
    <>
      <ExamScrollbarStable />
      {children}
    </>
  );
}
