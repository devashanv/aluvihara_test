import React from "react";

import Hero from "../../assets/images/palm-hero.png";

const HomePage = () => {
  return (
    <div className="text-gray-800 h-screen w-full">
      <section className="relative h-full w-full text-white flex items-center overflow-hidden">
        <img
          src={Hero}
          alt="Aluvihara Rock Temple"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute left-0  bottom-1/2 transform translate-y-1/2 z-20 bg-black/50 px-6 md:px-20 py-6 md:py-10 text-left">
          <h2 className="text-3xl md:text-4xl font-light">
            <span className="text-primary font-semibold">The</span>
          </h2>
          <h1 className="text-4xl md:text-6xl font-light">
            <span className="text-white">Timeless Legacy</span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
