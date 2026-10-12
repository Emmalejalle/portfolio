"use client";

import { useImperativeHandle, useRef, type Ref } from "react";

const GLYPHS = "▓▒░#%&@$<>/\\";

export type DecryptHandle = { run: () => void };

// Texte qui se brouille puis se « décrypte » lettre par lettre quand on appelle run().
type DecryptProps = {
  text: string;
  className?: string;
  ref?: Ref<DecryptHandle>;
};

export function Decrypt({ text, className, ref }: DecryptProps) {
  const el = useRef<HTMLSpanElement>(null);
  const running = useRef(false);

  useImperativeHandle(ref, () => ({
    run() {
      const node = el.current;
      if (!node || running.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      running.current = true;
      let step = 0;
      const id = window.setInterval(() => {
        step++;
        const revealed = Math.floor(step / 2);
        node.textContent = [...text]
          .map((char, i) =>
            char === " " || i < revealed ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join("");
        if (revealed >= text.length) {
          window.clearInterval(id);
          node.textContent = text;
          running.current = false;
        }
      }, 28);
    },
  }));

  return (
    <span ref={el} aria-label={text} className={className}>
      {text}
    </span>
  );
}
