"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import CustomDropdown from "@/components/ui/custom-dropdown";

export default function GetStartedStep1() {
  const router = useRouter();
  const [form, setForm] = useState(() => {
    try {
      const raw = localStorage.getItem("getStartedForm");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    // hydrate if missing (handled above)
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    function applyPref() {
      const el =
        videoRef.current ||
        (document.getElementById(
          "get-started-bg-video"
        ) as HTMLVideoElement | null);
      if (!el) return;
      if (mq && mq.matches) {
        try {
          el.pause();
        } catch {}
        try {
          el.autoplay = false;
        } catch {}
        try {
          el.loop = false;
        } catch {}
      } else {
        try {
          el.loop = true;
        } catch {}
        const p = el.play?.();
        if (p && p.catch) p.catch(() => {});
      }
    }
    applyPref();
    if (mq) {
      const listener = () => applyPref();
      if (mq.addEventListener) mq.addEventListener("change", listener);
      else mq.addListener(listener as any);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", listener);
        else mq.removeListener(listener as any);
      };
    }
  }, []);

  function update(key: string, value: any) {
    const next = { ...form, [key]: value };
    setForm(next);
    localStorage.setItem("getStartedForm", JSON.stringify(next));
  }

  function validateAndNext() {
    const required = [
      "fullName",
      "businessEmail",
      "contactNumber",
      "companyName",
      "industry",
      "companySize",
      "areaOfInterest",
    ];
    for (const key of required) {
      if (!form[key]) {
        alert("Please fill all required fields.");
        return;
      }
    }
    router.push("/get-started/step2");
  }

  return (
    <main
      className="min-h-screen py-16"
      style={{ background: "linear-gradient(180deg,#F8FAFF 0%, #F3F4F6 60%)" }}
    >
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          id="get-started-bg-video"
          className="min-w-full min-h-full object-cover opacity-30"
          src="/form-animation.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-black/20 pointer-events-none" />
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
          <header
            className="p-6"
            style={{
              background: "linear-gradient(135deg,#6D28D9 0%,#A78BFA 100%)",
            }}
          >
            <h1 className="text-3xl font-extrabold text-white">Get Started</h1>
            <p className="text-white/90 mt-1">Section 1 — Basic Information</p>
          </header>

          <div className="p-8 space-y-6">
            <label className="block">
              <div className="font-medium">
                Full Name <span className="text-rose-500">*</span>
              </div>
              <input
                value={form.fullName || ""}
                onChange={(e) => update("fullName", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </label>

            <label className="block">
              <div className="font-medium">
                Business Email <span className="text-rose-500">*</span>
              </div>
              <input
                type="email"
                value={form.businessEmail || ""}
                onChange={(e) => update("businessEmail", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </label>

            <label className="block">
              <div className="font-medium">
                Contact Number (with country code){" "}
                <span className="text-rose-500">*</span>
              </div>
              <input
                type="tel"
                value={form.contactNumber || ""}
                onChange={(e) => update("contactNumber", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </label>

            <label className="block">
              <div className="font-medium">
                Company Name <span className="text-rose-500">*</span>
              </div>
              <input
                value={form.companyName || ""}
                onChange={(e) => update("companyName", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </label>

            <label className="block">
              <div className="font-medium">
                Industry <span className="text-rose-500">*</span>
              </div>
              <div className="mt-1">
                <CustomDropdown
                  options={[
                    { label: "Manufacturing", value: "Manufacturing" },
                    { label: "Real Estate", value: "Real Estate" },
                    { label: "Banking/Finance", value: "Banking/Finance" },
                    { label: "Retail", value: "Retail" },
                    { label: "Healthcare", value: "Healthcare" },
                    { label: "Technology", value: "Technology" },
                    { label: "Other", value: "Other" },
                  ]}
                  value={form.industry}
                  onChange={(v) => update("industry", v)}
                  placeholder="Select industry"
                  searchable
                />
              </div>
            </label>

            <label className="block">
              <div className="font-medium">
                Company Size <span className="text-rose-500">*</span>
              </div>
              <div className="mt-1">
                <CustomDropdown
                  options={[
                    { label: "1–50", value: "1–50" },
                    { label: "51–200", value: "51–200" },
                    { label: "201–500", value: "201–500" },
                    { label: "501–1000", value: "501–1000" },
                    { label: "1000+", value: "1000+" },
                  ]}
                  value={form.companySize}
                  onChange={(v) => update("companySize", v)}
                  placeholder="Select size"
                />
              </div>
            </label>

            <label className="block">
              <div className="font-medium">
                Area of Interest (Select one){" "}
                <span className="text-rose-500">*</span>
              </div>
              <div className="mt-1">
                <CustomDropdown
                  options={[
                    {
                      label: "Core Business Systems (ERP/WMS)",
                      value: "Core Business Systems (ERP/WMS)",
                    },
                    {
                      label: "Digital Transformation (DMS/Scanning)",
                      value: "Digital Transformation (DMS/Scanning)",
                    },
                    {
                      label: "AI & Automation (Nexora AI)",
                      value: "AI & Automation (Nexora AI)",
                    },
                    {
                      label: "IT Strategy & Support",
                      value: "IT Strategy & Support",
                    },
                    { label: "General Inquiry", value: "General Inquiry" },
                  ]}
                  value={form.areaOfInterest}
                  onChange={(v) => update("areaOfInterest", v)}
                  placeholder="Select"
                  searchable
                />
              </div>
            </label>

            <div className="flex justify-between items-center mt-6">
              <div />
              <Button
                className="px-6 py-2 rounded-md shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)",
                }}
                onClick={validateAndNext}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
