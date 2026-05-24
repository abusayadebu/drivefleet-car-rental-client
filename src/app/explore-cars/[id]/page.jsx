

import BookingModal from "@/components/BookingModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
    FiMapPin,
    FiUsers,
    FiTruck,
    FiCheckCircle,
    FiCalendar,
    FiShield,
} from "react-icons/fi";

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:8000/explore-cars/${id}`)
    const car = await res.json()
    console.log(car);
    return (
        <section className="bg-[#0f1324] min-h-screen py-6 md:py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>Home</span>
                    <span>/</span>
                    <span>Explore Cars</span>
                    <span>/</span>
                    <span className="text-[#D4A843] font-medium">
                        {car?.carName}
                    </span>
                </div>

                <div className="">
                    {/* LEFT SIDE */}
                    <div className="lg:col-span-8">
                        {/* IMAGE SECTION */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Main Image */}
                            <div className="md:col-span-3 relative h-[260px] md:h-[500px] overflow-hidden rounded-3xl shadow-md">
                                <Image
                                    src={car?.image}
                                    alt={car?.carName}
                                    fill
                                    priority
                                    className="object-cover hover:scale-105 duration-700"
                                />
                            </div>

                            {/* Single images */}
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                                <div className="relative h-[120px] md:h-[240px] rounded-3xl overflow-hidden shadow-md">
                                    <Image
                                        src={car?.image}
                                        alt={car?.carName}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                                        fill
                                        loading="eager"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="relative h-[120px] md:h-[240px] rounded-3xl overflow-hidden shadow-md">
                                    <Image
                                        src={car?.image}
                                        alt={car?.carName}
                                        fill
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <button className="bg-white text-[#141A32] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#D4A843] hover:text-white transition-all">
                                            View Photos
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CAR INFO */}
                        <div className="bg-[#141A32] rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 mt-6">
                            {/* Availability */}
                            <div>
                                {car?.available ? (
                                    <div className="inline-flex items-center gap-2 bg-green-100 text-[#D4A843] text-xs font-semibold px-3 py-1 rounded-full">
                                        <FiCheckCircle />
                                        Available Now
                                    </div>
                                ) : (
                                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                                        Unavailable
                                    </div>
                                )}
                            </div>

                            {/* Title + Price */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-5">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                                        {car?.carName}
                                    </h1>

                                    <div className="flex items-center gap-2 mt-3 text-[#D4A843]">
                                        <FiMapPin className="text-[#D4A843]" />
                                        <span>{car?.location}</span>
                                    </div>
                                </div>

                                <div className="bg-[#f5f7fb] border border-gray-200 rounded-2xl px-6 py-4">
                                    <p className="text-sm text-gray-500">
                                        Starting From
                                    </p>

                                    <div className="flex items-end gap-1 mt-1">
                                        <h2 className="text-4xl font-bold text-[#D4A843]">
                                            ${car?.price}
                                        </h2>

                                        <span className="text-gray-500 mb-1">
                                            /day
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* FEATURES */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                <div className="border border-gray-200 rounded-2xl p-4 bg-[#fafafa]">
                                    <FiTruck className="text-[#D4A843] text-xl mb-3" />

                                    <p className="text-xs uppercase text-gray-500">
                                        Car Type
                                    </p>

                                    <h4 className="font-semibold text-[#D4A843] mt-1">
                                        {car?.carType}
                                    </h4>
                                </div>

                                <div className="border border-gray-200 rounded-2xl p-4 bg-[#fafafa]">
                                    <FiUsers className="text-[#D4A843] text-xl mb-3" />

                                    <p className="text-xs uppercase text-gray-500">
                                        Seats
                                    </p>

                                    <h4 className="font-semibold text-[#D4A843] mt-1">
                                        {car?.seats} Adults
                                    </h4>
                                </div>

                                <div className="border border-gray-200 rounded-2xl p-4 bg-[#fafafa]">
                                    <FiCalendar className="text-[#D4A843] text-xl mb-3" />

                                    <p className="text-xs uppercase text-gray-500">
                                        Booking
                                    </p>

                                    <h4 className="font-semibold text-[#D4A843] mt-1">
                                        Instant
                                    </h4>
                                </div>

                                <div className="border border-gray-200 rounded-2xl p-4 bg-[#fafafa]">
                                    <FiShield className="text-[#D4A843] text-xl mb-3" />

                                    <p className="text-xs uppercase text-gray-500">
                                        Status
                                    </p>

                                    <h4 className="font-semibold text-[#D4A843] mt-1">
                                        {car?.available ? "Ready" : "Booked"}
                                    </h4>
                                </div>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Description
                                </h2>

                                <p className="text-gray-600 leading-8 text-[15px]">
                                    {car?.description}
                                </p>

                                <div className="w-[300px] flex justify-center">
                                <BookingModal car={car} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarDetailsPage;