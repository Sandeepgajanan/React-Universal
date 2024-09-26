import React, { useState } from "react";

import { motion, useScroll } from "framer-motion";

const Work = () => {
  const [data, setData] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "55%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", function (data) {
    function showData(arr) {
      setData((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showData([]);
        break;
      case 1:
        showData([0]);

        break;
      case 2:
        showData([0, 1]);
        break;
      case 4:
        showData([0, 1, 2]);
        break;
      case 6:
        showData([0, 1, 2, 3]);
        break;
      case 7:
        showData([0, 1, 2, 3, 4]);
        break;
      case 8:
        showData([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <>
      <div className="max-w-screen-xl mx-auto text-center relative mt-10 max-sm:mt-20">
        <h1 className="text-[28vw] font-medium tracking-tight select-none leading-none max-sm:text-[38vw] ">
          work
        </h1>
        <div className="absolute w-full h-full top-0 max-sm:hidden">
          {data.map(
            (item, index) =>
              item.isActive && (
                <img
                  className=" absolute w-60 rounded-lg  -translate-x-[50%]  -translate-y-[50%]"
                  key={index}
                  style={{ top: item.top, left: item.left }}
                  src={item.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Work;
