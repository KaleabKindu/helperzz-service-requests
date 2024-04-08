import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { IoAlertCircle } from "react-icons/io5";
const ProfileCard = (props) => {
  return (
    <div className="flex flex-col items-center gap-3 bg-[#F7F9FB] border rounded-3xl p-2">
      <div className="relative w-full h-64 rounded-2xl">
        <Image
          className="rounded-2xl object-cover"
          src="/cali-constructions.png"
          fill
        />
        <Image
          className="absolute bottom-5 left-5 rounded-2xl object-cover"
          src="/bathroom.svg"
          width={100}
          height={100}
        />
      </div>
      <h6 className="text-xl font-bold">Cali Construction and design </h6>
      <div className="flex items-center w-full justify-between">
        <h6 className="text-lg font-bold">Star Score </h6>
        <div className="flex items-center gap-2 ">
          <IoStarSharp className="text-[#12937C]" size={40} />
          <p className="font-semibold">4.8 / 5</p>
        </div>
        <Image src="trust-seal.svg" width={150} height={50} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-1 items-center">
          <p className="w-[200px] text-right">Average Rating</p>
          <div className="w-full rounded-full h-4 bg-[#12937C]" />
          <IoAlertCircle className="text-[#E0E0E0] " size={30} />
        </div>
        <div className="flex gap-1 items-center">
          <p className="w-[200px] text-right">Recency</p>
          <div className="w-full rounded-full h-4 bg-[#12937C]" />
          <IoAlertCircle className="text-[#E0E0E0] " size={30} />
        </div>
        <div className="flex gap-1 items-center">
          <p className="w-[200px] text-right">Reputation</p>
          <div className="w-full rounded-full h-4 bg-[#12937C]" />
          <IoAlertCircle className="text-[#E0E0E0] " size={30} />
        </div>
        <div className="flex gap-1 items-center">
          <p className="w-[200px] text-right">Responsiveness</p>
          <div className="w-full rounded-full h-4 bg-[#12937C]" />
          <IoAlertCircle className="text-[#E0E0E0] " size={30} />
        </div>
        <button className="font-bold text-lg w-[200px] mx-auto rounded-2xl px-5 py-3 bg-white border border-[#12937C]">
          See Full Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
