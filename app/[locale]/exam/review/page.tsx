import type { Metadata } from "next";
import ReviewClient from "./ReviewClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  };
}

export default function Page() {
  return <ReviewClient />;
}
