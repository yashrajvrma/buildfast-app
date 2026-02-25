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
    <section className="mb-16 px-4 relative overflow-hidden border-b sm:pb-5 pb-24">
      <div className="container mx-auto sm:max-w-7xl sm:pt-36 pt-28">
        <div className="flex flex-col items-center gap-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 w-full sm:max-w-6xl"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              {/* add product hunt badge */}
              {/* <div className="flex justify-center pb-3">
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
              </div> */}
              <div className="flex justify-center sm:pb-3">
                <a
                  href="https://peerlist.io/yashrajvrma/project/buildfast"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://peerlist.io/api/v1/projects/embed/PRJHKKDQPOEL6OAKECDA9JERK66GEA?showUpvote=false&theme=light"
                    alt="Buildfast"
                    // width={250}
                    // height={50}
                    // style="width: auto; height: 72px;"
                    className="sm:w-[250] w-[200]"
                  />
                </a>
              </div>

              <h1 className="text-4xl sm:text-7xl font-bold tracking-tight sm:max-w-3xl mx-auto">
                Ideas to MVP{" "}
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
                    <span className="relative inline-block px-2.5 py-1 text-background">
                      not weeks
                    </span>
                  </span>
                </span>
              </h1>
              {/* <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold sm:tracking-tight tracking-tighter leading-[1.1] max-w-2xl"
              >
                Ideas into MVP in days, not weeks
              </motion.h1> */}

              {/* <p className="text-base sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto pt-2 font-medium">
                The NextJS boilerplate that all you need turn your boring ideas
                into profitable startups and reach{" "}
                <span className="font-semibold text-black">$1K+ MRR</span>
              </p> */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl tracking-tight sm:text-2xl font-normal text-muted-foreground sm:leading-relaxed leading-7 max-w-2xl mx-auto lg:mx-0"
              >
                The Next.js boilerplate that all you need to build & ship your
                SAAS and reach{" "}
                <span className="font-semibold text-black">$1K+ MRR</span>
              </motion.p>
            </div>

            <div className="flex flex-col items-center gap-3 w-full">
              {/* <Button
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
              </Button> */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-medium px-8 h-14 sm:w-80 w-60 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-double border-green-300 gap-x-2"
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
                Get Buildfast
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <polyline
                    points="56 48 136 128 56 208"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  />
                  <polyline
                    points="136 48 216 128 136 208"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  />
                </svg>
              </Button>

              {/* <div className="flex flex-col sm:flex-row items-center sm:pt-5 gap-x-4">
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
                  <span className="text-lg font-medium">
                    60+{" "}
                    <span className="text-muted-foreground">
                      bought it already
                    </span>
                  </span>
                </div>
              </div> */}

              {/* Avatar  */}
              <div className="flex flex-col sm:flex-row items-center sm:pt-5 pt-3 gap-x-4">
                <div className="flex -space-x-1">
                  <Avatar className="ring-2 ring-background w-12 h-12">
                    <AvatarImage
                      src="https://i.postimg.cc/t422fpx2/john_result.webp"
                      alt="user 1"
                      loading="lazy"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background w-12 h-12">
                    <AvatarImage
                      src="https://i.postimg.cc/85VJmrz9/44.webp"
                      alt="User 2"
                      loading="lazy"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background w-12 h-12">
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
                  <span className="text-xl font-bold">
                    75+ <span className="font-normal">bought it already</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full sm:max-w-7xl hidden sm:flex"
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

// "use client";

// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { TechStackShowcase } from "@/components/techstack-showcase";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// export function Hero() {
//   const router = useRouter();

//   const handleGetBuildfast = async () => {
//     console.log("start payment");
//     try {
//       const response = await axios.post("/api/create-checkout-session", {
//         productId: process.env.NEXT_PUBLIC_BUILDFAST_PRO_PRODUCT_ID,
//       });
//       if (response.data) {
//         console.log("data is", JSON.stringify(response.data));
//         const url = response.data.checkoutUrl;
//         router.push(url);
//       }
//     } catch (error) {
//       console.error("Some error occured", error);
//     }
//   };

//   return (
//     <section className="mb-16 relative overflow-hidden border-b px-6">
//       <div className="container">
//         <div className="flex flex-col lg:flex-row items-center gap-10 mx-auto sm:pt-32 pt-28 pb-10">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex-1 space-y-4 w-full flex flex-col items-center lg:items-start"
//           >
//             {/* Peerlist Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex"
//             >
//               <a
//                 href="https://peerlist.io/yashrajvrma/project/buildfast"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <img
//                   src="https://peerlist.io/api/v1/projects/embed/PRJHKKDQPOEL6OAKECDA9JERK66GEA?showUpvote=false&theme=light"
//                   alt="Buildfast"
//                   width={230}
//                   height={50} // 54
//                   // style="width: auto; height: 72px;"
//                 />
//               </a>
//             </motion.div>

//             {/* Main Heading */}
//             <div className="space-y-3 text-center lg:text-left">
// <motion.h1
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.3 }}
//   className="text-5xl sm:text-6xl lg:text-7xl font-bold sm:tracking-tight tracking-tighter leading-[1.1] max-w-2xl"
// >
//   Turn your ideas into MVP in days
// </motion.h1>

