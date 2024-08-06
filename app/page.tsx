"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CloudLightningIcon,
  LightbulbIcon,
  SettingsIcon,
  SpeakerIcon,
  WrenchIcon,
} from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
  Parallax,
  Thumbs,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import "swiper/css/parallax"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-flip"
import "swiper/css/effect-creative"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { InputBlock } from "@/components/ui/input"

const iconClassName = "size-8 text-black/70"
const iconClassName2 = "size-4 text-black/70"

const services = [
  {
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    Icon: <LightbulbIcon className={iconClassName} />,
  },
  {
    title: "SEO Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    Icon: <CloudLightningIcon className={iconClassName} />,
  },
  {
    title: "PPC Advertising",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    Icon: <SpeakerIcon className={iconClassName} />,
  },
  {
    title: "Design and Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    Icon: <WrenchIcon className={iconClassName} />,
  },
  {
    title: "Ads Strategy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore nisi dolorem officiis at asperiores omnis. Voluptatem sequi a saepe veniam fugiat tempore, error perspiciatis.",
    Icon: <SettingsIcon className={iconClassName} />,
  },
]

const howWeWork = [
  {
    title: "Strategy & Consulting",
    description: `At Digifire.io, we believe that a solid strategy is the foundation of any successful marketing campaign. Our expert consultants work closely with you to understand your business goals and craft a bespoke digital marketing strategy that drives results. Services include:
    \n
    • Digital Marketing Strategy Development\n
    • Market Research and Analysis\n
    • Competitor Analysis\n
    • Brand Strategy and Positioning\n
    • Customer Persona Development\n
    • KPI Setting and Tracking\n
    • Consulting and Auditing`,
  },
  {
    title: "Content Marketing",
    description: `Engaging and high-quality content is crucial for attracting and retaining customers. Our content marketing services are designed to create and distribute valuable content that resonates with your target audience. Services include:
    \n
    • Content Strategy Development\n
    • Blog Writing and Management\n
    • Copywriting\n
    • Infographic Design\n
    • Video Production\n
    • Podcast Production\n
    • Case Studies and White Papers`,
  },
  {
    title: "Search Engine Optimization",
    description: `Increase your online visibility and attract more organic traffic with our comprehensive SEO services. We use the latest techniques and best practices to ensure your website ranks high on search engines. Services include:
    \n
    • On-Page SEO\n
    • Off-Page SEO\n
    • Technical SEO\n
    • Local SEO\n
    • SEO Audits\n
    • Keyword Research and Analysis\n
    • Link Building`,
  },
  {
    title: "Pay-Per-Click Advertising",
    description: `Maximize your ROI with targeted PPC campaigns. Our team of experts will help you create, manage, and optimize your ads to reach your desired audience effectively. Services include:
    \n
    • Google Ads Management\n
    • Bing Ads Management\n
    • Display Advertising\n
    • Retargeting Campaigns\n
    • YouTube Advertising\n
    • Shopping Ads`,
  },
  {
    title: "Social Media Marketing",
    description: `Harness the power of social media to build your brand and engage with your audience. We offer comprehensive social media marketing services to help you create a strong online presence. Services include:
    \n
    • Social Media Strategy\n
    • Profile Setup and Optimization\n
    • Content Creation and Posting\n
    • Community Management\n
    • Social Media Advertising\n
    • Influencer Marketing\n
    • Social Media Analytics and Reporting`,
  },
  {
    title: "Email Marketing",
    description: `Stay connected with your customers and drive conversions with personalized email marketing campaigns. Our services ensure that your emails are engaging, relevant, and effective. Services include:
    \n
    • Email Campaign Strategy\n
    • Email List Building\n
    • Email Design and Development\n
    • Automated Email Sequences\n
    • Newsletter Management\n
    • A/B Testing and Optimization`,
  },
  {
    title: "Web Development and Design",
    description: `Create a stunning online presence with our web development and design services. We build responsive, user-friendly websites that not only look great but also perform well. Services include:
    \n
    • Website Design and Redesign\n
    • Responsive Web Development\n
    • E-commerce Development\n
    • Landing Page Design\n
    • UI/UX Design\n
    • Website Maintenance and Updates`,
  },
  {
    title: "E-commerce Marketing",
    description: `Drive sales and grow your online store with our e-commerce marketing services. We offer a range of solutions to help you optimize your product listings and increase conversions. Services include:
    \n
    • E-commerce SEO\n
    • Product Listing Optimization\n
    • E-commerce PPC\n
    • Cart Abandonment Solutions\n
    • E-commerce Email Marketing`,
  },
  {
    title: "Mobile Marketing",
    description: `Reach your audience on the go with our mobile marketing services. From app marketing to SMS campaigns, we have the expertise to ensure your mobile presence is strong. Services include:
    \n
    • App Store Optimization (ASO)\n
    • Mobile App Marketing\n
    • SMS Marketing\n
    • Mobile Advertising`,
  },
  {
    title: "Affiliate Marketing",
    description: `Expand your reach and boost your sales with our affiliate marketing services. We help you set up and manage effective affiliate programs that drive results. Services include:
    \n
    • Affiliate Program Setup\n
    • Affiliate Recruitment\n
    • Affiliate Management\n
    • Performance Tracking`,
  },
  {
    title: "Creative Services",
    description: `Stand out from the crowd with our creative services. Our talented team of designers and creatives will help you build a strong brand identity that resonates with your audience. Services include:
    \n
    • Branding and Identity Design\n
    • Logo Design\n
    • Brand Guidelines Development\n
    • Visual Branding\n
    • Graphic Design\n
    • Video Editing\n
    • Photography\n
    • Animation and Motion Graphics\n
    • Packaging Design`,
  },
]

const stratergies = [
  {
    title: "AUDIENCE SEGMENTATION",
    description:
      "Segmenting audience based on demographics, interests, or behaviors to deliver personalized marketing messages.",
  },
  {
    title: "CONTENT PLANNING",
    description:
      "Developing a plan for creating and publishing content across different and platforms, ensuring consistency.",
  },
  {
    title: "COMPETITIVE ANALYSIS",
    description:
      "Analyzing competitors' strategies, strengths, and weaknesses to identify opportunities for differentiation and gain edge in the market.",
  },
  {
    title: "LIFECYCLE MARKETING",
    description:
      "Developing targeted marketing campaigns tailored to different stages of the customer lifecycle to drive repeat business.",
  },
  {
    title: "BRAND POSITIONING",
    description:
      "Defining brands unique value proposition and differentiation in the market to attract target audience.",
  },
  {
    title: "COLLABORATION INITIATIVES",
    description:
      "Partnering with brands or influencers to expand reach and create beneficial marketing campaigns or promotions.",
  },
]

