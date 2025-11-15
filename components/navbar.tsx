"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logoAndName from "@/public/assets/images/logoAndName.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/70 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 sm:max-w-6xl w-full">
        <div className="flex items-center justify-between h-16">
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
              href="#pricing"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#demo"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#testimonials"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Wall of love
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get BuildFast
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
              href="#pricing"
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#demo"
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Demo
            </Link>
            <Link
              href="#testimonials"
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Wall of love
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Get BuildFast
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
