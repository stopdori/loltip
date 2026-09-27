import type { ExamQuestion } from "../types";
import questions from "./questions";
import placeholder from "./placeholder";

// questions.ts가 비어 있으면 placeholder를 쓴다 — 문항 풀이/결과/채점 화면 모두 이 함수 하나로 통일해서
// 참조해야 한다 (각자 따로 비교하면 한쪽만 placeholder를 반영하는 실수가 생김).
export function getExamQuestions(): ExamQuestion[] {
  return questions.length > 0 ? questions : placeholder;
}
