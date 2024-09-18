import React from "react";
import ImageCarousel from "@/components/personal/ImageCarousel";
import { CardWithForm } from "@/components/personal/PersonalCards/HeroSectionCard";
import SubjectCard from "@/components/personal/PersonalCards/SubjectCards";
import TutorCard from "@/components/personal/PersonalCards/TutorCard";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ClassesCard from "@/components/personal/PersonalCards/ClassCard";
import TestimonialCard from "@/components/personal/PersonalCards/TestimonialCard";
import DarkThemeCardCarousel from "@/components/personal/GuideCarousel";
import BlogCard from "@/components/personal/PersonalCards/BlogCard";

const images = [
  { url: "/heroSectionImage1.jpg", title: "Image01" },
  { url: "/heroSectionImage2.jpeg", title: "Image02" },
  { url: "/heroSectionImage3.jpeg", title: "Image03" },
];

const cardData = [
  {
    imageUrl: "/maths.png",
    imageAlt: "Mathematics Subject",
    heading: "Mathematics",
    description: "Master algebra and geometry",
  },
  {
    imageUrl: "/science.png",
    imageAlt: "Science Subject",
    heading: "Science",
    description: "Explore physics and biology",
  },
  {
    imageUrl: "/english.png",
    imageAlt: "English Subject",
    heading: "English",
    description: "Enhance grammar and literature",
  },
  {
    imageUrl: "/history.png",
    imageAlt: "History Subject",
    heading: "History",
    description: "Learn about past events",
  },
  {
    imageUrl: "/languages.png",
    imageAlt: "Languages Subject",
    heading: "Languages",
    description: "Master multiple languages",
  },
  {
    imageUrl: "/art.png",
    imageAlt: "Art Subject",
    heading: "Art",
    description: "Develop creativity and skills",
  },
  {
    imageUrl: "/coding.png",
    imageAlt: "Coding Subject",
    heading: "Coding",
    description: "Learn Python and JavaScript",
  },
  {
    imageUrl: "/music.png",
    imageAlt: "Music Subject",
    heading: "Music",
    description: "Discover instruments and theory",
  },
  {
    imageUrl: "/music.png",
    imageAlt: "Music Subject",
    heading: "Music",
    description: "Discover instruments and theory",
  },
  {
    imageUrl: "/music.png",
    imageAlt: "Music Subject",
    heading: "Music",
    description: "Discover instruments and theory",
  },
];

