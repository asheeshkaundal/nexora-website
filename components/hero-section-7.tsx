"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function HeroSection7() {
  return (
    // gold-over-teal flowy background already provided via pattern-1
    <section
      className="bg-background pattern-1 min-h-screen flex items-center py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
          {/* Left copy: ~60% width on large screens */}
          <div className="flex-1 lg:basis-3/5">
            <h1
              id="hero-heading"
              className="text-foreground text-4xl lg:text-6xl font-bold text-balance"
            >
              Transforming Businesses Through Technology
            </h1>
            <p className="mt-5 text-muted-foreground text-base lg:text-lg max-w-2xl">
              Innovative IT consulting and digital solutions that empower
              businesses to achieve operational excellence through ERP,
              digitalization, workflow management, and secure document systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Primary: Gold with darker-gold hover */}
              <Button className="bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-dark))] hover:text-foreground rounded-lg shadow-md shadow-black/20">
                Get Started
              </Button>
              {/* Secondary: white outline */}
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground/10 bg-transparent"
              >
                Learn More
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Right visual: professional business/technology imagery */}
          <div className="w-full lg:basis-2/5">
            <div className="overflow-hidden rounded-xl border bg-background shadow-xl">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/professional-business-technology-team-working.jpg"
                  alt="Team collaborating with modern technology dashboards"
                  fill
                  priority
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
