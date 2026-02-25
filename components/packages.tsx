"use client";

import Image from "next/image";
import { useState } from "react";

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image?: string;
  isDual?: boolean;
  images?: string[];
}

const features: Feature[] = [
  {
    id: "nextjs",
    title: "Next.js",
    subtitle: "React framework for production",
    category: "FRAMEWORK",
    image: "/assets/images/nextjs.png",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    subtitle: "Utility-first CSS framework",
    category: "CSS FRAMEWORK",
    image: "/assets/images/tailwind.png",
  },
  {
    id: "shadcn",
    title: "shadcn/ui",
    subtitle: "Beautiful UI components",
    category: "UI DESIGN",
    image: "/assets/images/shadcn.png",
  },
  {
    id: "motion",
    title: "Framer Motion",
    subtitle: "Animation library for React",
    category: "ANIMATIONS",
    image: "/assets/images/framer.png",
  },
  {
    id: "auth",
    title: "Better Auth",
    subtitle: "Authentication & authorization",
    category: "AUTHENTICATION",
    image: "/assets/images/betterAuth.png",
  },
  {
    id: "resend",
    title: "Resend",
    subtitle: "Email delivery platform",
    category: "EMAIL",
    image: "/assets/images/resend.png",
  },
  {
    id: "database",
    title: "PostgreSQL/Supabase",
    subtitle: "Database & backend services",
    category: "DATABASE",
    isDual: true,
    images: ["/assets/images/pg.png", "/assets/images/supabase.png"],
  },
  {
    id: "payment",
    title: "Stripe/Dodo Payments",
    subtitle: "Payment integrations",
    category: "PAYMENTS",
    isDual: true,
    images: ["/assets/images/stripe-text.webp", "/assets/images/dodo.png"],
  },
];

export const Packages = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="features" className="w-full pt-5 pb-20 px-4 md:px-8 border-b">
      <div className="sm:max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What's Inside</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The all in one repo to build the next Billion Dollar Saas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First two cards - 2 per row on md+ screens */}
          {features.slice(0, 2).map((feature) => (
            <div key={feature.id}>
              <div
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative h-64 border border-border rounded-sm bg-card overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col p-6">
                  {/* Category Tag */}
                  <div className="text-xs font-semibold text-muted-foreground mb-auto">
                    {feature.category}
                  </div>

                  {/* Image Container - centered */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {feature.isDual ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-16 h-16">
                          <Image
                            src={feature.images?.[0] || ""}
                            alt={feature.title}
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="w-16 h-16">
                          <Image
                            src={feature.images?.[1] || ""}
                            alt={feature.title}
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-20 h-20 mx-auto">
                        <Image
                          src={feature.image!}
                          alt={feature.title}
                          width={100}
                          height={100}
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Title and Subtitle - bottom left */}
                  <div className="mt-auto">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>

                    {/* Subtitle - appears on hover */}
                    <p
                      className={`text-base text-muted-foreground transition-all duration-300 ease-out overflow-hidden ${
                        hoveredId === feature.id
                          ? "max-h-20 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of the cards - 3 per row on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.slice(2).map((feature) => (
            <div key={feature.id}>
              <div
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative h-64 rounded-sm border border-border bg-card overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col p-6">
                  {/* Category Tag */}
                  <div className="text-xs font-semibold text-muted-foreground mb-auto">
                    {feature.category}
                  </div>

                  {/* Image Container - centered */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {feature.isDual ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-16 h-16">
                          <Image
                            src={feature.images?.[0] || ""}
                            alt={feature.title}
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="w-16 h-16">
                          <Image
                            src={feature.images?.[1] || ""}
                            alt={feature.title}
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-20 h-20 mx-auto">
                        <Image
                          src={feature.image!}
                          alt={feature.title}
                          width={100}
                          height={100}
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Title and Subtitle - bottom left */}
                  <div className="mt-auto">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>

                    {/* Subtitle - appears on hover */}
                    <p
                      className={`text-base text-muted-foreground transition-all duration-300 ease-out overflow-hidden ${
                        hoveredId === feature.id
                          ? "max-h-20 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
