import Image from "next/image";

const BookingCard = ({ booking }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white">
      
      {/* TABLE HEADER STYLE CARD */}
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-4 md:items-center">
        
        {/* CAR DETAILS */}
        <div className="flex items-center gap-4">
          <div className="relative h-[70px] w-[90px] overflow-hidden rounded-xl">
            <Image
              src={booking?.carImage}
              alt={booking?.carName}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#141A32]">
              {booking?.carName}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {booking?.carType}
            </p>
          </div>
        </div>

        {/* BOOKING DATE */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-gray-400">
            Booking Date
          </p>

          <h3 className="text-xl font-semibold text-[#141A32]">
            {booking?.bookingDate}
          </h3>
        </div>

        {/* PRICE */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-gray-400">
            Total Price
          </p>

          <h3 className="text-2xl font-bold text-[#141A32]">
            ${booking?.carPrice}.00
          </h3>
        </div>

        {/* STATUS */}
        <div className="md:flex md:justify-end">
          <button className="rounded-full bg-[#2563eb] px-6 py-2 text-sm font-semibold text-white">
            Confirmed
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;