import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

import { navLinks } from "@/config/site"

import { Button } from "./ui/button"

const accentClasses = "text-foreground"
const mutedForegroundClasses =
  "text-foreground/80 hover:text-foreground transition-all duration-300 ease-in-out"

const SiteFooter = () => {
  return (
    <footer
      className={"bg-section-2 text-foreground lg:px-8 px-4 lg:py-16 py-8"}
    >
      <div className="flex flex-col md:flex-row gap-8 justify-between mx-auto max-w-7xl">
        <div className="mb-4 md:mb-0">
          <div className="flex items-start gap-1 justify-center flex-row">
            <Image
              className="mb-6 dark:invert-0 invert"
              src="/images/logo-text.svg"
              alt="Logo"
              width={230}
              height={50}
            />
            <Image
              className="mb-6 dark:invert-0 invert"
              src="/images/icon.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </div>
          <div className="flex space-x-2 mt-2">
            <Link
              href={"https://www.linkedin.com/in/digi-fire-4b6595321/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button size={"icon"} className="!size-12  rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href={"https://www.instagram.com/digifireio"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button size={"icon"} className="!size-12 px-3 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start lg:gap-16 gap-4">
          <div className="mb-4 md:mb-0">
            <h2 className={`text-xl font-semibold ${accentClasses} !mb-4`}>
              Explore
            </h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li>
                  <Link
                    href={link.href}
                    className={`${mutedForegroundClasses} hover:${accentClasses} text-lg`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`text-xl font-semibold ${accentClasses} !mb-4`}>
              Contact Us
            </h2>
            <div className="flex flex-col justify-center items-start gap-2 text-lg">
              <Link href={"mailto:info@digifire.io"} className="">
                <p className={mutedForegroundClasses}>info@digifire.io</p>
              </Link>
              <Link href={"tel:+91916012020"} className="">
                <p className={mutedForegroundClasses}>+91 99160 12020</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-7xl mx-auto text-lg">
        <p className="text-left text-foreground">
          2024 Digifire | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
