// Génère un identifiant unique
export function makeId(): string {
  if ('randomUUID' in crypto) return crypto.randomUUID();
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}