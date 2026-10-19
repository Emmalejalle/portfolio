// Empreinte visuelle déterministe : un même texte donne toujours le même motif.
// FNV-1a pour hacher le texte, puis xorshift pour en tirer autant de bits que nécessaire.

function hash(seed: string) {
  let h = 2166136261;
  for (const char of seed) {
    h ^= char.codePointAt(0) ?? 0;
    h = Math.imul(h, 16777619);
  }
  return h >>> 0 || 1;
}

export function fingerprintBits(seed: string, count: number) {
  let h = hash(seed);
  const bits: boolean[] = [];
  for (let i = 0; i < count; i++) {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    h >>>= 0;
    bits.push((h & 1) === 1);
  }
  return bits;
}
