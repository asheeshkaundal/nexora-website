"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import CustomDropdown from "@/components/ui/custom-dropdown";

export default function GetStartedStep3() {
  const router = useRouter();
  const [form, setForm] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("getStartedForm");
      setForm(raw ? JSON.parse(raw) : {});
    } catch {
      setForm({});
    }
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    function applyPref() {
      const el =
        videoRef.current ||
        (document.querySelector(
          "#get-started-bg-video"
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

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.removeItem("getStartedForm");
        router.push("/get-started/thank-you");
      } else {
        alert(data.error || "Submission failed");
      }
    } catch (e) {
      console.error(e);
      alert("Submission failed, try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (!form) return null;

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
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Final Details
            </h1>
            <p className="text-white/90 mt-1">
              Section 3 — Project timing & details
            </p>
          </header>

          <div className="p-6 space-y-4">
            <label>
              <div className="font-medium">Project Timeline</div>
              <CustomDropdown
                options={[
                  { label: "Immediately", value: "Immediately" },
                  { label: "3–6 Months", value: "3–6 Months" },
                  { label: "6+ Months", value: "6+ Months" },
                  { label: "Just Exploring", value: "Just Exploring" },
                ]}
                value={form.projectTimeline}
                onChange={(v) => update("projectTimeline", v)}
                placeholder="Select"
              />
            </label>

            <label>
              <div className="font-medium">Project Description</div>
              <textarea
                value={form.projectDescription || ""}
                onChange={(e) => update("projectDescription", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border"
                rows={6}
                placeholder="Tell us briefly about your project or challenge..."
              ></textarea>
            </label>

            <label>
              <div className="font-medium">How did you hear about us?</div>
              <CustomDropdown
                options={[
                  { label: "Website", value: "Website" },
                  { label: "Referral", value: "Referral" },
                  { label: "LinkedIn", value: "LinkedIn" },
                  { label: "Search", value: "Search" },
                  { label: "Other", value: "Other" },
                ]}
                value={form.howHeard}
                onChange={(v) => update("howHeard", v)}
                placeholder="Select"
              />
            </label>

            <div className="flex justify-between items-center">
              <Button variant="ghost" onClick={() => router.back()}>
                Back
              </Button>
              <Button
                className="px-6 py-2 rounded-md shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)",
                }}
                onClick={submit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
