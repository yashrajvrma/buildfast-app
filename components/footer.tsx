"use client";

import footer from "@/public/assets/images/footer_buildfast.png";
import logo from "@/public/assets/images/logo.png";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="text-primary-foreground sm:p-10 pt-20 p-5 text-xl">
      <div className="flex flex-col gap-y-10 max-w-7xl mx-auto bg-primary sm:rounded-4xl rounded-3xl sm:px-10 px-5 pt-10">
        {/* Main Content Grid */}
        <div className="flex sm:flex-row flex-col justify-between gap-8 md:gap-16 sm:mb-12 mb-0">
          {/* Header with Logo */}

          <div className="flex justify-center items-center sm:w-14 sm:h-14 w-10 h-10 bg-background  sm:rounded-lg rounded-sm ">
            <Image
              src={logo}
              alt="logo"
              loading="lazy"
              className="sm:w-6 w-4"
            />
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
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
            <h3 className="text-xl font-semibold mb-6">Follow us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://x.com/yashrajvrma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  {/* <Twitter className="w-4 h-4" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/theyashrajverma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                  {/* <Linkedin className="w-4 h-4" /> */}
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@buildfast.shop"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  {/* <Mail className="w-4 h-4" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                  </svg>
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
            draggable={false}
            loading="lazy"
          />

          {/* <h1 className="text-4xl sm:text-8xl font-bold text-pretty">
            BuildFast
          </h1> */}
        </div>
      </div>
    </footer>
  );
}
