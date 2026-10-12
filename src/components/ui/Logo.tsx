import { profile } from "@/lib/data";
import { Fingerprint } from "./Fingerprint";

// Emplacement du logo. En attendant le vrai : l'empreinte générée.
// Pour le remplacer, déposer public/logo.svg et rendre <Image src="/logo.svg" alt="" width={32} height={32} />.
export function Logo() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-ink p-2 text-accent-foreground">
      <Fingerprint seed={profile.name} cells={4} strokeWidth={0.35} className="h-full w-full" />
    </span>
  );
}
