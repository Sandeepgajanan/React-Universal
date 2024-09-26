import React from "react";

const Footer = () => {
  return (
    <div className="w-full  py-10 font-[ff]">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center">
        <h1 className="font-ff text-4xl max-sm:text-xl">
          Designed by:
          <a
            href="https://linkedin.com/in/sandeep-gajanan-05610a256"
            className="heading hover:underline pl-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sandeep Gajanan
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
