"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { toast } from "react-toastify";

const AddCarPage = () => {
  // get user 
  const { data: session } = authClient.useSession(); 
  const user = session?.user;

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const car = Object.fromEntries(formData.entries());

  car.available = formData.has("available");

  const carData = {
  userId: user?.id,
  userImage: user?.image,
  userName: user?.name,

  carName: car.carName,
  carType: car.carType,

  image: car.image,        
  location: car.location, 
  price: Number(car.price), 

  seats: Number(car.seats),
  description: car.description,
  available: car.available,
};

  console.log("Sending:", carData);

  const res = await fetch("http://localhost:8000/add-car", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(carData),
  });

  const data = await res.json();

  if (!res.ok) {
    toast.error(data?.message || "Failed to add car");
    return;
  }

  toast.success("Car Added Successfully");
  console.log("Response:", data);
};

  return (
    <div className="bg-[#0f1324]">
      <div className="max-w-7xl mx-auto min-h-screen flex">
        
        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6">
          <Image
            src="/assets/car-listing-bg.jpg"
            alt="car"
            width={600}
            height={600}
            priority
            className="object-contain border border-[#D4A843] rounded-2xl"
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

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* CAR NAME */}
              <input
                type="text"
                name="carName"
                placeholder="Car Name"
                required
                className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
              />

              {/* PRICE + SEATS */}
              <div className="grid grid-cols-2 gap-4">

                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  required
                  className="bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
                />

                <input
                  type="number"
                  name="seats"
                  placeholder="Seat Capacity"
                  required
                  className="bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
                />

              </div>

              {/* CAR TYPE */}
              <select
                name="carType"
                required
                className="w-full bg-[#0f1324] text-white border-b border-[#D4A843] py-2 outline-none focus:border-white"
              >
                <option value="">Car Type</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="Sports">Sports</option>
                <option value="Electric">Electric</option>
              </select>

              {/* IMAGE URL */}
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                required
                className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
              />

              {/* LOCATION */}
              <input
                type="text"
                name="location"
                placeholder="Pickup Location"
                required
                className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
              />

              {/* DESCRIPTION */}
              <textarea
                name="description"
                placeholder="Description"
                rows="3"
                required
                className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
              />

              {/* AVAILABLE */}
              <div className="flex items-center justify-between text-white">
                <span className="text-sm">Available</span>

                <input
                  type="checkbox"
                  name="available"
                  defaultChecked
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
};

export default AddCarPage;