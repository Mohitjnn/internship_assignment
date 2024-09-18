import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GuideCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  buttonOneText,
  buttonTwoText,
}) {
  return (
    <Card className="rounded-3xl w-full bg-transparent border-none ">
      <CardContent className="flex flex-col md:flex-row justify-center lg:justify-around items-center">
        <div className="relative w-full h-[50vh] md:w-1/2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill={true}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-fit  flex flex-col justify-center items-center lg:items-start lg:pl-4 lg:space-y-10">
          <h2 className="text-3xl font-bold text-white lg:mb-2">{title}</h2>
          <p className="text-gray-300 mb-6">{subtitle}</p>
          <CardFooter className="flex justify-center items-center space-x-8 px-0">
            <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              {buttonOneText}
            </Button>
            <Button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded border border-gray-600 transition duration-300">
              {buttonTwoText}
            </Button>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}
