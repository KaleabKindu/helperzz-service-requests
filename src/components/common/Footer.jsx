import Link from "next/link";
const home_owner_links = [
  {
    name: "browse categories",
    route: "",
  },
  {
    name: "browse tasks",
    route: "",
  },
  {
    name: "write a review",
    route: "",
  },
  {
    name: "blog",
    route: "",
  },
  {
    name: "homeowner faq",
    route: "",
  },
  {
    name: "review guidelines",
    route: "",
  },
  {
    name: "homeowner",
    route: "",
  },
  {
    name: "trust",
    route: "",
  },
];
const contractors_links = [
  {
    name: "join helpzz",
    route: "",
  },
  {
    name: "Home Professional FAQ",
    route: "",
  },
  {
    name: "Building Trust",
    route: "",
  },
  {
    name: "Home Professional Terms",
    route: "",
  },
];
const helperzz_links = [
  {
    name: "About",
    route: "",
  },
  {
    name: "Careers at Helperzz",
    route: "",
  },
  {
    name: "Careers at Helperzz",
    route: "",
  },
  {
    name: "Contact us",
    route: "",
  },
  {
    name: "Terms of Use",
    route: "",
  },
  {
    name: "Privacy",
    route: "",
  },
];
const Footer = (props) => {
  return (
    <div className="flex flex-col gap-10 py-10 px-24 bg-[#E8E8E8]">
      <div className="flex flex-wrap gap-16">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">HOMEOWNERS</h3>
          {home_owner_links.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className="text-[#000000] opacity-80 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">CONTRACTORS</h3>
          {contractors_links.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className="text-[#000000] opacity-80 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">HELPERZZ</h3>
          {helperzz_links.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className="text-[#000000] opacity-80 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-2xl">HELPERZZ.COM</h3>
        <p className="font-normal text-xl">2024</p>
      </div>
    </div>
  );
};

export default Footer;
