"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Briefcase,
  Cog,
  RefreshCw,
  FileText,
  Database,
  ScanLine,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "it-consulting",
    title: "IT Consulting Services",
    icon: Briefcase,
    brief:
      "Strategic technology guidance to transform your business operations and drive digital innovation across all departments.",
    image: "/professional-business-technology-team-collaboratio.jpg",
    benefits: [
      "Strategic technology roadmapping and planning",
      "Digital transformation consulting",
      "Technology stack optimization",
      "Risk assessment and mitigation strategies",
    ],
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    icon: Cog,
    brief:
      "Comprehensive ERP solutions that integrate all business processes for streamlined operations and real-time insights.",
    image: "/professional-business-technology-team-working.jpg",
    benefits: [
      "Complete business process integration",
      "Real-time data analytics and reporting",
      "Improved operational efficiency",
      "Scalable solutions for growing businesses",
    ],
  },
  {
    id: "digitalization",
    title: "Corporate Digitalization Projects",
    icon: RefreshCw,
    brief:
      "Transform traditional business processes into intelligent, automated digital workflows that enhance productivity.",
    image: "/professional-business-technology-team-collaboratio.jpg",
    benefits: [
      "Process automation and optimization",
      "Digital workflow implementation",
      "Legacy system modernization",
      "Enhanced team collaboration tools",
    ],
  },
  {
    id: "workflow",
    title: "Workflow Management Projects",
    icon: FileText,
    brief:
      "Design and implement efficient workflow systems that streamline operations and improve team productivity.",
    image: "/professional-business-technology-team-working.jpg",
    benefits: [
      "Custom workflow design and implementation",
      "Task automation and routing",
      "Performance monitoring and analytics",
      "Seamless integration with existing systems",
    ],
  },
  {
    id: "dms",
    title: "Document/Data Management Systems",
    icon: Database,
    brief:
      "Secure, efficient document and data management solutions with advanced compliance and accessibility features.",
    image: "/professional-business-technology-team-collaboratio.jpg",
    benefits: [
      "Centralized document storage and retrieval",
      "Advanced security and access controls",
      "Compliance with industry regulations",
      "Version control and audit trails",
    ],
  },
  {
    id: "data-scanning",
    title: "Data Scanning & Management",
    icon: ScanLine,
    brief:
      "Professional data scanning, digitization, and management services to convert physical documents into searchable digital assets.",
    image: "/professional-business-technology-team-working.jpg",
    benefits: [
      "High-quality document scanning and digitization",
      "OCR and text recognition capabilities",
      "Secure data migration and storage",
      "Searchable digital archive creation",
    ],
  },
];

export function ServicesDetailSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-16 md:py-24 bg-background pattern-1">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT solutions tailored to drive your business forward
          </p>
        </div>

        {/* Service Tabs */}
        <Tabs
          value={activeService.id}
          onValueChange={(value) => {
            const service = services.find((s) => s.id === value);
            if (service) setActiveService(service);
          }}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full h-auto p-1 bg-muted/50 mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className={cn(
                    "flex flex-col items-center gap-2 py-4 px-3 text-xs font-medium transition-all",
                    "data-[state=active]:bg-background data-[state=active]:text-foreground",
                    "data-[state=active]:shadow-sm"
                  )}
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-center leading-tight">
                    {service.title.split(" ").slice(0, 2).join(" ")}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Service Content */}
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="grid lg:grid-cols-5 gap-0 min-h-[500px] border-2 border-primary/30 rounded-lg overflow-hidden shadow-lg">
                  {/* Image Section - 40% */}
                  <div className="lg:col-span-2 relative overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 transition-opacity duration-700 group-hover:opacity-50" />
                    <div className="absolute inset-0 bg-primary/0 transition-all duration-700 group-hover:bg-primary/10" />
                  </div>

                  {/* Content Section - 60% */}
                  <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center bg-background">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-white mb-8 leading-relaxed">
                      {service.brief}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-white">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                      >
                        Get Quote
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

export default ServicesDetailSection;
