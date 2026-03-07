import Header from "@/components/_common/header";
import PageMenu from "@/components/overview/page-menu";
import CtaSection from "@/components/_common/cta-section";
import LeadCaptureHeader from "@/components/how-it-works/lead-capture-header";
import LeadCaptureSection from "@/components/how-it-works/lead-capture-section";
import MultiChannelSection from "@/components/how-it-works/multi-channel-section";
import StructuredConversationSection from "@/components/how-it-works/structured-conversation-section";
import IntelligentQualificationSection from "@/components/how-it-works/intelligent-qualification-section";
import PersistentFollowUpSection from "@/components/how-it-works/persistent-follow-up-section";
import CrmSynchronizationSection from "@/components/how-it-works/crm-synchronization-section";
import Separator from "@/components/_ui/separator";
import NoLeadsSection from "@/components/how-it-works/no-leads-section";
import BottomSpace from "@/components/_common/bottom-space";

export default function Overview() {
  return (
    <>
      <main className="max-w-full overflow-x-clip">
        <Header />
        <LeadCaptureHeader />
        <Separator />
        <LeadCaptureSection />
        <Separator />
        <MultiChannelSection />
        <Separator />
        <StructuredConversationSection />
        <Separator />
        <IntelligentQualificationSection />
        <Separator />
        <PersistentFollowUpSection />
        <Separator />
        <NoLeadsSection />
        <Separator />
        <CrmSynchronizationSection />
        <Separator />
        <BottomSpace />
      </main>
    </>
  );
}
