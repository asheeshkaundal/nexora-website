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
      className="bg-[#1e293b] text-white border-t-4 border-primary"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your gateway to innovative technology solutions and digital
              transformation. Where excellence meets innovation.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary hover:bg-primary/80 border border-primary flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/nx.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary hover:bg-primary/80 border border-primary flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/nexora-global-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary hover:bg-primary/80 border border-primary flex items-center justify-center transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              
              <Link
                href="https://x.com/NXGLOBALpvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary hover:bg-primary/80 border border-primary flex items-center justify-center transition-colors cursor-pointer"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-primary pb-2 inline-block">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  AI & Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Security Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-primary pb-2 inline-block">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Training & Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-primary pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="font-medium text-white">Email:</span>{" "}
                <Link
                  href="mailto:asheesh.kaundal@nxgobal.com"
                  className="hover:text-primary transition-colors"
                >
                  asheesh.kaundal@nxgobal.com
                </Link>
              </li>
              <li>
                <span className="font-medium text-white">Phone:</span>{" "}
                <Link
                  href="tel:+91 8888813841"
                  className="hover:text-primary transition-colors"
                >
                  +91 8888813841
                </Link>
              </li>
              <li className="pt-2">
                <span className="font-medium text-white block mb-1">
                  Sales & Communication:
                </span>
                <span className="block">FF-69, First Floor, SS Omnia</span>
                <span className="block">Sector-86, Gurugram, Haryana - 122004</span>
              </li>
              <li className="pt-2">
                <span className="font-medium text-white block mb-1">
                  Head Office:
                </span>
                <span className="block">Nexora Global Headquarters</span>
                <span className="block">FF-69, First Floor, SS Omnia,Sector-86, Gurugram, Haryana - 122004</span>
              </li>
              <li className="pt-2">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Nexora Global. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="text-primary">✦</span> Premium Quality Assured
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✦</span> Worldwide Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
