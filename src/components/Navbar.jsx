"use client";

import Link from "next/link";
import React from "react";
import { Avatar } from "@heroui/react";

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
                text-[#FFE088]
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
                text-[#E9C349]
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
                  bg-[#E9C349]
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
              hidden
              sm:flex
              items-center
              justify-center
            "
          >
            <Avatar
              icon={
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="18"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path
                    d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"
                    fill="currentColor"
                  />
                </svg>
              }
              className="
                bg-transparent
                text-black
                w-8
                h-8
              "
            />
          </Link>

          {/* Login Button */}
          <Link
            href="/login"
            className="
              bg-[#E9C349]
              text-black
              text-md
              font-semibold
              px-7
              py-3
              hover:bg-orange-400
              transition
            "
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;