import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  return (
    <Card className="hidden lg:block lg:w-[40%] p-4 lg:p-10 bg-black/60 backdrop-blur-xl text-white border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-2xllg:text-4xl font-bold">
          Master Any Subject with Online Teachers
        </CardTitle>
        <p className="text-sm mt-2">
          Prepare to achieve your goals anytime, anywhere.
        </p>
      </CardHeader>
      <CardContent className="text-center">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="text-white">
                Select a Subject
              </Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Choose a subject" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  className=" backdrop-blur-md border-none "
                >
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="languages">Languages</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="bg-orange-500 text-white px-8  hover:bg-orange-600">
          Submit
        </Button>
      </CardFooter>
      <div className="mt-4 text-center text-xs">
        <p className="font-bold">Popular:</p>
        <p>
          Russian, Portuguese, Finnish, Hindi, Spanish, Hebrew, Italian, German,
          Chinese, French, Arabic, English
        </p>
      </div>
    </Card>
  );
}
