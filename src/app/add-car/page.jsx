"use client";

import { useState } from "react";
import Image from "next/image";

const AddCarPage = () => {
  const [form, setForm] = useState({
    carName: "",
    price: "",
    carType: "",
    image: "",
    seats: "",
    location: "",
    description: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-[#0f1324]">
        <div className="max-w-7xl mx-auto min-h-screen flex">

      {/* LEFT SIDE IMAGE */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <Image
          src="/assets/car-listing-bg.jpg"
          alt="car"
          loading="eager"
          width={600}
          height={600}
          className="object-contain border rounded-xl"
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">

        <div className="w-full max-w-md">

          {/* HEADER */}
          <h1 className="text-3xl font-semibold text-white mb-2">
            Add New Car
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Enter vehicle details below
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* INPUT */}
            <input
              name="carName"
              value={form.carName}
              onChange={handleChange}
              placeholder="Car Name"
              className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                className="bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
              />
            
              <input
                type="number"
                name="seats"
                value={form.seats}
                onChange={handleChange}
                placeholder="Seat Capacity"
                className="bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
              />

            </div>

            {/* SELECT */}
            <select
              name="carType"
              value={form.carType}
              onChange={handleChange}
              className="w-full bg-[#0f1324] text-white border-b border-[#D4A843] py-2 outline-none focus:border-white"
            >
              <option value="">Car Type</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Hatchback</option>
              <option>Luxury</option>
              <option>Sports</option>
              <option>Electric</option>
            </select>

            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
            />

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Pickup Location"
              className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              rows="3"
              className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
            />

            {/* TOGGLE */}
            <div className="flex items-center justify-between text-white">
              <span className="text-sm">Available</span>

              <input
                type="checkbox"
                name="available"
                checked={form.available}
                onChange={handleChange}
                className="w-5 h-5 accent-[#D4A843]"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#D4A843] text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
            >
              Add Car
            </button>

          </form>
        </div>
      </div>
    </div>
    </div>
  );
}


export default AddCarPage;