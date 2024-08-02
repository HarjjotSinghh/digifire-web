import {
  CloudLightningIcon,
  LightbulbIcon,
  SettingsIcon,
  SpeakerIcon,
  WrenchIcon,
} from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Digifire",
  description:
    "A marketing agency that helps brands grow and succeed in the digital space with a fresh approach. We craft captivating campaigns that leave a lasting impact.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/digifire",
    github: "https://github.com/HarjjotSinghh",
  },
}

export const services = [
  {
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    // Icon: <LightbulbIcon className="size-6" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    // Icon: <CloudLightningIcon className="size-6" />,
  },
  {
    title: "PPC Advertising",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    // Icon: <SpeakerIcon className="size-6" />,
  },
  {
    title: "Design and Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    // Icon: <WrenchIcon className="size-6" />,
  },
  {
    title: "Ads Strategy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    // Icon: <SettingsIcon className="size-6" />,
  },
]
