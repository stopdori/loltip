import { EXAM_VERSION } from "./data/config";

export type ExamProgress = {
  answers: (number | null)[];
  current: number;
  completed: boolean;
  revealed: boolean;
};

export const EXAM_STORAGE_KEY = `loltip-exam-v${EXAM_VERSION}`;

// total과 저장된 answers 길이가 다르면(문항 수가 바뀐 경우) 무효로 취급한다.
export function loadExamProgress(total: number): ExamProgress | null {
  try {
    const raw = localStorage.getItem(EXAM_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ExamProgress;
    if (!Array.isArray(parsed.answers) || parsed.answers.length !== total) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveExamProgress(progress: ExamProgress) {
  try {
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // private mode 등으로 localStorage 접근이 막혀도 앱 동작에는 영향 없음
  }
}

export function clearExamProgress() {
  try {
    localStorage.removeItem(EXAM_STORAGE_KEY);
  } catch {
    // ignore
  }
}

// 결과 URL의 "a" 파라미터 인코딩(문항당 한 글자: 0~3, 안 푼 문항은 x)과 동일한 규칙.
export function encodeAnswers(answers: (number | null)[]): string {
  return answers.map((a) => (a === null ? "x" : String(a))).join("");
}
