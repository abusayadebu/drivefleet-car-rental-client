"use client";

import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

 const Footer = () => {
  return (
    <footer className="bg-[#141A32] text-white min-h-[50vh] flex flex-col justify-center px-6 md:px-12 lg:px-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#D4A843]">
            DriveFleet
          </h1>

          <p className="mt-4 text-md text-white/60 leading-6 max-w-xs">
            Redefining luxury mobility through precision, passion, and
            unparalleled service.
          </p>
        </div>

        {/* NAVIGATE */}
        <div>
          <h3 className="text-sm tracking-[3px] font-semibold text-[#D4A843] mb-5">
            NAVIGATE
          </h3>

          <ul className="space-y-3 text-md text-white/60">
            <li className="hover:text-[#D4A843] transition cursor-pointer">
              The Collection
            </li>
            <li className="hover:text-[#D4A843] transition cursor-pointer">
              Our Heritage
            </li>
            <li className="hover:text-[#D4A843] transition cursor-pointer">
              Concierge
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-sm tracking-[3px] font-semibold text-[#D4A843] mb-5">
            RESOURCES
          </h3>

          <ul className="space-y-3 text-md text-white/60">
            <li className="hover:text-[#D4A843] transition cursor-pointer">
              Legal
            </li>
            <li className="hover:text-[#D4A843] transition cursor-pointer">
              Privacy
            </li>
            <li className="hover:text-[#D4A843] transition cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-sm tracking-[3px] font-semibold text-[#D4A843] mb-5">
            CONNECT
          </h3>

          {/* Icons */}
          <div className="flex items-center gap-5 text-[#D4A843] text-lg">
            <FiMail className="cursor-pointer hover:scale-110 transition" />
            <FiPhone className="cursor-pointer hover:scale-110 transition" />
            <FiMapPin className="cursor-pointer hover:scale-110 transition" />
          </div>

          <p className="mt-5 text-md text-white/60">
            London • Paris • Monaco • Dubai
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-xs text-white/40">
        © 2024 DriveFleet. Precision Engineering. Personal Service.
      </div>
    </footer>
  );
}

export default Footer;