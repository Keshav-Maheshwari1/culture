import CulturalHighlights from "@/component/CulturalHighlights";
import FestivalsOfIndia from "@/component/FestivalsOfIndia";
import FlavorsOfIndia from "@/component/FlavorsOfIndia";
import HeritageSites from "@/component/HeritageSites";
import LegacyTimeline from "@/component/LegacyTimeline";
import Hero from "@/component/Hero";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const email = localStorage.getItem("email");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  if (!email) {
    return (
      <div className="text-center w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Please Login to Explore India
        </h1>
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-sm text-blue-400 bg-amber-300 cursor-pointer mt-4"
        >
          Back To Login
        </button>
      </div>
    );
  }
  return (
    <main>
      <Hero />
      <section className="md:mt-1">
        <CulturalHighlights />
      </section>
      <section className=" md:my-1">
        <LegacyTimeline />
      </section>
      <section className=" md:my-1">
        <FlavorsOfIndia />
      </section>
      <section className=" md:my-1">
        <HeritageSites />
      </section>
      <section className=" md:my-1">
        <FestivalsOfIndia />
      </section>
    </main>
  );
};

export default Home;
