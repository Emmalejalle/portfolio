import { Button } from "@/components/ui/Button";
import { AccessBadge } from "@/components/ui/AccessBadge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex flex-col gap-7 lg:py-20 lg:self-center">
          <span className="type-eyebrow">Développeuse web · Étudiante en cybersécurité</span>

          <h1 className="type-display max-w-xl">
            Je construis des sites, et je cherche comment ils pourraient tomber.
          </h1>

          <p className="type-lead max-w-lg">
            En BUT Informatique parcours cybersécurité à l&apos;IUT de Vannes. Je développe en
            Next.js, et j&apos;ai pris l&apos;habitude de regarder chaque formulaire, chaque API
            et chaque mot de passe avec les yeux de quelqu&apos;un qui voudrait les contourner.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button href="#projets">Voir mes projets</Button>
            <Button href="#contact" variant="outline">
              Me contacter
            </Button>
          </div>
        </div>

        <div className="order-first lg:order-none">
          <AccessBadge strapClassName="h-10 lg:h-36" />
        </div>
      </div>
    </section>
  );
}
