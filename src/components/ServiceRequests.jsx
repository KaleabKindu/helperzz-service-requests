"use client";
import classNames from "classnames";
import { useState } from "react";
import Conversations from "./Conversations";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";
const ServiceRequests = (props) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-5 pt-10">
      <h6 className="text-xl font-bold px-5 ">Service Request</h6>
      <div>
        {Array.from({ length: 4 }).map((_, index) => (
          <Request
            key={index}
            index={index}
            active={active === index}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
};

const Request = ({ index, active, setActive }) => {
  const handleClick = () => (active ? setActive(-1) : setActive(index));
  return (
    <>
      <button
        onClick={handleClick}
        className={classNames(
          "flex items-center gap-3 w-full h-24 px-8 border-t",
          { "bg-[#12937C] text-white": active },
        )}
      >
        <Image
          src={active ? "/bathtub-light.svg" : "/bathtub-dark.svg"}
          width={50}
          height={50}
          alt=""
        />
        <div className="flex flex-col items-start gap-3 ml-5">
          <h6 className="text-opacity-80 font-semibold text-lg">
            Snow Removal{" "}
          </h6>
          <p className="text-opacity-80 text-sm">4 conversations</p>
        </div>
        <p
          className={classNames("text-opacity-50 text-sm", {
            "text-black": !active,
          })}
        >
          Created At Mar 25
        </p>
        {active ? (
          <MdKeyboardArrowUp size={45} />
        ) : (
          <MdKeyboardArrowRight size={45} />
        )}
      </button>
      {active && <Conversations />}
    </>
  );
};

export default ServiceRequests;
