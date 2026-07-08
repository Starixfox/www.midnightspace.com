import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import { FadeUp } from '../components/FadeUp';
import { InnerPageLayout } from '../components/InnerPageLayout';

type CasePageProps = {
  embedded?: boolean;
};

export function CasePage({ embedded = false }: CasePageProps) {
  const content = (
    <InnerPageLayout
      counter="004 / 005"
      title="Conceptstudies, eerst gemaakt"
      subtitle="Elk ontwerp hieronder werd eerst gemaakt en dan pas voorgesteld — zo werk ik. Eigen beeldmateriaal van de zaak, eerlijk gelabeld."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
        {CASE_STUDIES.map((item, idx) => (
          <FadeUp key={item.client} delay={0.15 + idx * 0.1}>
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
                  src={item.image}
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
                  {item.tag}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1a1a1a', margin: '8px 0 6px' }}>
                  {item.client}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#3a3a3a', margin: 0 }}>{item.outcome}</p>
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </InnerPageLayout>
  );

  if (embedded) return content;
  return content;
}
