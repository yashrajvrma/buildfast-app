"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logoAndName from "@/public/assets/images/logoAndName.png";
import axios from "axios";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleGetBuildfast = async () => {
    console.log("start payment");
    try {
      const response = await axios.post("/api/create-checkout-session", {
        productId: process.env.NEXT_PUBLIC_BUILDFAST_PRO_PRODUCT_ID,
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background"
    >
      <div className="container mx-auto px-4 sm:max-w-6xl w-full">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoAndName}
              alt="buildfast-logo"
              quality={100}
              className="w-28"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>

            <Link
              href="#example"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Example
            </Link>
            <Link
              href="#pricing"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            {/* <Link
              href="#testimonials"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Wall of love
            </Link> */}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={handleGetBuildfast}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Building
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-4"
          >
            <Link
              href="#features"
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#example"
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Example
            </Link>
            <Link
              href="#pricing"
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
            <Button
              onClick={handleGetBuildfast}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Building
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
