export const BACKGROUND_VIDEO = './media/hero.mp4';

export const SERVICE_CARDS = [
  {
    video: './media/card1.mp4',
    title: 'Herbouw van verouderde sites',
    text: 'Je huidige website stamt uit een ander tijdperk? Ik teken hem opnieuw vanaf nul — sneller, mobielvriendelijk en klaar voor vandaag.',
  },
  {
    video: './media/card2.mp4',
    title: 'Nieuwe websites op maat',
    text: 'Geen sjablonen, geen thema’s. Elk ontwerp begint op een leeg blad en wordt getekend voor jouw zaak, jouw klanten en jouw verhaal.',
  },
  {
    video: './media/card3.mp4',
    title: 'Eerst zien, dan beslissen',
    text: 'Ik maak eerst een gratis proefontwerp van je homepage en mail het je. Je betaalt pas als je de volledige website wil.',
  },
] as const;

export const CASE_STUDIES = [
  {
    client: 'Autoschadebedrijf De Beule — Zele',
    outcome:
      'Conceptstudie: website uit 2012 herdacht als donker industrieel ontwerp met hun eigen slogan als kop.',
    tag: 'Conceptstudie',
    image: './media/debeule-hero.webp',
  },
  {
    client: 'Schrijnwerkerij Michiels — Zele',
    outcome:
      'Conceptstudie: drie generaties vakmanschap eindelijk zichtbaar, met hun eigen realisaties als beeldmateriaal.',
    tag: 'Conceptstudie',
    image: './media/michiels-hero.webp',
  },
  {
    client: "Jimmy's Classic Cars — Buggenhout",
    outcome:
      'Conceptstudie: Mustang-specialist met eigen atelierfotografie als openingsbeeld. Passie voor Mustang, sinds 2011.',
    tag: 'Conceptstudie',
    image: './media/jimmys-hero.webp',
  },
] as const;

export const RATE_TIERS = [
  {
    name: 'Proefontwerp',
    price: 'Gratis',
    period: 'vooraf, zonder afspraak',
    features: ['Homepage-concept voor je zaak', 'Gemaild als beelden', 'Geen verplichtingen'],
  },
  {
    name: 'Volledige website',
    price: 'Op maat',
    period: 'pas na je akkoord',
    features: ['Vanaf nul getekend', 'Mobiel eerst en snel', 'Jouw teksten en foto’s'],
    highlight: true,
  },
  {
    name: 'Aanpassingen',
    price: 'In overleg',
    period: 'na oplevering',
    features: ['Kleine wijzigingen', 'Nieuwe pagina’s', 'Rechtstreeks contact'],
  },
] as const;

export const CREW = [
  {
    name: 'Jordan Guzman',
    role: 'Ontwerper & bouwer',
    focus: 'De persoon die je mailt, is de persoon die je site ontwerpt én bouwt. Niemand ertussen.',
  },
] as const;
