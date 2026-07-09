import type { MouseEvent } from 'react';
import {
  getPresetRoutePath,
  navigateToRoute,
  navigateToSection,
  sectionHref,
} from '../../../_shared/preset-site-routing';
import { FadeUp } from './FadeUp';
import { useCopy, useLang, type Lang } from '../i18n';

function scrollToSectionFromNav(sectionId: string) {
  const goHomeFirst = getPresetRoutePath() !== '';
  if (goHomeFirst) {
    navigateToRoute('');
    window.addEventListener(
      'hashchange',
      () => {
        requestAnimationFrame(() => navigateToSection(sectionId));
      },
      { once: true },
    );
    return;
  }
  navigateToSection(sectionId);
}

function LangToggle() {
  const { lang, setLang } = useLang();
  const option = (l: Lang) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className="cognitra-nav-link"
      style={{
        fontSize: 11,
        letterSpacing: '0.06em',
        color: '#1a1a1a',
        fontWeight: lang === l ? 700 : 400,
        opacity: lang === l ? 1 : 0.45,
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      {l.toUpperCase()}
    </button>
  );
  return (
    <span aria-label="Taal / Language" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      {option('nl')}
      <span aria-hidden style={{ fontSize: 11, color: '#1a1a1a', opacity: 0.35 }}>/</span>
      {option('en')}
    </span>
  );
}

export function Navbar() {
  const copy = useCopy();
  const navClick = (sectionId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSectionFromNav(sectionId);
  };

  return (
    <nav
      className="cognitra-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background: '#C5C5C5',
        borderBottom: '1px solid rgba(0,0,0,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 32px',
      }}
    >
      <FadeUp delay={0}>
        <a
          href={sectionHref('main')}
          onClick={navClick('main')}
          className="cognitra-nav-brand cognitra-nav-link"
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1a1a1a',
            textDecoration: 'none',
          }}
        >
          MIDNIGHT SPACE
        </a>
      </FadeUp>

      <div
        className="cognitra-nav-links hidden sm:flex"
        style={{ gap: 48, alignItems: 'center' }}
      >
        {copy.nav.center.map((link, i) => (
          <FadeUp key={link.section} delay={0.05 + i * 0.05}>
            <a
              href={sectionHref(link.section)}
              onClick={navClick(link.section)}
              className="cognitra-nav-link"
              style={{
                fontSize: 11,
                letterSpacing: '0.06em',
                color: '#1a1a1a',
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          </FadeUp>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <div
          className="cognitra-nav-links cognitra-nav-links-secondary flex"
          style={{ gap: 48, alignItems: 'center' }}
        >
          {copy.nav.right.map((link, i) => (
            <FadeUp key={link.section} delay={0.3 + i * 0.05}>
              <a
                href={sectionHref(link.section)}
                onClick={navClick(link.section)}
                className="cognitra-nav-link"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  color: '#1a1a1a',
                  fontWeight: 400,
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.4}>
          <LangToggle />
        </FadeUp>
      </div>
    </nav>
  );
}
