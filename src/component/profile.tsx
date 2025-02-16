import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/utils/UserContext";

type User = {
  name: string;
  email: string;
};

const Profile = () => {
  const { getByEmail, deleteUser } = useUserContext();
  const [user, setUser] = useState<User | null>(null);
  const email = localStorage.getItem("email");
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

  useEffect(() => {
    if (email) {
      getByEmail(email)
        .then((res: User | null) => setUser(res)) // Explicitly type response
        .catch(() => setUser(null)); // Handle potential errors
    } else {
      setUser(null);
    }
  }, [email, getByEmail]);

  const handleLogout = () => {
    if (email) {
      deleteUser(email);
    }
    setUser(null);
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <section className="w-full flex justify-center items-center min-h-screen bg-[#F3F4F6] text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-80 md:w-96 text-center"
      >
        <h1 className="text-2xl font-semibold mt-4">
          {user ? user.name : "Guest User"}
        </h1>
        <p className="text-gray-600">
          {user ? user.email : "No email available"}
        </p>

        <motion.button
          onClick={handleLogout}
          className="mt-6 w-full py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Profile;
