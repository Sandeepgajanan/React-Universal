import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Guitar = () => {
  const guitarRef = useRef(null);
  const guitarsvgRef = useRef(null);
  const finalPath = "M 10 75 Q 500 75 990 75";

  useEffect(() => {
    const handleMouseMove = (e) => {
      const svgBounds = guitarRef.current.getBoundingClientRect();
      let x = e.x - svgBounds.left;
      let y = e.y - svgBounds.top;

      let path = `M 10 75 Q ${x} ${y} 990 75`;
      gsap.to(guitarsvgRef.current, {
        attr: { d: path },
        duration: 0.4,
        ease: "Power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(guitarsvgRef.current, {
        attr: { d: finalPath },
        duration: 2,
        ease: "elastic.out(1,0.2)",
      });
    };

    const svgElement = guitarRef.current;
    svgElement.addEventListener("mousemove", handleMouseMove);
    svgElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svgElement.removeEventListener("mousemove", handleMouseMove);
      svgElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <svg width="1000" height="150" ref={guitarRef} className="-mt-10">
        <path
          d={finalPath}
          stroke="white"
          fill="transparent"
          ref={guitarsvgRef}
        />
      </svg>
    </div>
  );
};

export default Guitar;
