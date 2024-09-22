"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MaxContainer from "../maxContainer/index";
import { usePathname } from "next/navigation";
const Index = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const toggleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // const NavItems = ['Home', 'RabbitMQ', 'FIPS', 'Support & Services ']

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "RabbitMQ",
      path: "/rabbitmq/",
    },
    {
      name: "FIPS",
      path: "/fipsmq/",
    },
    {
      name: "Support Services",
      path: "/support/",
    },
    {
      name: "MQ Services",
      path: "/mq-services/",
    },
    {
      name: "Customer Stories",
      path: "/stories/",
    },
  ];

  return (
    <nav className={` bg-black sm:px-[10rem] px-[3rem]`}>
        <div className="flex items-center py-[1.5rem] lg:py-[2.5rem] justify-between">
          <div className="lg:flex lg:items-center">
            <Link href="/">
              <img
                src="/ace_logo.png"
                className="w-[7.6rem] sm:w-[14rem] sm:mr-[1rem]"
                alt="logo"
              />
            </Link>
            <div
              className={`fixed lg:static z-20 w-[100vw] lg:w-auto h-[100vh] lg:h-auto bg-black inset-0 lg:inset-auto px-[2rem] sm:px-0 transition-all duration-500  ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${open ? "translate-x-0" : "translate-x-[100%] lg:translate-x-0"
                }`}
            >
              <ul className="mt-[7rem] sm:mt-0 sm:flex">
                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.path}
                    className="py-[1rem] sm:px-[1rem] sm:ml-[.5rem] block"
                  >
                    <li
                      className={`text-[1.5rem] lg:text-[1.3] ${pathName === item.path
                          ? "text-accent-100 border-b border-accent-100"
                          : ""
                        } lg:font-normal font-medium`}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-x-[3rem]">
            <Link href="/contact-us/">
              <button className="font-bold rounded-[.5rem] text-[1rem] lg:text-[1.3rem] lg:border text-text-100 lg:text-white bg-white lg:bg-transparent px-[1.2rem] lg:px-[2.3rem] py-[.7rem]">
                Contact us
              </button>
            </Link>

            <div
              className={`overflow-hidden transition-all duration-500 ease-out flex flex-col items-center justify-between h-[1.7rem] relative z-20 lg:hidden ${open ? "w-[3rem]" : "w-[2.5rem]"
                }`}
              onClick={toggleNav}
            >
              <div
                className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? "-rotate-45 w-[2.7rem]" : ""
                  }`}
              ></div>
              <div
                className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? "translate-x-[8rem] translate-y-[8rem]" : ""
                  }`}
              ></div>
              <div
                className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? "rotate-45 w-[2.7rem]" : ""
                  }`}
              ></div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Index;
