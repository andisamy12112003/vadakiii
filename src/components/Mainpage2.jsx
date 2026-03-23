import React from "react";

// Import your local background image
import loverBg from "../assets/p95.png";
import { useNavigate } from "react-router";

export default function Mainpage2() {
  const navigate = useNavigate()
  const previousPage = () => {
      navigate("/wish",{replace:true})
    }
    const nextPage = () => {
      navigate("/verify",{replace:true})
    }
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background image (lover photo) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loverBg})` }}
      >
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Floating clouds animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cloud 1 */}
        <div className="animate-cloud-1 absolute left-10 top-10 text-4xl text-white/70">☁️</div>
        {/* Cloud 2 */}
        <div className="animate-cloud-2 absolute right-8 top-24 text-5xl text-white/60">☁️</div>
        {/* Cloud 3 */}
        <div className="animate-cloud-3 absolute left-16 bottom-20 text-3xl text-white/50">☁️</div>
      </div>

      {/* Center message */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          This is for you 💖
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/90 md:text-base">
          ****************
        </p>

        <div className="flex justify-center">
          <button
        className={` w-auto px-4 mt-6
          group relative flex h-10 items-center justify-center
          rounded-full backdrop-blur-sm
          bg-purple-500 text-green-300 font-bold text-lg
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
          rounded-full  backdrop-blur-sm
          bg-purple-500 text-green-300 font-bold text-lg
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

      {/* Animation styles (you can paste this in global CSS or in a style block) */}
      <style jsx>{`
        @keyframes floatCloud {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(20px) translateY(-10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        .animate-cloud-1 {
          animation: floatCloud 8s ease-in-out infinite;
        }
        .animate-cloud-2 {
          animation: floatCloud 10s ease-in-out infinite reverse;
        }
        .animate-cloud-3 {
          animation: floatCloud 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
