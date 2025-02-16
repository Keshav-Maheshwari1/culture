import { upanishads, vedas } from "@/constants/constant";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Vedas = () => {
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
    <main className="w-full px-6 md:px-24 py-10 bg-[#FAE5C3] text-[#5A3E1B]">
      {/* SEO Optimized Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        Vedas and Upanishads
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-700 mt-4 max-w-3xl mx-auto"
      >
        The Vedas and Upanishads are the oldest and most revered scriptures of
        Hindu philosophy, forming the foundation of spiritual wisdom and
        metaphysical knowledge in Indian tradition.
      </motion.p>

      {/* The Four Vedas Section */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold text-center mt-8"
      >
        The Four Vedas
      </motion.h2>
      <p className="text-center text-gray-700 mt-2 max-w-3xl mx-auto">
        The Vedas are divided into four main texts, each serving a distinct
        purpose in Vedic knowledge.
      </p>

      {/* Vedas Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vedas.map((veda, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-4 shadow-md rounded-lg"
          >
            <img
              src={veda.image}
              alt={`Ancient manuscript of ${veda.title}, containing spiritual knowledge and hymns.`}
              className="w-full h-60 object-cover rounded-md"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mt-4">{veda.title}</h3>
            <p className="text-gray-600 mt-2">{veda.description}</p>
          </motion.article>
        ))}
      </div>

      {/* Upanishads Section */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold text-center mt-10"
      >
        The Upanishads: The Essence of Vedic Philosophy
      </motion.h2>
      <p className="text-center text-gray-700 mt-2 max-w-3xl mx-auto">
        The Upanishads explore profound philosophical concepts such as the
        nature of the self (Atman), the ultimate reality (Brahman), and the path
        to liberation (Moksha).
      </p>

      {/* Upanishads Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upanishads.map((upanishad, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-4 shadow-md rounded-lg"
          >
            <img
              src={upanishad.image}
              alt={`Ancient text of ${upanishad.title}, a foundational scripture of Hindu metaphysics.`}
              className="w-full h-60 object-cover rounded-md"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mt-4">{upanishad.title}</h3>
            <p className="text-gray-600 mt-2">{upanishad.description}</p>
          </motion.article>
        ))}
      </div>
    </main>
  );
};

export default Vedas;
