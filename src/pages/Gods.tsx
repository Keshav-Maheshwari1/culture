import { godData } from "@/constants/constant";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Gods = () => {
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
        Gods of India: Divine Presence & Spiritual Legacy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed"
      >
        Indian mythology and spirituality are deeply rooted in the worship of
        deities, each representing different aspects of the universe. From Lord
        Vishnu, the preserver, to Goddess Durga, the embodiment of strength,
        Hindu gods and goddesses symbolize faith, power, and cosmic balance.
      </motion.p>

      <div className="mt-12 flex flex-col gap-12">
        {godData.map((god, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`bg-white p-8 shadow-lg rounded-xl flex flex-col md:flex-row items-center 
        ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={god.image}
                alt={god.name}
                className="w-auto h-64 object-contain rounded-lg"
              />
            </div>

            {/* Text Container */}
            <div
              className={`w-full md:w-1/2 p-8 text-center ${
                index % 2 !== 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <h2 className="text-3xl font-semibold">{god.name}</h2>
              <p className="text-lg text-gray-500 font-medium">
                {god.association}
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {god.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gods;
