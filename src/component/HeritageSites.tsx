import { Card, CardContent } from "@/components/ui/card";
import { heritageSites } from "@/constants/constant";

const HeritageSites = () => {
  return (
    <section className="w-screen px-6 md:px-24 py-12 bg-[#F8F0E5]">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#8B4513]">
        Heritage Sites & Monuments
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
        Explore India's iconic heritage sites and monuments that narrate the country's rich history.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {heritageSites.map((site, index) => (
          <Card key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={site.image}
              alt={site.name}
              className="w-full h-60 object-cover"
            />
            <CardContent className="p-5 text-center">
              <h3 className="text-xl font-bold text-[#4B0082]">{site.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{site.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HeritageSites;
