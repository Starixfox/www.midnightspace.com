import type { MouseEvent } from 'react';
import { navigateToSection } from '../../../_shared/preset-site-routing';
import { FadeUp } from './FadeUp';
import { Parallax } from './Parallax';
import { useCopy } from '../i18n';

export function HeroSection() {
  const copy = useCopy();
  const cta = (sectionId: string) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigateToSection(sectionId);
  };

  return (
    <section id="main" style={{ position: 'relative', zIndex: 1, height: '100vh' }}>
      <div
        className="cognitra-hero-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '48%',
          background: '#C5C5C5',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 70,
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            padding: '0 32px 24px 32px',
          }}
        >
          <div
            className="cognitra-hero-row"
            style={{ display: 'flex', alignItems: 'stretch', width: '100%', gap: 48 }}
          >
            <div
              className="cognitra-hero-col-left"
              style={{
                width: '32%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 80,
              }}
            >
              <Parallax amount={22}>
                <FadeUp as="h1" delay={0.1}>
                  <h1
                    style={{
                      fontSize: 'clamp(26px, 3vw, 42px)',
                      fontWeight: 700,
                      lineHeight: 1.05,
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                      color: '#1a1a1a',
                      margin: 0,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {copy.hero.title}
                  </h1>
                </FadeUp>
              </Parallax>
              <FadeUp delay={0.5}>
                <p style={{ fontSize: 11, letterSpacing: '0.08em', color: '#666', margin: 0 }}>
                  001 / 005
                </p>
              </FadeUp>
            </div>

            <div
              className="cognitra-hero-col-right"
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 80,
              }}
            >
              <Parallax amount={-12}>
                <FadeUp as="p" delay={0.25}>
                  <p
                    style={{
                      fontSize: 18,
                      lineHeight: 1.6,
                      color: '#5a5a5a',
                      maxWidth: 340,
                      margin: 0,
                    }}
                  >
                    {copy.hero.intro}
                  </p>
                </FadeUp>
              </Parallax>
              <FadeUp delay={0.4}>
                <div className="cognitra-hero-buttons" style={{ display: 'flex', gap: 10 }}>
                  <button type="button" className="btn-cognitra-primary" onClick={cta('connect')}>
                    {copy.hero.ctaPrimary}
                  </button>
                  <button type="button" className="btn-cognitra-secondary" onClick={cta('case')}>
                    {copy.hero.ctaSecondary}
                  </button>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      <FadeUp
        delay={0.6}
        className="cognitra-hero-bottom-text"
        style={{
          position: 'absolute',
          top: '74%',
          transform: 'translateY(-50%)',
          left: 32,
          maxWidth: 260,
        }}
      >
        <Parallax amount={34}>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.9)',
              margin: 0,
            }}
          >
            {copy.hero.bottom}
          </p>
        </Parallax>
      </FadeUp>
    </section>
  );
}
