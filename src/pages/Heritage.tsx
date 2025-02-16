import { heritages } from "@/constants/constant";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Heritage = () => {
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
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        India's Cultural and Architectural Heritage
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-lg text-[#5D4037] mt-6 max-w-3xl mx-auto leading-relaxed"
      >
        India is a land of rich cultural and architectural heritage. From the
        grand palaces of Rajasthan to the ancient temples of Tamil Nadu, every
        region tells a unique story. These heritage sites symbolize history,
        craftsmanship, and tradition.
      </motion.p>

      {/* Heritage Sites Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {heritages.map((site, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-6 shadow-lg rounded-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={site.image}
              alt={`${site.title} Image`}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">{site.title}</h2>
            <h3 className="text-lg font-medium text-[#9C6644]">
              {site.location}
            </h3>
            <p className="text-[#5D4037] mt-3 leading-relaxed">
              {site.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Sections */}
      {[
        {
          title: "Famous Heritage Sites of India",
          content:
            "These UNESCO-listed heritage sites showcase India's architectural brilliance and cultural depth, preserving stories that span centuries.",
        },
        {
          title: "Historical Significance",
          content:
            "Many of India's heritage sites date back thousands of years and provide insights into the evolution of art, architecture, and civilization. The Taj Mahal, built by Mughal Emperor Shah Jahan, is one of the most visited monuments globally and a symbol of eternal love. Similarly, the ruins of Hampi, a former capital of the Vijayanagar Empire, reveal the grandeur of medieval South India.",
        },
        {
          title: "Architectural Styles",
          content:
            "India boasts a variety of architectural styles influenced by various dynasties and cultures. The Indo-Islamic style, seen in monuments like the Qutub Minar and Red Fort, is characterized by intricate carvings and geometric patterns. The Dravidian style of temples in Tamil Nadu, such as the Brihadeeswarar Temple, is marked by towering gopurams and elaborate sculptures. The Rajput forts and palaces, including Amer Fort and Mehrangarh Fort, showcase stunning frescoes and mirror work.",
        },
        {
          title: "Preservation and Conservation",
          content:
            "Efforts to preserve India's heritage sites have been undertaken by organizations such as UNESCO and the Archaeological Survey of India (ASI). Conservation projects aim to restore and maintain the structural integrity of these monuments while ensuring sustainable tourism. Initiatives like 'Adopt a Heritage' encourage corporate participation in heritage conservation.",
        },
      ].map((section, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-center mb-4 border-b-2 border-[#D7A86E] pb-2">
            {section.title}
          </h2>
          <p className="text-[#5D4037] text-lg text-justify max-w-5xl mx-auto leading-relaxed">
            {section.content}
          </p>
        </motion.section>
      ))}
    </main>
  );
};

export default Heritage;
