"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CustomDropdown from "@/components/ui/custom-dropdown";

export default function GetStartedStep2() {
  const router = useRouter();
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("getStartedForm");
      setForm(raw ? JSON.parse(raw) : {});
    } catch {
      setForm({});
    }
  }, []);

  // background video removed per user request

  function update(key: string, value: any) {
    const next = { ...form, [key]: value };
    setForm(next);
    localStorage.setItem("getStartedForm", JSON.stringify(next));
  }

  function next() {
    router.push("/get-started/step3");
  }

  if (!form) return null;

  const interest = form.areaOfInterest || "";

  return (
    <main
      className="min-h-screen py-16"
      style={{ background: "linear-gradient(180deg,#F8FAFF 0%, #F3F4F6 60%)" }}
    >
      {/* background video removed */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
          <header
            className="p-6"
            style={{
              background: "linear-gradient(135deg,#6D28D9 0%,#A78BFA 100%)",
            }}
          >
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Smart Follow-Up
            </h1>
            <p className="text-white/90 mt-1">
              Section 2 — We'll ask a few targeted questions
            </p>
          </header>

          <div className="p-8 space-y-6">
            {interest.includes("ERP") && (
              <section className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="font-semibold mb-3">ERP/WMS</h3>
                <label className="block mb-2">
                  <div className="text-sm">Current ERP status</div>
                  <CustomDropdown
                    options={[
                      { label: "Manual", value: "Manual" },
                      { label: "Outdated", value: "Outdated" },
                      { label: "Need Integration", value: "Need Integration" },
                      { label: "New System", value: "New System" },
                    ]}
                    value={form.erpStatus}
                    onChange={(v) => update("erpStatus", v)}
                    placeholder="Select"
                  />
                </label>
                <label className="block">
                  <div className="text-sm">Key areas to improve</div>
                  <CustomDropdown
                    options={[
                      { label: "Finance", value: "Finance" },
                      { label: "Inventory", value: "Inventory" },
                      { label: "Operations", value: "Operations" },
                      { label: "HR", value: "HR" },
                      { label: "CRM", value: "CRM" },
                    ]}
                    value={form.erpAreas}
                    onChange={(v) => update("erpAreas", v)}
                    placeholder="Select"
                  />
                </label>
              </section>
            )}

            {interest.includes("DMS") && (
              <section className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="font-semibold mb-3">DMS / Scanning</h3>
                <label className="block mb-2">
                  <div className="text-sm">Approx. document volume</div>
                  <CustomDropdown
                    options={[
                      { label: "<50k", value: "<50k" },
                      { label: "50k–2L", value: "50k–2L" },
                      { label: "2L+", value: "2L+" },
                      { label: "Not sure", value: "Not sure" },
                    ]}
                    value={form.docVolume}
                    onChange={(v) => update("docVolume", v)}
                    placeholder="Select"
                  />
                </label>
                <label>
                  <div className="text-sm">Main goal</div>
                  <CustomDropdown
                    options={[
                      { label: "Save space", value: "Save space" },
                      { label: "Searchable DMS", value: "Searchable DMS" },
                      { label: "Compliance", value: "Compliance" },
                      { label: "Backup", value: "Backup" },
                    ]}
                    value={form.dmsGoal}
                    onChange={(v) => update("dmsGoal", v)}
                    placeholder="Select"
                  />
                </label>
              </section>
            )}

            {interest.includes("AI") && (
              <section className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="font-semibold mb-3">Nexora AI</h3>
                <label className="block mb-2">
                  <div className="text-sm">Type of AI project</div>
                  <CustomDropdown
                    options={[
                      { label: "Analytics", value: "Analytics" },
                      { label: "RPA", value: "RPA" },
                      { label: "Chatbot", value: "Chatbot" },
                      {
                        label: "OCR/Data Extraction",
                        value: "OCR/Data Extraction",
                      },
                    ]}
                    value={form.aiType}
                    onChange={(v) => update("aiType", v)}
                    placeholder="Select"
                  />
                </label>
                <label>
                  <div className="text-sm">
                    Do you have internal IT/data team?
                  </div>
                  <CustomDropdown
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                      { label: "Partial", value: "Partial" },
                    ]}
                    value={form.hasITTeam}
                    onChange={(v) => update("hasITTeam", v)}
                    placeholder="Select"
                  />
                </label>
              </section>
            )}

            {interest.includes("IT Support") && (
              <section className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="font-semibold mb-3">IT Strategy & Support</h3>
                <label>
                  <div className="text-sm">Support Type</div>
                  <CustomDropdown
                    options={[
                      { label: "IT Planning", value: "IT Planning" },
                      { label: "Managed Services", value: "Managed Services" },
                      {
                        label: "Hardware/Software",
                        value: "Hardware/Software",
                      },
                      { label: "Cybersecurity", value: "Cybersecurity" },
                    ]}
                    value={form.supportType}
                    onChange={(v) => update("supportType", v)}
                    placeholder="Select"
                  />
                </label>
              </section>
            )}

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
                onClick={next}
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
