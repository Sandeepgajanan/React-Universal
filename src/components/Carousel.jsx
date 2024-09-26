import { useEffect, useState } from "react";

const Carousel = () => {
  const [imageId, setImageId] = useState(0);

  const slidesContent = [
    { img: "image1.jpg", text: "Text for image 1" },
    { img: "image2.jpg", text: "Text for image 2" },
    { img: "image3.jpg", text: "Text for image 3" },
  ];

  useEffect(() => {
    const slider = document.getElementById("slider");
    slider.style.transform = `translateX(${-100 * imageId}%)`;
    slider.style.transition = "transform 0.5s ease-in-out";
  }, [imageId]);

  const handleCircleClick = (index) => {
    setImageId(index);
  };

  return (
    <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
      <div id="slider" className="flex">
        {slidesContent.map((item, i) => (
          <div key={i} className="w-full flex-shrink-0 h-[400px] p-4">
            <div className="relative h-full bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
              <img
                src={item.img}
                alt={`carousel-slide-${i}`}
                className="w-full h-3/4 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slidesContent.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full border-2 border-white transition-colors duration-300 ${
              imageId === i ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => handleCircleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
