// Watchtower: declaración global de wt() para TypeScript.
// Evita errores de tipo al llamar a window.wt('track', ...).
declare global {
  interface Window {
    wt?: (...args: unknown[]) => void
  }
}
export {}
