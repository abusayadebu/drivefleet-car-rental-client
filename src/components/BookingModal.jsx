"use client";

import { Button, Modal } from "@heroui/react";
import { FiCalendar, FiShield } from "react-icons/fi";

const BookingModal = ({ car }) => {

    const handleBooking = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const bookingData = Object.fromEntries(
            formData.entries()
        );

        console.log(bookingData);
    };

    return (
        <Modal>
            {/* OPEN BUTTON */}
            <Button
                radius="none"
                className="w-full mt-5 group relative h-[50px] overflow-hidden border border-[#D4A843] bg-transparent px-8 text-md font-semibold uppercase tracking-[2px] text-[#D4A843] transition-all duration-500 hover:text-black"
            >
                {/* Hover Background */}
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100"></span>

                {/* Text */}
                <span className="relative z-10">Book Now</span>
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
                                    Reserve Here
                                </Modal.Heading>

                                <p className="text-sm text-gray-400 mt-2 leading-6">
                                    Instant booking available for this vehicle.
                                </p>
                            </div>
                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="py-6">
                            {/* FORM */}
                            <form onSubmit={handleBooking} className="space-y-5">

                                {/* Driver Needed */}
                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">
                                        Driver Needed?
                                    </label>

                                    <select
                                        name="driverNeeded"
                                        className="w-full bg-transparent text-gray-100 border border-[#3a4268] rounded-xl px-4 py-3 outline-none focus:border-[#D4A843]"
                                    >
                                        <option value="" className="bg-[#141A32] text-white">Select Option</option>
                                        <option value="yes" className="bg-[#141A32] text-white">Yes</option>
                                        <option value="no" className="bg-[#141A32] text-white">No</option>
                                    </select>
                                </div>

                                {/* Special Request */}
                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">
                                        Special Request
                                    </label>

                                    <textarea
                                        name="specialRequest"
                                        rows={4}
                                        placeholder="Write your requirements..."
                                        className="w-full bg-transparent border border-[#3a4268] text-gray-100 rounded-xl px-4 py-3 resize-none outline-none focus:border-[#D4A843] placeholder:text-gray-500"
                                    />
                                </div>

                                {/* TOTAL */}
                                <div className="flex items-center justify-between border-t border-[#2b3355] pt-5 mt-8">
                                    <div>
                                        <span className="text-gray-400 text-sm">Rental Price</span>
                                        <h3 className="text-4xl font-bold text-[#D4A843] mt-1">
                                            ${car?.price}
                                            <span className="text-base text-gray-400 font-medium"> /day</span>
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2 text-green-400 text-sm">
                                        <FiShield />
                                        Secure Booking
                                    </div>
                                </div>

                                {/* FOOTER BUTTON INSIDE FORM */}
                                <div className="border-t border-[#2b3355] pt-5">
                                    <Button
                                        type="submit"
                                        radius="none"
                                        className="w-full group relative h-[55px] overflow-hidden border border-[#D4A843] bg-transparent px-8 text-md font-semibold uppercase tracking-[2px] text-[#D4A843] transition-all duration-500 hover:text-black"
                                    >
                                        <span className="absolute inset-0 origin-left scale-x-0 bg-[#D4A843] transition-transform duration-500 group-hover:scale-x-100"></span>
                                        <span className="relative z-10">Confirm Booking</span>
                                    </Button>

                                    <p className="text-xs text-center text-gray-500 mt-2 w-full">
                                        Secure checkout powered by Stripe
                                    </p>
                                </div>
                            </form>

                        
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookingModal;