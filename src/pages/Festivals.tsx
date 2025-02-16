import { festivalData } from "@/constants/constant";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Festivals = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  if (!email) {
    return (
      <div className="text-center w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Please Login to Explore India
        </h1>
        <button onClick={() => navigate("/")} className="p-2 rounded-sm text-blue-400 bg-amber-300 cursor-pointer mt-4">Back To Login</button>
      </div>
    );
  }
  return (
    <section className="w-full px-6 md:px-24 py-10 bg-[#FAE5C3] text-[#5A3E1B]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        Festivals of India: A Celebration of Culture & Tradition
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-700 mt-4 max-w-3xl mx-auto"
      >
        Indian festivals are a vibrant expression of culture, faith, and
        community, celebrated with immense joy and devotion. From the dazzling
        lights of Diwali to the colorful splashes of Holi, each festival carries
        deep historical and spiritual significance, bringing people together in
        celebration.
      </motion.p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {festivalData.map((festival, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-4 shadow-md rounded-lg"
          >
            <img
              src={festival.image}
              alt={festival.name}
              className="w-full h-60 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-4">{festival.name}</h2>
            <p className="text-sm text-gray-500">{festival.region}</p>
            <p className="text-gray-600 mt-2">{festival.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Festivals;
