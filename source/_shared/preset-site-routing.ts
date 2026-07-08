/* Minimal hash-routing utilities (own implementation for the missing
   _shared module, written against the API surface the site imports). */

export function getPresetRoutePath(): string {
  const hash = window.location.hash;
  if (hash.startsWith('#/')) return hash.slice(2).split('?')[0];
  return '';
}

export function navigateToRoute(path: string): void {
  window.location.hash = path ? `/${path}` : '/';
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
}

export function navigateToSection(sectionId: string): void {
  if (getPresetRoutePath() !== '') {
    navigateToRoute('');
    window.addEventListener(
      'hashchange',
      () => requestAnimationFrame(() => scrollToId(sectionId)),
      { once: true },
    );
    return;
  }
  scrollToId(sectionId);
}

export function sectionHref(sectionId: string): string {
  return `#${sectionId}`;
}

export function applyPresetHashOnLoad(): void {
  const hash = window.location.hash;
  if (hash && !hash.startsWith('#/')) {
    const id = hash.slice(1);
    requestAnimationFrame(() => scrollToId(id));
  }
}

function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
