import { LpNavbar1 } from "@/components/lp-navbar-1";
import { HeroSection7 } from "@/components/hero-section-7";
import { FeatureSection9 } from "@/components/feature-section-9";
import { FeatureSection3 } from "@/components/feature-section-3";
import { TestimonialsSection5 } from "@/components/testimonials-section-5";
import { FaqSection1 } from "@/components/faq-section-1";
import { Footer2 } from "@/components/footer-2";
import ScrollToTop from "@/components/ui/scroll-to-top";
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
      <FaqSection1 />
      <Footer2 />
      {/* Scroll-to-top floating button (teal) */}
      <ScrollToTop />
      {/* WhatsApp floating button (bottom-right) */}
      <a
        href="https://wa.me/919717127948"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed right-6 bottom-20 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12 .5C6.21.5 1.47 4.94.57 10.36c-.37 2.01.03 3.9 1.12 5.6L.5 23.5l7.78-2.04c1.6.87 3.43 1.33 5.22 1.33 5.79 0 10.53-4.44 11.43-9.86.5-2.77.02-5.4-1.53-7.55zM12 21.25c-1.6 0-3.17-.4-4.57-1.16l-.33-.18-4.62 1.21 1.24-4.25-.21-.35A8.47 8.47 0 0 1 3 10.86C3.9 6.44 8.64 2.99 14.43 2.99c4.02 0 7.53 2.43 8.58 5.94.86 3.01-.16 6.27-2.58 8.21-1.66 1.27-3.72 1.9-5.85 1.9z" />
          <path d="M17.1 14.13c-.29-.15-1.71-.85-1.97-.95-.26-.1-.45-.15-.64.15-.19.29-.74.95-.91 1.14-.17.19-.35.21-.65.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48-.17-.01-.37-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1.01-1 2.47 0 1.45 1.02 2.85 1.16 3.05.15.19 2.01 3.05 4.87 4.28 2.06.89 2.95.95 3.19.9.24-.05 1.56-.64 1.78-1.26.22-.62.22-1.15.15-1.26-.07-.11-.26-.17-.55-.31z" />
        </svg>
      </a>
    </main>
  );
}
