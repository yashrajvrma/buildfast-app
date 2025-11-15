"use client";

import { useState } from "react";
import { ChevronDown, PlusCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string | string[];
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What do I get exactly?",
    answer: [
      "The Next.js starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more.",
      "The repo is available in:",
      "• Javascript and Typescript",
      "• /app router and /pages router",
      "The documentation helps you set up your app from scratch, write copy that sells, and ship fast.",
      "With the Premium plan, access to our Discord with 5,000+ makers, the Leaderboards to showcase your startup, and $1,210 worth of unique discounts.",
    ],
  },
  {
    question: "Does BuildFast work with AI (Cursor, Copilot)?",
    answer: [
      "It does not only work with AI, it's built for it.",
      "BuildFast comes with a complete codebase—which gives your AI code editor real context to build full features in seconds.",
      "You can just ask your AI to build the feature you need, and it will generate the code for you, using the naming convention, file structure, and best practices you're used to.",
    ],
  },
  {
    question: "My tech stack is different, can I still use it?",
    answer: [
      "Yes, as long as you're comfortable with React & Next.js.",
      "Libraries are independent. You can use SendGrid instead of Mailgun, LemonSqueezy instead of Stripe, or Postgres instead of MongoDB, for instance.",
    ],
  },
  {
    question: "Is it a website template?",
    answer: [
      "It's more than just a template. You can copy/paste sections to build your site quickly, like a pricing section, an FAQ, and even an entire blog. You also get a bunch of UI components like buttons, modals, popovers, etc.",
      "The Next.js starter also comes with handy tools you need to run an online business—payment processing, emails, SEO, etc.",
    ],
  },
  {
    question: "Are there any other costs associated?",
    answer: [
      "Many hosting platforms, like Vercel, let you host a project for free (front-end + back-end) and MongoDB/Supabase have free tiers — so you can launch your first app for $0/month.",
    ],
  },
  {
    question: "Can I get a refund?",
    answer: [
      "No, it's a digital product so no refund will be provided once you get access.",
    ],
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Header */}
          <div className="flex flex-col justify-start lg:items-start items-center text-center lg:text-left">
            <p className="text-base font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              FAQ
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance mb-8 max-w-3xl">
              Frequently asked questions about us
            </h2>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <Card
                onClick={() => toggleFAQ(index)}
                key={index}
                className="border border-border overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <button className="w-full px-6 flex items-center justify-between transition-colors cursor-pointer">
                  <h3 className="text-lg font-semibold text-foreground text-left">
                    {item.question}
                  </h3>
                  <div
                    className={`ml-4 shrink-0 p-0 text-primary-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    <PlusCircle className="h-5 w-5 text-primary" />
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-0 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="text-muted-foreground space-y-3 text-base leading-relaxed">
                      {typeof item.answer === "string" ? (
                        <p>{item.answer}</p>
                      ) : (
                        item.answer.map((paragraph, idx) => (
                          <p
                            key={idx}
                            className={paragraph.startsWith("•") ? "ml-4" : ""}
                          >
                            {paragraph}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