// <motion.p
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.4 }}
//   className="text-lg tracking-tight sm:text-2xl font-normal text-muted-foreground sm:leading-relaxed leading-7 max-w-2xl mx-auto lg:mx-0"
// >
//   The Next.js boilerplate that all you need to build & ship your
//   SAAS and reach{" "}
//   <span className="font-semibold text-black">$1K+ MRR</span>
// </motion.p>
//             </div>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="flex flex-col sm:flex-row items-center justify-center gap-x-4 pt-2"
//             >
// <Button
//   size="lg"
//   className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-medium px-8 h-12 sm:w-60 w-48 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-double border-green-300"
//   onClick={handleGetBuildfast}
// >
//   Get Buildfast
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
//     <rect width="256" height="256" fill="none" />
//     <polyline
//       points="56 48 136 128 56 208"
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="24"
//     />
//     <polyline
//       points="136 48 216 128 136 208"
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="24"
//     />
//   </svg>
// </Button>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="text-foreground text-xl font-medium px-8 h-12 w-60 rounded-xl cursor-pointer border-2 border-double"
//                 // onClick={handleGetBuildfast}
//               >
//                 Watch Demo
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
//                   <rect width="256" height="256" fill="none" />
//                   <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
//                 </svg>
//               </Button>
//             </motion.div>

//   {/* Avatar  */}
//   <div className="flex flex-col sm:flex-row items-center sm:pt-5 pt-3 gap-x-4 gap-y-4">
//     <div className="flex -space-x-1">
//       <Avatar className="ring-2 ring-background w-12 h-12">
//         <AvatarImage
//           src="https://i.postimg.cc/t422fpx2/john_result.webp"
//           alt="user 1"
//           loading="lazy"
//         />
//         <AvatarFallback></AvatarFallback>
//       </Avatar>
//       <Avatar className="ring-2 ring-background w-12 h-12">
//         <AvatarImage
//           src="https://i.postimg.cc/85VJmrz9/44.webp"
//           alt="User 2"
//           loading="lazy"
//         />
//         <AvatarFallback></AvatarFallback>
//       </Avatar>
//       <Avatar className="ring-2 ring-background w-12 h-12">
//         <AvatarImage
//           src="https://i.postimg.cc/DZ5DPLcC/avatars3.webp"
//           alt="User 3"
//           loading="lazy"
//         />
//         <AvatarFallback></AvatarFallback>
//       </Avatar>
//     </div>
//     <div className="flex items-center gap-2">
//       {/* <div className="flex">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <Star
//               key={i}
//               className="w-4 h-4 fill-primary text-primary"
//             />
//           ))}
//         </div> */}
//       <span className="text-xl font-bold">
//         75+ <span className="font-normal">bought it already</span>
//       </span>
//     </div>
//   </div>
// </motion.div>

//           {/* Right Side - Tech Stack Showcase */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="flex-1 w-full max-w-md hidden lg:block"
//           >
//             <TechStackShowcase />
//           </motion.div>
//         </div>

//         {/* Mobile Tech Stack Showcase */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//           className="lg:hidden mt-4 flex justify-center"
//         >
//           <TechStackShowcase />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
