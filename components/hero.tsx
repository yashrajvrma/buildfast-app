"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Gift } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeroImg from "@/public/assets/images/hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-40 pb-16 px-4 relative overflow-hidden">
      <div className="container mx-auto sm:max-w-7xl">
        <div className="flex flex-col items-center gap-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 w-full sm:max-w-6xl"
          >
            <div className="space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight sm:max-w-4xl mx-auto">
                Build your startup{" "}
                <span className="relative inline-block pt-3">
                  in days,{" "}
                  <span className="relative inline-block">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute inset-0 bg-accent -rotate-2"
                      style={{ transformOrigin: "center" }}
                    />
                    <span className="relative inline-block px-3 py-1">
                      not weeks
                    </span>
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto pt-3">
                The NextJS boilerplate with all you need to build your SaaS, AI
                tool, or any other web app and make your first $ online fast.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base w-auto px-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path>
                </svg>
                Get BuildFast
              </Button>

              <div className="flex flex-col sm:flex-row items-center pt-3 gap-x-4">
                <div className="flex -space-x-2">
                  <Avatar className="ring-2 ring-background">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User 1"
                    />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background">
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="User 2"
                    />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="User 3"
                    />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background">
                    <AvatarImage
                      src="https://github.com/vercel.png"
                      alt="User 4"
                    />
                    <AvatarFallback>U4</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background">
                    <AvatarImage
                      src="https://github.com/nextjs.png"
                      alt="User 5"
                    />
                    <AvatarFallback>U5</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    7686 makers ship faster
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full sm:max-w-7xl mt-8"
          >
            <Image
              src={HeroImg}
              alt="hero_img"
              className="w-full h-auto"
              quality={100}
              priority={true}
              draggable={false}
            />
            {/* <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
              alt="Product showcase"
              className="w-full h-auto rounded-lg shadow-2xl"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
