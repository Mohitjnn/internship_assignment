import { Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Assuming you have a utility for className concatenation

export default function BlogCard({
  imageUrl = "/placeholder.svg?height=400&width=600",
  category = "Health Wellness Coaching",
  title = "How to Start An Online Coaching Business?",
  date = "Jan 21, 2024",
  buttonText = "VIEW BLOG",
}) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group bg-black h-[40vh]">
      <div className="overflow-hidden">
        <Image
          src="/heroSectionImage3.jpeg"
          alt="Blog thumbnail"
          fill={true}
          className={cn(
            " object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-black mb-2">
          {category}
        </span>
        <h2 className="text-orange-100 text-xl font-bold mb-2">{title}</h2>
        <div className="flex items-center text-orange-200 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20">
          <Button
            className={cn(
              "bg-orange-500 text-black font-bold py-2 px-4 rounded w-[30%] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            )}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
