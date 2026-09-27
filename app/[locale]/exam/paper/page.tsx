import type { Metadata } from "next";
import PaperClient from "./PaperClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  };
}

export default function Page() {
  return <PaperClient />;
}
