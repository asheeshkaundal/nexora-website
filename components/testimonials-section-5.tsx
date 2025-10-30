"use client";

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    quote:
      "Nexora Global transformed our business operations with their comprehensive ERP solution. The implementation was seamless and their support team was exceptional throughout the entire process.",
    author: "Sharad Garg",
    role: "GM, Elcom Innovations",
    image: "/placeholder-user.jpg",
  },
  {
    quote:
      "Their corporate digitalization services helped us modernize our entire workflow. We've seen a 40% increase in productivity and significant cost savings. Highly recommended!",
    author: "Sandeep Kumar",
    role: "Finanace Head, ICRA Limited",
    image: "/placeholder-user.jpg",
  },
  {
    quote:
      "The document management system implemented by Nexora has revolutionized how we handle our data. Everything is organized, secure, and easily accessible. Outstanding service!",
    author: "Malay",
    role: "Admin Head, Adidas",
    image: "/placeholder-user.jpg",
  },
];

export function TestimonialsSection5() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F3F4F6" }}
      aria-labelledby="testimonial-title"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <p
              className="text-sm md:text-base font-semibold leading-[20px] md:leading-6"
              style={{ color: "#6D28D9" }}
            >
              Testimonials
            </p>
            <h2
              id="testimonial-title"
              className="text-3xl md:text-5xl font-bold"
              style={{ color: "#1E1E1E" }}
            >
              What Our Clients Say
            </h2>
            <p className="text-base md:text-lg" style={{ color: "#4B5563" }}>
              Trusted by leading organizations across industries
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-6"
              >
                {/* Quote Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)",
                  }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p
                  className="text-base leading-7 flex-grow"
                  style={{ color: "#374151" }}
                >
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div
                  className="flex items-center gap-4 pt-4 border-t"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                    />
                    <AvatarFallback
                      style={{
                        background:
                          "linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)",
                        color: "#FFFFFF",
                      }}
                    >
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-base font-bold"
                      style={{ color: "#1E1E1E" }}
                    >
                      {testimonial.author}
                    </p>
                    <p className="text-sm" style={{ color: "#6B7280" }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
