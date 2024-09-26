import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./Button";
import { navdata } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="max-w-screen-xl mx-auto">
      <nav className="px-2 py-4 flex justify-between items-center select-none max-sm:py-2">
        <div className="flex items-center">
          <img className="h-10 mt-6 max-sm:h-6 max-sm:mt-2" src="" alt="logo" />
        </div>
        <div className="hidden max-sm:block">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white z-50 relative"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`flex items-center gap-10 pt-4 max-sm:flex-col max-sm:items-center max-sm:pt-2 max-sm:gap-4 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:h-screen max-sm:bg-black max-sm:z-40 max-sm:px-4 max-sm:py-20 ${
            isMenuOpen ? "max-sm:flex" : "max-sm:hidden"
          }`}
        >
          {navdata.map((item, index) => (
            <motion.a
              href="#"
              key={index}
              className="capitalize py-1 relative flex-shrink-0 px-3 w-fit font-medium text-md opacity-85 max-sm:text-lg max-sm:px-0"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {item}
            </motion.a>
          ))}
          <div className="hidden max-sm:block">
            <Button />
          </div>
        </div>
        <div className="max-sm:hidden">
          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
