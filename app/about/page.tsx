"use client";

import { LpNavbar1 } from "@/components/lp-navbar-1";
import { Footer2 } from "@/components/footer-2";
import {
  Building2,
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <LpNavbar1 />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Nexora Global
              </span>
            </h1>
            <span
              className="mx-auto block w-32 h-1 rounded-full bg-gradient-to-r from-primary to-accent mt-4 animate-fade-up"
              style={{ animationDelay: "120ms" }}
            />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Empowering businesses worldwide with innovative technology
              solutions and digital transformation expertise since our
              inception.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className="space-y-4 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver cutting-edge technology solutions that drive business
                growth, enhance operational efficiency, and create lasting value
                for our clients. We strive to be the trusted partner in every
                digital transformation journey.
              </p>
            </div>

            <div
              className="space-y-4 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the global leader in digital innovation, recognized for
                our commitment to excellence, sustainability, and creating
                transformative solutions that shape the future of business
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: TrendingUp, value: "98%", label: "Success Rate" },
              { icon: Globe, value: "Pan India", label: "Service Coverage" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="text-center space-y-3 animate-fade-up"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-2 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nexora Global Pvt Ltd is a dynamic and forward-thinking
                technology company, established in 2015. We are dedicated to
                empowering businesses worldwide with cutting-edge solutions that
                drive efficiency, foster innovation, and accelerate digital
                transformation.
              </p>
              <p>
                Our core philosophy revolves around providing comprehensive,
                end-to-end services that help our clients navigate the
                complexities of the modern digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Services: Driving Digital Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
              Nexora Global offers a robust portfolio of services designed to
              meet the diverse needs of contemporary enterprises:
            </p>

            <div className="space-y-8">
              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: "80ms" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Nexora AI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Harnessing the power of Artificial Intelligence to develop
                  smart solutions, automation tools, and data-driven insights
                  that give your business a competitive edge.
                </p>
              </div>

              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  IT Consultancy Services
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Providing expert guidance and strategic planning to align your
                  technology investments with your business goals, ensuring
                  optimal performance and growth.
                </p>
              </div>

              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Enterprise Resource Planning (ERP)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implementing and managing integrated ERP systems to streamline
                  core business processes—from finance and human resources to
                  supply chain and manufacturing.
                </p>
              </div>

              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: "320ms" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Workflow Management System
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Designing and deploying systems that automate and optimize
                  operational workflows, significantly improving productivity
                  and reducing bottlenecks.
                </p>
              </div>

              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Corporate Digitization & Digitalization Projects
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leading your journey through both digitization (converting
                  information from analog to digital) and digitalization
                  (leveraging digital technology to change business models and
                  operations).
                </p>
              </div>

              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: "480ms" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Document Management System (DMS)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implementing comprehensive document management solutions that
                  enable secure storage, efficient organization, and seamless
                  retrieval of digital documents. Our DMS ensures regulatory
                  compliance, enhances collaboration, and eliminates paper-based
                  inefficiencies while maintaining complete version control and
                  audit trails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.",
              },
              {
                title: "Integrity",
                description:
                  "Building trust through transparency, honesty, and ethical business practices in everything we do.",
              },
              {
                title: "Excellence",
                description:
                  "Committed to delivering exceptional quality and exceeding expectations in every project.",
              },
              {
                title: "Collaboration",
                description:
                  "Working closely with clients and teams to achieve shared goals and mutual success.",
              },
              {
                title: "Sustainability",
                description:
                  "Creating solutions that are environmentally responsible and built for long-term success.",
              },
              {
                title: "Customer Focus",
                description:
                  "Putting our clients at the heart of everything we do, ensuring their success is our priority.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer2 />
    </div>
  );
}
