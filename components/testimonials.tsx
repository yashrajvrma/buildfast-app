"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Jack Friks",
      role: "Built post-bridge.com",
      content:
        "Without BuildFast I might have never launched my SaaS and I would still be at $0 MRR.",
      revenue: "MRR",
      amount: "$5,868.57",
      growth: "+48.9%",
    },
    {
      name: "Sarah Chen",
      role: "Built taskflow.io",
      content:
        "BuildFast saved me weeks of development time. I was able to launch in 3 days instead of 3 weeks.",
      revenue: "MRR",
      amount: "$3,200",
      growth: "+32%",
    },
    {
      name: "Mike Thompson",
      role: "Built designhub.app",
      content:
        "The best investment I made for my startup. Everything just works out of the box.",
      revenue: "MRR",
      amount: "$4,500",
      growth: "+25%",
    },
  ];

  const logos = [
    { name: "Hacker News", icon: "𝕏" },
    { name: "Product Hunt", icon: "P" },
    { name: "X", icon: "𝕏" },
    { name: "reddit", icon: "r/" },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30" id="testimonials">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Wall of Love
          </h2>
          <p className="text-lg text-muted-foreground">
            Join 7,686+ makers shipping faster
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col bg-card">
                {index === 0 && (
                  <Card className="p-4 mb-4 bg-accent">
                    <div className="text-sm text-muted-foreground mb-1">
                      {testimonial.revenue}
                    </div>
                    <div className="text-2xl font-bold mb-1">
                      {testimonial.amount}
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {testimonial.growth} vs previous month
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-2">
                      Updated Jan 18
                    </div>
                  </Card>
                )}

                <Quote className="w-8 h-8 text-primary mb-4" />
                <blockquote className="flex-1">
                  <p className="text-lg mb-4 leading-relaxed">
                    {testimonial.content}
                  </p>
                </blockquote>

                <div className="flex items-center gap-3 mt-4">
                  <div
                    className="w-12 h-12 rounded-full bg-muted"
                    style={{
                      backgroundImage: `url(/placeholder.svg?height=48&width=48&query=${testimonial.name})`,
                      backgroundSize: "cover",
                    }}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Featured on</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-8 h-8 rounded bg-muted flex items-center justify-center font-bold">
                  {logo.icon}
                </div>
                <span className="font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
