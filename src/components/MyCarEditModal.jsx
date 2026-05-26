"use client";

import { Button, Modal } from '@heroui/react';
import React from 'react';
import { GrUpdate } from 'react-icons/gr';
import { toast } from 'react-toastify';

const MyCarEditModal = ({myCar}) => {
    const {_id, carName, carType, image, location, description, available, price, seats} = myCar;

     const handleSubmit = async (e) => {
      e.preventDefault();
    
      const formData = new FormData(e.currentTarget);
      const myCar = Object.fromEntries(formData.entries());


      const res = await fetch(`http://localhost:8000/add-car/${_id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(myCar),
      });
    
      const data = await res.json();
    
      if (!res.ok) {
        toast.error(data?.message || "Failed to add car");
        return;
      }
    
      toast.success("Car Added Successfully");
      window.location.reload();
    //   console.log("Response:", data);
    };


    return (
        <Modal>
            {/* OPEN BUTTON */}
            <Button className="h-[40px] rounded-xl bg-[#141A32] px-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90 flex justify-center items-center gap-2 cursor-pointer">
             <GrUpdate></GrUpdate> Edit
            </Button>

            {/* MODAL */}
            <Modal.Backdrop className="bg-black/70 backdrop-blur-sm">
                <Modal.Container>
                    <Modal.Dialog className="max-w-2xl border border-[#2b3355] bg-[#141A32] text-white rounded-3xl overflow-hidden">
                        {/* CLOSE BUTTON */}
                        <Modal.CloseTrigger className="text-black" />

                        {/* HEADER */}
                        <Modal.Header className="border-b border-[#2b3355] pb-5">
                            <div>
                                <Modal.Heading className="text-3xl font-bold text-white">
                                    Update Your Car
                                </Modal.Heading>

                                <p className="text-sm text-gray-400 mt-2 leading-6">
                                    Provide required change for your added car.
                                </p>
                            </div>
                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="py-6">
                            {/* FORM */}
                            {/* FORM */}
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* CAR NAME */}
                                <input
                                    type="text"
                                    name="carName"
                                    placeholder="Car Name"
                                    defaultValue={carName}
                                    disabled
                                    className="w-full bg-transparent text-gray-300 placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
                                />

                                {/* PRICE + SEATS */}
                                <div className="grid grid-cols-2 gap-4">

                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Price"
                                        defaultValue={price}
                                        required
                                        className="bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
                                    />

                                    <input
                                        type="number"
                                        name="seats"
                                        placeholder="Seat Capacity"
                                        defaultValue={seats}
                                        disabled
                                        required
                                        className="bg-transparent text-gray-300 placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
                                    />

                                </div>

                                {/* CAR TYPE */}
                                <select
                                    name="carType"
                                    required
                                    defaultValue={carType}
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
                                    defaultValue={image}
                                    placeholder="Image URL"
                                    required
                                    className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
                                />

                                {/* LOCATION */}
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={location}
                                    placeholder="Pickup Location"
                                    required
                                    className="w-full bg-transparent text-white placeholder-gray-400 border-b border-[#D4A843] py-2 outline-none focus:border-white"
                                />

                                {/* DESCRIPTION */}
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    defaultValue={description}
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
                                        defaultValue={available}
                                        defaultChecked
                                        className="w-5 h-5 accent-[#D4A843]"
                                    />
                                </div>

                                {/* BUTTON */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-[#D4A843] text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
                                >
                                 <GrUpdate></GrUpdate> Update
                                </button>

                            </form>


                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default MyCarEditModal;