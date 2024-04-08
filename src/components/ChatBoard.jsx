const ChatBoard = (props) => {
  return (
    <div className="flex flex-col items-center gap-5  h-full">
      <div className="p-5 flex flex-col gap-5 items-center">
        <p className="text-black text-opacity-80 text-sm">Mar 25 11:36PM</p>
        <div className="flex items-center gap-3 w-full">
          <div className="w-5 h-5 bg-[#119DED] rounded-full" />
          <p>you created this service request.</p>
        </div>
        <p className="text-black text-opacity-80 text-sm">Mar 25 11:40PM</p>
        <div className="flex items-center gap-3 w-full mt-10">
          <div className="shrink-0 w-5 h-5 bg-[#12937C] rounded-full" />
          <p className="text-wrap">
            Cali construction and design is interested in your service request.
          </p>
        </div>
        <Message />
      </div>
      <div className="flex flex-col justify-center mt-auto w-full h-28 border-t">
        <div className="flex h-12 mx-6 ">
          <input
            type="text"
            placeholder="Message"
            className="flex-1 bg-[#F7F9FB] pl-5 rounded-2xl focus:outline-none"
          />
          <button
            type="button"
            className="bg-[#12937C] rounded-2xl text-white px-5 -ml-5"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className="flex flex-col gap-3 w-full font-semibold text-sm text-[#262626] opacity-80 h-44 rounded-2xl bg-[#12937C] bg-opacity-10 p-3">
      <p>Hi. Hope all is well. We are more than happy to help.</p>
      <div className="flex flex-col gap-1">
        <p>Julian Ribeiro</p>
        <p>JJR construction inc</p>
        <p>(416) 371 0000</p>
      </div>
    </div>
  );
};

export default ChatBoard;
