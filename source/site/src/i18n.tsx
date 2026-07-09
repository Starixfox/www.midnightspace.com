import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

/* Lightweight two-language setup: a context holds the active language
   (persisted in localStorage), and COPY holds every visible string of
   the site per language. Components read their section via useCopy(). */

export type Lang = 'nl' | 'en';

const STORAGE_KEY = 'ms-lang';

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'nl',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'nl') return saved;
    } catch {
      /* ignore */
    }
    return 'nl';
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    // Section heights shift with the new copy; a resize event makes the
    // drifting 3D object rebuild its scroll waypoints.
    window.dispatchEvent(new Event('resize'));
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

export function useCopy() {
  return COPY[useContext(LanguageContext).lang];
}

type Tier = { name: string; price: string; period: string; features: string[]; highlight?: boolean };

type Copy = {
  nav: { center: { label: string; section: string }[]; right: { label: string; section: string }[] };
  hero: { title: string; intro: string; ctaPrimary: string; ctaSecondary: string; bottom: string };
  statement: { title: string; sub: string };
  services: {
    heading: string;
    sub: string;
    cards: { title: string; text: string }[];
    exampleLabels: string[];
    pageTitle: string;
    pageSubtitle: string;
  };
  cases: {
    title: string;
    subtitle: string;
    tag: string;
    items: { client: string; outcome: string }[];
  };
  rates: { title: string; subtitle: string; tiers: Tier[]; cta: string };
  crew: { title: string; subtitle: string; members: { name: string; role: string; focus: string }[] };
  connect: {
    title: string;
    subtitle: string;
    formCompany: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
  };
  legal: { privacyTitle: string; privacyText: string; termsTitle: string; termsText: string };
  policies: { title: string; subtitle: string };
  footer: string;
};

