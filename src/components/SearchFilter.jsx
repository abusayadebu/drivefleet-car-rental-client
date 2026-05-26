"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchFilter = () => {

  const router = useRouter();
  const searchParams = useSearchParams();

  // current params
  const currentSearch = searchParams.get("search") || "";
  const currentType = searchParams.get("type") || "";

  // state
  const [search, setSearch] = useState(currentSearch);
  const [type, setType] = useState(currentType);

  // instant update
  useEffect(() => {

    const delay = setTimeout(() => {

      const params = new URLSearchParams();

      if (search) {
        params.set("search", search);
      }

      if (type) {
        params.set("type", type);
      }

      router.push(`/explore-cars?${params.toString()}`);

    }, 400);

    return () => clearTimeout(delay);

  }, [search, type, router]);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row gap-4 justify-between">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search car name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-3 rounded-xl w-full md:w-[320px] outline-none bg-[#141A32] text-[#D4A843] placeholder:text-gray-500 border border-[#D4A843]/30 focus:border-[#D4A843] transition"
      />

      {/* FILTER */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-3 rounded-xl w-full md:w-[220px] outline-none bg-[#141A32] text-[#D4A843] border border-[#D4A843]/30 focus:border-[#D4A843] transition"
      >
        <option value="">All Types</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Convertible">Convertible</option>
        <option value="Coupe">Coupe</option>
        <option value="Electric">Electric</option>
      </select>

    </div>
  );
};

export default SearchFilter;