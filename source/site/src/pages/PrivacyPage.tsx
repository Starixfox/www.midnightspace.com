import { LegalSections } from '../components/LegalSections';
import { InnerPageLayout } from '../components/InnerPageLayout';

export function PrivacyPage() {
  return (
    <>
      <InnerPageLayout
        counter="LEGAL"
        title="Policies"
        subtitle="Privacy en voorwaarden — kort en eerlijk, zoals de rest van de site."
      >
        <></>
      </InnerPageLayout>
      <LegalSections />
    </>
  );
}
