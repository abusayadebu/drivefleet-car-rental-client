"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
    FaChair,
    FaCog,
    FaMapMarkerAlt,
} from "react-icons/fa";

const CarCard = ({ car }) => {
    return (
        <div className="w-[360px] bg-[#141A32] rounded-2xl shadow-xl overflow-hidden border border-[#D4A843]">

            {/* IMAGE SECTION */}
            <div className="relative h-[200px] w-full">

                <Image
                    src={car.image}
                    alt={car.carName}
                    loading="eager"
                    sizes="360px"
                    fill
                    className="object-cover"
                />

                {/* STATUS BADGE */}
                <div
                    className={`absolute top-4 left-4 px-4 py-1 text-sm font-semibold rounded-full text-[#0f1324] ${car.available ? "bg-[#f6bd36]" : "bg-red-500"
                        }`}
                >
                    {car.available ? "Available" : "Reserved"}
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">

                {/* TITLE + PRICE */}
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-bold text-white mb-3">
                            {car.carName}
                        </h2>
                        <p className="text-sm text-gray-500 uppercase">
                            {car.carType}
                        </p>
                    </div>

                    <div className="text-right">
                        <h3 className="text-2xl font-bold text-[#D4A843]">
                            ${car.price}
                        </h3>
                        <p className="text-xs text-gray-400">/ Day</p>
                    </div>
                </div>

                {/* FEATURES */}
                <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">

                    <div className="flex items-center gap-1">
                        <FaChair />
                        <span>{car.seats} Seats</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaCog />
                        <span>Auto</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span>{car.location}</span>
                    </div>

                </div>

                {/* BUTTON */}
                <Link href={`/explore-cars/${car._id}`}>
                <Button
                    radius="none"
                    disabled={!car.available}
                    className={`group relative w-full mt-8 h-[40px] overflow-hidden border border-[#D4A843]
                px-8 text-md font-semibold uppercase tracking-[2px] transition-all duration-500
                ${car.available ? "text-[#D4A843] bg-transparent hover:text-black" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                                >
                    {/* Hover background */}
                    {car.available && (
                        <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100" />
                    )}

                    {/* Text */}
                    <span className="relative z-10">
                        Details
                    </span>
                </Button>
                </Link>

            </div>
        </div>
    );
};

export default CarCard;