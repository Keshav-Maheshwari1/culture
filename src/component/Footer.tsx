import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-100">
            Incredible India
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Explore India's rich heritage, festivals, and traditions. Discover
            the legacy of the Vedas, Upanishads, and diverse cultures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a
                href="/heritage"
                className="hover:text-gray-200 transition duration-300"
              >
                Heritage Sites
              </a>
            </li>
            <li>
              <a
                href="/festivals"
                className="hover:text-gray-200 transition duration-300"
              >
                Festivals
              </a>
            </li>
            <li>
              <a
                href="/food"
                className="hover:text-gray-200 transition duration-300"
              >
                Indian Cuisine
              </a>
            </li>
            <li>
              <a
                href="/culture"
                className="hover:text-gray-200 transition duration-300"
              >
                Cultural Highlights
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Follow Us</h3>
          <div className="flex space-x-5 mt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-[#1877F2] transition duration-300"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-[#E4405F] transition duration-300"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-[#1DA1F2] transition duration-300"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-400 hover:text-[#FF0000] transition duration-300"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://incredibleindia.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200 transition duration-300"
        >
          Incredible India
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
