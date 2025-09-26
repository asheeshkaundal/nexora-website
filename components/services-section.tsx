"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Briefcase, Cog, RefreshCw, FileLock } from "lucide-react";

const services = [
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
];

export function ServicesSection() {
  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a4f47 0%, #0d5a52 50%, #0a4f47 100%)",
      }}
      aria-labelledby="services-title"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-tl from-yellow-300 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-300 to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mb-4 shadow-lg">
            <Cog className="w-8 h-8 text-white animate-spin-slow" />
          </div>
          <h2
            id="services-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-balance mb-6 tracking-tight"
          >
            ENABLING DIGITAL FUTURES
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
              WITH NEXORA
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We believe the future belongs to businesses that embrace technology
            and innovation
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isITConsulting = service.title === "Strategic IT Consulting";
            return (
              <Card
                key={i}
                className={`group h-full border-0 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
                  isITConsulting ? "text-white" : ""
                }`}
                style={{
                  backgroundColor: isITConsulting ? "transparent" : "#ffffff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  backgroundImage: isITConsulting
                    ? "url('/it_consul.jpg')"
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* High contrast overlay for IT Consulting card */}
                {isITConsulting && (
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
                <CardHeader
                  className={`flex flex-col p-6 relative z-10 h-full ${
                    isITConsulting
                      ? "justify-end text-left"
                      : "items-center text-center"
                  }`}
                >
                  {!isITConsulting && (
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  )}

                  {isITConsulting && (
                    <div className="flex items-center justify-start mb-4 group-hover:mb-5 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 group-hover:bg-amber-400/30 group-hover:border-amber-400/50 transition-all duration-300">
                        <Icon className="w-6 h-6 text-amber-300 group-hover:text-amber-200 drop-shadow-md" />
                      </div>
                    </div>
                  )}

                  <CardTitle
                    className={`font-black mb-3 tracking-tight ${
                      isITConsulting
                        ? "text-2xl lg:text-3xl text-white font-inter group-hover:text-amber-50 transition-colors duration-300"
                        : "text-lg text-slate-800"
                    }`}
                    style={{
                      textShadow: isITConsulting
                        ? "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)"
                        : "none",
                    }}
                  >
                    {service.title}
                  </CardTitle>

                  <CardDescription
                    className={`leading-relaxed font-medium ${
                      isITConsulting
                        ? "text-lg text-white/95 font-inter group-hover:text-amber-50/90 transition-colors duration-300"
                        : "text-sm text-slate-600"
                    }`}
                    style={{
                      textShadow: isITConsulting
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
    </section>
  );
}
