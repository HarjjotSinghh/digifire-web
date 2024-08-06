import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { RxHamburgerMenu } from "react-icons/rx"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { Button } from "./ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex w-full gap-6 md:gap-10 md:items-center items-stretch md:justify-between justify-between ">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          draggable={false}
          width={230}
          height={50}
          className="h-8 w-auto select-none"
        />
      </Link>
      {items?.length ? (
        <div>
          <nav className="gap-6 md:flex hidden">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
          <Drawer direction="top">
            <DrawerTrigger className="md:hidden block">
              <Button
                size={"icon"}
                variant="ghost"
                className="flex items-center gap-2"
              >
                <RxHamburgerMenu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  draggable={false}
                  className="select-none"
                  width={230}
                  height={50}
                />
              </DrawerHeader>
              <DrawerDescription className="p-4">
                <ul className="flex flex-col gap-2">
                  {siteConfig.mainNav.map((item, index) => (
                    <li key={index} className="w-fit">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out w-fit"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <h2 className={`text-xl font-semibold text-foreground !mb-2`}>
                    Contact Us
                  </h2>
                  <div className="flex flex-col justify-center items-start gap-2 text-sm">
                    <Link href={"mailto:info@digifire.io"} className="">
                      <p
                        className={
                          "text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out"
                        }
                      >
                        info@digifire.io
                      </p>
                    </Link>
                    <Link href={"tel:+91916012020"} className="">
                      <p
                        className={
                          "text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out"
                        }
                      >
                        +91 99160 12020
                      </p>
                    </Link>
                  </div>
                  <div className="flex space-x-2 mt-6">
                    <Link
                      href={"https://www.linkedin.com/in/digi-fire-4b6595321/"}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button size={"icon"} className="!size-10 rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link
                      href={"https://www.instagram.com/digifireio"}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button size={"icon"} className="!size-10 rounded-full">
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </DrawerDescription>
            </DrawerContent>
          </Drawer>
        </div>
      ) : null}
    </div>
  )
}
