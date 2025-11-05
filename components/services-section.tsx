"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Briefcase,
  Cog,
  RefreshCw,
  FileLock,
  Sparkles,
  Building2,
  GitBranch,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Sparkles,
    title: "Nexora AI",
    description: "Intelligent automation & AI-driven business solutions",
    gradient: "from-pink-500 to-rose-600",
    bgAccent: "bg-pink-50",
  },
  {
    icon: Briefcase,
    title: "Strategic IT Consulting",
    description: "Guidance for seamless tech adoption & digital growth",
    gradient: "from-blue-500 to-cyan-600",
    bgAccent: "bg-blue-50",
  },
  {
    icon: Cog,
    title: "Enterprise Resource Planning",
    description: "Integrated systems for streamlined operations & insights",
    gradient: "from-purple-500 to-indigo-600",
    bgAccent: "bg-purple-50",
  },
  {
    icon: RefreshCw,
    title: "Corporate Digitalization",
    description: "Transform processes into intelligent workflows",
    gradient: "from-emerald-500 to-teal-600",
    bgAccent: "bg-emerald-50",
  },
  {
    icon: FileLock,
    title: "Document Management",
    description: "Secure document handling with compliance features",
    gradient: "from-orange-500 to-red-600",
    bgAccent: "bg-orange-50",
  },
  {
    icon: Building2,
    title: "Corporate Digitization",
    description: "Digital transformation for modern enterprises",
    gradient: "from-indigo-500 to-blue-600",
    bgAccent: "bg-indigo-50",
  },
  {
    icon: GitBranch,
    title: "Workflow Management System",
    description: "Streamlined workflows for enhanced productivity",
    gradient: "from-teal-500 to-green-600",
    bgAccent: "bg-teal-50",
  },
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const maxIndex = Math.max(0, services.length - cardsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      style={{
        background: "#F3F4F6",
      }}
      aria-labelledby="services-title"
    >
      {/* Decorative background elements with purple glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#6D28D9] to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-tl from-[#A78BFA] to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-[#6D28D9] to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)",
            }}
          >
            <Cog className="w-8 h-8 text-white animate-spin-slow" />
          </div>
          <h2
            id="services-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E1E1E] text-balance mb-6 tracking-tight"
          >
            ENABLING DIGITAL FUTURES
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#A78BFA]">
              WITH NEXORA
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe the future belongs to businesses that embrace technology
            and innovation
          </p>
        </header>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            // hide arrows on small screens
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gradient-to-r hover:from-[#6D28D9] hover:to-[#A78BFA] hover:text-white hover:scale-110"
            }`}
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            // hide arrows on small screens
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentIndex === maxIndex
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gradient-to-r hover:from-[#6D28D9] hover:to-[#A78BFA] hover:text-white hover:scale-110"
            }`}
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          {/* Desktop / tablet slider (hidden on small screens) */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView + 1.5)
                }%)`,
              }}
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                const isITConsulting =
                  service.title === "Strategic IT Consulting";
                const isERP = service.title === "Enterprise Resource Planning";
                const isCorporateDigital =
                  service.title === "Corporate Digitalization";
                const isCorporateDigitization =
                  service.title === "Corporate Digitization";
                const isDMS = service.title === "Document Management";
                const isWorkflow =
                  service.title === "Workflow Management System";
                const isNexoraAI = service.title === "Nexora AI";
                return (
                  <Card
                    key={i}
                    className={`group w-[calc(25%-1.125rem)] min-w-[calc(25%-1.125rem)] max-w-[calc(25%-1.125rem)] h-[420px] border-0 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex-shrink-0 ${
                      isITConsulting ||
                      isERP ||
                      isCorporateDigital ||
                      isCorporateDigitization ||
                      isDMS ||
                      isWorkflow ||
                      isNexoraAI
                        ? "text-white"
                        : ""
                    }`}
                    style={{
                      backgroundColor:
                        isITConsulting ||
                        isERP ||
                        isCorporateDigital ||
                        isCorporateDigitization ||
                        isDMS ||
                        isWorkflow ||
                        isNexoraAI
                          ? "transparent"
                          : "#ffffff",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      backgroundImage: isITConsulting
                        ? "url('/service.png')"
                        : isERP
                        ? "url('/erp-image.png')"
                        : isCorporateDigital
                        ? "url('/Data-scanning.jpg')"
                        : isCorporateDigitization
                        ? "url('/digitization-image.png')"
                        : isDMS
                        ? "url('/dms-image1.png')"
                        : isWorkflow
                        ? "url('/workflow-management-.png')"
                        : isNexoraAI
                        ? "url('/home-ai-3.jpg')"
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* High contrast overlay for IT Consulting, ERP, Corporate Digitalization, Corporate Digitization, DMS, Workflow and Nexora AI cards */}
                    {(isITConsulting ||
                      isERP ||
                      isCorporateDigital ||
                      isCorporateDigitization ||
                      isDMS ||
                      isWorkflow ||
                      isNexoraAI) && (
                      <>
                        {/* Film grain texture */}
                        <div
                          className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
                            mixBlendMode: "overlay",
                          }}
                        ></div>
                        {/* High contrast dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500"></div>
                        {/* Gold accent border on hover */}
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-400/60 transition-colors duration-500"></div>
                      </>
                    )}
                    {/* Top-right badge for all cards */}
                    <div className="absolute top-4 right-4 z-20">
                      {(() => {
                        const badgeBg =
                          isITConsulting ||
                          isERP ||
                          isCorporateDigital ||
                          isCorporateDigitization ||
                          isDMS ||
                          isWorkflow ||
                          isNexoraAI
                            ? "bg-amber-400/20 border border-amber-400/30"
                            : `bg-gradient-to-br ${service.gradient}`;
                        return (
                          <div
                            className={`p-2 rounded-lg ${badgeBg} shadow-md backdrop-blur-sm`}
                          >
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                        );
                      })()}
                    </div>
                    <CardHeader
                      className={`flex flex-col p-6 relative z-10 h-full ${
                        isITConsulting ||
                        isERP ||
                        isCorporateDigital ||
                        isCorporateDigitization ||
                        isDMS ||
                        isWorkflow ||
                        isNexoraAI
                          ? "justify-end text-left"
                          : "items-center text-center"
                      }`}
                    >
                      {/* Icons removed from center/left per design — badge at top-right remains */}

                      <CardTitle
                        className={`font-black mb-3 tracking-tight ${
                          isITConsulting ||
                          isERP ||
                          isCorporateDigital ||
                          isCorporateDigitization ||
                          isDMS ||
                          isWorkflow ||
                          isNexoraAI
                            ? "text-2xl lg:text-3xl text-white font-inter group-hover:text-amber-50 transition-colors duration-300"
                            : "text-lg text-slate-800"
                        }`}
                        style={{
                          textShadow:
                            isITConsulting ||
                            isERP ||
                            isCorporateDigital ||
                            isCorporateDigitization ||
                            isDMS ||
                            isWorkflow ||
                            isNexoraAI
                              ? "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)"
                              : "none",
                        }}
                      >
                        {service.title}
                      </CardTitle>

                      <CardDescription
                        className={`leading-relaxed font-medium ${
                          isITConsulting ||
                          isERP ||
                          isCorporateDigital ||
                          isCorporateDigitization ||
                          isDMS ||
                          isWorkflow ||
                          isNexoraAI
                            ? "text-lg text-white/95 font-inter group-hover:text-amber-50/90 transition-colors duration-300"
                            : "text-sm text-slate-600"
                        }`}
                        style={{
                          textShadow:
                            isITConsulting ||
                            isERP ||
                            isCorporateDigital ||
                            isCorporateDigitization ||
                            isDMS ||
                            isWorkflow ||
                            isNexoraAI
                              ? "1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)"
                              : "none",
                        }}
                      >
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Mobile stacked cards (visible on small screens) */}
          <div className="md:hidden grid gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isITConsulting =
                service.title === "Strategic IT Consulting";
              const isERP = service.title === "Enterprise Resource Planning";
              const isCorporateDigital =
                service.title === "Corporate Digitalization";
              const isCorporateDigitization =
                service.title === "Corporate Digitization";
              const isDMS = service.title === "Document Management";
              const isWorkflow = service.title === "Workflow Management System";
              const isNexoraAI = service.title === "Nexora AI";
              const backgroundImage = isITConsulting
                ? "url('/it_consul.jpg')"
                : isERP
                ? "url('/ERP-image.jpg')"
                : isCorporateDigital
                ? "url('/Data-scanning.jpg')"
                : isCorporateDigitization
                ? "url('/Digitization-image.jpg')"
                : isDMS
                ? "url('/DMS-new.jpg')"
                : isWorkflow
                ? "url('/workflow-management.jpg')"
                : isNexoraAI
                ? "url('/Nexora-Ai.jpg')"
                : "none";

              return (
                <Card
                  key={i}
                  className={`group w-full h-auto border-0 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden p-0`}
                  style={{
                    backgroundColor:
                      backgroundImage !== "none" ? "transparent" : "#ffffff",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    backgroundImage: backgroundImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* If there's a background image, add a subtle overlay for readability */}
                  {backgroundImage !== "none" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
                  )}

                  {/* Top-right badge for mobile cards (same visual as desktop) */}
                  <div className="absolute top-4 right-4 z-20">
                    {(() => {
                      const badgeBg =
                        isITConsulting ||
                        isERP ||
                        isCorporateDigital ||
                        isCorporateDigitization ||
                        isDMS ||
                        isWorkflow ||
                        isNexoraAI
                          ? "bg-amber-400/20 border border-amber-400/30"
                          : `bg-gradient-to-br ${service.gradient}`;
                      return (
                        <div
                          className={`p-2 rounded-lg ${badgeBg} shadow-md backdrop-blur-sm`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      );
                    })()}
                  </div>

                  <div className={`p-6 relative z-10`}>
                    {/* Removed thumbnail/icon on mobile to let the background image show unobstructed */}
                    <h3
                      className={`font-black mb-3 tracking-tight ${
                        isITConsulting ||
                        isERP ||
                        isCorporateDigital ||
                        isCorporateDigitization ||
                        isDMS ||
                        isWorkflow ||
                        isNexoraAI
                          ? "text-2xl text-white"
                          : "text-lg text-slate-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`leading-relaxed font-medium ${
                        isITConsulting ||
                        isERP ||
                        isCorporateDigital ||
                        isCorporateDigitization ||
                        isDMS ||
                        isWorkflow ||
                        isNexoraAI
                          ? "text-lg text-white/95"
                          : "text-sm text-slate-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
