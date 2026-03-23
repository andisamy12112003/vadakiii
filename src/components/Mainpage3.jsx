import img1 from "../assets/g1.png";
import img2 from "../assets/g2.png";
import img3 from "../assets/g3.png";
import img55 from "../assets/p55.png";

import { useNavigate } from "react-router";


export default function Mainpage3() {
    // Local image paths (inside public/images/)
  const navigate = useNavigate()
    const previousPage = () => {
        navigate("/final",{replace:true})
      }

  const images = [img1, img2, img3];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img55})`, // your background image
      }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-2xl px-4">
          {/* Mainpage3 grid (6 cards) */}
          <div className="mainpage3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-opacity-10 backdrop-blur-md border border-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-400"
              >
                {/* Image inside container */}
                <div className="relative aspect-[3/3] overflow-hidden rounded-3xl">
                  <img
                    src={img}
                    alt={`Card ${i + 1}`}
                    className="w-200 h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-29">
            <button
        className={` ml-8 w-auto px-4 mt-6
          group relative flex h-10 items-center justify-center
          rounded-full bg-purple-500 text-green-300 backdrop-blur-sm
           font-bold text-lg
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
  );
}