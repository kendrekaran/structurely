import Header from "@/components/_common/header";
import PageMenu from "@/components/overview/page-menu";
import CtaSection from "@/components/_common/cta-section";
import LeadCaptureSection from "@/components/how-it-works/lead-capture-section";
import MultiChannelSection from "@/components/how-it-works/multi-channel-section";
import StructuredConversationSection from "@/components/how-it-works/structured-conversation-section";
import IntelligentQualificationSection from "@/components/how-it-works/intelligent-qualification-section";
import PersistentFollowUpSection from "@/components/how-it-works/persistent-follow-up-section";
import CrmSynchronizationSection from "@/components/how-it-works/crm-synchronization-section";

export default function Overview() {
  return (
    <>
      <main className="max-h-screen max-w-full overflow-x-clip">
        <Header />
        <LeadCaptureSection />
        <MultiChannelSection />
        <StructuredConversationSection />
        <IntelligentQualificationSection />
        <PersistentFollowUpSection />
        <CrmSynchronizationSection />
      </main>
    </>
  );
}
