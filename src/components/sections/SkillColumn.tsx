"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { Decrypt, type DecryptHandle } from "@/components/ui/Decrypt";
import { Fingerprint } from "@/components/ui/Fingerprint";
import type { SkillCategory } from "@/lib/data";

// Une catégorie de compétences : au survol, l'empreinte rosit et le titre se décrypte.
export function SkillColumn({ category, index }: { category: SkillCategory; index: number }) {
  const title = useRef<DecryptHandle>(null);

  return (
    <li
      onMouseEnter={() => title.current?.run()}
      className={`group flex flex-col gap-5 py-8 md:px-8 md:py-2 md:first:pl-0 md:last:pr-0 ${
        index > 0 ? "border-t border-border md:border-t-0 md:border-l" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-foreground-muted">
          0{index + 1} · {category.skills.length} technos
        </span>
        <Fingerprint
          seed={category.label}
          cells={4}
          strokeWidth={0.3}
          className="h-6 w-6 text-border transition-colors duration-300 group-hover:text-accent-ink"
        />
      </div>
      <h3 className="type-subtitle">
        <Decrypt ref={title} text={category.label} />
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </li>
  );
}
