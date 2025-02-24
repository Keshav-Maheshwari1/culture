import { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/home" },
  { name: "Vedas", path: "/vedas" },
  { name: "Monuments", path: "/monuments" },
  { name: "Profile", path: "/profile" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh"; // Prevents scrolling
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-[#FFF5E1] shadow-md w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-gray-800 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          Logo
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {menuItems.map(({ name, path }) => (
            <p
              key={path}
              onClick={() => navigate(path)}
              className="cursor-pointer hover:text-[#DAA520] transition-all duration-300"
            >
              {name}
            </p>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-gray-800"
          onClick={() => setIsMenuOpen(false)}
        >
          <RxCross1 size={28} />
        </button>

        <ul className="flex flex-col items-center mt-16 space-y-6 text-gray-800 font-medium">
          {menuItems.map(({ name, path }) => (
            <li
              key={path}
              onClick={() => handleNavigation(path)}
              className="cursor-pointer hover:text-[#DAA520] transition-all duration-300 text-lg"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