export const COPY: Record<Lang, Copy> = {
  nl: {
    nav: {
      center: [
        { label: 'START', section: 'main' },
        { label: 'DIENSTEN', section: 'offering' },
        { label: 'WERK', section: 'case' },
        { label: 'PRIJZEN', section: 'rates' },
      ],
      right: [
        { label: 'WIE', section: 'crew' },
        { label: 'CONTACT', section: 'connect' },
      ],
    },
    hero: {
      title: 'JE ZAAK GROEIDE.\nJE WEBSITE BLEEF STAAN.',
      intro:
        'Midnight Space herbouwt verouderde websites voor zaken in Oost-Vlaanderen — vanaf nul getekend, geen sjablonen.',
      ctaPrimary: 'VRAAG JE PROEFONTWERP',
      ctaSecondary: 'BEKIJK HET WERK',
      bottom:
        'Eerst zien, dan beslissen: je krijgt een gratis proefontwerp van je homepage, en je beslist pas daarna. Geen telefoontjes, geen verplichtingen — één e-mail.',
    },
    statement: {
      title: 'EERST ZIEN. DAN BESLISSEN. ZO SIMPEL IS HET.',
      sub: 'Je krijgt eerst een gratis proefontwerp van je homepage. Pas als het je overtuigt, praten we verder.',
    },
    services: {
      heading: 'DIT IS WAT IK VOOR JE MAAK',
      sub: 'Websites voor zelfstandigen en lokale bedrijven — van eerste schets tot lancering, door één persoon. Scroll verder en zie de voorbeelden verschijnen.',
      cards: [
        {
          title: 'Herbouw van verouderde sites',
          text: 'Je huidige website stamt uit een ander tijdperk? Ik teken hem opnieuw vanaf nul — sneller, mobielvriendelijk en klaar voor vandaag.',
        },
        {
          title: 'Nieuwe websites op maat',
          text: 'Geen sjablonen, geen thema’s. Elk ontwerp begint op een leeg blad en wordt getekend voor jouw zaak, jouw klanten en jouw verhaal.',
        },
        {
          title: 'Eerst zien, dan beslissen',
          text: 'Ik maak eerst een gratis proefontwerp van je homepage en mail het je. Je betaalt pas als je de volledige website wil.',
        },
      ],
      exampleLabels: [
        'Conceptstudie — Autoschadebedrijf De Beule, Zele',
        'Conceptstudie — Schrijnwerkerij Michiels, Zele',
        "Conceptstudie — Jimmy's Classic Cars, Buggenhout",
      ],
      pageTitle: 'Diensten',
      pageSubtitle:
        'Websites voor zelfstandigen en lokale bedrijven — van eerste schets tot lancering, door één persoon.',
    },
    cases: {
      title: 'Conceptstudies, eerst gemaakt',
      subtitle:
        'Elk ontwerp hieronder werd eerst gemaakt en dan pas voorgesteld — zo werk ik. Eigen beeldmateriaal van de zaak, eerlijk gelabeld.',
      tag: 'Conceptstudie',
      items: [
        {
          client: 'Autoschadebedrijf De Beule — Zele',
          outcome:
            'Conceptstudie: website uit 2012 herdacht als donker industrieel ontwerp met hun eigen slogan als kop.',
        },
        {
          client: 'Schrijnwerkerij Michiels — Zele',
          outcome:
            'Conceptstudie: drie generaties vakmanschap eindelijk zichtbaar, met hun eigen realisaties als beeldmateriaal.',
        },
        {
          client: "Jimmy's Classic Cars — Buggenhout",
          outcome:
            'Conceptstudie: Mustang-specialist met eigen atelierfotografie als openingsbeeld. Passie voor Mustang, sinds 2011.',
        },
      ],
    },
    rates: {
      title: 'Hoe het werkt',
      subtitle: 'Geen offerte vol beloftes: het eerste ontwerp bestaat al voor jij iets beslist.',
      tiers: [
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
      ],
      cta: 'VRAAG JE PROEFONTWERP',
    },
    crew: {
      title: 'Wie er achter zit',
      subtitle:
        'Een kleine webstudio uit Oost-Vlaanderen. Je vindt hier geen klantenlogo’s of sterren — de studio is jong, en ik verzin er liever geen.',
      members: [
        {
          name: 'Jordan Guzman',
          role: 'Ontwerper & bouwer',
          focus: 'De persoon die je mailt, is de persoon die je site ontwerpt én bouwt. Niemand ertussen.',
        },
      ],
    },
    connect: {
      title: 'Connect',
      subtitle: 'Vertel over je zaak — alles staat zwart op wit, en je beslist in je eigen tempo.',
      formCompany: 'Bedrijf of zaak',
      formEmail: 'E-mailadres',
      formMessage: 'Vertel kort over je zaak of je huidige website',
      formSend: 'VERSTUUR BERICHT',
    },
    legal: {
      privacyTitle: 'Privacybeleid',
      privacyText:
        'Midnight Space bewaart alleen wat je zelf mailt: je bericht en je contactgegevens. Niets wordt gedeeld of doorverkocht. Vragen? Mail j.guzman@midnightspaceconsultancy.com.',
      termsTitle: 'Voorwaarden',
      termsText:
        'Een proefontwerp is gratis en vrijblijvend. Je betaalt pas na akkoord over een volledige website. Alles verloopt per e-mail — zwart op wit, in je eigen tempo.',
    },
    policies: {
      title: 'Beleid',
      subtitle: 'Privacy en voorwaarden — kort en eerlijk, zoals de rest van de site.',
    },
    footer: '© 2026 MIDNIGHT SPACE · OOST-VLAANDEREN',
  },
  en: {
    nav: {
      center: [
        { label: 'START', section: 'main' },
        { label: 'SERVICES', section: 'offering' },
        { label: 'WORK', section: 'case' },
        { label: 'PRICING', section: 'rates' },
      ],
      right: [
        { label: 'WHO', section: 'crew' },
        { label: 'CONTACT', section: 'connect' },
      ],
    },
    hero: {
      title: 'YOUR BUSINESS GREW.\nYOUR WEBSITE STOOD STILL.',
      intro:
        'Midnight Space rebuilds outdated websites for businesses in East Flanders, Belgium — drawn from scratch, no templates.',
      ctaPrimary: 'REQUEST YOUR FREE CONCEPT',
      ctaSecondary: 'SEE THE WORK',
      bottom:
        'See first, then decide: you get a free concept design of your homepage, and only then do you decide. No phone calls, no obligations — one email.',
    },
    statement: {
      title: 'SEE IT FIRST. THEN DECIDE. IT’S THAT SIMPLE.',
      sub: 'You get a free concept design of your homepage first. Only if it convinces you do we talk further.',
    },
    services: {
      heading: 'THIS IS WHAT I MAKE FOR YOU',
      sub: 'Websites for independents and local businesses — from first sketch to launch, by one person. Keep scrolling and watch the examples appear.',
      cards: [
        {
          title: 'Rebuilding outdated sites',
          text: 'Your current website is from another era? I redraw it from scratch — faster, mobile-friendly and ready for today.',
        },
        {
          title: 'New custom websites',
          text: 'No templates, no themes. Every design starts on a blank page and is drawn for your business, your customers and your story.',
        },
        {
          title: 'See first, then decide',
          text: 'I first make a free concept design of your homepage and email it to you. You only pay if you want the full website.',
        },
      ],
      exampleLabels: [
        'Concept study — Autoschadebedrijf De Beule, Zele',
        'Concept study — Schrijnwerkerij Michiels, Zele',
        "Concept study — Jimmy's Classic Cars, Buggenhout",
      ],
      pageTitle: 'Services',
      pageSubtitle:
        'Websites for independents and local businesses — from first sketch to launch, by one person.',
    },
    cases: {
      title: 'Concept studies, made first',
      subtitle:
        'Every design below was made first and proposed afterwards — that’s how I work. The business’s own imagery, honestly labelled.',
      tag: 'Concept study',
      items: [
        {
          client: 'Autoschadebedrijf De Beule — Zele',
          outcome:
            'Concept study: a 2012 website rethought as a dark industrial design with their own slogan as the headline.',
        },
        {
          client: 'Schrijnwerkerij Michiels — Zele',
          outcome:
            'Concept study: three generations of craftsmanship finally visible, with their own work as the imagery.',
        },
        {
          client: "Jimmy's Classic Cars — Buggenhout",
          outcome:
            'Concept study: Mustang specialist with their own workshop photography as the opening image. Passion for Mustang, since 2011.',
        },
      ],
    },
    rates: {
      title: 'How it works',
      subtitle: 'No quote full of promises: the first design already exists before you decide anything.',
      tiers: [
        {
          name: 'Concept design',
          price: 'Free',
          period: 'upfront, no appointment',
          features: ['A homepage concept for your business', 'Emailed as images', 'No obligations'],
        },
        {
          name: 'Full website',
          price: 'Custom',
          period: 'only after your approval',
          features: ['Drawn from scratch', 'Mobile-first and fast', 'Your texts and photos'],
          highlight: true,
        },
        {
          name: 'Changes',
          price: 'By agreement',
          period: 'after delivery',
          features: ['Small changes', 'New pages', 'Direct contact'],
        },
      ],
      cta: 'REQUEST YOUR FREE CONCEPT',
    },
    crew: {
      title: 'Who’s behind it',
      subtitle:
        'A small web studio from East Flanders, Belgium. You won’t find client logos or star ratings here — the studio is young, and I’d rather not make them up.',
      members: [
        {
          name: 'Jordan Guzman',
          role: 'Designer & builder',
          focus: 'The person you email is the person who designs and builds your site. No one in between.',
        },
      ],
    },
    connect: {
      title: 'Connect',
      subtitle: 'Tell me about your business — everything in writing, and you decide at your own pace.',
      formCompany: 'Company',
      formEmail: 'Email address',
      formMessage: 'Tell me briefly about your business or current website',
      formSend: 'SEND MESSAGE',
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      privacyText:
        'Midnight Space only keeps what you email yourself: your message and your contact details. Nothing is shared or sold. Questions? Email j.guzman@midnightspaceconsultancy.com.',
      termsTitle: 'Terms of Service',
      termsText:
        'A concept design is free and without obligation. You only pay after agreeing on a full website. Everything happens by email — in writing, at your own pace.',
    },
    policies: {
      title: 'Policies',
      subtitle: 'Privacy and terms — short and honest, like the rest of the site.',
    },
    footer: '© 2026 MIDNIGHT SPACE · EAST FLANDERS, BELGIUM',
  },
};
