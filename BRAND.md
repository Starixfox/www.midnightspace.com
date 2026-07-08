# Midnight Space — Brand brief

A one-page reference for voice, visual identity, and how to make calls when
something isn't already in the design system.

## Who we're for

Flemish SME owners — garage owners, plumbers, hairdressers, contractors in
Oost-Vlaanderen — deciding whether to trust a one-person studio with their
website. They are busy, practical, and allergic to puffery. Most of them have
websites that are out of date. Site copy is Dutch, je-form, honest editorial.

## Voice — five rules

1. **Honest editorial.** Say what is true. If a module is planned, call it
   planned. If coverage stops at the GCC, say so. Don't sand off the edges.
2. **No marketing puffery.** No "revolutionary," "AI-powered," "next-gen,"
   "synergy," "leverage," "empower." If you'd say it on a slide for a fund's
   internal investment committee, it belongs. If you'd say it in a pitch deck,
   probably not.
3. **Specific beats abstract.** "881 programs in Saudi Arabia" beats "extensive
   coverage." "Within two working days" beats "fast response." Numbers,
   counts, and timeframes earn trust the way adjectives never will.
4. **Restraint is the brand.** A site that's calm signals an operator that's
   thinking clearly. Crowded layouts and emphatic language signal the
   opposite.
5. **The italic is for human voice.** Fraunces italic (`SOFT 100`) carries
   the warm, almost handwritten part of each headline. Use it on the word or
   phrase that matters most. Never italicise just because there's a chance to.

## What we won't write

- "AI-powered" / "machine-learning-driven" — we're not selling AI
- "Revolutionary," "disruptive," "next-gen," "world-class," "best-in-class"
- "Solutions," "synergies," "leverage" as verbs
- "🚀" or any rocket emoji, ever. No emojis, full stop.
- "Empower," "unlock," "ignite" — particularly with "your team" attached
- "We believe…" — say what's true, not what we feel about it

## Tone by audience

| Audience          | Tone               | Example                                         |
|-------------------|--------------------|-------------------------------------------------|
| Fund principal    | Concise, factual   | "881 programs. Verified at source. Refreshed weekly." |
| Agency strategist | Respectful, calm   | "We curate, you decide. Coverage is editorial, not commercial." |
| Operator          | Practical, warm    | "If you've rebuilt this spreadsheet before — we built it once." |
| Press / outsiders | Plain English      | "A small team mapping public space-funding programs across the GCC." |

## Visual identity

- **Typography.** Fraunces serif (variable `SOFT` axis used as a meaningful
  axis, not for decoration). Inter sans (300/400/500/600/700). JetBrains Mono
  for codes, labels, eyebrows, metadata.
- **Color.** Three roles: ink (white on dark), space (the deep blue-black
  ground `--c-space-700`/`--c-space-900`), and cyan (the accent, `--c-cyan`).
  Use cyan sparingly — it's how we mark "live" things and only "live" things.
  The italic accent on serif headlines uses `--c-cyan` directly (one of the
  few non-live uses); plain copy stays in white at varying alpha.
- **Surfaces.** Dark-cosmic-editorial — the page ground is the deep space
  gradient. Section surfaces vary only in depth: `bg-warm` is a heavier
  warm-dark, `bg-surface` a lifted dark, `bg-dark` the deepest. Light paper
  is the exception, not the rule — pulled only when `.bg-paper` is set on a
  section that needs to read as a "moment of warmth" (e.g. an editorial
  pullquote, a contributor note). Most pages should have at most one paper
  moment, or none.
- **Density.** Air around content is part of the brand. Never compress the
  layout to fit. If something doesn't fit, cut it.

## When in doubt

Cut the adjective. Add a number.

## How "live" works

The word "live," the cyan pulse, and the count-up animations are reserved for
data that is actually being pulled from the platform's database in real time.
Anything that isn't live (planned modules, future regions) gets a different
treatment — italicised "planned," dimmer status pill, no cyan.

This rule is load-bearing. If we cheapen "live" by attaching it to anything
that isn't, the trust in the rest of the site evaporates.
