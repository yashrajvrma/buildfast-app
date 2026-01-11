"use client";

import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import axios from "axios";

interface PricingFeature {
  name: string;
  included: boolean;
  isPremium?: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: Record<string, PricingFeature[]>;
  cta: string;
  highlighted?: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "pdt_oZ7JX98ewv5yJ87ILhEo0",
    name: "Starter",
    price: 19,
    description: "Perfect for getting started with modern dev stack",
    features: {
      Framework: [
        { name: "Next.js boilerplate", included: true },
        { name: "Tailwind CSS", included: true },
        { name: "Shaden UI", included: true },
        { name: "Tanstack Query", included: true },
      ],
      Animation: [
        { name: "Framer Motion", included: true },
        { name: "React hot toast", included: true },
      ],
      Authentication: [
        { name: "Better Auth (OAuth)", included: true },
        { name: "Better Auth (Email auth)", included: false, isPremium: true },
      ],
      Database: [
        { name: "Prisma ORM", included: true },
        { name: "PostgreSQL / Supabase", included: true },
      ],
      Email: [{ name: "Resend", included: false, isPremium: true }],
      Payments: [
        {
          name: "Polar Pricing / Dodo Payments",
          included: false,
          isPremium: true,
        },
      ],
    },
    cta: "Get Starter Plan",
  },
  {
    id: "pdt_K3bWcsDFPJEmsR3gIAHAS",
    name: "Pro",
    price: 39,
    description: "Everything you need for getting your first customer",
    features: {
      Framework: [
        { name: "Next.js boilerplate", included: true },
        { name: "Tailwind CSS", included: true },
        { name: "Shaden UI", included: true },
        { name: "Tanstack Query", included: true },
      ],
      Animation: [
        { name: "Framer Motion", included: true },
        { name: "React hot toast", included: true },
      ],
      Authentication: [
        { name: "Better Auth (OAuth)", included: true },
        { name: "Better Auth (Email auth)", included: true },
      ],
      Database: [
        { name: "Prisma ORM", included: true },
        { name: "PostgreSQL / Supabase", included: true },
      ],
      Email: [{ name: "Resend", included: true }],
      Payments: [{ name: "Polar Pricing / Dodo Payments", included: true }],
    },
    cta: "Get Pro Plan",
    highlighted: true,
  },
];

export function PricingSection() {
  const router = useRouter();

  const handleGetBuildfast = async (id: string) => {
    console.log("start payment");
    try {
      const response = await axios.post("/api/create-checkout-session", {
        productId: id,
      });
      if (response.data) {
        console.log("data is", JSON.stringify(response.data));
        const url = response.data.checkoutUrl;
        router.push(url);
      }
    } catch (error) {
      console.error("Some error occured", error);
    }
  };
  return (
    <section
      id="pricing"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="mx-auto sm:max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl sm:max-w-4xl mb-4 text-balance">
            Save hours of repetitive code, build and ship fast, get profitable!
          </h2>
          <p className="flex justify-center items-center align-middle font-medium text-lg text-muted-foreground text-balance">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#19AC7A"
                viewBox="0 0 256 256"
                className="w-7"
              >
                <path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"></path>
              </svg>
            </span>
            <span className="text-primary pr-1">50% off</span>
            for the first 100 customer
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex sm:flex-row flex-col gap-6 sm:max-w-full max-w-md mx-auto">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-primary/5 lg:scale-105 lg:shadow-lg"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="p-8 flex-1 flex flex-col">
                {/* Plan Header */}
                <div className="mb-8">
                  <h4 className="text-2xl text-foreground mb-2">{plan.name}</h4>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-5xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-base text-muted-foreground">
                      One Time Payment
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mb-8 h-10 font-semibold"
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() => handleGetBuildfast(plan.id)}
                >
                  {plan.cta}
                </Button>

                {/* Features by Category */}
                <div className="space-y-6 flex-1">
                  {Object.entries(plan.features).map(([category, features]) => (
                    <div key={category}>
                      <h4 className="text-base font-semibold mb-3 uppercase tracking-wide text-muted-foreground">
                        {category}
                      </h4>
                      <ul className="space-y-3">
                        {features.map((feature) => (
                          <li
                            key={feature.name}
                            className={`flex items-start gap-3 text-base ${
                              feature.included
                                ? "text-foreground"
                                : "text-muted-foreground/50"
                            }`}
                          >
                            {feature.included ? (
                              feature.isPremium ? (
                                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              ) : (
                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              )
                            ) : (
                              <div className="h-5 w-5 shrink-0 mt-0.5" />
                            )}
                            <span
                              className={feature.included ? "" : "line-through"}
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
