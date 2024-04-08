"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import ServicesRequests from "@/components/ServicesRequests";
import Reviews from "@/components/Reviews";
import Favorites from "@/components/Favorites";
import Profile from "@/components/Profile";
import Container from "@/components/common/Container";
const data = [
  {
    label: "My Service Requests",
    child: ServicesRequests,
  },
  {
    label: "My Profile",
    child: Profile,
  },
  {
    label: "My Reviews",
    child: Reviews,
  },
  {
    label: "My Favorites",
    child: Favorites,
  },
  {
    label: "Logout",
    child: Fragment,
  },
];
export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Container className="w-full">
        <h2 className="font-normal text-3xl ml-16">Helperzz / My Account</h2>
      </Container>
      <Tab.Group>
        <Tab.List className="py-2 lg:py-5 bg-[#12937C] bg-opacity-10">
          <Container className="flex flex-wrap justify-center gap-5 lg:gap-16 ">
            {data.map(({ label }, index) => (
              <Tab key={index} className="focus:outline-none">
                {({ selected }) => (
                  <div
                    className={classNames(
                      "flex items-center capitalize font-bold justify-center min-w-[200px] px-3 h-12 rounded-xl",
                      {
                        "bg-white text-[#12937C]": selected,
                        "bg-transparent text-black": !selected,
                      },
                    )}
                  >
                    {label}
                  </div>
                )}
              </Tab>
            ))}
          </Container>
        </Tab.List>
        <Tab.Panels>
          <Container>
            {data.map(({ child }, index) => {
              const TabContent = child;
              return (
                <Tab.Panel key={index}>
                  <TabContent />
                </Tab.Panel>
              );
            })}
          </Container>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
