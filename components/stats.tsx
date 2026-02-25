"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function Stats() {
  return (
    <section className="py-24 px-4 border-b">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-balance">
            Save <span className="text-primary">22+ hours</span> of headaches
          </h2>
          <p className="text-xl text-muted-foreground">
            Stop overthinking and start shipping
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto p-8 bg-linear-to-br from-primary/10 via-accent/10 to-muted text-xl">
            <div className="space-y-3 text-center">
              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">4 hrs</span> to set
                up emails
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">+ 6 hrs</span>{" "}
                designing a landing page
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">+ 4 hrs</span> to
                handle Stripe webhooks
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">+ 2 hrs</span> for
                SEO tags
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">+ 1 hr</span>{" "}
                applying for Google OAuth
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">+ 3 hrs</span> for
                DNS records
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">+ 2 hrs</span> for
                protected API routes
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">+ ∞ hrs</span>{" "}
                overthinking...
              </div>
              <div className="pt-6 border-t border-border mt-6">
                <div className="text-2xl font-bold">
                  = <span className="text-primary">22+ hours</span> of headaches
                  🤯
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xl mt-8 text-muted-foreground"
        >
          ↓ There's an easier way
        </motion.div>
      </div>
    </section>
  );
}
