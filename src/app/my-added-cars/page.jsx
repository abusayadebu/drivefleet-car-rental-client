import MyCarsCard from '@/components/MyCarsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyAddedCarsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const res = await fetch(`http://localhost:8000/add-car/${user?.id}`)
    const myCars = await res.json();
    // console.log(myCars);

    return (
        <div className='bg-[#0f1324] py-8'>
            <div className='text-center'>
                <span className="inline-block rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#D4A843]">
                    My Added Cars
                </span>

                <h1 className="text-3xl font-black leading-tight text-[#8b9bdd] md:text-6xl">
                    Manage Your Listings

                </h1>

                <p className="text-base leading-8 text-gray-500 md:text-lg">
                    Easily track, update, and organize all the cars you’ve added to the platform, all in one place for smooth control and management.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 mt-5">
                {myCars?.map((myCar) => (
                    <MyCarsCard
                        key={myCar?._id}
                        myCar={myCar}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyAddedCarsPage;