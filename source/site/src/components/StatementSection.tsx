import { FadeUp } from './FadeUp';
import { Parallax } from './Parallax';
import { useCopy } from '../i18n';

export function StatementSection() {
  const copy = useCopy();
  const words = copy.statement.title.split(' ');
  return (
    <section
      className="cognitra-section-pad"
      style={{
        position: 'relative',
        zIndex: 3, // text above the drifting 3D object (which sits at z 2)
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '70px 32px 32px 32px',
      }}
    >
      <Parallax
        amount={28}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: 720,
          padding: '80px 0',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(26px, 3vw, 42px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            color: '#fff',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.25em',
            margin: 0,
          }}
        >
          {words.map((word, i) => (
            <FadeUp key={word + i} as="span" delay={0.15 + i * 0.08} y={32}>
              <span>{word}</span>
            </FadeUp>
          ))}
        </h2>
        <FadeUp as="p" delay={0.9}>
          <p
            style={{
              marginTop: 24,
              fontSize: 14,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 260,
            }}
          >
            {copy.statement.sub}
          </p>
        </FadeUp>
      </Parallax>
    </section>
  );
}
