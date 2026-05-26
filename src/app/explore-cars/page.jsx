import CarCard from '@/components/CarCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ExploreCarPage = async () => {

  // json token
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const res = await fetch('http://localhost:8000/explore-cars',{
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const cars = await res.json();
  console.log(cars);
  return (
    <div className="min-h-screen bg-[#0f1324]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 pt-10 text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Explore Our Fleet
        </h3>
        <p className="text-gray-500 mt-2">
          Find the perfect car for your next journey
        </p>
      </div>

      {/* GRID WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {cars.map((car) => (
            <CarCard car={car} key={car._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCarPage;