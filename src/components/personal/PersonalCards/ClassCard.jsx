import Image from "next/image";
import { Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ClassesCard() {
  return (
    <Card className="relative w-full max-w-sm bg-gray-500/10 backdrop-blur-lg border-none hover:border-white/50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group">
      <div className="relative group">
        <Image
          src="/HeroSectionImage4.jpeg"
          alt="Person being recorded on a smartphone"
          width={400}
          height={200}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
          3 Classes
        </div>
      </div>

      <CardContent className="p-4">
        <h2 className="text-blue-400 text-sm font-semibold mb-1">HEBREW</h2>
        <h3 className="text-white text-lg font-bold mb-2 transition-all duration-300 group-hover:underline">
          Complete Hebrew Course: Learn Hebrew for Beginners
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          Sep 20, 2024 | 23:50 Onwards
        </p>

        <div className="flex items-center text-gray-400 text-sm mb-4">
          <Users className="w-4 h-4 mr-1" />
          47 Seats
        </div>

        <div className="text-white text-2xl font-bold mb-4">$176.00</div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10 rounded-sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-white text-sm font-semibold">
                Francesco Langwo...
              </p>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400 text-sm mr-1">4.50</span>
                <span className="text-gray-400 text-xs">(4)</span>
              </div>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
