import React from "react";
import { motion } from "framer-motion";
const Button = () => {
  return (
    <motion.div
      className="relative w-28 h-8 text-2xl rounded-md border-[1px] font-[ff] border-zinc-400  mt-4  flex justify-center hover:text-zinc-900 overflow-hidden  max-sm:w-fit max-sm:px-2 max-sm:hover:text-zinc-100"
      whileHover="hover"
    >
      <span className="uppercase text-md font-semibold cursor-pointer relative z-10 ">
        Button
      </span>

      <motion.div
        className="absolute top-0 left-0 w-28 h-8 bg-cyan-500"
        initial={{ y: "100%" }}
        variants={{
          hover: {
            y: "0%",
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        }}
      />
    </motion.div>
  );
};

export default Button;
