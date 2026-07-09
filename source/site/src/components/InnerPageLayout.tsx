import type { ReactNode } from 'react';
import { FadeUp } from './FadeUp';
import { Parallax } from './Parallax';

type InnerPageLayoutProps = {
  counter: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Transparent variant: the fixed BackgroundVideo shows through a
      subtle dark scrim, and the text flips to white — readable in both
      the light and dark phases of the footage. */
  transparent?: boolean;
};

export function InnerPageLayout({ counter, title, subtitle, children, transparent = false }: InnerPageLayoutProps) {
  return (
    <section
      style={{
        position: 'relative',
        background: transparent
          ? 'linear-gradient(180deg, rgba(12,12,14,0.34), rgba(12,12,14,0.46))'
          : '#C5C5C5',
        minHeight: '100vh',
        padding: '120px 32px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Content sits above the drifting 3D object (z 2); the section's
          background (when opaque) stays below it. */}
      <div style={{ position: 'relative', zIndex: 3 }}>
      <Parallax amount={26}>
      <FadeUp delay={0}>
        <p style={{ fontSize: 11, letterSpacing: '0.08em', color: transparent ? 'rgba(255,255,255,0.65)' : '#666', margin: '0 0 20px' }}>{counter}</p>
      </FadeUp>
      <FadeUp as="h1" delay={0.1}>
        <h1
          style={{
            fontSize: 'clamp(26px, 3vw, 42px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            color: transparent ? '#fff' : '#1a1a1a',
            textShadow: transparent ? '0 1px 14px rgba(0,0,0,0.35)' : undefined,
            maxWidth: 520,
            margin: 0,
          }}
        >
          {title}
        </h1>
      </FadeUp>
      {subtitle && (
        <FadeUp as="p" delay={0.25}>
          <p
            style={{
              marginTop: 20,
              fontSize: 14,
              lineHeight: 1.65,
              color: transparent ? 'rgba(255,255,255,0.88)' : '#3a3a3a',
              maxWidth: 420,
            }}
          >
            {subtitle}
          </p>
        </FadeUp>
      )}
      </Parallax>
      <div style={{ marginTop: 48 }}>{children}</div>
      </div>
    </section>
  );
}
