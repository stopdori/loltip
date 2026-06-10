"use client";
import { useState, useEffect } from "react";
import ChampClient from "@/app/[locale]/champ/ChampClient";

export default function MatchupChampClient(props: React.ComponentProps<typeof ChampClient>) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ChampClient {...props} />;
}
