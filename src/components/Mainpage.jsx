// import { useState } from "react";        

// Import your local images
import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";
import img4 from "../assets/p4.png";
import img5 from "../assets/p5.png";
import img6 from "../assets/p6.png";
import img7 from "../assets/p7.png";
import img8 from "../assets/p8.png";
import img9 from "../assets/p9.png";
import img10 from "../assets/p10.png";

const images = [
    img1, img2, img3, img4, img5,img6, img7, img8, img9, img10,
    

];

export default function Mainpage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-pink-500">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col p-6 md:p-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            NEHA<span className="text-sm">{`(vadakkii)`}</span> Beautiful Memories
          </h1>
        </header>

        {/* Infinite Image Carousel */}
        <div className="my-6 h-full rounded-2xl bg-white/10 p-4 shadow-xl backdrop-blur-sm">
          <div className="relative flex h-full items-center overflow-hidden rounded-xl">
            {/* Infinite scroll wrapper */}
            <div className="flex animate-infinite-scroll">
              {/* Repeat images twice for seamless loop */}
              {[...images, ...images].map((img, i) => (
                <div key={i} className="flex-none h-full w-69 mx-3 flex-shrink-0">
                  <img
                    src={img}
                    alt={`Carousel image ${i + 1}`}
                    className="h-full w-full rounded-lg object-cover shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
        className={` w-auto px-4 mt-6
          group relative flex h-10 items-center justify-center
          rounded-full bg-white/20 backdrop-blur-sm
          text-white font-bold text-lg
          transition-all duration-300 ease-out
          hover:bg-white/30 hover:scale-105
        `}
      >
        {/* Static heart icon */}
        <span className="ml-2">Go Next Page</span>

        {/* Optional overlay heart animation */}
        <span
          className="absolute inset-0 flex items-center justify-center
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-200"
        >
        </span>
      </button>
        
      </div>

      {/* Animation (add to global CSS or keep inline) */}
      <style jsx>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infiniteScroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
