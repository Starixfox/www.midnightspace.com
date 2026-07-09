import { Mail } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';
import { InnerPageLayout } from '../components/InnerPageLayout';
import { useCopy } from '../i18n';

type ConnectPageProps = {
  embedded?: boolean;
};

export function ConnectPage({ embedded = false }: ConnectPageProps) {
  const copy = useCopy();
  const content = (
    <InnerPageLayout
      counter="005 / 005"
      title={copy.connect.title}
      subtitle={copy.connect.subtitle}
      transparent
    >
      <FadeUp delay={0.2}>
        <a
          href="mailto:j.guzman@midnightspaceconsultancy.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 16,
            color: '#fff',
            textShadow: '0 1px 10px rgba(0,0,0,0.35)',
            textDecoration: 'none',
          }}
        >
          <Mail size={18} strokeWidth={1.5} />
          j.guzman@midnightspaceconsultancy.com
        </a>
      </FadeUp>
      <FadeUp delay={0.35}>
        <form
          style={{ marginTop: 32, maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 12 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={copy.connect.formCompany}
            aria-label={copy.connect.formCompany}
            className="cognitra-contact-field"
            style={{
              border: '1px solid rgba(0,0,0,0.18)',
              borderRadius: 9999,
              padding: '12px 20px',
              fontSize: 13,
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
            }}
          />
          <input
            type="email"
            placeholder={copy.connect.formEmail}
            aria-label={copy.connect.formEmail}
            className="cognitra-contact-field"
            style={{
              border: '1px solid rgba(0,0,0,0.18)',
              borderRadius: 9999,
              padding: '12px 20px',
              fontSize: 13,
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
            }}
          />
          <textarea
            placeholder={copy.connect.formMessage}
            aria-label={copy.connect.formMessage}
            className="cognitra-contact-field"
            rows={4}
            style={{
              border: '1px solid rgba(0,0,0,0.18)',
              borderRadius: 16,
              padding: '12px 20px',
              fontSize: 13,
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              resize: 'vertical',
            }}
          />
          <button type="submit" className="btn-cognitra-primary" style={{ alignSelf: 'flex-start' }}>
            {copy.connect.formSend}
          </button>
        </form>
      </FadeUp>
    </InnerPageLayout>
  );

  if (embedded) return content;
  return content;
}
