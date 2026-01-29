"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeroImg from "@/public/assets/images/hero.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

export function Hero() {
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
    <section className="sm:pt-40 pt-28 pb-16 px-4 relative overflow-hidden">
      <div className="container mx-auto sm:max-w-7xl">
        <div className="flex flex-col items-center gap-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 w-full sm:max-w-6xl"
          >
            <div className="space-y-4 text-center">
              {/* add product hunt badge */}
              <div className="flex justify-center pb-3">
                <a
                  href="https://www.producthunt.com/products/buildfast-6?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-buildfast-ebec283b-9fb9-4c21-873f-058169d0ab30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="Buildfast - The NextJS boilerplate that all you need to reach 1K+ MRR | Product Hunt"
                    width={250}
                    height={50} // 54
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1068173&amp;theme=light&amp;t=1769424656393"
                  />
                </a>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight sm:max-w-4xl mx-auto">
                Build your startup{" "}
                <span className="relative inline-block pt-3">
                  in days,{" "}
                  <span className="relative inline-block">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute inset-0 bg-foreground -rotate-2"
                      style={{ transformOrigin: "center" }}
                    />
                    <span className="relative inline-block px-3 py-1 text-background">
                      not weeks
                    </span>
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto pt-3 font-medium">
                The NextJS boilerplate with all you need to build your SaaS, AI
                tool, or any other web app and make your first $ online fast.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base"
                onClick={handleGetBuildfast}
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

              <div className="flex flex-col sm:flex-row items-center sm:pt-5 gap-x-4">
                <div className="flex -space-x-1">
                  <Avatar className="ring-2 ring-background">
                    <AvatarImage
                      src="https://i.postimg.cc/t422fpx2/john_result.webp"
                      alt="user 1"
                      loading="lazy"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background">
                    <AvatarImage
                      src="https://i.postimg.cc/85VJmrz9/44.webp"
                      alt="User 2"
                      loading="lazy"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background">
                    <AvatarImage
                      src="https://i.postimg.cc/DZ5DPLcC/avatars3.webp"
                      alt="User 3"
                      loading="lazy"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center gap-2">
                  {/* <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div> */}
                  <span className="text-lg font-medium">
                    60+{" "}
                    <span className="text-muted-foreground">
                      bought it already
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full sm:max-w-7xl hidden sm:flex mt-8"
          >
            <Image
              src={HeroImg}
              alt="hero_img"
              className="w-full h-auto"
              quality={100}
              priority={true}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