function page() {
  return (
    <main>
      <center className="w-full h-fit">
        <section className="relative w-full h-[70vh] flex items-center">
          <div className="absolute w-full h-full">
            <ImageCarousel images={images} />
          </div>
          <div className="hidden relative w-full h-full lg:flex justify-center xl:justify-start items-start p-10  ">
            <CardWithForm />
          </div>
        </section>
        <section className="lg:hidden">
          <div className="lg:hidden relative w-full h-full flex justify-center xl:justify-start items-start -mt-16 p-2 mb-2">
            <CardWithForm />
          </div>
        </section>
        <section className="relative w-full h-fit flex flex-col justify-center items-center lg:mt-36 mb-20 px-6 lg:px-8">
          <h1 className="text-xl lg:text-3xl font-semibold text-center ">
            What Subject You want To Learn
          </h1>
          <div className="w-full flex items-center lg:justify-center flex-wrap lg:px-20 py-4 ">
            {cardData.map((card, index) => (
              <SubjectCard
                key={index}
                imageUrl={card.imageUrl}
                imageAlt={card.imageAlt}
                heading={card.heading}
                description={card.description}
              />
            ))}
          </div>
          <p className=" text-lg font-base text-center ">
            To Explore Other Subjects
            <span className="ml-2 text-center underline text-blue-500">
              <Link href="/www.google.com" target="_blank">
                Click Here
              </Link>
            </span>
          </p>
        </section>
        <section className="w-full h-fit lg:px-12 py-8 bg-[#0F0F0F] flex flex-col items-center justify-center">
          <h1 className="text-xl lg:text-3xl font-semibold text-center py-4">
            Browse our top rated popular tutors
          </h1>
          <div className="hidden w-full lg:flex items-center justify-between flex-wrap py-4 ">
            {Array.from({ length: 8 }).map((_, index) => (
              <TutorCard key={index} />
            ))}
          </div>
          <Carousel
            className="w-full lg:hidden"
            opts={{
              dragFree: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="basis-[75%]">
                  <div>
                    <TutorCard /> {/* Replace content with TutorCard */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Button
            variant="default"
            className="bg-orange-500 px-10 text-white h-fit mt-4 lg:mt-0"
          >
            Explore All Tutors
          </Button>
        </section>
        <section className="relative w-full h-[60vh] flex items-center py-4">
          <div className="absolute w-full h-full">
            <div className={`relative w-full h-[60vh] overflow-hidden`}>
              <div className={`absolute inset-0 bg-black/30 z-0`} />
              <div className={` absolute inset-0 -z-10`}>
                <Image
                  src="/heroSectionImage2.jpeg"
                  alt="explore"
                  priority={true}
                  fill={true}
                  className="w-full h-full mix-blend-overlay object-cover object-top"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-full flex flex-col justify-center xl:justify-center items-start p-6 lg:p-10 space-y-4 mt-2 ">
            <h1 className="text-xl lg:text-4xl font-base text-white w-full ml-3 lg:ml-0 text-left lg:w-[25%] py-4">
              Speak any language fluently with the help of professional tutors
            </h1>
            <Button
              variant="default"
              className="bg-orange-500 px-10 text-white h-fit font-normal text-lg lg:text-2xl"
            >
              Browse Tutors
            </Button>
          </div>
        </section>
        <section className="w-full justify-center flex flex-col mt-4 p-4">
          <div className="w-full flex justify-between py-4 lg:px-20">
            <h3 className="scroll-m-20 text-lg lg:text-2xl font-semibold tracking-tight ">
              Upcoming Group Classes
            </h3>
            <Link
              href="https://www.google.com/"
              target="_blank"
              className="scroll-m-20 lg:text-2xl font-semibold tracking-tight lg:mr-12 border-b-2 border-white"
            >
              View All
            </Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <ClassesCard />
          </div>
        </section>
        <section className="w-full h-fit lg:px-12 py-8 lg:bg-[#0F0F0F] flex flex-col items-center justify-center space-y-4">
          <h1 className="text-xl lg:text-3xl font-semibold text-center ">
            We make language learning easy & simpler
          </h1>
          <div className="w-full flex flex-col lg:flex-row lg:justify-evenly items-center space-y-4 lg:space-y-0">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className=" relative mx-4 h-fit flex flex-col justify-center items-center rounded-2xl bg-[#0F0F0F] lg:rounded-none shadow-sm p-4 shadow-gray-500 lg:shadow-none">
                <Image
                  src="/Features.png"
                  width={200}
                  height={300}
                  className="object-cover"
                />
                <h3 className="text-white text-lg font-normal mb-2">
                  Respectful Learning
                </h3>
                <p className="text-white text-sm font-normal mb-2 text-center">
                  Choose from over a myriad of professional & experienced
                  teachers to be fluent in any language.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-fit bg-blue-950/50 lg:bg-transparent lg:px-12 lg:py-8 flex justify-center">
          <TestimonialCard />
        </section>
        <section className="w-full text-center space-y-10 mt-8 lg:mt-4">
          <h1 className="text-xl lg:text-3xl font-semibold text-center  ">
            How To Start Learning With Our Platform?
          </h1>
          <div className="w-full flex justify-center">
            <DarkThemeCardCarousel />
          </div>
        </section>
        <section className="w-full h-fit">
          <h1 className=" text-3xl font-semibold text-center py-4">
            Browse our top rated popular tutors
          </h1>
          <div className="w-full h-fit flex flex-col items-center justify-center py-4 ">
            <BlogCard />
          </div>
        </section>
      </center>
    </main>
  );
}

export default page;
