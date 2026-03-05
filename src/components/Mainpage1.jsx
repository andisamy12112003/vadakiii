import React from "react";

// Import your local photo
import loverPhoto from "../assets/p93.png";
import { useNavigate } from "react-router";
export default function Mainpage1() {
  const navigate = useNavigate();
  const nextPage = () => {
      navigate("/final",{replace:true})
    }
  const previousPage = () => {
      navigate("/memo",{replace:true})
    }
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600">
      {/* Soft overlay */}
      {/* Main card container */}
      <div className="relative z-10 mx-4 max-w-lg rounded-3xl bg-white/20 p-6 shadow-2xl backdrop-blur-md md:p-10">
        {/* Photo frame */}
        <div className="mb-6 flex justify-center">
          <div className="overflow-hidden rounded-2xl border-4 border-pink-300/70 shadow-lg">
            <img
              src={loverPhoto}
              alt="My"
              className="h-48 w-48 object-cover md:h-60 md:w-60"
            />
          </div>
        </div>

        {/* Birthday wishes text */}
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold md:text-3xl">
            Happy Birthday नेहा 💜, Vadakiii 💖
          </h1>
          <p className="mt-3 text-sm leading-relaxed md:text-base">
            Happy Birthday! May your day sparkle with joy and surprises.
            Wishing you health, success, and endless adventures ahead.
            You're amazing—celebrate big and shine bright!
            To new beginnings, sweet memories, and all your dreams.
            Cheers to you on this special day vadakkii!
          </p>
          <p className="mt-4 text-lg font-medium">#I am always with you</p>
        </div>

        <div className="w-full flex justify-center">
            <button
        className={` w-auto px-4 mt-6
          group relative flex h-10 items-center justify-center
          rounded-full bg-white/20 backdrop-blur-sm
          text-white font-bold text-lg
          transition-all duration-300 ease-out
          hover:bg-white/30 hover:scale-105
        `}
        onClick={nextPage}
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
      <button
        className={` ml-8 w-auto px-4 mt-6
          group relative flex h-10 items-center justify-center
          rounded-full bg-white/20 backdrop-blur-sm
          text-white font-bold text-lg
          transition-all duration-300 ease-out
          hover:bg-white/30 hover:scale-105
        `}
        onClick={previousPage}
      >
        {/* Static heart icon */}
        <span className="ml-2">Previous Page</span>

        {/* Optional overlay heart animation */}
        <span
          className="absolute inset-0 flex items-center justify-center
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-200"
        >
        </span>
      </button>
        </div>
      </div>

      {/* Optional floating hearts (pure decoration) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-2xl text-white/50">💖</div>
        <div className="absolute top-24 right-12 text-3xl text-white/40">💗</div>
        <div className="absolute bottom-20 left-8 text-2xl text-white/60">💓</div>
        <div className="absolute bottom-16 right-10 text-3xl text-white/50">❤️</div>
      </div>
    </div>
  );
}
