import { MdArrowForwardIos } from "react-icons/md";
import Conversations from "./Conversations";
import ChatBoard from "./ChatBoard";
const ChatComponent = (props) => {
  return (
    <div className="flex flex-wrap border rounded-3xl divide-x-2">
      <div className="flex-1 divide-y">
        <div className="flex items-center justify-between p-5 h-24">
          <p className="text-[#000000] text-opacity-80 text-lg font-semibold">
            My Service Request Details
          </p>
          <MdArrowForwardIos size={30} />
        </div>
        <Conversations />
      </div>
      <div className="flex-1 ">
        <ChatBoard />
      </div>
    </div>
  );
};

export default ChatComponent;
