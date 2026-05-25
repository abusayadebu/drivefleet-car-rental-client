import Image from "next/image";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";

const MyCarsCard = ({ myCar }) => {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-[#e7e7e7] bg-white shadow-sm">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT IMAGE */}
        <div className="relative h-[240px] w-full lg:h-auto lg:w-[320px]">
          <Image
            src={myCar?.image || "/fallback-car.jpg"}
            alt={myCar?.carName || "Car"}
            sizes="360px"
            fill
            priority
            className="object-cover"
          />

          {/* STATUS */}
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#D4A843] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-black">
            {myCar?.available ? 'availabe': "" }
          </span>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">

          {/* TOP */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

            {/* TITLE */}
            <div>
              <h2 className="text-3xl font-bold text-[#141A32]">
                {myCar?.carName}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Premium {myCar?.carType} Experience
              </p>
            </div>

            {/* PRICE */}
            <div>
              <h3 className="text-4xl font-bold text-[#D4A843]">
                ${myCar?.price}.00
              </h3>

              <p className="mt-1 text-right text-sm text-gray-500">
                Per Day
              </p>
            </div>
          </div>

          {/* DETAILS */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Date
              </p>

              <h4 className="mt-2 text-sm font-semibold text-[#141A32]">
                date
              </h4>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Location
              </p>

              <h4 className="mt-2 text-sm font-semibold text-[#141A32]">
                {myCar?.location}
              </h4>
            </div>


            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Status
              </p>

              <h4 className="mt-2 text-sm font-semibold text-green-600">
                Active
              </h4>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Seats
              </p>

              <h4 className="mt-2 text-sm font-semibold text-[#141A32]">
                {myCar?.seats}
              </h4>
            </div>

          </div>

          {/* description */}
          <div className="mt-6 rounded-2xl bg-[#f8f8f8] p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Description
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {myCar?.description}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button className="h-[40px] rounded-xl bg-[#141A32] px-2 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90 flex justify-center items-center gap-2 cursor-pointer">
             <GrUpdate></GrUpdate> Update
            </button>

            <button className="h-[40px] rounded-xl border border-red-400 bg-red-500 px-2 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:text-[#141A32] flex justify-center items-center gap-2 cursor-pointer">
             <FiDelete></FiDelete> Delete
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MyCarsCard;