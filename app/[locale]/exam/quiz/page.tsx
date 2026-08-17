import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  };
}

export default function Page() {
  return <QuizClient />;
}
