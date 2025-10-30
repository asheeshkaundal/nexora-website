"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function HeroSection7() {
  return (
    // Video background with overlay
    <section
      className="relative min-h-screen flex items-center py-16 lg:py-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/globe-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="container px-6 mx-auto relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Center content */}
          <div className="max-w-4xl">
            <h1
              id="hero-heading"
              className="text-4xl lg:text-6xl font-bold text-balance"
              style={{
                color: "#FFFFFF",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              }}
            >
              Transforming Businesses Through Technology
            </h1>
            <p
              className="mt-5 text-base lg:text-lg max-w-2xl mx-auto"
              style={{
                color: "#F3F4F6",
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              Innovative IT consulting and digital solutions that empower
              businesses to achieve operational excellence through ERP,
              digitalization, workflow management, and secure document systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              {/* Primary: Purple gradient */}
              <Button className="bg-gradient-to-r from-[#6D28D9] to-[#A78BFA] text-white hover:from-[#5B21B6] hover:to-[#9333EA] rounded-lg shadow-lg">
                Get Started
              </Button>
              {/* Secondary: white outline */}
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-transparent backdrop-blur-sm"
              >
                Learn More
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
