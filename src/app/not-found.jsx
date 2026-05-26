"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f1324] flex items-center justify-center px-4 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-[#D4A843]/20 blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-[#D4A843]/10 blur-3xl"></div>

      {/* Content */}
      <div className="text-center max-w-2xl z-10">

        {/* 404 */}
        <h1 className="text-[110px] sm:text-[150px] md:text-[220px] font-extrabold leading-none text-[#D4A843] drop-shadow-[0_0_25px_rgba(212,168,67,0.45)]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-5 text-base sm:text-lg leading-8 max-w-xl mx-auto">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 bg-[#D4A843] text-[#0f1324] px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,168,67,0.35)]"
        >
          <FaHome className="text-xl" />
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;