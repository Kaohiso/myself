import { Mesh } from "three";

/**
 * Applique une translation horizontale à un objet 3D
 * en fonction de la progression du scroll.
 *
 * @param ref - Référence vers le Mesh Three.js à animer
 * @param baseX - Position X de départ dans le repère 3D
 * @param distanceX - Distance totale parcourue sur l'axe X
 * (valeur recommandée ≈ 0.5 à 3 selon la caméra)
 * @param t - Progression normalisée du scroll (0 → 1)
 *
 * @example
 * // Droite → gauche
 * translateX(mesh, 1.5, -3, scrollT)
 *
 * @example
 * // Gauche → droite
 * translateX(mesh, -1.5, 3, scrollT)
 */
export function translateX(
  ref: Mesh,
  baseX: number,
  distanceX: number,
  t: number
): void {
  ref.position.x = baseX + t * distanceX;
}
