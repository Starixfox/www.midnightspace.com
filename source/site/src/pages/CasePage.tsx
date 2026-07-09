import { motion } from 'framer-motion';
import { CASE_IMAGES } from '../constants';
import { FadeUp } from '../components/FadeUp';
import { InnerPageLayout } from '../components/InnerPageLayout';
import { Parallax } from '../components/Parallax';
import { useCopy } from '../i18n';

type CasePageProps = {
  embedded?: boolean;
};

export function CasePage({ embedded = false }: CasePageProps) {
  const copy = useCopy();
  const content = (
    <InnerPageLayout
      counter="004 / 005"
      title={copy.cases.title}
      subtitle={copy.cases.subtitle}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
        {copy.cases.items.map((item, idx) => (
          <Parallax key={item.client} amount={idx % 2 === 0 ? 24 : -16}>
          <FadeUp delay={0.15 + idx * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              style={{
                border: '1px solid rgba(0,0,0,0.18)',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.35)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
              }}
            >
              <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden' }}>
                <motion.img
                  src={CASE_IMAGES[idx]}
                  alt={item.client}
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
              </div>
              <div style={{ padding: '20px 28px 24px' }}>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#666',
                  }}
                >
                  {copy.cases.tag}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1a1a1a', margin: '8px 0 6px' }}>
                  {item.client}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#3a3a3a', margin: 0 }}>{item.outcome}</p>
              </div>
            </motion.div>
          </FadeUp>
          </Parallax>
        ))}
      </div>
    </InnerPageLayout>
  );

  if (embedded) return content;
  return content;
}
