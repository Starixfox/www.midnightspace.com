export function LegalSections() {
  return (
    <>
      <section
        id="privacy"
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#C5C5C5',
          borderTop: '1px solid rgba(0,0,0,0.18)',
          padding: '70px 32px',
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 2.5vw, 32px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#1a1a1a',
              margin: 0,
            }}
          >
            Privacy Policy
          </h2>
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.65, color: '#3a3a3a', maxWidth: 560 }}>
            Midnight Space bewaart alleen wat je zelf mailt: je bericht en je contactgegevens. Niets wordt gedeeld of doorverkocht. Vragen? Mail j.guzman@midnightspaceconsultancy.com.
          </p>
        </div>
      </section>
      <section
        id="terms"
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#b8b8b8',
          borderTop: '1px solid rgba(0,0,0,0.18)',
          padding: '70px 32px',
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 2.5vw, 32px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#1a1a1a',
              margin: 0,
            }}
          >
            Terms of Service
          </h2>
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.65, color: '#3a3a3a', maxWidth: 560 }}>
            Een proefontwerp is gratis en vrijblijvend. Je betaalt pas na akkoord over een volledige website. Alles verloopt per e-mail — zwart op wit, in je eigen tempo.
          </p>
        </div>
      </section>
    </>
  );
}
