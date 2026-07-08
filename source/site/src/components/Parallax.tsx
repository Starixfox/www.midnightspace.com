import { useRef, type CSSProperties, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/* Whisper-level scroll parallax: the wrapped element counter-drifts by
   ±`amount` px while it crosses the viewport, giving sections depth
   without touching layout (transform-only, GPU-composited). Elements at
   different amounts move at visibly different speeds — that difference
   IS the effect. Disabled for prefers-reduced-motion. */

type ParallaxProps = {
  children: ReactNode;
  /** Total drift in px across the element's viewport journey.
      Positive = drifts against the scroll more (feels closer);
      negative = drifts with the scroll (feels further away). */
  amount?: number;
  style?: CSSProperties;
  className?: string;
};

export function Parallax({ children, amount = 24, style, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  if (reduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </motion.div>
  );
}
