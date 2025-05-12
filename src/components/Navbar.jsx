import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bio } from "../constants";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 h-[75px] px-6 md:px-10 shadow-lg transition-all duration-300 ${scrolled
        ? "bg-[#03001469] backdrop-blur-md shadow-[#2A0E61]/50"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 md:w-10 md:h-10 object-contain rounded-full"
          />
          <span className="text-white font-bold text-xl md:text-lg hidden sm:block">
            Abhishek{" "}
            <span className="text-sm font-normal hidden md:inline">
              | Web Dev
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-8 px-6 py-3 rounded-full bg-[#03001479] border border-[#7042f861] text-gray-200">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-base hover:text-white ${active === nav.title ? "text-white" : "text-gray-200"
                  }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-6">
          <a href={Bio.githubsvg} target="_blank" rel="noopener noreferrer"
            className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
            <GitHubIcon style={{ fontSize: "1.8rem" }} />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer"
            className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
            <LinkedInIcon style={{ fontSize: "1.8rem" }} />
          </a>
          <a href={Bio.insta} target="_blank" rel="noopener noreferrer"
            className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
            <InstagramIcon style={{ fontSize: "1.8rem" }} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-[75px] right-6 p-6 rounded-xl z-40 transition-all duration-200 bg-[#030014e0] backdrop-blur-md ${toggle ? "flex" : "hidden"
            } md:hidden`}
        >
          <div className="flex flex-col items-center gap-5">
            <ul className="flex flex-col gap-4 text-lg text-gray-200">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-semibold cursor-pointer ${active === nav.title ? "text-white" : "text-gray-400"
                    }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex flex-row gap-6">
              <a href={Bio.githubsvg} target="_blank" rel="noopener noreferrer"
                className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
                <GitHubIcon fontSize="medium" />
              </a>
              <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer"
                className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
                <LinkedInIcon fontSize="medium" />
              </a>
              <a href={Bio.insta} target="_blank" rel="noopener noreferrer"
                className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
                <InstagramIcon fontSize="medium" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
