"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  CreditCard,
  User,
  Database,
  Search,
  Palette,
  MoreHorizontal,
  Check,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  features: string[];
  benefits: { label: string; value: string | number }[];
  integrations: { name: string; logo: string }[];
}

const features: Feature[] = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Emails",
    title: "Emails",
    description:
      "Send transactional emails at lightspeed with built-in integrations",
    features: [
      "Send transactional emails",
      "DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)",
      "Webhook to receive & forward emails",
      "Time saved: 3 hours",
    ],
    benefits: [
      { label: "Time saved", value: "3 hours" },
      { label: "Headaches", value: "0" },
    ],
    integrations: [{ name: "Resend", logo: "/assets/images/resend.png" }],
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    label: "Payments",
    title: "Payments",
    description: "Process payments securely with multiple payment providers",
    features: [
      "Accept credit cards and digital wallets",
      "Recurring subscription support",
      "Webhook handling for payment events",
      "Time saved: 5 hours",
    ],
    benefits: [
      { label: "Time saved", value: "5 hours" },
      { label: "Headaches", value: "0" },
    ],
    integrations: [
      { name: "Stripe", logo: "/assets/images/stripe.png" },
      { name: "Lemon Squeezy", logo: "/assets/images/dodo.png" },
    ],
  },
  {
    icon: <User className="w-6 h-6" />,
    label: "Login",
    title: "Login",
    description: "Secure user authentication and management system",
    features: [
      "Email and password authentication",
      "OAuth social login integration",
      "User session management",
      "Time saved: 4 hours",
    ],
    benefits: [
      { label: "Time saved", value: "4 hours" },
      { label: "Headaches", value: "0" },
    ],
    integrations: [
      { name: "BetterAuth", logo: "/assets/images/betterAuth.png" },
    ],
  },
  {
    icon: <Database className="w-6 h-6" />,
    label: "Database",
    title: "Database",
    description: "Powerful database with built-in ORM and migrations",
    features: [
      "PostgreSQL database setup",
      "Schema migrations included",
      "Real-time data synchronization",
      "Time saved: 6 hours",
    ],
    benefits: [
      { label: "Time saved", value: "6 hours" },
      { label: "Headaches", value: "0" },
    ],
    integrations: [
      { name: "PostgreSQL", logo: "/assets/images/pg.png" },
      { name: "Supabase", logo: "/assets/images/supabase.png" },
    ],
  },
  {
    icon: <Search className="w-6 h-6" />,
    label: "SEO",
    title: "SEO",
    description: "Built-in SEO optimization and meta tag management",
    features: [
      "Automatic sitemap generation",
      "Meta tags optimization",
      "Structured data markup",
      "Time saved: 2 hours",
    ],
    benefits: [
      { label: "Time saved", value: "2 hours" },
      { label: "Headaches", value: "0" },
    ],
    integrations: [
      { name: "Next.js SEO", logo: "/assets/images/nextjs.png" },
      { name: "Vercel Analytics", logo: "/assets/images/vercel.png" },
    ],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    label: "Style and Animation",
    title: "Style & Animation",
    description:
      "Beautiful, pre-built UI components and design system with custom animations",
    features: [
      "Tailwind CSS pre-configured",
      "100+ ready-to-use components",
      "Dark mode support included",
      "Time saved: 7 hours",
    ],
    benefits: [
      { label: "Time saved", value: "7 hours" },
      { label: "Headaches", value: "0" },
    ],
    integrations: [
      { name: "Tailwind CSS", logo: "/assets/images/tailwind.png" },
      { name: "Framer Motion", logo: "/assets/images/framer.png" },
    ],
  },
  {
    icon: <MoreHorizontal className="w-6 h-6" />,
    label: "More",
    title: "More",
    description: "Additional powerful features to accelerate your development",
    features: [
      "Analytics dashboard",
      "Email templates",
      "Admin panel generator",
      "Time saved: 10 hours",
    ],
    benefits: [
      { label: "Time saved", value: "10 hours" },
      { label: "Headaches", value: "0" },
    ],
    integrations: [{ name: "Vercel", logo: "/assets/images/vercel.png" }],
  },
];

export function FeaturesTab() {
  const [activeFeature, setActiveFeature] = useState(0);
  const current = features[activeFeature];

  return (
    <section
      id="example"
      className="flex justify-center w-full py-28 px-4 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="flex flex-col text-4xl sm:text-5xl font-bold tracking-tight mb-6 gap-y-2">
            <div>Supercharge your app instantly,</div>
            <div>launch faster, make $</div>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Login users, process payments and send emails at lightspeed. Spend
            your time building your startup, not integrating APIs. BuildFast
            provides you with the boilerplate code you need to launch, FAST.
          </p>
        </div>

        {/* Icon Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-8 md:gap-12 justify-start md:justify-start">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`flex flex-col items-center gap-3 transition-all duration-300 ${
                  activeFeature === index
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    activeFeature === index
                      ? "bg-primary/10"
                      : "bg-transparent hover:bg-muted"
                  }`}
                >
                  {feature.icon}
                </div>
                <span className="text-base font-medium">{feature.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{current.title}</h3>
            <ul className="space-y-3">
              {current.features.map((feature, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div className="flex gap-3 items-center flex-wrap pt-4 border-t border-border">
            <span className="text-base text-muted-foreground">with</span>
            {current.integrations.map((integration: any, index: any) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="w-8 h-8 relative rounded overflow-hidden flex items-center justify-center bg-white">
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="w-full h-full object-contain"
                    quality={100}
                    width={100}
                    height={100}
                  />
                </div>
                <span className="text-base font-medium">
                  {integration.name}
                </span>
                {index < current.integrations.length - 1 && (
                  <span className="text-muted-foreground ml-2">OR</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
