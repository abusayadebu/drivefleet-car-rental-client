"use client";

import Link from "next/link";
import React from "react";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  return (
    <header className="w-full bg-[#141A32] border-b border-black/5">
      <nav
        className="
          max-w-7xl
          mx-auto
          h-[64px]
          flex
          items-center
          justify-between
          px-5
          md:px-10
        "
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <h1
              className="
                text-[30px]
                md:text-[38px]
                font-black
                tracking-[-1px]
                leading-none
                text-[#D4A843]
                font-serif
              "
            >
              Drive<span className="text-white">Fleet</span>
            </h1>
          </Link>
        </div>

        {/* Center Nav */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-10
          "
        >
          <li>
            <Link
              href="/"
              className="
                relative
                text-md
                font-semibold
                text-[#D4A843]
              "
            >
              Home

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[1.5px]
                  w-full
                  bg-[#D4A843]
                "
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/explore-cars"
              className="
                text-md
                font-medium
                text-zinc-600
                hover:text-black
                transition
              "
            >
              Explore Cars
            </Link>
          </li>

          <li>
            <Link
              href="/add-car"
              className="
                text-md
                font-medium
                text-zinc-600
                hover:text-black
                transition
              "
            >
              Add Car
            </Link>
          </li>

          <li>
            <Link
              href="/my-bookings"
              className="
                text-md
                font-medium
                text-zinc-600
                hover:text-black
                transition
              "
            >
              My Bookings
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* User Icon */}
          <Link
            href="/profile"
            className="
              sm:flex
              items-center
              justify-center
            "
          >
            <Avatar>
        <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
          </Link>

          {/* Login Button */}

          <Link href="/login">
          <Button
                        radius="none"
                        className="group relative h-[40px] overflow-hidden border border-[#D4A843] bg-transparent px-8 text-md font-semibold uppercase tracking-[2px] text-[#D4A843] transition-all duration-500 hover:text-black"
                      >
                        {/* Hover Background */}
                        <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100"></span>
          
                        {/* Text */}
                        <span className="relative z-10">
                          Login
                        </span>
                      </Button>
          </Link>

          {/* register button */}
          <Link href="/register">
          <Button
                        radius="none"
                        className="group relative h-[40px] overflow-hidden border border-[#D4A843] bg-transparent px-8 text-md font-semibold uppercase tracking-[2px] text-[#D4A843] transition-all duration-500 hover:text-black"
                      >
                        {/* Hover Background */}
                        <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100"></span>
          
                        {/* Text */}
                        <span className="relative z-10">
                          Register
                        </span>
                      </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;