const testimonials = [
  {
    logo: (
      <svg
        className="brightness-[9000%] opacity-50 grayscale w-36 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="176"
        height="40"
        fill="none"
        viewBox="0 0 176 40"
      >
        <path
          fill="#283841"
          fill-rule="evenodd"
          d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#283841"
          d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        ></path>
      </svg>
    ),
    heading: "95%",
    subHeading: "INCREASE IN CONVERSION RATE",
    description:
      "The agency's conversion rate optimization strategies transformed our e-commerce performance. We saw a 95% increase in conversion rates within just two months, leading to significant revenue growth.",
    cta: "VISIT WEBSITE",
    Icon: (
      <ArrowRight
        className={cn(
          iconClassName2,
          "group-hover:-rotate-45 transition-all duration-300 ease-in-out"
        )}
      />
    ),
  },
  {
    logo: (
      <svg
        className="brightness-[9000%] opacity-50 grayscale w-36 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="220"
        height="40"
        fill="none"
        viewBox="0 0 220 40"
      >
        <path
          fill="#0E1534"
          d="M20 40c11.046 0 20-8.954 20-20V6a6 6 0 0 0-6-6H21v8.774c0 2.002.122 4.076 1.172 5.78a9.999 9.999 0 0 0 6.904 4.627l.383.062a.8.8 0 0 1 0 1.514l-.383.062a10 10 0 0 0-8.257 8.257l-.062.383a.8.8 0 0 1-1.514 0l-.062-.383a10 10 0 0 0-4.627-6.904C12.85 21.122 10.776 21 8.774 21H.024C.547 31.581 9.29 40 20 40Z"
        ></path>
        <path
          fill="#0E1534"
          d="M0 19h8.774c2.002 0 4.076-.122 5.78-1.172a10.018 10.018 0 0 0 3.274-3.274C18.878 12.85 19 10.776 19 8.774V0H6a6 6 0 0 0-6 6v13ZM46.455 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM211.711 12.104c5.591 0 8.289 3.905 8.289 8.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145 0-2.86 1.692-2.86 3.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145 0-2.893 1.692-2.893 3.742v7.486h-5.85v-8.495c0-4.523 2.697-8.428 8.288-8.428 3.056 0 5.266 1.204 6.274 3.189 1.072-1.985 3.413-3.19 6.208-3.19ZM180.427 23.82c1.885 0 2.698-1.725 2.698-3.776v-7.29h5.85v8.006c0 4.784-2.795 8.755-8.548 8.755-5.754 0-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0 2.05.812 3.776 2.698 3.776ZM163.275 29.547c-3.673 0-6.046-1.269-7.444-3.742l4.226-2.376c.585 1.041 1.462 1.562 2.925 1.562 1.203 0 1.755-.423 1.755-.944 0-1.985-8.581.033-8.581-6.28 0-3.06 2.6-5.533 7.021-5.533 3.868 0 5.981 1.887 6.924 3.71l-4.226 2.408c-.357-.976-1.463-1.562-2.568-1.562-.845 0-1.3.358-1.3.846 0 2.018 8.581.163 8.581 6.281 0 3.417-3.348 5.63-7.313 5.63ZM142.833 36.512h-5.851V20.858c0-4.98 3.738-8.592 8.939-8.592 5.071 0 8.939 3.873 8.939 8.592 0 5.207-3.446 8.657-8.614 8.657-1.203 0-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.124-3.088-3.124s-3.088 1.4-3.088 3.125c0 1.692 1.235 3.124 3.088 3.124ZM131.121 11.03c-1.918 0-3.51-1.595-3.51-3.515 0-1.92 1.592-3.515 3.51-3.515 1.918 0 3.511 1.595 3.511 3.515 0 1.92-1.593 3.515-3.511 3.515Zm-2.925 1.724h5.851v16.273h-5.851V12.754ZM116.97 29.515c-5.071 0-8.939-3.905-8.939-8.657 0-4.719 3.868-8.624 8.939-8.624s8.939 3.905 8.939 8.624c0 4.752-3.868 8.657-8.939 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM96.983 37c-4.03 0-6.956-1.79-8.451-4.98l4.843-2.603c.52 1.107 1.495 2.246 3.51 2.246 2.114 0 3.511-1.335 3.674-3.678-.78.684-2.016 1.204-3.868 1.204-4.519 0-8.16-3.482-8.16-8.364 0-4.718 3.869-8.559 8.94-8.559 5.201 0 8.939 3.613 8.939 8.592v6.444c0 5.858-4.064 9.698-9.427 9.698Zm.39-13.31c1.755 0 3.088-1.205 3.088-2.995 0-1.757-1.332-2.929-3.088-2.929-1.723 0-3.088 1.172-3.088 2.93 0 1.79 1.365 2.993 3.088 2.993ZM78.607 29.515c-5.071 0-8.94-3.905-8.94-8.657 0-4.719 3.869-8.624 8.94-8.624 5.07 0 8.939 3.905 8.939 8.624 0 4.752-3.869 8.657-8.94 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM59.013 7.06v16.434H68.7v5.533H58.2c-3.705 0-5.2-1.953-5.2-5.045V7.06h6.013Z"
        ></path>
      </svg>
    ),
    heading: "60%",
    subHeading: "REDUCTION IN COST PER LEAD",
    description:
      "Thanks to their data-driven approach to PPC campaigns, we were able to reduce our cost per lead by 60% while maintaining the same volume of quality leads. Their expertise in ad optimization is unparalleled.",
    cta: "VISIT WEBSITE",
    Icon: (
      <ArrowRight
        className={cn(
          iconClassName2,
          "group-hover:-rotate-45 transition-all duration-300 ease-in-out"
        )}
      />
    ),
  },
  {
    logo: (
      <svg
        className="brightness-[9000%] opacity-50 grayscale w-36 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="187"
        height="40"
        fill="none"
        viewBox="0 0 187 40"
      >
        <path
          fill="#3A724F"
          fill-rule="evenodd"
          d="M19.87 4.567 22.507 0l7.476 4.317-2.636 4.566c-.463.801.23 1.775 1.138 1.6l5.052-.975 1.635 8.477-5.052.974c-8.172 1.576-14.411-7.184-10.25-14.392Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#DC8E43"
          fill-rule="evenodd"
          d="M15.302 35.433 12.665 40l-7.477-4.316 2.637-4.567c.463-.801-.23-1.775-1.139-1.6l-5.051.974L0 22.015l5.052-.974c8.172-1.576 14.41 7.184 10.25 14.392Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#14424C"
          fill-rule="evenodd"
          d="M15.53 4.567 12.894 0 5.417 4.317l2.637 4.566c.462.801-.23 1.775-1.139 1.6l-5.052-.975L.23 17.985l5.051.974c8.173 1.576 14.412-7.184 10.25-14.392Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#C85D1B"
          fill-rule="evenodd"
          d="M19.65 35.433 22.285 40l7.477-4.316-2.637-4.567c-.462-.801.23-1.775 1.139-1.6l5.051.974 1.635-8.476-5.052-.974c-8.172-1.576-14.41 7.184-10.25 14.392Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#14424C"
          d="M163.114 30.153v-8.5c0-1.178.271-2.235.813-3.17.561-.954 1.356-1.702 2.385-2.245 1.029-.542 2.254-.813 3.675-.813a7.23 7.23 0 0 1 1.964.252c.599.15 1.141.365 1.627.645.505.262.935.58 1.291.954h.056a5.5 5.5 0 0 1 1.29-.954 6.772 6.772 0 0 1 1.656-.645 7.541 7.541 0 0 1 1.992-.252c1.421 0 2.646.27 3.675.813 1.028.543 1.823 1.29 2.384 2.245.562.935.842 1.991.842 3.17v8.5h-4.377v-8.36c0-.467-.121-.888-.364-1.262a2.663 2.663 0 0 0-.926-.954 2.508 2.508 0 0 0-1.347-.365c-.505 0-.963.122-1.374.365a2.654 2.654 0 0 0-.926.954 2.4 2.4 0 0 0-.337 1.262v8.36h-4.348v-8.36c0-.467-.122-.888-.365-1.262a2.585 2.585 0 0 0-.954-.954 2.508 2.508 0 0 0-1.347-.365c-.505 0-.963.122-1.374.365a2.654 2.654 0 0 0-.926.954 2.41 2.41 0 0 0-.337 1.262v8.36h-4.348ZM153.603 30.49c-1.477 0-2.759-.28-3.843-.842-1.066-.58-1.889-1.356-2.469-2.328-.58-.991-.87-2.086-.87-3.283v-8.276h4.349v8.164c0 .505.121.973.364 1.403.243.411.571.748.982 1.01.43.243.917.365 1.459.365.524 0 .991-.122 1.403-.365.43-.262.767-.599 1.01-1.01.243-.43.365-.898.365-1.403v-8.164h4.348v8.276c0 1.197-.281 2.292-.842 3.283-.561.972-1.374 1.749-2.44 2.328-1.048.561-2.32.842-3.816.842ZM132.414 30.153v-3.45h6.93c.187 0 .355-.038.505-.113.149-.093.271-.215.364-.364a.93.93 0 0 0 0-.982.9.9 0 0 0-.364-.337.934.934 0 0 0-.505-.14h-2.525c-.936 0-1.787-.15-2.553-.449a4.052 4.052 0 0 1-1.796-1.459c-.43-.673-.645-1.543-.645-2.609 0-.823.196-1.571.589-2.244a4.76 4.76 0 0 1 1.655-1.628 4.568 4.568 0 0 1 2.329-.617h6.929v3.479h-6.256a.97.97 0 0 0-.673.253.841.841 0 0 0-.253.617c0 .262.085.486.253.673a.97.97 0 0 0 .673.253h2.469c1.047 0 1.945.159 2.693.476.767.3 1.356.786 1.768 1.46.43.673.645 1.542.645 2.608 0 .842-.215 1.609-.645 2.3a4.613 4.613 0 0 1-1.684 1.656c-.692.412-1.477.617-2.356.617h-7.547ZM122.94 15.425c1.216 0 2.291.196 3.226.589a6.41 6.41 0 0 1 2.413 1.627 6.993 6.993 0 0 1 1.543 2.469c.355.935.533 1.973.533 3.114 0 1.421-.299 2.684-.898 3.787a6.471 6.471 0 0 1-2.412 2.553c-1.029.617-2.226.926-3.591.926-.58 0-1.132-.075-1.656-.224a5.312 5.312 0 0 1-1.402-.646 3.9 3.9 0 0 1-1.038-1.038h-.085v7.66h-4.348V23.223c0-1.59.318-2.965.954-4.124a6.666 6.666 0 0 1 2.693-2.694c1.16-.654 2.516-.981 4.068-.981Zm0 3.759c-.673 0-1.262.168-1.767.505-.487.318-.861.767-1.123 1.347-.261.56-.392 1.197-.392 1.907 0 .711.131 1.347.392 1.908.262.561.636 1.01 1.123 1.347.505.318 1.094.477 1.767.477.673 0 1.253-.16 1.739-.477a3.297 3.297 0 0 0 1.123-1.347c.28-.561.42-1.197.42-1.908 0-.71-.14-1.346-.42-1.907-.262-.58-.636-1.03-1.123-1.347-.486-.337-1.066-.505-1.739-.505ZM108.617 30.153V15.761h4.377v14.392h-4.377Zm2.188-16.019c-.692 0-1.29-.252-1.795-.757-.505-.505-.758-1.104-.758-1.796s.253-1.29.758-1.795c.505-.524 1.103-.786 1.795-.786s1.291.262 1.796.786c.505.505.757 1.103.757 1.795s-.252 1.29-.757 1.796c-.505.505-1.104.757-1.796.757ZM99.105 30.49c-1.477 0-2.805-.327-3.984-.982a7.462 7.462 0 0 1-2.805-2.693c-.673-1.141-1.01-2.422-1.01-3.844 0-1.44.337-2.721 1.01-3.843a7.462 7.462 0 0 1 2.805-2.693c1.179-.674 2.507-1.01 3.984-1.01 1.478 0 2.796.336 3.956 1.01a7.25 7.25 0 0 1 2.777 2.693c.692 1.122 1.038 2.403 1.038 3.843 0 1.422-.346 2.703-1.038 3.844a7.25 7.25 0 0 1-2.777 2.693c-1.178.655-2.497.982-3.956.982Zm0-3.787c.692 0 1.291-.169 1.796-.505a3.424 3.424 0 0 0 1.178-1.347c.281-.561.421-1.197.421-1.908 0-.692-.14-1.318-.421-1.88a3.423 3.423 0 0 0-1.178-1.346c-.505-.337-1.104-.505-1.796-.505s-1.3.168-1.823.505a3.428 3.428 0 0 0-1.179 1.347 4.144 4.144 0 0 0-.42 1.88c0 .71.14 1.346.42 1.907a3.43 3.43 0 0 0 1.179 1.347c.523.336 1.131.505 1.823.505ZM77.174 35.849v-3.732h7.181c.281 0 .515-.093.702-.28a.83.83 0 0 0 .28-.646v-3.17h-.084a6.59 6.59 0 0 1-1.206 1.094c-.412.3-.88.524-1.403.674a6.023 6.023 0 0 1-1.711.224c-1.272 0-2.413-.3-3.423-.898-.991-.617-1.777-1.468-2.357-2.553-.56-1.084-.841-2.319-.841-3.703 0-1.365.29-2.609.87-3.731.598-1.122 1.468-2.02 2.609-2.693 1.14-.674 2.534-1.01 4.18-1.01 1.571 0 2.927.327 4.068.982a6.624 6.624 0 0 1 2.693 2.72c.636 1.16.954 2.526.954 4.097v8.416c0 1.29-.383 2.31-1.15 3.058-.748.767-1.786 1.15-3.114 1.15h-8.248Zm4.825-9.483c.673 0 1.253-.15 1.74-.449a3.18 3.18 0 0 0 1.121-1.262 3.834 3.834 0 0 0 .393-1.74c0-.673-.13-1.29-.392-1.851-.262-.561-.636-1.001-1.123-1.319-.486-.337-1.066-.505-1.74-.505-.654 0-1.234.159-1.739.477-.486.318-.86.748-1.122 1.29-.261.543-.392 1.15-.392 1.824 0 .655.13 1.253.392 1.796.262.523.636.944 1.123 1.262.504.318 1.084.477 1.739.477ZM65.473 30.49c-1.477 0-2.805-.327-3.983-.982a7.46 7.46 0 0 1-2.806-2.693c-.673-1.141-1.01-2.422-1.01-3.844 0-1.44.337-2.721 1.01-3.843a7.46 7.46 0 0 1 2.806-2.693c1.178-.674 2.506-1.01 3.983-1.01 1.478 0 2.796.336 3.956 1.01a7.252 7.252 0 0 1 2.777 2.693c.692 1.122 1.038 2.403 1.038 3.843 0 1.422-.346 2.703-1.038 3.844a7.252 7.252 0 0 1-2.777 2.693c-1.178.655-2.497.982-3.956.982Zm0-3.787c.692 0 1.29-.169 1.796-.505a3.43 3.43 0 0 0 1.178-1.347c.28-.561.42-1.197.42-1.908 0-.692-.14-1.318-.42-1.88a3.429 3.429 0 0 0-1.178-1.346c-.505-.337-1.104-.505-1.796-.505s-1.3.168-1.823.505a3.428 3.428 0 0 0-1.179 1.347 4.145 4.145 0 0 0-.42 1.88c0 .71.14 1.346.42 1.907a3.43 3.43 0 0 0 1.179 1.347c.523.336 1.131.505 1.823.505ZM51.547 30.153c-1.216 0-2.282-.27-3.198-.813a5.763 5.763 0 0 1-2.132-2.16c-.505-.898-.758-1.89-.758-2.974V10.515h4.713v14.027c0 .45.16.842.477 1.179.318.336.71.505 1.178.505h5.19v3.927h-5.47Z"
        ></path>
      </svg>
    ),
    heading: "3.5X",
    subHeading: "INCREASE IN ORGANIC TRAFFIC",
    description:
      "The agency's comprehensive SEO strategy resulted in a 3.5x increase in our organic traffic within six months. Their content marketing efforts significantly improved our search rankings for key terms.",
    cta: "VISIT WEBSITE",
    Icon: (
      <ArrowRight
        className={cn(
          iconClassName2,
          "group-hover:-rotate-45 transition-all duration-300 ease-in-out"
        )}
      />
    ),
  },
  {
    logo: (
      <svg
        className="brightness-[9000%] opacity-50 grayscale w-36 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="187"
        height="40"
        fill="none"
        viewBox="0 0 187 40"
      >
        <path
          fill="#3A724F"
          fill-rule="evenodd"
          d="M19.87 4.567 22.507 0l7.476 4.317-2.636 4.566c-.463.801.23 1.775 1.138 1.6l5.052-.975 1.635 8.477-5.052.974c-8.172 1.576-14.411-7.184-10.25-14.392Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#DC8E43"
          fill-rule="evenodd"
          d="M15.302 35.433 12.665 40l-7.477-4.316 2.637-4.567c.463-.801-.23-1.775-1.139-1.6l-5.051.974L0 22.015l5.052-.974c8.172-1.576 14.41 7.184 10.25 14.392Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#14424C"
          fill-rule="evenodd"
          d="M15.53 4.567 12.894 0 5.417 4.317l2.637 4.566c.462.801-.23 1.775-1.139 1.6l-5.052-.975L.23 17.985l5.051.974c8.173 1.576 14.412-7.184 10.25-14.392Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#C85D1B"
          fill-rule="evenodd"
          d="M19.65 35.433 22.285 40l7.477-4.316-2.637-4.567c-.462-.801.23-1.775 1.139-1.6l5.051.974 1.635-8.476-5.052-.974c-8.172-1.576-14.41 7.184-10.25 14.392Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#14424C"
          d="M163.114 30.153v-8.5c0-1.178.271-2.235.813-3.17.561-.954 1.356-1.702 2.385-2.245 1.029-.542 2.254-.813 3.675-.813a7.23 7.23 0 0 1 1.964.252c.599.15 1.141.365 1.627.645.505.262.935.58 1.291.954h.056a5.5 5.5 0 0 1 1.29-.954 6.772 6.772 0 0 1 1.656-.645 7.541 7.541 0 0 1 1.992-.252c1.421 0 2.646.27 3.675.813 1.028.543 1.823 1.29 2.384 2.245.562.935.842 1.991.842 3.17v8.5h-4.377v-8.36c0-.467-.121-.888-.364-1.262a2.663 2.663 0 0 0-.926-.954 2.508 2.508 0 0 0-1.347-.365c-.505 0-.963.122-1.374.365a2.654 2.654 0 0 0-.926.954 2.4 2.4 0 0 0-.337 1.262v8.36h-4.348v-8.36c0-.467-.122-.888-.365-1.262a2.585 2.585 0 0 0-.954-.954 2.508 2.508 0 0 0-1.347-.365c-.505 0-.963.122-1.374.365a2.654 2.654 0 0 0-.926.954 2.41 2.41 0 0 0-.337 1.262v8.36h-4.348ZM153.603 30.49c-1.477 0-2.759-.28-3.843-.842-1.066-.58-1.889-1.356-2.469-2.328-.58-.991-.87-2.086-.87-3.283v-8.276h4.349v8.164c0 .505.121.973.364 1.403.243.411.571.748.982 1.01.43.243.917.365 1.459.365.524 0 .991-.122 1.403-.365.43-.262.767-.599 1.01-1.01.243-.43.365-.898.365-1.403v-8.164h4.348v8.276c0 1.197-.281 2.292-.842 3.283-.561.972-1.374 1.749-2.44 2.328-1.048.561-2.32.842-3.816.842ZM132.414 30.153v-3.45h6.93c.187 0 .355-.038.505-.113.149-.093.271-.215.364-.364a.93.93 0 0 0 0-.982.9.9 0 0 0-.364-.337.934.934 0 0 0-.505-.14h-2.525c-.936 0-1.787-.15-2.553-.449a4.052 4.052 0 0 1-1.796-1.459c-.43-.673-.645-1.543-.645-2.609 0-.823.196-1.571.589-2.244a4.76 4.76 0 0 1 1.655-1.628 4.568 4.568 0 0 1 2.329-.617h6.929v3.479h-6.256a.97.97 0 0 0-.673.253.841.841 0 0 0-.253.617c0 .262.085.486.253.673a.97.97 0 0 0 .673.253h2.469c1.047 0 1.945.159 2.693.476.767.3 1.356.786 1.768 1.46.43.673.645 1.542.645 2.608 0 .842-.215 1.609-.645 2.3a4.613 4.613 0 0 1-1.684 1.656c-.692.412-1.477.617-2.356.617h-7.547ZM122.94 15.425c1.216 0 2.291.196 3.226.589a6.41 6.41 0 0 1 2.413 1.627 6.993 6.993 0 0 1 1.543 2.469c.355.935.533 1.973.533 3.114 0 1.421-.299 2.684-.898 3.787a6.471 6.471 0 0 1-2.412 2.553c-1.029.617-2.226.926-3.591.926-.58 0-1.132-.075-1.656-.224a5.312 5.312 0 0 1-1.402-.646 3.9 3.9 0 0 1-1.038-1.038h-.085v7.66h-4.348V23.223c0-1.59.318-2.965.954-4.124a6.666 6.666 0 0 1 2.693-2.694c1.16-.654 2.516-.981 4.068-.981Zm0 3.759c-.673 0-1.262.168-1.767.505-.487.318-.861.767-1.123 1.347-.261.56-.392 1.197-.392 1.907 0 .711.131 1.347.392 1.908.262.561.636 1.01 1.123 1.347.505.318 1.094.477 1.767.477.673 0 1.253-.16 1.739-.477a3.297 3.297 0 0 0 1.123-1.347c.28-.561.42-1.197.42-1.908 0-.71-.14-1.346-.42-1.907-.262-.58-.636-1.03-1.123-1.347-.486-.337-1.066-.505-1.739-.505ZM108.617 30.153V15.761h4.377v14.392h-4.377Zm2.188-16.019c-.692 0-1.29-.252-1.795-.757-.505-.505-.758-1.104-.758-1.796s.253-1.29.758-1.795c.505-.524 1.103-.786 1.795-.786s1.291.262 1.796.786c.505.505.757 1.103.757 1.795s-.252 1.29-.757 1.796c-.505.505-1.104.757-1.796.757ZM99.105 30.49c-1.477 0-2.805-.327-3.984-.982a7.462 7.462 0 0 1-2.805-2.693c-.673-1.141-1.01-2.422-1.01-3.844 0-1.44.337-2.721 1.01-3.843a7.462 7.462 0 0 1 2.805-2.693c1.179-.674 2.507-1.01 3.984-1.01 1.478 0 2.796.336 3.956 1.01a7.25 7.25 0 0 1 2.777 2.693c.692 1.122 1.038 2.403 1.038 3.843 0 1.422-.346 2.703-1.038 3.844a7.25 7.25 0 0 1-2.777 2.693c-1.178.655-2.497.982-3.956.982Zm0-3.787c.692 0 1.291-.169 1.796-.505a3.424 3.424 0 0 0 1.178-1.347c.281-.561.421-1.197.421-1.908 0-.692-.14-1.318-.421-1.88a3.423 3.423 0 0 0-1.178-1.346c-.505-.337-1.104-.505-1.796-.505s-1.3.168-1.823.505a3.428 3.428 0 0 0-1.179 1.347 4.144 4.144 0 0 0-.42 1.88c0 .71.14 1.346.42 1.907a3.43 3.43 0 0 0 1.179 1.347c.523.336 1.131.505 1.823.505ZM77.174 35.849v-3.732h7.181c.281 0 .515-.093.702-.28a.83.83 0 0 0 .28-.646v-3.17h-.084a6.59 6.59 0 0 1-1.206 1.094c-.412.3-.88.524-1.403.674a6.023 6.023 0 0 1-1.711.224c-1.272 0-2.413-.3-3.423-.898-.991-.617-1.777-1.468-2.357-2.553-.56-1.084-.841-2.319-.841-3.703 0-1.365.29-2.609.87-3.731.598-1.122 1.468-2.02 2.609-2.693 1.14-.674 2.534-1.01 4.18-1.01 1.571 0 2.927.327 4.068.982a6.624 6.624 0 0 1 2.693 2.72c.636 1.16.954 2.526.954 4.097v8.416c0 1.29-.383 2.31-1.15 3.058-.748.767-1.786 1.15-3.114 1.15h-8.248Zm4.825-9.483c.673 0 1.253-.15 1.74-.449a3.18 3.18 0 0 0 1.121-1.262 3.834 3.834 0 0 0 .393-1.74c0-.673-.13-1.29-.392-1.851-.262-.561-.636-1.001-1.123-1.319-.486-.337-1.066-.505-1.74-.505-.654 0-1.234.159-1.739.477-.486.318-.86.748-1.122 1.29-.261.543-.392 1.15-.392 1.824 0 .655.13 1.253.392 1.796.262.523.636.944 1.123 1.262.504.318 1.084.477 1.739.477ZM65.473 30.49c-1.477 0-2.805-.327-3.983-.982a7.46 7.46 0 0 1-2.806-2.693c-.673-1.141-1.01-2.422-1.01-3.844 0-1.44.337-2.721 1.01-3.843a7.46 7.46 0 0 1 2.806-2.693c1.178-.674 2.506-1.01 3.983-1.01 1.478 0 2.796.336 3.956 1.01a7.252 7.252 0 0 1 2.777 2.693c.692 1.122 1.038 2.403 1.038 3.843 0 1.422-.346 2.703-1.038 3.844a7.252 7.252 0 0 1-2.777 2.693c-1.178.655-2.497.982-3.956.982Zm0-3.787c.692 0 1.29-.169 1.796-.505a3.43 3.43 0 0 0 1.178-1.347c.28-.561.42-1.197.42-1.908 0-.692-.14-1.318-.42-1.88a3.429 3.429 0 0 0-1.178-1.346c-.505-.337-1.104-.505-1.796-.505s-1.3.168-1.823.505a3.428 3.428 0 0 0-1.179 1.347 4.145 4.145 0 0 0-.42 1.88c0 .71.14 1.346.42 1.907a3.43 3.43 0 0 0 1.179 1.347c.523.336 1.131.505 1.823.505ZM51.547 30.153c-1.216 0-2.282-.27-3.198-.813a5.763 5.763 0 0 1-2.132-2.16c-.505-.898-.758-1.89-.758-2.974V10.515h4.713v14.027c0 .45.16.842.477 1.179.318.336.71.505 1.178.505h5.19v3.927h-5.47Z"
        ></path>
      </svg>
    ),
    heading: "280%",
    subHeading: "INCREASE IN WEBSITE TRAFFIC",
    description:
      "Thanks to the agency's expertise, our website traffic increased by 280% within just three months of working together. Their strategic approach to SEO and content marketing made a difference!",
    cta: "VISIT WEBSITE",
    Icon: (
      <ArrowRight
        className={cn(
          iconClassName2,
          "group-hover:-rotate-45 transition-all duration-300 ease-in-out"
        )}
      />
    ),
  },
  {
    logo: (
      <svg
        className="brightness-[9000%] opacity-50 grayscale w-36 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="220"
        height="40"
        fill="none"
        viewBox="0 0 220 40"
      >
        <path
          fill="#0E1534"
          d="M20 40c11.046 0 20-8.954 20-20V6a6 6 0 0 0-6-6H21v8.774c0 2.002.122 4.076 1.172 5.78a9.999 9.999 0 0 0 6.904 4.627l.383.062a.8.8 0 0 1 0 1.514l-.383.062a10 10 0 0 0-8.257 8.257l-.062.383a.8.8 0 0 1-1.514 0l-.062-.383a10 10 0 0 0-4.627-6.904C12.85 21.122 10.776 21 8.774 21H.024C.547 31.581 9.29 40 20 40Z"
        ></path>
        <path
          fill="#0E1534"
          d="M0 19h8.774c2.002 0 4.076-.122 5.78-1.172a10.018 10.018 0 0 0 3.274-3.274C18.878 12.85 19 10.776 19 8.774V0H6a6 6 0 0 0-6 6v13ZM46.455 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM211.711 12.104c5.591 0 8.289 3.905 8.289 8.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145 0-2.86 1.692-2.86 3.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145 0-2.893 1.692-2.893 3.742v7.486h-5.85v-8.495c0-4.523 2.697-8.428 8.288-8.428 3.056 0 5.266 1.204 6.274 3.189 1.072-1.985 3.413-3.19 6.208-3.19ZM180.427 23.82c1.885 0 2.698-1.725 2.698-3.776v-7.29h5.85v8.006c0 4.784-2.795 8.755-8.548 8.755-5.754 0-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0 2.05.812 3.776 2.698 3.776ZM163.275 29.547c-3.673 0-6.046-1.269-7.444-3.742l4.226-2.376c.585 1.041 1.462 1.562 2.925 1.562 1.203 0 1.755-.423 1.755-.944 0-1.985-8.581.033-8.581-6.28 0-3.06 2.6-5.533 7.021-5.533 3.868 0 5.981 1.887 6.924 3.71l-4.226 2.408c-.357-.976-1.463-1.562-2.568-1.562-.845 0-1.3.358-1.3.846 0 2.018 8.581.163 8.581 6.281 0 3.417-3.348 5.63-7.313 5.63ZM142.833 36.512h-5.851V20.858c0-4.98 3.738-8.592 8.939-8.592 5.071 0 8.939 3.873 8.939 8.592 0 5.207-3.446 8.657-8.614 8.657-1.203 0-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.124-3.088-3.124s-3.088 1.4-3.088 3.125c0 1.692 1.235 3.124 3.088 3.124ZM131.121 11.03c-1.918 0-3.51-1.595-3.51-3.515 0-1.92 1.592-3.515 3.51-3.515 1.918 0 3.511 1.595 3.511 3.515 0 1.92-1.593 3.515-3.511 3.515Zm-2.925 1.724h5.851v16.273h-5.851V12.754ZM116.97 29.515c-5.071 0-8.939-3.905-8.939-8.657 0-4.719 3.868-8.624 8.939-8.624s8.939 3.905 8.939 8.624c0 4.752-3.868 8.657-8.939 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM96.983 37c-4.03 0-6.956-1.79-8.451-4.98l4.843-2.603c.52 1.107 1.495 2.246 3.51 2.246 2.114 0 3.511-1.335 3.674-3.678-.78.684-2.016 1.204-3.868 1.204-4.519 0-8.16-3.482-8.16-8.364 0-4.718 3.869-8.559 8.94-8.559 5.201 0 8.939 3.613 8.939 8.592v6.444c0 5.858-4.064 9.698-9.427 9.698Zm.39-13.31c1.755 0 3.088-1.205 3.088-2.995 0-1.757-1.332-2.929-3.088-2.929-1.723 0-3.088 1.172-3.088 2.93 0 1.79 1.365 2.993 3.088 2.993ZM78.607 29.515c-5.071 0-8.94-3.905-8.94-8.657 0-4.719 3.869-8.624 8.94-8.624 5.07 0 8.939 3.905 8.939 8.624 0 4.752-3.869 8.657-8.94 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM59.013 7.06v16.434H68.7v5.533H58.2c-3.705 0-5.2-1.953-5.2-5.045V7.06h6.013Z"
        ></path>
      </svg>
    ),
    heading: ">1.2M",
    subHeading: "NEW FOLLOWERS",
    description:
      "The agency's social media campaigns helped us double our follower count in just six weeks, leading to a 80% increase in leads generated through social channels. Their creativity are unmatched!",
    cta: "VISIT WEBSITE",
    Icon: (
      <ArrowRight
        className={cn(
          iconClassName2,
          "group-hover:-rotate-45 transition-all duration-300 ease-in-out"
        )}
      />
    ),
  },
  {
    logo: (
      <svg
        className="brightness-[9000%] opacity-50 grayscale w-36 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="176"
        height="40"
        fill="none"
        viewBox="0 0 176 40"
      >
        <path
          fill="#283841"
          fill-rule="evenodd"
          d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#283841"
          d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        ></path>
      </svg>
    ),
    heading: "4X",
    subHeading: "BOOST IN CLICK RATES",
    description:
      "After implementing their email marketing strategy, we saw a remarkable 4x increase in email open rates and a 25% boost in click-through rates. Their personalized approach made all the difference.",
    cta: "VISIT WEBSITE",
    Icon: (
      <ArrowRight
        className={cn(
          iconClassName2,
          "group-hover:-rotate-45 transition-all duration-300 ease-in-out"
        )}
      />
    ),
  },
]

