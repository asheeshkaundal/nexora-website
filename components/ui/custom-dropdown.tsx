"use client";

import { useEffect, useRef, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  value?: string | string[];
  onChange: (v: any) => void;
  placeholder?: string;
  multiple?: boolean;
  searchable?: boolean;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = "Select",
  multiple = false,
  searchable = true,
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const selectedSet = new Set(
    Array.isArray(value) ? value : value ? [value] : []
  );

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

  function toggleOption(v: string) {
    if (multiple) {
      const arr = Array.isArray(value) ? [...value] : [];
      const idx = arr.indexOf(v);
      if (idx === -1) arr.push(v);
      else arr.splice(idx, 1);
      onChange(arr);
    } else {
      onChange(v);
      setOpen(false);
    }
  }

  function renderLabel() {
    if (multiple) {
      const arr = Array.isArray(value) ? value : [];
      if (arr.length === 0) return placeholder;
      return arr
        .map((v) => options.find((o) => o.value === v)?.label || v)
        .join(", ");
    }
    if (!value) return placeholder;
    return options.find((o) => o.value === value)?.label || String(value);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-3 py-2 rounded-md border border-gray-200 bg-white flex items-center justify-between"
      >
        <span className="truncate text-sm text-slate-900">{renderLabel()}</span>
        <svg
          className="w-4 h-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 left-0 mt-2 z-50 rounded-lg shadow-xl bg-slate-800 text-white border border-slate-700 flex flex-col max-h-[350px]">
          {searchable && (
            <div className="p-3 border-b border-slate-700 flex-shrink-0">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-md bg-slate-700 placeholder:text-slate-400 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
          )}

          <div
            className="overflow-y-auto flex-1 min-h-0"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#475569 #1e293b",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                width: 8px;
              }
              div::-webkit-scrollbar-track {
                background: #1e293b;
              }
              div::-webkit-scrollbar-thumb {
                background: #475569;
                border-radius: 4px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background: #64748b;
              }
            `}</style>
            {filtered.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700 cursor-pointer transition-colors"
              >
                {multiple ? (
                  <input
                    type="checkbox"
                    checked={selectedSet.has(opt.value)}
                    onChange={() => toggleOption(opt.value)}
                    className="w-4 h-4"
                  />
                ) : (
                  <input
                    type="radio"
                    name="custom-dropdown"
                    checked={selectedSet.has(opt.value)}
                    onChange={() => toggleOption(opt.value)}
                    className="w-4 h-4"
                  />
                )}
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
            {filtered.length === 0 && (
              <div className="p-4 text-center text-slate-400">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
