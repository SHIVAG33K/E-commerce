import React from 'react';

function Banner() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 overflow-hidden rounded-lg">
      {/* Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/1000x800?fashion')`,
        }}
      ></div>

      {/* Overlay with Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h2 className="text-white text-4xl font-bold text-center">
          Explore the new <br />
          Shirts Collection
        </h2>
      </div>
    </div>
  );
}

export default Banner;
