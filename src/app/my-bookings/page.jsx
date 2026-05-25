import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const res = await fetch(`http://localhost:8000/booking/${user?.id}`)
    const bookings = await res.json();
    console.log(bookings);

    return (
        <div className='bg-[#0f1324] py-8'>
            <div className='text-center'>
                <span className="inline-block rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#D4A843]">
                    Luxury Rental Experience
                </span>

                <h1 className="text-3xl font-black leading-tight text-[#8b9bdd] md:text-6xl">
                    My Bookings
                </h1>

                <p className="text-base leading-8 text-gray-500 md:text-lg">
                    Track your reserved vehicles, manage upcoming rides, and enjoy a
                    seamless premium booking experience crafted for modern travelers.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 mt-5">
                {bookings?.map((booking) => (
                    <BookingCard
                        key={booking?._id}
                        booking={booking}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyBookingPage;