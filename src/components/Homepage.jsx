import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function Homepage() {
  const navigate = useNavigate();
  const [hearts, setHearts] = useState([]);
const [clicked, setClicked] = useState(false);
  // Adjust total count depending on performance target
  const HEART_COUNT = 1500; // ≈1500 hearts
const handleButtonClick = () => {
    // Perform any necessary logic here (e.g., validation, API calls)
    navigate("/memo"); // Navigate to the "/about" route
  };
  useEffect(() => {
    const list = Array.from({ length: HEART_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 6,   // 4–10px
      opacity: 0.3 + Math.random() * 0.7,
      duration: 5 + Math.random() * 15, // 5–20s
      delay: Math.random() * 10,
    }));
    setHearts(list);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900">
      {/* Animated hearts background */}
      <div className="absolute inset-0">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute pointer-events-none animate-heart"
            style={{
              left: `${heart.x}vw`,
              top: `${heart.y}vh`,
              fontSize: `${heart.size}px`,
              opacity: heart.opacity,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            💗
          </div>
        ))}
      </div>

      {/* Optional content on top */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          
        </h1>
        <button
        onClick={() => setClicked((c) => !c)}
        className={` w-auto px-4
          group relative flex h-20 items-center justify-center
          rounded-full bg-white/20 backdrop-blur-sm
          text-white font-bold text-lg
          transition-all duration-300 ease-out
          hover:bg-white/30 hover:scale-105
          ${clicked ? "animate-ping-once" : ""}
        `}
      >
        {/* Static heart icon */}
        <span className="text-2xl">❤️</span>
        <span className="ml-2">Click multiple Time and Feel Flow of Hearts</span>

        {/* Optional overlay heart animation */}
        <span
          className="absolute inset-0 flex items-center justify-center
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-200"
        >
          <span className="animate-scale-heart text-3xl">💖</span>
        </span>
      </button>

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
        <span className="ml-2" onClick={handleButtonClick}>Go Next Page</span>

        {/* Optional overlay heart animation */}
        <span
          className="absolute inset-0 flex items-center justify-center
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-200"
        >
        </span>
      </button>
      
      </div>

      <style jsx>{`
        @keyframes floatHeart {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(
                ${Math.random() > 0.5 ? "" : "-"}${5 + Math.random() * 30}vw,
                ${Math.random() > 0.5 ? "" : "-"}${5 + Math.random() * 30}vh,
                0
              )
              rotate(${(Math.random() * 60 - 30).toFixed(1)}deg);
          }
          100% {
            transform: translate3d(
                ${Math.random() > 0.5 ? "" : "-"}${5 + Math.random() * 30}vw,
                ${Math.random() > 0.5 ? "" : "-"}${5 + Math.random() * 30}vh,
                0
              )
              rotate(${(Math.random() * 60 - 30).toFixed(1)}deg);
          }
        }

        .animate-heart {
          animation: floatHeart infinite linear;
        }
      `}</style>
       <style jsx>{`
        .animate-ping-once {
          animation: pingOnce 1s ease-in-out;
        }

        @keyframes pingOnce {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-heart {
          animation: scaleHeart 0.8s ease-in-out infinite alternate;
        }

        @keyframes scaleHeart {
          from {
            transform: scale(0.9);
          }
          to {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
