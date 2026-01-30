"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselDemo() {
    return (
        <Carousel className="w-full ml-120 max-w-[12rem] sm:max-w-xs"
            opts={{              // Carousel options
                align: "start",
                loop: true,
            }}
            
            plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
        >
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    //   <CarouselItem className="basis-1/3" key={index}> // for 3 items in viewport
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className=" relative flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                   <Image src="/photo.jpg" alt="" fill />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
