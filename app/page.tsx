import { LpNavbar1 } from "@/components/lp-navbar-1";
import { HeroSection7 } from "@/components/hero-section-7";
import { FeatureSection9 } from "@/components/feature-section-9";
import { FeatureSection3 } from "@/components/feature-section-3";
import { TestimonialsSection5 } from "@/components/testimonials-section-5";
import { PricingSection4 } from "@/components/pricing-section-4";
import { FaqSection1 } from "@/components/faq-section-1";
import { Footer2 } from "@/components/footer-2";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

// Custom X (formerly Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Home() {
  return (
    <main>
      {/* Navbar header bar - lighter shade */}
      <div
        className="h-10 px-6 flex items-center justify-center"
        style={{ backgroundColor: "#3A3D4A" }}
      >
        <div className="container mx-auto flex justify-end items-center h-full">
          <div className="flex space-x-3 items-center mt-0">
            <Link
              href="https://www.facebook.com/profile.php?id"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/10 hover:bg-[#6D28D9] border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer rounded"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 text-[#F9FAFB]" />
            </Link>
            <Link
              href="https://www.instagram.com/nx.global/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/10 hover:bg-[#6D28D9] border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer rounded"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#F9FAFB]" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/nexora-global-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/10 hover:bg-[#6D28D9] border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer rounded"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#F9FAFB]" />
            </Link>
            <Link
              href="https://x.com/NXGLOBALpvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/10 hover:bg-[#6D28D9] border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer rounded"
              aria-label="X (formerly Twitter)"
            >
              <XIcon className="w-3.5 h-3.5 text-[#F9FAFB]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-3 mb-2">
        <LpNavbar1 />
      </div>
      <HeroSection7 />
      <ServicesSection />
      <WhyChooseSection />
      <FeatureSection3 />
      <TestimonialsSection5 />
      <PricingSection4 />
      <FaqSection1 />
      <Footer2 />
    </main>
  );
}
