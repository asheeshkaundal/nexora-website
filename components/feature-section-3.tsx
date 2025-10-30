"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PenLine, ListTodo, Workflow } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    title: "Sign up",
    description: "Create your account in under 2 minutes.",
  },
  {
    icon: ListTodo,
    title: "Set up your workflow",
    description: "Customize tasks, boards, and automations to fit your team.",
  },
  {
    icon: Workflow,
    title: "Start collaborating",
    description:
      "Work smarter with your team and watch your productivity soar.",
  },
];

export function FeatureSection3() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/step-new.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-8 max-w-3xl mx-auto text-center">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-white/90">
              Steps
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Getting started is easy!
            </h2>
            <p className="text-base text-white/80">
              In just 2 simple steps, you're ready to go:
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-4">
                  <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-white/90 border shadow-sm">
                    <Icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
