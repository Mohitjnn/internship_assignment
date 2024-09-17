import React from "react";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function TutorCard({
  avatarUrl = "/placeholder.svg?height=100&width=100",
  name = "John Doe",
  subtext1 = "Software Engineer",
  subtext2 = "5 years experience",
  location = "New York, USA",
  rating = 4.5,
}) {
  return (
    <Card className="w-[23%] bg-transparent border-none hover:bg-gray-500/10 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl relative group mx-2 my-2 py-4 ">
      <CardContent className="flex flex-col items-center">
        <Avatar className="h-52 w-52">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-white text-xl font-bold my-2">{name}</h2>
        <div className="flex w-full justify-center items-center my-2">
          <div className="text-gray-400 text-xs">{subtext1}</div>
          <div className="w-[0.02rem] bg-gray-700 h-4 mx-2" />
          <div className="text-gray-400 text-xs">{subtext2}</div>
        </div>
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <Star className="w-4 h-4 mr-1 text-yellow-500" />
          {rating} <span className="ml-1">({rating})</span>
        </div>
      </CardContent>

      <CardFooter className=" transition-all duration-300 group-hover:bottom-4 opacity-0 group-hover:opacity-100">
        <Button className="w-full bg-blue-600 text-white">View Profile</Button>
      </CardFooter>
    </Card>
  );
}
