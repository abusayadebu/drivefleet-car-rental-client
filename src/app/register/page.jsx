"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoCreate } from "react-icons/io5";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });

    if (data) {
      toast.success("Registration successful");

      redirect("/");
    }

    if (error) {
      setError(error.message || "Something went wrong");
    }
  };

  // google sign in 
  const handleGoogleSignIn = async()=> {
    await authClient.signIn.social({
      provider: "google",
    })
    toast.success("You are logged in successfully")
  }

  return (
    <div className="bg-[#0f1324] min-h-screen flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md bg-transparent text-white border-[#D4A843] border-2 rounded-3xl shadow-xl px-8 pt-5 pb-5">

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>
        <p className="text-gray-0 mt-3 text-sm mb-10">
          Create your account and start exploring premium car rentals.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div className="flex items-center gap-4 border rounded-xl px-5 h-14">
            <FaUser className="text-gray-500 text-base" />
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full h-full py-4 outline-none text-base"
              required
            />
          </div>

          {/* Image */}
          <div className="flex items-center gap-4 border rounded-xl px-5 h-14">
            <FaImage className="text-gray-500 text-base" />
            <input
              name="image"
              type="url"
              placeholder="Image URL"
              className="w-full py-4 h-full outline-none text-base"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 border rounded-xl px-5 h-14">
            <FaEnvelope className="text-gray-500 text-base" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full py-4 h-full outline-none text-base"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-4 border rounded-xl px-5 h-14">
            <FaLock className="text-gray-500 text-base" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full py-4 h-full outline-none text-base"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center gap-4 border rounded-xl px-5 h-14">
            <FaLock className="text-gray-500 text-base" />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full py-4 h-full outline-none text-base"
              required
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 flex items-center justify-center gap-2 bg-[#D4A843] text-white rounded-xl text-base font-medium hover:bg-gray-800 transition cursor-pointer"
          >
            <IoCreate className="text-lg" />
            Create Account
          </button>
        </form>

        {/* Divider Text */}
      <p className="text-center text-sm text-white/60 my-4">
        Or continue with
      </p>

      {/* Google Button */}
      <Button onClick={handleGoogleSignIn}
        radius="none"
        className="w-full flex items-center justify-center gap-2 border border-[#D4A843] bg-transparent text-[#D4A843] font-semibold hover:bg-[#D4A843] hover:text-black transition-all"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </Button>
          <div className="text-center mt-5 flex items-center gap-3 justify-center">
            <p>Already have an account?</p>
            <Link href="/login" className="text-[#D4A843] underline">
              Login
            </Link>
          </div>
      </div>
    </div>
  );
};

export default RegisterPage;