"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Rocket, Code, Palette, Database } from "lucide-react";

export function Packages() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Next.js 15 and optimized for speed",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security with NextAuth",
    },
    {
      icon: Rocket,
      title: "Production Ready",
      description: "Deploy to Vercel in seconds",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "TypeScript, ESLint, and Prettier configured",
    },
    {
      icon: Palette,
      title: "Beautiful UI",
      description: "Stunning components with Tailwind CSS",
    },
    {
      icon: Database,
      title: "Database Included",
      description: "MongoDB or Supabase ready to use",
    },
  ];

  return (
    <section id="example" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything you need to ship fast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop wasting time on boilerplate. Start building your product today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-card">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
