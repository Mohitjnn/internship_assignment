"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialCard() {
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
    <Carousel className="w-full lg:max-w-[90%] " setApi={setApi}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem>
            <Card
              className="w-full bg-transparent lg:bg-blue-950/50 border-none rounded-lg overflow-hidden shadow-none lg:shadow-xl pb-8 lg:pb-0"
              key={index}
            >
              <div className="flex flex-col  justify-center items-center md:flex-row lg:p-0">
                <div className="w-[60vw] h-[30vh] md:h-[45vh] md:w-1/3 relative rounded-xl mt-8 lg:mt-0">
                  <Image
                    src="/Testimonial.avif"
                    alt="Portrait of Daniah Fawaz"
                    fill={true}
                    className="w-full h-full object-cover rounded-xl lg:rounded-none"
                  />
                  <div className="absolute -top-5 lg:top-0 -right-5 lg:right-0 md:-right-8 bg-orange-500 p-2 md:p-4 rounded-lg lg:rounded-tr-none lg:rounded-tl-none rounded-bl-lg lg:rounded-br-none">
                    <Quote className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <CardContent className="md:w-2/3 p-0 lg:p-6 md:p-8 flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="text-white text-center lg:text-left text-base md:text-xl leading-relaxed mb-4">
                      I will when we are done with everything we still haven't
                      finished everything, but so far my experience is a 10/10
                      and I would recommend to anyone I know and I already did
                      recommend it to a few business owners who are interested
                      in developing an app with your company hopefully.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white text-right">
                    <footer className="font-semibold not-italic">
                      Daniah Fawaz
                    </footer>
                  </CardContent>
                </CardContent>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
      <div className="absolute bottom-5  z-10 flex lg:hidden w-full space-x-3 justify-center items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={` text-white text-2xl font-bold  rounded-xl w-3 ${
              current === index ? "  bg-blue-700 h-6" : "bg-white h-3"
            }`}
          ></button>
        ))}
      </div>
    </Carousel>
  );
}
