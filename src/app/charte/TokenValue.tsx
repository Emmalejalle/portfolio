"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Lit la valeur réelle de la variable CSS : globals.css reste la seule source de vérité.
export function TokenValue({ name }: { name: string }) {
  const value = useSyncExternalStore(
    subscribe,
    () => getComputedStyle(document.documentElement).getPropertyValue(name).trim(),
    () => "",
  );

  return <span className="font-mono text-xs text-foreground-muted">{value || "…"}</span>;
}
