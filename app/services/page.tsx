import { LpNavbar1 } from "@/components/lp-navbar-1";
import { ServicesDetailSection } from "@/components/services-detail-section";
import { Footer2 } from "@/components/footer-2";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <LpNavbar1 />
      <ServicesDetailSection />
      <Footer2 />
    </main>
  );
}
