"use client";
import classNames from "classnames";
import { useState } from "react";

const Conversations = (props) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-5 pt-10">
      <h6 className="text-xl font-bold px-5 ">Conversations</h6>
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <Conversation
            key={index}
            index={index}
            active={active}
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
        "flex items-start justify-between w-full py-6 px-5 border-t",
        { "bg-[#12937C] bg-opacity-10": active === index },
      )}
    >
      <div className="bg-[#D9D9D9] w-16 h-16 rounded-full" />
      <div className="flex flex-col items-start gap-3">
        <h6 className="text-black text-opacity-80 text-lg">
          Cali Construction and design{" "}
        </h6>
        <p className="text-black text-opacity-80 text-sm">Interested</p>
      </div>
      <p className="text-black text-opacity-50 text-sm">Mar 25</p>
    </button>
  );
};

export default Conversations;
