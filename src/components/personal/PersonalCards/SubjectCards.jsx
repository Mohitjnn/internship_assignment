import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function SubjectCard({
  imageUrl = "/SubjectCard.png",
  imageAlt = "Placeholder image",
  heading = "Card Heading",
  description = "Short five word description here",
}) {
  return (
    <Card className="w-[15rem] border bg-transparent border-gray-500 rounded-lg overflow-hidden mx-2 my-4 p-2 space-y-0 hover:backdrop-blur-xl hover:bg-white/10">
      <Image
        src="/SubjectCard.png"
        alt={imageAlt}
        width={100}
        height={100}
        className="object-cover p-2 rounded-xl"
      />
      <CardHeader className="text-left p-2">
        <CardTitle className="text-white text-2xl font-light">
          {heading}
        </CardTitle>
        <CardDescription className="text-gray-300/80 text-xs">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
