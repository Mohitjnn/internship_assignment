"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import GuideCard from "./PersonalCards/GuideCard";

export default function DarkThemeCardCarousel() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-[90%] "
      setApi={setApi}
    >
      <div className="flex w-full space-x-3 justify-center items-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={` text-white text-2xl font-bold px-4 ${
              current === index ? "  border-b-2 border-b-white" : ""
            }`}
          >
            {index} Value
          </button>
        ))}
      </div>
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className=" xl:px-10 w-full">
            <GuideCard
              imageSrc="/Features.png"
              imageAlt={"abcd"}
              title="Title"
              subtitle="lorem ipseum dorem lorem ipsem dorem"
              buttonOneText="Browse Tutors"
              buttonTwoText="Watch Video"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
