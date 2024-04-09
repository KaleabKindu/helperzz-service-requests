import { Menu } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProfileCard from "./ProfileCard";
import RecentReviews from "./RecentReviews";
import ChatComponent from "./ChatComponent";
const ServicesRequestsTab = (props) => {
  return (
    <div className="flex flex-col items-start gap-10 py-16">
      <Dropdown />
      <div className="flex flex-wrap lg:flex-nowrap gap-5 w-full">
        <div className="lg:w-[68%]">
          <ChatComponent />
        </div>
        <div className="flex flex-col gap-5 lg:w-[32%]">
          <ProfileCard />
          <RecentReviews />
        </div>
      </div>
    </div>
  );
};

const Dropdown = (props) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex justify-center items-center gap-3 border-2 rounded-xl py-2 px-5">
        <div className="relative">
          State Active{" "}
          <div className="bg-green-500 w-2 h-2 absolute -right-2 -top-1 rounded-full" />{" "}
        </div>
        <MdKeyboardArrowDown size={25} />
      </Menu.Button>
      <Menu.Items className="absolute top-full z-50 bg-white flex flex-col gap-2 border-2 p-2 w-[250px] rounded-md">
        <Menu.Item>
          {({ active }) => (
            <button className={`text-left px-5 py-1 ${active && "bg-gray-50"}`}>
              Active
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className={`text-left px-5 py-1 ${active && "bg-gray-50"}`}>
              Idel
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ServicesRequestsTab;
