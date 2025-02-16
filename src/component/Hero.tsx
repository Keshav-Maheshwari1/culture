import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <Carousel
      className="w-screen h-[50vh] sm:h-[70vh] md:h-[85vh] overflow-hidden"
      plugins={[
        Autoplay({
          delay: 3000,
          active: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="w-full h-full">
        {[
          "https://realhappiness.org/images/vedas-vedic-culture-and-meditation.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcnNi736PLb_gHhLd2_i1doaM9RB0U_C_Wg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKynoAjdbCGKpl8Ea-TChKMDyejICI63qdeZAb8U6QhuUS_tnUNP-mHX8Wry-t9aAVMKM&usqp=CAU",
        ].map((src, index) => (
          <CarouselItem
            key={index}
            className="relative flex items-center justify-center w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="z-20" />
      <CarouselNext className="z-20" />
    </Carousel>
  );
};

export default Hero;
