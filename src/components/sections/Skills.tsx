import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";
import { SkillColumn } from "./SkillColumn";

export function Skills() {
  return (
    <Section id="competences" tone="surface">
      <SectionHeading
        index="02"
        eyebrow="Compétences"
        title="Stack technique & compétences"
        description="Une double formation développement web et cybersécurité, avec une pratique de Next.js consolidée lors de mon stage chez Selltim."
      />

      <ul className="mt-14 grid border-t border-border pt-10 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillColumn key={category.label} category={category} index={index} />
        ))}
      </ul>
    </Section>
  );
}
