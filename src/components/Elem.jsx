import React, { useEffect, useRef } from "react";
import Button from "./Button";
import gsap from "gsap";

const Elem = () => {
  const elemmainRef = useRef(null);
  const elemRef = useRef(null);
  useEffect(() => {
    const elem = elemRef.current;
    const elemMain = elemmainRef.current;

    const handleMouseEnter = () => {
      gsap.to(elem, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(elem, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.in",
      });
    };

    elemMain.addEventListener("mouseenter", handleMouseEnter);
    elemMain.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      elemMain.removeEventListener("mouseenter", handleMouseEnter);
      elemMain.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="w-full px-2  flex  items-center justify-between border-b-[1px] border-t-[1px] border-zinc-300 mt-10 py-3 relative max-sm:px-3  max-sm:py-3"
      ref={elemmainRef}
    >
      <p className="font-[ff] text-[3vw] leading-[3vw]  max-sm:text-[7vw] max-sm:leading-[5vw] max-sm:mt-3 max-sm:w-[55%]">
        hello
      </p>
      <div
        className="h-36 w-48 rounded-xl overflow-hidden flex justify-center  opacity-0 max-sm:hidden"
        ref={elemRef}
      >
        <img src="" alt="image" className="object-cover object-center  " />
      </div>

      <Button />
    </div>
  );
};

export default Elem;