const faq = [
  {
    question: "WHAT MAKES DIGIFIRE DIFFERENT?",
    answer:
      "We are a marketing agency that specializes in digital marketing and digital strategy. We help businesses to create a strong online presence and drive traffic to their websites.",
  },
  {
    question: "DO YOU OFFER CUSTOMIZABLE SERVICES?",
    answer: "Yes, we offer a wide range of customizable services.",
  },
  {
    question: "HOW DO YOU MEASURE THE SUCCESS?",
    answer:
      "We use a variety of metrics to measure the success of our campaigns, including website traffic, conversion rates, and social media engagement.",
  },
  {
    question: "HOW DO I GET STARTED WITH DIGIFIRE?",
    answer:
      "To get started with us, simply fill out the contact form on our website and we will get back to you shortly.",
  },
  {
    question: "DO YOU OFFER CONSULTATIONS?",
    answer:
      "Yes, we offer consultations to help businesses develop their digital marketing strategies and achieve their goals.",
  },
]

export default function IndexPage() {
  const [screenSize, setScreenSize] = useState<"lg" | "md" | "sm" | null>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      // console.log("Window width:", width)
      if (width > 1278) {
        // console.log("Set to lg")
        setScreenSize("lg")
      } else if (width > 768) {
        setScreenSize("md")
      } else {
        setScreenSize("sm")
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Call the handler once to set the initial state

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <main className="relative">
      <section className="flex overflow-hidden relative flex-col h-screen items-center justify-center py-24 px-4">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          src="https://videos.pexels.com/video-files/4496268/4496268-hd_1920_1080_25fps.mp4"
        />
        <div className="absolute inset-0 size-full bg-gradient-to-b from-transparent to-100% to-section -z-[9]"></div>
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] text-center lg:leading-[84px] leading-[52px] [text-shadow:0px_0px_60px_rgba(0,0,0,0.4)]">
            GROW YOUR BRAND
            <br /> BEYOND BOUNDARIES
          </h1>
          <div className="flex lg:flex-row  w-full items-center md:justify-between justify-center gap-4">
            <h1 className="font-arteria md:block hidden left w-fit lg:text-4xl md:text-3xl text-2xl leading-snug [font-weight:800] text-center">
              <span className="opacity-70">WE ARE A</span>
              <br /> MARKETING AGENCY
            </h1>
            <Button
              className="rounded-full font-extrabold font-arteria text-2xl pt-0.5 h-12 w-full max-w-[200px]"
              size={"lg"}
            >
              GET STARTED
            </Button>
            <h1 className="font-arteria md:block hidden w-fit lg:text-4xl md:text-3xl text-2xl leading-snug [font-weight:800] text-center">
              <span className="opacity-70">WORKING</span>
              <br /> ACROSS THE GLOBE
            </h1>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex bg-section flex-col items-center justify-center gap-4 py-24 lg:px-8 px-4"
      >
        <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] text-center lg:leading-[84px] leading-[52px]">
          <span className="heading-light">WE{"'"}RE ALL ABOUT</span> BRINGING
          YOUR
          <br /> BRAND TO{" "}
          <span className="heading-light">
            LIFE IN THE DIGITAL SPACE
            <br /> WITH A
          </span>{" "}
          FRESH APPROACH
        </h1>
      </section>
      <section
        id="how-we-work"
        className="flex bg-section-3  lg:gap-16 gap-8 pt-24"
      >
        <div className="flex flex-col items-center justify-center  w-full">
          <div>
            <h4 className="font-arteria font-extrabold underline decoration-primary text-center">
              HOW WE WORK
            </h4>
            <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] lg:leading-[84px] leading-[52px] !mb-0 text-center ">
              <span className="heading-light">OUR WINNING</span>
              <br /> METHODOLOGY
            </h1>
            <p className="text-foreground/80 text-center max-w-xl mt-4 mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              tempore nisi dolorem officiis at asperiores omnis. Voluptatem
              sequi a saepe veniam fugiat tempore, error perspiciatis quasi,
              eveniet atque quia esse?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-0 mt-16 w-[100dvw] sticky top-0">
            {howWeWork.map((e, index) => (
              <div
                key={e.title}
                className={`flex  md:flex-row flex-col-reverse items-start w-full justify-center lg:gap-24 gap-12 lg:p-16 md:p-12 p-8   ${
                  index % 2 !== 0 ? "bg-section" : "bg-primary"
                }`}
              >
                <div className="mx-auto max-w-[1440px] w-full flex lg:flex-row flex-col-reverse lg:gap-16 gap-8 ">
                  <div className="flex  items-start justify-start lg:gap-16 gap-8 w-full">
                    <h1
                      className={`font-arteria lg:-mb-4 !mb-0 lg:text-[200px] md:text-9xl text-8xl [font-weight:1000] uppercase ${
                        index % 2 === 0 ? "text-[#001412]" : "text-primary"
                      }`}
                    >
                      {index < 9 ? "0" : ""}
                      {index + 1}
                    </h1>
                    <div>
                      <h1
                        className={`font-arteria lg:text-7xl md:text-6xl text-5xl [font-weight:800] uppercase !mb-2 ${
                          index % 2 === 0 ? "text-[#001412]" : "text-primary"
                        }`}
                      >
                        {e.title}
                      </h1>
                      <p
                        className={`text-lg max-w-lg whitespace-pre-wrap leading-[20px] ${
                          index % 2 === 0
                            ? "text-[#001412]/80"
                            : "text-white/80"
                        }`}
                      >
                        {e.description}
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://images.pexels.com/photos/13260079/pexels-photo-13260079.jpeg"
                    alt="Section Image"
                    className={`w-full select-none max-w-[400px] aspect-[3/2.5] h-fit object-cover rounded-lg`}
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="strategies"
        className="flex flex-col relative bg-section-2 lg:gap-16 gap-8 pb-24"
      >
        <video
          autoPlay
          loop
          muted
          src="https://videos.pexels.com/video-files/3192305/3192305-uhd_2560_1440_25fps.mp4"
          className=" w-[100dvw] h-auto object-cover z-10"
        />
        <div className="flex flex-col items-center justify-center mx-auto max-w-7xl  lg:px-8 px-4 w-full">
          <div>
            <h4 className="font-arteria font-extrabold underline decoration-primary text-center">
              STRATERGIES
            </h4>
            <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] lg:leading-[84px] leading-[52px] !mb-0 text-center ">
              <span className="heading-light">UNVEILING THE</span>
              <br />
              STRATERGIES
            </h1>
            <p className="text-foreground/80 text-center max-w-xl mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              tempore nisi dolorem officiis at asperiores omnis. Voluptatem
              sequi a saepe veniam fugiat tempore, error perspiciatis quasi,
              eveniet atque quia esse?
            </p>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-center lg:gap-8 gap-6 mt-16  sticky top-0">
            {stratergies
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((stratergy) => (
                <div
                  key={stratergy.title}
                  className={`flex flex-row items-start justify-start gap-0 rounded-lg p-6 border-2 border-primary/5 `}
                >
                  <div className="flex flex-col items-center justify-center gap-0 rounded-lg">
                    <h1
                      className={`font-arteria text-primary text-center [font-weight:800] uppercase !mb-2 `}
                    >
                      {stratergy.title.split(" ")[0]} <br />{" "}
                      {stratergy.title.split(" ")[1]}
                    </h1>
                    <p
                      className={`text-foreground/80 text-base max-w-xs text-center`}
                    >
                      {stratergy.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section
        id="get-in-touch"
        className="py-24 bg-section-2 flex flex-col items-center justify-center gap-12"
      >
        <div className="sm:p-0.5 p-0 rounded-full bg-gradient-to-r from-primary to-primary via-section-2 gap-12 bg-[size:250%_250%] origin-center bg-[position:center] bg-no-repeat">
          <div className="rounded-full bg-section-2 lg:py-24 lg:px-48 py-12 px-4 flex text- flex-col items-center justify-center size-full">
            <div className="flex rounded-full mx-auto bg-gradient-to-r from-primary from-0% to-100% via-50% via-section-2 to-primary p-0.5 shadow-lg max-w-[160px] w-full bg-[size:250%_250%] origin-center bg-[position:center] bg-no-repeat cursor-default mb-12">
              <Button className="flex-1 hover:bg-section-2  bg-section-2 px-6 py-1  text-white rounded-full font-extrabold font-arteria text-2xl pt-0.5 h-12 w-full max-w-[200px] text-primary cursor-default">
                <span className="mt-0.5">GET IN TOUCH</span>
              </Button>
            </div>
            <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] text-center lg:leading-[84px] text-balance leading-[52px]">
              LET{"'"}S CONNECT AND
              <br /> <span className="text-primary">MAKE MAGIC HAPPEN</span>
            </h1>
            <Button
              size={"lg"}
              className="rounded-full mt-4 font-extrabold font-arteria text-2xl pt-0.5 h-14 w-full max-w-[200px]"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="py-24 bg-section flex flex-col items-center justify-center gap-6"
      >
        <div>
          <h4 className="font-arteria font-extrabold underline decoration-primary text-center">
            TESTIMONIALS
          </h4>
          <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] text-center lg:leading-[84px] leading-[52px] !mb-0">
            <span className="heading-light">HERE{"'"}S WHAT</span>
            <br /> OUR CLIENTS SAY
          </h1>
        </div>
        <div className="w-full lg:px-8 px-4 items-start justify-center gap-8 mt-16 max-w-7xl mx-auto">
          <Swiper
            spaceBetween={30}
            slidesPerView={
              screenSize === "lg" ? 3 : screenSize === "md" ? 3 : 1
            }
            loop={true}
            autoplay={true}
            freeMode={true}
            draggable={true}
            modules={[
              Thumbs,
              Autoplay,
              // Pagination,
              // Navigation,
              EffectCoverflow,
              // FreeMode,
              // Parallax,
            ]}
            // lazy
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 100,
              slideShadows: true,
              depth: 150,
              scale: 0.99,
            }}
            // lazyPreloadPrevNext={40}
            // loopAdditionalSlides={40}
            thumbs={{ swiper: thumbsSwiper }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide className="h-full">
                <div
                  key={testimonial.heading}
                  className={`!w-full lg:min-w-fit md:min-w-[300px] max-w-full bg-card-2 rounded-lg border-2 border-primary/5 h-full`}
                >
                  <div className="w-full items-start justify-center lg:gap-24 gap-12 lg:p-12 md:p-8 p-6 max-w-[1440px] flex flex-col h-full">
                    <div className="flex flex-col items-start justify-start lg:gap-12 gap-8 min-w-full">
                      {testimonial.logo}
                      <div>
                        <h1
                          className={`font-arteria lg:text-9xl md:text-8xl text-7xl [font-weight:1000] uppercase !mb-0 text-primary`}
                        >
                          {testimonial.heading}
                        </h1>
                        <p
                          className={`text-3xl font-extrabold max-w-lg font-arteria mb-4`}
                        >
                          {testimonial.subHeading}
                        </p>
                        <p className="text-foreground/80 text-base mb-12">
                          {testimonial.description}
                        </p>
                        <div className="group w-full inline-flex gap-4 items-center justify-start">
                          <Button size={"icon"} className="px-3 rounded-full">
                            {testimonial.Icon}
                          </Button>
                          <h4 className="font-arteria w-full font-extrabold underline decoration-primary !mb-0 cursor-pointer">
                            {testimonial.cta}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <CarouselPrevious />
            <CarouselNext /> */}
        </div>
      </section>
      <section
        id={"faq"}
        className="flex bg-section-2  lg:gap-16 gap-8 py-24 lg:px-8 px-4"
      >
        <div className="flex relative md:flex-row flex-col items-start justify-between  w-full max-w-7xl mx-auto lg:gap-48 gap-8">
          <div className="">
            <h4 className="font-arteria font-extrabold underline decoration-primary">
              FREQUENTLY ASKED QUESTIONS
            </h4>
            <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] lg:leading-[84px] leading-[52px] !mb-0 text-left ">
              <span className="heading-light">WE HAVE</span>
              <br /> ANSWERS
            </h1>
            <p className="text-foreground/80 text-left max-w-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              tempore nisi dolorem officiis at asperiores omnis. Voluptatem
              sequi a saepe veniam fugiat tempore, error perspiciatis quasi,
              eveniet atque quia esse?
            </p>
          </div>
          <div className="flex flex-1 w-full">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="font-extrabold w-full flex flex-row items-center font-arteria justify-start gap-4 text-left border-b-2 border-primary/20 [data-state=open]:border-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="py-24 bg-section  flex flex-col items-center justify-center gap-6 lg:p-16 md:p-12 p-0"
      >
        <div className="flex md:flex-row flex-col items-start justify-start max-w-7xl mx-auto size-full bg-section-2 rounded-lg md:p-16 p-4 md:gap-0 gap-8 md:max-w-4xl">
          {/* <div className="md:w-1/2 w-full">
            <h4 className="font-arteria font-extrabold mb-6 underline decoration-primary text-left">
              CONTACT US
            </h4>
            <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] text-left lg:leading-[84px] leading-[52px] !mb-0">
              <span className="heading-light">GET IN</span> TOUCH
            </h1>
            <Button
              size={"lg"}
              className="rounded-full mt-6 font-extrabold font-arteria text-2xl pt-0.5 h-14 md:px-12 px-8"
            >
              SCHEDULE A CONVERSATION
            </Button>
            <form className="mt-16 space-y-6 w-[90%]">
              <div>
                <span className="text-foreground/50 font-arteria font-extrabold tracking-wider text-lg">
                  FULL NAME
                </span>
                <InputBlock
                  root={{ variant: "underlined", size: "lg" }}
                  placeholder="JOHN DOE"
                  type="email"
                  className="font-arteria text-3xl font-extrabold placeholder:!text-foreground/50"
                />
              </div>
              <div>
                <span className="text-foreground/50 font-arteria font-extrabold tracking-wider text-lg">
                  EMAIL
                </span>
                <InputBlock
                  root={{ variant: "underlined", size: "lg" }}
                  placeholder="HELLO@DIGIFIRE.IO"
                  type="email"
                  className="font-arteria text-3xl font-extrabold placeholder:!text-foreground/50"
                />
              </div>
              <div>
                <span className="text-foreground/50 font-arteria font-extrabold tracking-wider text-lg">
                  PHONE
                </span>
                <InputBlock
                  root={{ variant: "underlined", size: "lg" }}
                  placeholder="+91 1234567890"
                  type="text"
                  className="font-arteria text-3xl font-extrabold placeholder:!text-foreground/50"
                />
              </div>
            </form>
          </div> */}
          <div className="w-full min-h-full flex-1 relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover -z-[0] rounded-lg"
              src="https://images.pexels.com/photos/6984996/pexels-photo-6984996.jpeg"
              alt="Section Image"
            />
            <div className="z-10 relative lg:p-16 p-4">
              <div className="md:p-8 p-6 rounded-lg bg-section/90 backdrop-blur-lg flex flex-col items-start justify-start gap-2">
                <h1 className="font-arteria font-extrabold text-left !mb-0">
                  CONNECT WITH US
                </h1>
                <p className="text-foreground/80">
                  Fill in your details and let{"'"}s kickstart the conversation
                  today!
                </p>
                <form className="mt-8 space-y-4 w-full">
                  <div>
                    <span className="text-foreground/50 font-semibold text-base">
                      Full Name
                    </span>
                    <InputBlock
                      root={{ variant: "underlined", size: "lg" }}
                      placeholder="John Doe"
                      type="text"
                      className="text-xl font-semibold placeholder:!text-foreground/50"
                    />
                  </div>
                  <div>
                    <span className="text-foreground/50 font-semibold text-base">
                      Email
                    </span>
                    <InputBlock
                      root={{ variant: "underlined", size: "lg" }}
                      placeholder="hello@digifire.io"
                      type="email"
                      className="text-xl font-semibold placeholder:!text-foreground/50"
                    />
                  </div>
                  <div>
                    <span className="text-foreground/50 font-semibold text-base">
                      Phone Number
                    </span>
                    <InputBlock
                      root={{ variant: "underlined", size: "lg" }}
                      placeholder="+91 1234567890"
                      type="text"
                      className="text-xl font-semibold placeholder:!text-foreground/50"
                    />
                  </div>
                  <div>
                    <span className="text-foreground/50 font-semibold text-base">
                      Message
                    </span>
                    <InputBlock
                      root={{ variant: "underlined", size: "lg" }}
                      placeholder="How can we help you?"
                      type="text"
                      className="text-xl font-semibold placeholder:!text-foreground/50"
                    />
                  </div>
                  <Button
                    size={"lg"}
                    className="rounded-full w-full !mt-12 font-extrabold font-arteria text-2xl pt-0.5 h-14 md:px-12 px-8"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
