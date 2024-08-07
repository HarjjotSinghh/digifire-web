"use client"

import { ArrowRight } from "lucide-react"
import { Autoplay, EffectCoverflow, FreeMode, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import "swiper/css/parallax"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-flip"
import "swiper/css/effect-creative"
import { useEffect, useState } from "react"

import {
  faq,
  howWeWork,
  services,
  strategies,
  testimonials,
} from "@/config/landing-page"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { InputBlock } from "@/components/ui/input"

const iconClassName2 = "size-4 text-black/70"

export default function IndexPage() {
  const [screenSize, setScreenSize] = useState<"lg" | "md" | "sm" | null>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width > 1278) {
        setScreenSize("lg")
      } else if (width > 768) {
        setScreenSize("md")
      } else {
        setScreenSize("sm")
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="flex overflow-hidden relative flex-col h-screen items-center justify-center py-24 px-4">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          src="https://videos.pexels.com/video-files/2282013/2282013-uhd_2732_1440_24fps.mp4" // Replace with your hero video
        />
        <div className="absolute inset-0 size-full bg-gradient-to-b from-transparent to-100% to-section -z-[9]"></div>
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] lg:leading-[84px] leading-[52px] [text-shadow:0px_0px_60px_rgba(0,0,0,0.4)]">
            IGNITE YOUR <br /> DIGITAL PRESENCE
          </h1>
          <div className="flex lg:flex-row  w-full items-center md:justify-center justify-center gap-4 mt-8">
            <Button
              className="rounded-full font-extrabold font-arteria text-2xl pt-0.5 h-12 w-full max-w-[200px]"
              size={"lg"}
            >
              GET STARTED
            </Button>
            <Button
              className="rounded-full font-extrabold font-arteria text-2xl pt-0.5 h-12 w-full max-w-[200px]"
              size={"lg"}
              variant="secondary" // Assuming you have a secondary variant
            >
              LEARN MORE
            </Button>
          </div>
          <div className="flex lg:flex-row  w-full items-center md:justify-between justify-center gap-4 mt-4">
            <h1 className="font-arteria md:block hidden left w-fit lg:text-4xl md:text-3xl text-2xl leading-snug [font-weight:800] text-center">
              <span className="opacity-70">WE ARE A</span>
              <br /> MARKETING AGENCY
            </h1>
            <h1 className="font-arteria md:block hidden w-fit lg:text-4xl md:text-3xl text-2xl leading-snug [font-weight:800] text-center">
              <span className="opacity-70">EMPOWERING</span>
              <br /> BRANDS ONLINE
            </h1>
          </div>
        </div>
      </section>

      {/* About Us Section */}
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

      {/* Info Section 1 (How We Work) */}
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
              At Digifire, we utilize a results-driven methodology that blends
              creativity with strategic planning to boost your brand’s online
              presence. Our approach ensures that every campaign is thoughtfully
              crafted to meet your business goals and drive measurable results.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-0 mt-16 w-full sticky top-0">
            {howWeWork.map((e, index) => (
              <div
                key={e.title}
                className={`flex xl:sticky xl:top-20 md:flex-row flex-col-reverse items-start w-full justify-center lg:gap-24 gap-12 lg:p-16 md:p-12 p-8   ${
                  index % 2 !== 0 ? "bg-section" : "bg-primary"
                }`}
              >
                <div className="mx-auto max-w-[1440px] w-full flex lg:flex-row flex-col-reverse lg:gap-16 gap-8 ">
                  <div className="flex md:flex-row flex-col items-start justify-start lg:gap-16 gap-4 w-full">
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
                  <div className="relative">
                    <img
                      src={e.imageSrc}
                      alt={e.title + "Digifire Image"}
                      className={`w-full select-none lg:max-w-[500px] max-w-[350px] aspect-[3/2.5] h-fit object-cover rounded-lg`}
                      draggable={false}
                    />
                    <div
                      className={cn(
                        "absolute inset-0 w-full select-none lg:max-w-[500px] max-w-[350px] aspect-[3/2.5] h-fit bg-gradient-to-b from-transparent rounded-lg",
                        index % 2 !== 0 ? "to-section/30" : "to-primary/30"
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section 2 (Strategies) */}
      <section
        id="strategies"
        className="flex flex-col relative bg-section-2 lg:gap-16 gap-8 pb-24"
      >
        <video
          autoPlay
          loop
          muted
          src="https://videos.pexels.com/video-files/3192362/3192362-uhd_2560_1440_25fps.mp4" // Replace with your strategies video
          className=" w-full h-auto object-cover z-10"
        />
        <div className="flex flex-col items-center justify-center mx-auto max-w-7xl  lg:px-8 px-4 w-full">
          <div>
            <h4 className="font-arteria font-extrabold underline decoration-primary text-center">
              STRATEGIES
            </h4>
            <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] lg:leading-[84px] leading-[52px] !mb-0 text-center ">
              <span className="heading-light">UNVEILING THE</span>
              <br />
              STRATEGIES
            </h1>
            <p className="text-foreground/80 text-center max-w-xl mt-4 mx-auto">
              Discover our comprehensive strategies designed to elevate your
              brand. We focus on innovation and customization to meet the unique
              needs of each client, ensuring optimal performance and engagement
              across all digital platforms.
            </p>
            <div className="flex flex-row flex-wrap items-start justify-center lg:gap-8 gap-6 mt-16  sticky top-0">
              {strategies.map((strategy) => (
                <div
                  key={strategy.title}
                  className={`flex flex-col md:items-start items-center md:w-fit w-full h-full md:justify-start justify-center gap-0 rounded-lg border-2 border-primary/5 bg-section/80`}
                >
                  <div className="h-full">
                    <img
                      src={strategy.imageSrc}
                      alt="Strategy Image"
                      width={400}
                      height={300}
                      className="aspect-video rounded-t-lg rounded-b-none object-cover"
                    />
                  </div>
                  <div className="flex max-w-sm flex-col items-stretch h-full lg:p-8 p-6 justify-start gap-0 rounded-lg">
                    <h1
                      className={`font-arteria text-balance text-primary text-left [font-weight:800] uppercase !mb-2 `}
                    >
                      {strategy.title}
                    </h1>
                    <p
                      className={`text-foreground/80 text-base max-w-xs text-left`}
                    >
                      {strategy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
      {/* FAQ Section */}
      <section
        id={"faq"}
        className="flex bg-section-2  lg:gap-16 gap-8 py-24 lg:px-8 px-4"
      >
        <div className="flex relative md:flex-row flex-col items-start justify-between  w-full max-w-7xl mx-auto lg:gap-48 gap-8">
          <div className=" md:sticky top-28">
            <h4 className="font-arteria font-extrabold underline decoration-primary">
              FREQUENTLY ASKED QUESTIONS
            </h4>
            <h1 className="font-arteria lg:text-8xl md:text-7xl text-6xl [font-weight:800] lg:leading-[84px] leading-[52px] !mb-0 text-left">
              <span className="heading-light">WE HAVE</span>
              <br /> ANSWERS
            </h1>
            <p className="text-foreground/80 text-left max-w-xs mt-4">
              Have questions about our services? We’ve compiled a list of
              frequently asked questions to help you understand what we offer
              and how we can support your digital marketing needs.
            </p>
          </div>
          <div className="flex flex-1 w-full">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="uppercase font-extrabold w-full flex flex-row items-center font-arteria justify-start gap-4 text-left text-foreground/95 border-b-2 border-primary/20 [data-state=open]:border-0">
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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-section  flex flex-col items-center justify-center gap-6 lg:p-16 md:p-12 p-0"
      >
        <div className="flex md:flex-row flex-col items-start justify-start max-w-7xl mx-auto size-full bg-section-2 rounded-lg md:p-16 p-4 md:gap-0 gap-8 md:max-w-4xl">
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
