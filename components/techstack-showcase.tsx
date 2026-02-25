"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Tech stack logos - using your actual images from public/assets/images
const techStackLogos = [
  { name: "Next.js", image: "/assets/images/nextjs.png" },
  { name: "BetterAuth", image: "/assets/images/betterAuth.png" },
  { name: "Prisma", image: "/assets/images/prisma.png" },
  { name: "Stripe", image: "/assets/images/stripe.png" },
  { name: "DodoPayments", image: "/assets/images/dodo.png" },
  { name: "Tailwind", image: "/assets/images/tailwind.png" },
  { name: "PostgreSQL", image: "/assets/images/pg.png" },
  { name: "Supabase", image: "/assets/images/supabase.png" },
  { name: "Resend", image: "/assets/images/resend.png" },
  { name: "Shadcn", image: "/assets/images/shadcn.png" },
  { name: "Framer", image: "/assets/images/framer.png" },
  { name: "Vercel", image: "/assets/images/vercel.png" },
];

// Distribute logos across two columns
const column1 = [
  techStackLogos[0], // Next.js
  techStackLogos[2], // Prisma
  techStackLogos[4], // Tailwind
  techStackLogos[6], // Resend
  techStackLogos[8], // Framer
  techStackLogos[10],
];

const column2 = [
  techStackLogos[1], // BetterAuth
  techStackLogos[3], // Stripe
  techStackLogos[5], // Supabase
  techStackLogos[7], // Shadcn
  techStackLogos[9], // Vercel
  techStackLogos[11], // Vercel
];

const TechCard = ({ tech }: { tech: (typeof techStackLogos)[0] }) => {
  return (
    <div className="relative group shrink-0">
      <div className="w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-background border border-border shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 sm:p-7 p-3">
        <div className="relative w-full h-full">
          <Image
            src={tech.image}
            alt={tech.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 112px, 128px"
          />
        </div>
      </div>
    </div>
  );
};

export function TechStackShowcase() {
  return (
    <>
      {/* Desktop Version - Vertical Scrolling */}
      <div className="hidden lg:block relative w-full h-[700px] overflow-hidden rounded-3xl bg-linear-to-br from-muted/30 to-muted/10 p-8">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-linear-to-b from-background via-background/95 to-transparent z-10 pointer-events-none" />

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-background via-background/95 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 h-full items-center justify-center">
          {/* Column 1 - Moving Up - Continuous Loop */}
          <div className="relative h-full overflow-hidden">
            <motion.div
              animate={{
                y: [0, -100 * column1.length],
              }}
              transition={{
                y: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              className="flex flex-col gap-8"
            >
              {/* Render items three times for seamless loop */}
              {[...column1, ...column1, ...column1].map((tech, index) => (
                <TechCard key={`col1-${index}`} tech={tech} />
              ))}
            </motion.div>
          </div>

          {/* Column 2 - Moving Down - Continuous Loop */}
          <div className="relative h-full overflow-hidden">
            <motion.div
              animate={{
                y: [-100 * column2.length, 0],
              }}
              transition={{
                y: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              className="flex flex-col gap-8"
            >
              {/* Render items three times for seamless loop */}
              {[...column2, ...column2, ...column2].map((tech, index) => (
                <TechCard key={`col2-${index}`} tech={tech} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Horizontal Scrolling */}
      <div className="lg:hidden relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-muted/30 to-muted/10 py-8">
        {/* Left Gradient Overlay */}
        <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/95 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Overlay */}
        <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/95 to-transparent z-10 pointer-events-none" />

        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100 * techStackLogos.length],
            }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            className="flex gap-x-4 px-4"
          >
            {/* Render items three times for seamless loop */}
            {[...techStackLogos, ...techStackLogos, ...techStackLogos].map(
              (tech, index) => (
                <TechCard key={`mobile-${index}`} tech={tech} />
              ),
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
