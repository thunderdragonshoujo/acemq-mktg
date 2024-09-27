"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathName = usePathname();

  const toggleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  // Lock body scroll when mobile nav is open
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

  // Scroll listener to hide nav on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false); // Hide nav when scrolling down
      } else {
        setShowNav(true); // Show nav when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "RabbitMQ", path: "/rabbitmq/" },
    { name: "Support Services", path: "/support/" },
    { name: "MQ Services", path: "/mq-services/" },
    { name: "FIPS", path: "/fipsmq/" },
    { name: "Blog", path: "/blogs/" },
    { name: "Customer Stories", path: "/stories/" },
  ];

  return (
    <nav
      className={`bg-black sm:px-[10rem] px-[3rem] transition-transform duration-500 ease-in-out ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } fixed w-full z-50`}
    >
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
            className={`fixed lg:static z-20 w-[100vw] lg:w-auto h-[100vh] lg:h-auto bg-black inset-0 lg:inset-auto px-[2rem] sm:px-0 transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${
              open ? "translate-x-0" : "translate-x-[100%] lg:translate-x-0"
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
                    className={`text-[1.5rem] lg:text-[1.3] ${
                      pathName === item.path
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
            className={`overflow-hidden transition-all duration-500 ease-out flex flex-col items-center justify-between h-[1.7rem] relative z-20 lg:hidden ${
              open ? "w-[3rem]" : "w-[2.5rem]"
            }`}
            onClick={toggleNav}
          >
            <div
              className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${
                open ? "-rotate-45 w-[2.7rem]" : ""
              }`}
            ></div>
            <div
              className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${
                open ? "translate-x-[8rem] translate-y-[8rem]" : ""
              }`}
            ></div>
            <div
              className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${
                open ? "rotate-45 w-[2.7rem]" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
