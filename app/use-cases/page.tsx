import Header from "@/components/_common/header";
import PageMenu from "@/components/overview/page-menu";
import CtaSection from "@/components/_common/cta-section";

export default function Overview() {
  return (
    <>
      <main className="max-h-screen max-w-full overflow-x-clip">
        <Header />
        <PageMenu />
        
      </main>
    </>
  );
}
