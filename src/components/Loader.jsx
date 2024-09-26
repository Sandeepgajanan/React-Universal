import React, { useEffect } from "react";
import { loaderlines } from "../constants";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    const lines = document.querySelectorAll(".loader h1");
    const tl = gsap.timeline();
    lines.forEach((line) => {
      tl.to(line, { opacity: 1, duration: 0.8 }).to(line, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      });
    });
    tl.to(".loader", {
      y: -700,
      duration: 0.8,
      delay: 0.3,
      opacity: 0,
    }).eventCallback("onComplete", () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.position = "";
      document.body.style.width = "";
    });

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <div className="loader w-full h-screen top-0 bg-zinc-800 z-[99] pointer-events-none flex flex-col items-center justify-center fixed">
      {loaderlines.map((item, index) => (
        <h1
          className="font-bold uppercase text-[7vw] loadercolor font-[ff] absolute opacity-0 max-sm:text-[9vw]"
          key={index}
        >
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Loader;
