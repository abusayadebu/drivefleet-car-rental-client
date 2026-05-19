"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { FaStar } from "react-icons/fa";


export default function Banner() {
  return (
    <section className="relative h-screen min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src={'/assets/hero.jpg'}
        alt="Luxury Car Banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/25 to-transparent"></div>

      {/* Bottom Shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-[620px]">
            {/* Top Info */}
            <div className="mb-7 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[3px] sm:text-xs">
              {/* Members */}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#D4A843]">
                  5,000+
                </span>

                <span className="text-white/70">
                  Elite Members
                </span>
              </div>

              {/* Divider */}
              <div className="h-3 w-px bg-[#D4A843]/40"></div>

              {/* Ratings */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[2px] text-[#D4A843]">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-[10px]"
                    />
                  ))}
                </div>

                <span className="text-white/70">
                  Highly Rated By Connoisseurs
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="mb-6 font-serif text-[52px] font-semibold leading-[1.05] tracking-[-2px] text-white sm:text-6xl md:text-7xl lg:text-[78px]">
              Drive the{" "}
              <span className="text-[#D4A843]">
                Extraordinary.
              </span>
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-[540px] text-sm leading-7 text-white/75 sm:text-base">
              Experience the pinnacle of automotive prestige with our curated
              fleet of the world's finest vehicles, where mechanical precision
              meets editorial elegance.
            </p>

            {/* Button */}
            <Button
              radius="none"
              className="group relative h-[50px] overflow-hidden border border-[#D4A843] bg-transparent px-8 text-[11px] font-semibold uppercase tracking-[2px] text-[#D4A843] transition-all duration-500 hover:text-black"
            >
              {/* Hover Background */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100"></span>

              {/* Text */}
              <span className="relative z-10">
                Explore The Fleet
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}