/**
 * Normalise une valeur de scroll dans un intervalle donné.
 *
 * @param t - scroll global normalisé (0 → 1)
 * @param start - début du chapitre (0 → 1)
 * @param end - fin du chapitre (0 → 1)
 * @returns valeur normalisée (0 → 1) pour le chapitre
 */
export function chapterProgress(t: number, start: number, end: number): number {
  if (t <= start) return 0;
  if (t >= end) return 1;
  return (t - start) / (end - start);
}
