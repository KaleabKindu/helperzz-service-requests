"use client";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import classNames from "classnames";
const Conversations = (props) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col">
      <h6 className="text-xl font-semibold px-5 py-2">Conversations</h6>
      <div className="mb-5">
        {Array.from({ length: 2 }).map((_, index) => (
          <Conversation
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

const Conversation = ({ index, active, setActive }) => {
  return (
    <button
      onClick={() => setActive(index)}
      className={classNames(
        "flex items-center gap-5 w-full py-4 px-8 border-t border-b",
        { "border-r border-r-[#12937C] ": active },
      )}
    >
      <div className="bg-[#D9D9D9] w-16 h-16 rounded-full" />
      <div className="flex flex-col items-start gap-3">
        <h6 className="text-black text-opacity-80 text-lg font-semibold">
          Cali Construction and design{" "}
        </h6>
        <div className="flex gap-3">
          <p className="text-black  text-sm">Interested</p>
          <p className="text-black text-opacity-50 text-sm">Mar 25</p>
        </div>
      </div>
      <MdKeyboardArrowRight
        size={40}
        className={`ml-auto ${active && "text-[#12937C]"}`}
      />
    </button>
  );
};

export default Conversations;
