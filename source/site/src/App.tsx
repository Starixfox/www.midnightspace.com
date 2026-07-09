import { useEffect } from 'react';
import { PresetHashRouter } from '../../_shared/components/PresetHashRouter';
import { applyPresetHashOnLoad } from '../../_shared/preset-site-routing';
import { CognitraShell } from './components/CognitraShell';
import { LegalSections } from './components/LegalSections';
import { LanguageProvider, useCopy } from './i18n';
import { CasePage } from './pages/CasePage';
import { ConnectPage } from './pages/ConnectPage';
import { CrewPage } from './pages/CrewPage';
import { HomePage } from './pages/HomePage';
import { OfferingPage } from './pages/OfferingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { RatesPage } from './pages/RatesPage';

function AppInner() {
  const copy = useCopy();

  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <CognitraShell>
      <PresetHashRouter
        routes={{
          '': <HomePage />,
          offering: <OfferingPage />,
          case: <CasePage />,
          rates: <RatesPage />,
          crew: <CrewPage />,
          connect: <ConnectPage />,
          privacy: <PrivacyPage />,
        }}
      />
      <LegalSections />
      <footer
        style={{
          position: 'relative',
          zIndex: 3,
          background: '#1a1a1a',
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center',
          padding: '24px 32px',
          fontSize: 11,
          letterSpacing: '0.06em',
        }}
      >
        {copy.footer}
      </footer>
    </CognitraShell>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
