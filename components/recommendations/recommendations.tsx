import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar } from "./avatar";
import { RECOMMENDATIONS } from "@/constants/urls";
import Link from "next/link";
import { recommendations } from "@/constants/recommendations";

export function Recommendation() {
  return (
    <Carousel
      className="w-full h-[500px] max-w-[70%] min-[375px]:max-w-[72.5%] min-[500px]:max-w-[80%] sm:max-w-lg"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {recommendations.map(
          ({ image, name, position, recommendation }, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-[500px]">
                  <CardContent className="h-full flex flex-col items-center p-6">
                    <Avatar src={image} />
                    <span className="text-xl sm:text-3xl">{name}</span>
                    <span className="text-[12px] sm:text-sm text-center text-gray-400">
                      {position}
                    </span>
                    <span className="h-[200px] text-sm text-center mt-4 overflow-y-auto">
                      {recommendation}
                    </span>
                    <Link
                      className="mt-auto"
                      target="_blank"
                      href={RECOMMENDATIONS}
                    >
                      <Button>See all</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
