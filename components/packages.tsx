// "use client";

// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { Zap, Shield, Rocket, Code, Palette, Database } from "lucide-react";

// export function Packages() {
//   const features = [
//     {
//       icon: Zap,
//       title: "Lightning Fast",
//       description: "Built with Next.js 15 and optimized for speed",
//     },
//     {
//       icon: Shield,
//       title: "Secure by Default",
//       description: "Enterprise-grade security with NextAuth",
//     },
//     {
//       icon: Rocket,
//       title: "Production Ready",
//       description: "Deploy to Vercel in seconds",
//     },
//     {
//       icon: Code,
//       title: "Clean Code",
//       description: "TypeScript, ESLint, and Prettier configured",
//     },
//     {
//       icon: Palette,
//       title: "Beautiful UI",
//       description: "Stunning components with Tailwind CSS",
//     },
//     {
//       icon: Database,
//       title: "Database Included",
//       description: "MongoDB or Supabase ready to use",
//     },
//   ];

//   return (
//     <section id="example" className="py-24 px-4 bg-muted/30">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
//             Everything you need to ship fast
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Stop wasting time on boilerplate. Start building your product today.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-card">
//                 <feature.icon className="w-12 h-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-muted-foreground">{feature.description}</p>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

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
    <section className="w-full py-16 px-4 md:px-8">
      <div className="sm:max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Inside</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
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
                          <img
                            src={feature.images?.[0] || ""}
                            alt={feature.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="w-16 h-16">
                          <img
                            src={feature.images?.[1] || ""}
                            alt={feature.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-20 h-20 mx-auto">
                        <img
                          src={feature.image}
                          alt={feature.title}
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
                          <img
                            src={feature.images?.[0] || ""}
                            alt={feature.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="w-16 h-16">
                          <img
                            src={feature.images?.[1] || ""}
                            alt={feature.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-20 h-20 mx-auto">
                        <img
                          src={feature.image}
                          alt={feature.title}
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
