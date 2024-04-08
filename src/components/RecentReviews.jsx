import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import Link from "next/link";
const RecentReviews = (props) => {
  return (
    <div className="flex flex-col gap-5 items-center w-full border bg-[#F7F9FB] rounded-3xl p-5">
      <h6 className="text-xl font-bold">Recent Reviews</h6>
      <div className="flex flex-col gap-2">
        <Review />
        <Review />
      </div>
    </div>
  );
};

const Review = (props) => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-2xl p-4">
      <div className="flex gap-2">
        <Image
          width={80}
          height={50}
          className="rounded-xl"
          src="/profile.png"
          alt="profile"
        />
        <div className="flex flex-col justify-between">
          <p className="font-bold">
            BELINA{" "}
            <span className="font-normal text-[#313232]">28.02.2024</span>
          </p>
          <div className="flex items-center gap-2 ">
            <IoStarSharp className="text-[#12937C]" size={30} />
            <p className="font-semibold">4.8 / 5</p>
          </div>
          <p className="font-semibold text-[#313232] text-sm">
            Bathroom Renovation new Bathroom
          </p>
        </div>
      </div>
      <p className="text-[#262626] font-semibold">
        Happy to have found HIP to do my bathrooms! Did my kitchen basement
        renos and all were...
      </p>
      <Link href="" className="text-md font-bold text-[#12937C]">
        Read More
      </Link>
    </div>
  );
};
export default RecentReviews;
