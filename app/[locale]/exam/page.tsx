import type { Metadata } from "next";
import ExamClient from "./ExamClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  };
}

export default function Page() {
  return <ExamClient />;
}
