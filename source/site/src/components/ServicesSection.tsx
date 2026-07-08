import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import type { ReactNode } from 'react';
import { SERVICE_CARDS } from '../constants';
import { FadeUp } from './FadeUp';

const HEADING_WORDS = 'DIT IS WAT IK VOOR JE MAAK'.split(' ');

/* Example mockups revealed while the section is pinned — own concept
   studies, one per service card. */
const EXAMPLES = [
  { image: './media/debeule-hero.webp', label: 'Conceptstudie — Autoschadebedrijf De Beule, Zele' },
  { image: './media/michiels-hero.webp', label: 'Conceptstudie — Schrijnwerkerij Michiels, Zele' },
  { image: './media/jimmys-hero.webp', label: "Conceptstudie — Jimmy's Classic Cars, Buggenhout" },
] as const;

/* Each card gets its own scroll window inside the pinned range:
   the shape video fades out exactly while its example fades in. */
function phaseWindow(idx: number): [number, number] {
  const start = 0.1 + idx * 0.28;
  return [start, start + 0.18];
}

type SwapMediaProps = {
  video: string;
  idx: number;
  progress: MotionValue<number>;
};

function SwapMedia({ video, idx, progress }: SwapMediaProps) {
  const [start, end] = phaseWindow(idx);
  const videoOpacity = useTransform(progress, [start, end], [1, 0]);
  const imageOpacity = useTransform(progress, [start, end], [0, 1]);
  const imageScale = useTransform(progress, [start, end], [1.06, 1]);
  const labelOpacity = useTransform(progress, [end - 0.04, end], [0, 1]);

  return (
    <div style={{ width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        src={video}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: videoOpacity,
        }}
      />
      <motion.img
        src={EXAMPLES[idx].image}
        alt={EXAMPLES[idx].label}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          opacity: imageOpacity,
          scale: imageScale,
        }}
      />
      <motion.span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '28px 14px 10px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.55))',
          color: 'rgba(255,255,255,0.92)',
          fontSize: 10,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          opacity: labelOpacity,
        }}
      >
        {EXAMPLES[idx].label}
      </motion.span>
    </div>
  );
}

function PhaseDot({ idx, progress }: { idx: number; progress: MotionValue<number> }) {
  const [start, end] = phaseWindow(idx);
  const fill = useTransform(progress, [start, end], [0.25, 1]);
  return (
    <motion.span
      style={{
        width: 26,
        height: 3,
        borderRadius: 2,
        background: '#1a1a1a',
        opacity: fill,
        display: 'inline-block',
      }}
    />
  );
}

type CardShellProps = {
  title: string;
  text: string;
  children: ReactNode;
};

function CardShell({ title, text, children }: CardShellProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      style={{
        background: 'rgba(255,255,255,0.22)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        border: '1px solid rgba(0,0,0,0.18)',
        borderRadius: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 16,
        height: '100%',
      }}
    >
      {children}
      <div style={{ padding: '20px 24px 24px 24px' }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a', marginBottom: 10, marginTop: 0 }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.55, color: '#3a3a3a', margin: 0 }}>{text}</p>
      </div>
    </motion.article>
  );
}

function SectionHead({ compact }: { compact?: boolean }) {
  return (
    <div style={{ position: 'relative', zIndex: 3 }}>
      <FadeUp delay={0}>
        <p style={{ fontSize: 11, letterSpacing: '0.08em', color: '#666', marginBottom: compact ? 12 : 20, marginTop: 0 }}>
          003 / 005
        </p>
      </FadeUp>
      <div
        className="cognitra-services-head-row"
        style={{ display: 'flex', gap: 48, alignItems: 'flex-start', marginBottom: compact ? 20 : 32 }}
      >
        <div className="cognitra-services-head-col" style={{ width: '32%' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 2.6vw, 38px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              color: '#1a1a1a',
              maxWidth: 320,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.25em',
              margin: 0,
            }}
          >
            {HEADING_WORDS.map((word, i) => (
              <FadeUp key={word + i} as="span" delay={0.1 + i * 0.08} y={28}>
                <span>{word}</span>
              </FadeUp>
            ))}
          </h2>
        </div>
        <div className="cognitra-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
          <FadeUp as="p" delay={0.25}>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: '#3a3a3a', maxWidth: 320, margin: 0 }}>
              Websites voor zelfstandigen en lokale bedrijven — van eerste schets tot lancering,
              door één persoon. Scroll verder en zie de voorbeelden verschijnen.
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const update = () => setIsNarrow(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  });

  const pinned = !reduced && !isNarrow;

  /* Static variant (mobile / reduced motion): example images shown
     directly — nothing hidden behind the scroll. */
  if (!pinned) {
    return (
      <section
        id="offering"
        className="cognitra-section-3 cognitra-section-pad-lg"
        style={{
          position: 'relative',
          background: '#C5C5C5',
          display: 'flex',
          flexDirection: 'column',
          padding: '70px 32px 80px 32px',
          minHeight: 'auto',
        }}
      >
        <SectionHead />
        <div
          className="cognitra-cards-grid"
          style={{ position: 'relative', zIndex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, gridAutoRows: '1fr' }}
        >
          {SERVICE_CARDS.map((card, idx) => (
            <FadeUp key={card.title} delay={0.3 + idx * 0.12}>
              <CardShell title={card.title} text={card.text}>
                <div style={{ width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={EXAMPLES[idx].image}
                    alt={EXAMPLES[idx].label}
                    loading="lazy"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <span
                    style={{
                      position: 'absolute', left: 0, right: 0, bottom: 0,
                      padding: '28px 14px 10px',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.55))',
                      color: 'rgba(255,255,255,0.92)',
                      fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}
                  >
                    {EXAMPLES[idx].label}
                  </span>
                </div>
              </CardShell>
            </FadeUp>
          ))}
        </div>
      </section>
    );
  }

  /* Pinned scrollytelling variant: the section holds while each shape
     hands over to its example, then the page continues. */
  return (
    <div ref={wrapRef} style={{ position: 'relative', height: '340vh' }}>
      <section
        id="offering"
        className="cognitra-section-3"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: '#C5C5C5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '84px 32px 28px 32px',
          boxSizing: 'border-box',
        }}
      >
        <SectionHead compact />
        <div
          className="cognitra-cards-grid"
          style={{ position: 'relative', zIndex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, gridAutoRows: '1fr' }}
        >
          {SERVICE_CARDS.map((card, idx) => (
            <CardShell key={card.title} title={card.title} text={card.text}>
              <SwapMedia video={card.video} idx={idx} progress={scrollYProgress} />
            </CardShell>
          ))}
        </div>
        <div style={{ position: 'relative', zIndex: 3, display: 'flex', gap: 8, justifyContent: 'center', marginTop: 22 }}>
          {SERVICE_CARDS.map((_, idx) => (
            <PhaseDot key={idx} idx={idx} progress={scrollYProgress} />
          ))}
        </div>
      </section>
    </div>
  );
}
