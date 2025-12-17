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
import { RecommendationText } from "./recommendation-text";
import { MagicCard } from "../magicui/magic-card";

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
                  <MagicCard className="h-[100%]">
                    <CardContent className="h-full flex flex-col items-center p-6">
                      <Avatar src={image} name={name} />
                      <span className="text-xl sm:text-3xl">{name}</span>
                      <span className="text-[12px] sm:text-sm text-center text-gray-400">
                        {position}
                      </span>
                      <RecommendationText recommendation={recommendation} />
                        <Button asChild>
                          <Link
                            className="mt-auto"
                            target="_blank"
                            href={RECOMMENDATIONS}
                            aria-label="See all recommendations on LinkedIn"
                          >
                            See all
                          </Link>
                        </Button>
                    </CardContent>
                  </MagicCard>
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
