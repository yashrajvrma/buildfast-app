// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { Menu } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";
// import logoAndName from "@/public/assets/images/logoAndName.png";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

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
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 w-full z-50 backdrop-blur-2xl"
//     >
//       <div className="container mx-auto px-6 sm:max-w-7xl w-full border-x border-b">
//         <div className="flex items-center justify-between h-20">
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src={logoAndName}
//               alt="buildfast-logo"
//               quality={100}
//               className="w-28"
//               loading="lazy"
//             />
//           </Link>

//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               href="#features"
//               className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Features
//             </Link>

//             <Link
//               href="#example"
//               className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Example
//             </Link>
//             <Link
//               href="#pricing"
//               className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Pricing
//             </Link>
//             <Link
//               href="#faq"
//               className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
//             >
//               FAQ
//             </Link>
//             {/* <Link
//               href="#testimonials"
//               className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Wall of love
//             </Link> */}
//           </div>

//           <div className="hidden md:block">
//             <Button
//               onClick={handleGetBuildfast}
//               className="bg-primary hover:bg-primary/90 text-primary-foreground"
//             >
//               Start Building
//             </Button>
//           </div>

//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             <Menu className="w-6 h-6" />
//           </button>
//         </div>

//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden pb-4 space-y-4"
//           >
//             <Link
//               href="#features"
//               className="block text-base font-medium text-muted-foreground hover:text-foreground"
//             >
//               Features
//             </Link>
//             <Link
//               href="#example"
//               className="block text-base font-medium text-muted-foreground hover:text-foreground"
//             >
//               Example
//             </Link>
//             <Link
//               href="#pricing"
//               className="block text-base font-medium text-muted-foreground hover:text-foreground"
//             >
//               Pricing
//             </Link>
//             <Link
//               href="#faq"
//               className="block text-base font-medium text-muted-foreground hover:text-foreground"
//             >
//               FAQ
//             </Link>
//             <Button
//               onClick={handleGetBuildfast}
//               className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//             >
//               Start Building
//             </Button>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// }
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80"
    >
      <div className="container mx-auto px-6 sm:max-w-6xl w-full border-x border-b">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-primary-foreground"
                >
                  <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">Buildfast</span>
            </div>
          </Link> */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoAndName}
              alt="buildfast-logo"
              quality={100}
              className="w-28"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 bg-muted rounded-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 text-lg font-medium text-muted-foreground hover:text-background hover:bg-primary rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-8 pt-2 space-y-2 border-b border-border/40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-xl font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-medium px-8 h-12 w-full rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-double border-green-300 mt-3"
              onClick={handleGetBuildfast}
            >
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
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
