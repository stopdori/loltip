import type { ExamTier } from "../types";
import { getExamQuestions } from "./index";
import { DIFFICULTY_POINTS, EXAM_VERSION } from "./config";
import { getExamTier } from "./tiers";

export type ExamResult = { score: number; totalPoints: number; tier: ExamTier };

// 결과 URL의 v/a로 서버에서 점수·티어를 계산한다 (공유 카드, 결과 페이지 메타데이터 공용).
// 버전이 현재와 다르거나 a가 "문항당 한 글자(0~3, 안 푼 문항 x)" 형식이 아니면 null.
export function computeExamResult(v: string | null, a: string | null): ExamResult | null {
  if (v !== String(EXAM_VERSION) || !a) return null;
  const questions = getExamQuestions();
  if (a.length !== questions.length || !/^[0-3x]+$/.test(a)) return null;

  let score = 0;
  let totalPoints = 0;
  questions.forEach((q, i) => {
    const point = DIFFICULTY_POINTS[q.difficulty];
    totalPoints += point;
    if (a[i] !== "x" && Number(a[i]) === q.answer) score += point;
  });
  return { score, totalPoints, tier: getExamTier(score, totalPoints) };
}
