import React from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Border from "./components/Border";
import Work from "./components/Work";
import Expand from "./components/Expand";
import Eye from "./components/Eye";
import Guitar from "./components/Guitar";
import Marque from "./components/Marque";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Elem from "./components/Elem";
const App = () => {
  return (
    <div className="w-full h-full text-zinc-100 bg-zinc-800">
      <Loader />
      <Cursor />
      <Navbar />
      <Border />
      <Work />
      <Expand />
      <Eye />
      <Carousel />
      <Guitar />
      <Marque />
      <Elem />
      <Footer />
    </div>
  );
};

export default App;
