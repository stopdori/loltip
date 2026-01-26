"use client";

import { useEffect, useState } from "react";
import { getChampSpells, type ChampSpells } from "./ddragon";

export function useChampSpells(champId: string | null, locale: "ko_KR" | "en_US") {
  const [data, setData] = useState<ChampSpells | null>(null);

  useEffect(() => {
    if (!champId) {
      setData(null);
      return;
    }
    let alive = true;
    setData(null);
    getChampSpells(champId, locale)
      .then((d) => alive && setData(d))
      .catch(() => alive && setData(null));
    return () => {
      alive = false;
    };
  }, [champId, locale]);

  return data;
}
