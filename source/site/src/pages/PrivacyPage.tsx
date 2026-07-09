import { LegalSections } from '../components/LegalSections';
import { InnerPageLayout } from '../components/InnerPageLayout';
import { useCopy } from '../i18n';

export function PrivacyPage() {
  const copy = useCopy();
  return (
    <>
      <InnerPageLayout
        counter="LEGAL"
        title={copy.policies.title}
        subtitle={copy.policies.subtitle}
      >
        <></>
      </InnerPageLayout>
      <LegalSections />
    </>
  );
}
