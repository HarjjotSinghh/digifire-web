import React from "react"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

import { Button } from "./ui/button"

const footerLinks = [
  {
    title: "About Us",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "How We Work",
    href: "/#how-we-work",
  },
  {
    title: "Testimonials",
    href: "/#testimonials",
  },
  {
    title: "Strategies",
    href: "/#strategies",
  },
  {
    title: "Get In Touch",
    href: "/#get-in-touch",
  },
  {
    title: "Contact Us",
    href: "/#contact",
  },
]

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
          <h1 className="text-2xl font-bold">digifire</h1>
          <div className="flex space-x-2 mt-2">
            <Link href={"#"}>
              <Button size={"icon"} className="px-3 rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"#"}>
              <Button size={"icon"} className="px-3 rounded-full">
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
              {footerLinks.map((link) => (
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
              <Link href={"mailto:hello@digifire.io"} className="">
                <p className={mutedForegroundClasses}>hello@digifire.io</p>
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
