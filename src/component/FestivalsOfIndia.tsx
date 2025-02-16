import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { festivals } from "@/constants/constant";

const FestivalsOfIndia = () => {
  return (
    <section className="w-screen px-6 py-16 bg-[#FFF3CD]">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#7A2E19] leading-tight">
          Festivals of India
        </h2>
        <p className="text-lg text-[#5A3E2B] mt-4">
          Experience the vibrant and colorful celebrations that define India's
          rich cultural heritage.
        </p>
      </div>

      <Carousel
        className="max-w-6xl mx-auto mt-12"
        plugins={[
          Autoplay({
            delay: 2500,
            active: true,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {festivals.map((festival, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 p-3"
            >
              <Card className="relative overflow-hidden rounded-xl shadow-xl group transition-transform duration-500 hover:scale-[1.03] border-2 border-[#D4AF37]">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-72 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-center px-6 py-4">
                  <h3 className="text-2xl font-semibold tracking-wide">
                    {festival.name}
                  </h3>
                  <p className="text-md mt-2 leading-relaxed">
                    {festival.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default FestivalsOfIndia;
