import { motion } from "framer-motion";
import { monuments } from "@/constants/constant";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Monuments = () => {
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
        India's Iconic Monuments
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-700 mt-4 max-w-3xl mx-auto"
      >
        India is home to some of the world's most breathtaking architectural marvels, reflecting its rich history, diverse cultures, and artistic grandeur. From ancient temples to grand palaces, each monument tells a unique story of its time.
      </motion.p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {monuments.map((monument, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-4 shadow-md rounded-lg"
          >
            <img
              src={monument.image}
              alt={`${monument.name} Image`}
              className="w-full h-60 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-4">{monument.name}</h2>
            <p className="text-gray-600 mt-2">{monument.description}</p>
            <p className="text-gray-500 mt-2 font-medium">Location: {monument.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Monuments;
