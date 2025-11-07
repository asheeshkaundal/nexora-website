"use client";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (typeof window !== "undefined") {
        setVisible(window.scrollY > 200);
      }
    };

    // initialize
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      aria-label="Scroll to top"
      title="Scroll to top"
      onClick={handleClick}
      className={`fixed right-6 bottom-6 z-40 w-12 h-12 bg-[#3BAFA6] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transform transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
