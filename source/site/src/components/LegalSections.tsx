import { useCopy } from '../i18n';

export function LegalSections() {
  const copy = useCopy();
  /* Transparent windows onto the fixed BackgroundVideo, so the closing
     stretch of the page shows the video through a subtle dark scrim —
     white text stays readable in every phase of the footage. */
  return (
    <>
      <section
        id="privacy"
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(12,12,14,0.34), rgba(12,12,14,0.46))',
          borderTop: '1px solid rgba(255,255,255,0.22)',
          padding: '70px 32px',
        }}
      >
        <div style={{ maxWidth: 720, position: 'relative', zIndex: 3 }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 2.5vw, 32px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#fff',
              textShadow: '0 1px 14px rgba(0,0,0,0.35)',
              margin: 0,
            }}
          >
            {copy.legal.privacyTitle}
          </h2>
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', maxWidth: 560 }}>
            {copy.legal.privacyText}
          </p>
        </div>
      </section>
      <section
        id="terms"
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(12,12,14,0.34), rgba(12,12,14,0.46))',
          borderTop: '1px solid rgba(255,255,255,0.22)',
          padding: '70px 32px',
        }}
      >
        <div style={{ maxWidth: 720, position: 'relative', zIndex: 3 }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 2.5vw, 32px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#fff',
              textShadow: '0 1px 14px rgba(0,0,0,0.35)',
              margin: 0,
            }}
          >
            {copy.legal.termsTitle}
          </h2>
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', maxWidth: 560 }}>
            {copy.legal.termsText}
          </p>
        </div>
      </section>
    </>
  );
}
