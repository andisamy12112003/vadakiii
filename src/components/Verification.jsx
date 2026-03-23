import React, { useState } from "react";
import Mainpage3 from "./Mainpage3";
import img55 from "../assets/p55.png"
import { useNavigate } from "react-router";

export default function Verificationpage() {
  const navigate = useNavigate()
    const previousPage = () => {
        navigate("/final",{replace:true})
      }
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const CORRECT_PASSWORD = "@vadakiii"; // ✅ your fixed password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setVerified(true);      // → go to “next” page/success state
      setError("");
    } else {
      setVerified(false);
      setError("Thappu @vadakiii... Nalla yosichu Enter panu");
    }
  };

  if (verified) {
    return (
        <Mainpage3/>
    );
  }

  return (
    <div className="min-h-screen from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4"
    style={{
            backgroundImage: `url(${img55})`, // your background image
          }}>
      <div className="w-full max-w-md rounded-xl bg-trasperant bg-opacity-10 backdrop-blur-md p-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Unlock your gifts
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // clear error on typing
              }}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-opacity-20 text-white border border-gray-600 border-opacity-30 text-gray-800 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            />
          </div>

          {error && (
            <p className="text-sm text-white text-center font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-white text-purple-600 font-bold shadow-lg hover:bg-opacity-90 transition-colors"
          >
            Verify & Take It!!!
          </button>


        </form>
        <div className="flex justify-center">
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
    </div>
  );
}