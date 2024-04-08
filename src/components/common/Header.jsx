import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import Container from "./Container";
import { MdKeyboardArrowDown } from "react-icons/md";

const nav_links = [
  {
    name: "Browse Categories",
    submenu: true,
    route: "",
  },
  {
    name: "Blog",
    submenu: false,
    route: "",
  },
  {
    name: "Write A Review",
    submenu: false,
    route: "",
  },
];
const Header = (props) => {
  return (
    <Container>
      <div className="flex justify-between p-3">
        {/* first section */}
        <div className="flex items-center gap-5">
          <Image src="/logo.svg" width={50} height={50} alt="helperzz logo" />
          <div className="gap-5 hidden lg:flex">
            {nav_links.map((link, index) => (
              <Link
                href={link.route}
                key={index}
                className="flex gap-1 items-center "
              >
                <p>{link.name}</p>
                {link.submenu && <MdKeyboardArrowDown size={25} />}
              </Link>
            ))}
          </div>
        </div>

        {/* second section */}
        <div className="border-[#D9D9D9] divide-x-2 divide-[#D9D9D9] hidden lg:flex border rounded-2xl pl-3">
          <input
            className="rounded-lg focus:outline-none mr-2"
            placeholder="Search for Category or Company"
            type="text"
          />
          <div className="flex justify-center items-center w-[100px] px-2">
            Oshawa
          </div>
          <div className="flex justify-center items-center px-2">
            <IoSearchOutline className="text-[#000000] opacity-50" size={30} />
          </div>
        </div>

        {/* third section */}
        <div className="flex gap-3 items-center">
          <div className="border-2 border-black w-12 h-12 rounded-full" />
          <p>Jane</p>
        </div>
      </div>
    </Container>
  );
};

export default Header;
