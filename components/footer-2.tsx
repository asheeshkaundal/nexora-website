"use client";

import { Logo } from "./logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

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

export function Footer2() {
  return (
    <footer
      className="text-[#9CA3AF] border-t-4"
      style={{ backgroundColor: "#2B3544", borderColor: "#6D28D9" }}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="mb-4">
              {/* Increase logo size specifically for footer */}
              <Logo className="h-28 md:h-40" />
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Your gateway to innovative technology solutions and digital
              transformation. Where excellence meets innovation.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://www.facebook.com/profile.php?id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3B4456] hover:bg-[#6D28D9] flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/nx.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3B4456] hover:bg-[#6D28D9] flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/nexora-global-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3B4456] hover:bg-[#6D28D9] flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://x.com/NXGLOBALpvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3B4456] hover:bg-[#6D28D9] flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold text-white border-b-2 pb-2 inline-block"
              style={{ borderColor: "#6D28D9" }}
            >
              Products
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  AI & Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  Security Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold text-white border-b-2 pb-2 inline-block"
              style={{ borderColor: "#6D28D9" }}
            >
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  Training & Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                >
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold text-white border-b-2 pb-2 inline-block"
              style={{ borderColor: "#6D28D9" }}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li>
                <span className="block">
                  <span className="font-medium text-white">Email:</span>{" "}
                  <Link
                    href="mailto:asheesh.kaundal@nxgobal.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    sales@nxglobal.in
                  </Link>
                </span>
              </li>
              <li>
                <span className="block">
                  <span className="font-medium text-white">Phone:</span>{" "}
                  <Link
                    href="tel:+918888813841"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +91 9717127948
                  </Link>
                </span>
              </li>
              <li className="pt-2">
                <span className="font-medium text-white block mb-2">
                  Sales & Communication:
                </span>
                <span className="block">FF-69 & 78, Nexora Global Private Limited, Ss Omnia</span>
                <span className="block">
                   Sector 86, Gurugram, Haryana 122001
                </span>
              </li>
              <li className="pt-2">
                <span className="font-medium text-white block mb-2">
                  Head Office:
                </span>
                <span className="block">Nexora Global Headquarters</span>
                <span className="block">
                 FF-69 & 78, Nexora Global Private Limited, Ss Omnia, Sector 86, Gurugram, Haryana 122001
                </span>
              </li>
              <li className="pt-3 space-y-2">
                <div>
                  <Link
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[#374151]" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF]">
          <p>© 2025 Nexora Global. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span style={{ color: "#A78BFA" }}>✦</span> Premium Quality
              Assured
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "#A78BFA" }}>✦</span> Worldwide Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
