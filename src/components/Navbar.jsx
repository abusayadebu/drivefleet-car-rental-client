"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="w-full bg-[#141A32] border-b border-black/5 relative z-50 sticky top-0">
      <nav className="max-w-7xl mx-auto h-[64px] flex items-center justify-between px-5 md:px-10">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-[30px] md:text-[38px] font-black tracking-[-1px] leading-none text-[#D4A843] font-serif">
            Drive<span className="text-white">Fleet</span>
          </h1>
        </Link>

        {/* Center Nav */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link
              href="/"
              className={`text-md font-semibold transition ${
                isActive("/")
                  ? "text-[#D4A843]"
                  : "text-zinc-600 hover:text-[#D4A843]"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/explore-cars"
              className={`text-md font-medium transition ${
                isActive("/explore-cars")
                  ? "text-[#D4A843]"
                  : "text-zinc-600 hover:text-[#D4A843]"
              }`}
            >
              Explore Cars
            </Link>
          </li>

          <li>
            <Link
              href="/add-car"
              className={`text-md font-medium transition ${
                isActive("/add-car")
                  ? "text-[#D4A843]"
                  : "text-zinc-600 hover:text-[#D4A843]"
              }`}
            >
              Add Car
            </Link>
          </li>

          <li>
            <Link
              href="/my-bookings"
              className={`text-md font-medium transition ${
                isActive("/my-bookings")
                  ? "text-[#D4A843]"
                  : "text-zinc-600 hover:text-[#D4A843]"
              }`}
            >
              My Bookings
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* USER LOGGED IN */}
          {user ? (
            <>
              {/* Avatar Dropdown */}
              <div className="relative group z-[9999]">

                {/* Avatar */}
                <Link href="/profile" className="block">
                  <Avatar>
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image || ""}
                    />
                    <Avatar.Fallback>
                      {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                  </Avatar>
                </Link>

                {/* Hover dropdown wrapper */}
                <div className="absolute right-0 mt-2 w-48 pt-2 z-[9999]">

                  <div
                    className="
                      bg-[#141A32]
                      border border-[#2b3355]
                      rounded-xl
                      shadow-lg

                      opacity-0 invisible translate-y-2
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-200

                      pointer-events-none group-hover:pointer-events-auto
                    "
                  >
          
                    <Link
                      href="/add-car"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#1f2545]"
                    >
                      Add Car
                    </Link>

                    <Link
                      href="/my-added-cars"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#1f2545]"
                    >
                      My Added Cars
                    </Link>

                    <Link
                      href="/my-bookings"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#1f2545]"
                    >
                      My Bookings
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#1f2545]"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <Button
                onClick={handleLogout}
                radius="none"
                className="group relative h-[40px] overflow-hidden border border-[#D4A843] bg-transparent px-8 text-md font-semibold uppercase tracking-[2px] text-[#D4A843] transition-all duration-500 hover:text-black"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100"></span>
                <span className="relative z-10">Logout</span>
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  radius="none"
                  className="group relative h-[40px] overflow-hidden border border-[#D4A843] bg-transparent px-8 text-md font-semibold uppercase tracking-[2px] text-[#D4A843] transition-all duration-500 hover:text-black"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100"></span>
                  <span className="relative z-10">Login</span>
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  radius="none"
                  className="group relative h-[40px] overflow-hidden border border-[#D4A843] bg-transparent px-8 text-md font-semibold uppercase tracking-[2px] text-[#D4A843] transition-all duration-500 hover:text-black"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100"></span>
                  <span className="relative z-10">Register</span>
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;