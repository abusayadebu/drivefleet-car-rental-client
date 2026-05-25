import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyAddedCarsPage = async() => {
    const session = await auth.api.getSession({
            headers: await headers()
        })
    const user = session?.user;
    const res = await fetch(`http://localhost:8000/add-car/${user?.id}`)
    const myCars = await res.json();
    console.log(myCars);

    return (
        <div>
            this is my cars
        </div>
    );
};

export default MyAddedCarsPage;