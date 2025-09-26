import type React from "react";
import { CheckCircle2, Puzzle, ShieldCheck, Target } from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Target,
    title: "Deep Industry Expertise",
    description:
      "Extensive experience in delivering cutting-edge IT solutions across diverse sectors",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality & Security",
    description:
      "Upholding the highest standards to protect your sensitive data and intellectual property",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description:
      "A history of successful project deliveries and delighted clients",
  },
  {
    icon: Puzzle,
    title: "Tailored Business Solutions",
    description:
      "Customized strategies and implementations that perfectly fit your unique business needs",
  },
];

export function WhyChooseSection() {
  return (
    <section
      aria-labelledby="why-choose-title"
      className={cn("relative isolate overflow-hidden", "py-16 md:py-24")}
      style={{
        backgroundImage:
          "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--accent)) 70%)",
      }}
    >
      {/* Decorative business imagery (subtle) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
      >
        <img
          src="/images/why-choose-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="why-choose-title"
            className={cn(
              "text-pretty",
              "text-3xl font-bold tracking-tight md:text-4xl",
              "text-foreground"
            )}
          >
            Why Partner with Nexora?
          </h2>
          <p
            className={cn(
              "mt-4 text-balance text-sm md:text-base",
              "text-muted-foreground"
            )}
          >
            Choosing Nexora means selecting a partner committed to your success
            through unparalleled expertise and a client-centric approach
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={cn(
                "group relative rounded-xl p-6 transition-all duration-200",
                "border",
                "hover:-translate-y-1 hover:shadow-lg"
              )}
              style={{
                backgroundColor: "hsl(var(--card) / 0.6)",
                borderColor: "hsl(var(--border) / 0.4)",
                backdropFilter: "saturate(160%) blur(8px)",
                WebkitBackdropFilter: "saturate(160%) blur(8px)",
                boxShadow:
                  "0 1px 1px hsl(var(--background) / 0.1), 0 4px 16px hsl(var(--background) / 0.15)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "grid h-12 w-12 place-content-center rounded-full transition-transform",
                    "ring-1",
                    "group-hover:scale-110"
                  )}
                  style={{
                    color: "hsl(var(--primary))",
                    backgroundColor: "hsl(var(--primary) / 0.06)",
                    boxShadow: "inset 0 0 0 1px hsl(var(--primary) / 0.25)",
                  }}
                >
                  <f.icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <h3
                    className={cn("text-base font-semibold", "text-foreground")}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-sm leading-relaxed",
                      "text-muted-foreground"
                    )}
                  >
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Badge>15+ Years Experience</Badge>
          <Badge>200+ Clients</Badge>
          <Badge>98% Satisfaction</Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1",
        "text-xs font-medium"
      )}
      style={{
        color: "hsl(var(--primary))",
        backgroundColor: "hsl(var(--primary) / 0.08)",
        boxShadow: "inset 0 0 0 1px hsl(var(--primary) / 0.2)",
      }}
    >
      {children}
    </span>
  );
}

export default WhyChooseSection;
