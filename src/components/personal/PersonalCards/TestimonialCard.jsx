import Image from "next/image";
import { Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestimonialCard() {
  return (
    <Card className="w-full bg-blue-950/50 border-none rounded-lg overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <Image
            src="/Testimonial.avif"
            alt="Portrait of Daniah Fawaz"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 md:-right-8 bg-orange-500 p-2 md:p-4 rounded-bl-lg">
            <Quote className="w-8 h-8 md:w-12 md:h-12 text-white" />
          </div>
        </div>
        <CardContent className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-white text-lg md:text-xl leading-relaxed mb-4">
              I will when we are done with everything we still haven't finished
              everything, but so far my experience is a 10/10 and I would
              recommend to anyone I know and I already did recommend it to a few
              business owners who are interested in developing an app with your
              company hopefully.
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white text-right">
            <footer className="font-semibold not-italic">Daniah Fawaz</footer>
          </CardContent>
        </CardContent>
      </div>
      <div className="absolute bottom-2 right-4 text-blue-800 text-6xl font-serif opacity-20">
        "
      </div>
    </Card>
  );
}
