// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export function Footer() {
//   const links = {
//     product: [
//       { label: "Pricing", href: "#pricing" },
//       { label: "Demo", href: "#demo" },
//       { label: "Testimonials", href: "#testimonials" },
//       { label: "Changelog", href: "#" },
//     ],
//     resources: [
//       { label: "Documentation", href: "#" },
//       { label: "Blog", href: "#" },
//       { label: "Tutorials", href: "#" },
//       { label: "Support", href: "#" },
//     ],
//     company: [
//       { label: "About", href: "#" },
//       { label: "Contact", href: "#" },
//       { label: "Privacy", href: "#" },
//       { label: "Terms", href: "#" },
//     ],
//   };

//   return (
//     <footer className="border-t border-border bg-muted/30">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
//           <div className="lg:col-span-2">
//             <Link href="/" className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold text-xl">
//                   ⚡
//                 </span>
//               </div>
//               <span className="font-bold text-xl">BuildFast</span>
//             </Link>
//             <p className="text-muted-foreground mb-4 max-w-sm">
//               The NextJS boilerplate to ship your startup faster. Build your
//               SaaS, AI tool, or any web app in days.
//             </p>
//             <div className="flex gap-4">
//               {["Twitter", "GitHub", "Discord"].map((social) => (
//                 <motion.a
//                   key={social}
//                   href="#"
//                   whileHover={{ scale: 1.1 }}
//                   className="w-10 h-10 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors"
//                 >
//                   <span className="sr-only">{social}</span>
//                   <div className="w-5 h-5 bg-foreground/20 rounded-full" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">Product</h3>
//             <ul className="space-y-2">
//               {links.product.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-muted-foreground hover:text-foreground transition-colors text-base"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">Resources</h3>
//             <ul className="space-y-2">
//               {links.resources.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-muted-foreground hover:text-foreground transition-colors text-base"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">Company</h3>
//             <ul className="space-y-2">
//               {links.company.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-muted-foreground hover:text-foreground transition-colors text-base"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-base text-muted-foreground">
//             © {new Date().getFullYear()} BuildFast. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             <Link
//               href="#"
//               className="text-base text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="#"
//               className="text-base text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { Package, Mail, Github, Twitter } from "lucide-react";
import footer from "@/public/assets/images/footer_buildfast.png";
import logo from "@/public/assets/images/logo.png";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="text-primary-foreground sm:p-10 p-5">
      <div className="flex flex-col gap-y-10 max-w-7xl mx-auto bg-primary sm:rounded-4xl rounded-3xl sm:px-10 px-5 pt-10">
        {/* Main Content Grid */}
        <div className="flex sm:flex-row flex-col justify-between gap-8 md:gap-16 sm:mb-12 mb-0">
          {/* Header with Logo */}

          <div className="flex justify-center items-center sm:w-14 sm:h-14 w-10 h-10 bg-background  sm:rounded-lg rounded-sm ">
            <Image src={logo} alt="logo" className="sm:w-6 w-4" />
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="hover:opacity-80 transition-opacity">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:opacity-80 transition-opacity"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#example"
                  className="hover:opacity-80 transition-opacity"
                >
                  Example
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:opacity-80 transition-opacity"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-4 h-4" />
                  X/Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@buildfast.com"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Empty column on desktop for spacing */}
          <div></div>
        </div>

        {/* Brand Text */}
        <div className="flex sm:max-w-[1200px] max-w-full justify-center">
          <Image
            src={footer}
            alt="buildfast_footer"
            // width={1100}
            quality={100}
          />

          {/* <h1 className="text-4xl sm:text-8xl font-bold text-pretty">
            BuildFast
          </h1> */}
        </div>
      </div>
    </footer>
  );
}
