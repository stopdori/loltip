import type { Metadata } from "next";
import ResultClient from "./ResultClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  };
}

export default function Page() {
  return <ResultClient />;
}
