import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/constants/constant";
import { useNavigate } from "react-router-dom";

const CulturalHighlights = () => {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    const routes = [
      "/vedas",
      "/heritage",
      "/food",
      "/monuments",
      "/festivals",
      "/gods",
    ];
    if (routes[index]) {
      navigate(routes[index]);
    }
  };

  return (
    <section className="w-screen px-6 py-2 md:py-16 bg-[#FFF3CD]">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#5A3E2B] leading-tight">
          Explore the Richness of Indian Culture
        </h2>
        <p className="text-lg text-[#7A2E19] mt-4">
          From ancient scriptures to breathtaking monuments, experience India's
          timeless heritage.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {categories.map((item, index) => (
          <Card
            key={index}
            onClick={() => handleClick(index)}
            className="overflow-hidden shadow-xl rounded-xl cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-white border-2 border-[#D4AF37]"
          >
            <CardContent className="p-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-5 text-center bg-[#E59622]">
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CulturalHighlights;
