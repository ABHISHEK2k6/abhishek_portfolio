import React from "react";
import { Bio } from "../constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="w-full text-white py-4 px-4 flex flex-col items-center relative z-10 bg-[rgba(0,0,0,0)] backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-[#9215e6] mb-3">{Bio.name}</h2>

      <nav className="flex flex-wrap gap-6 justify-center text-sm md:text-base text-gray-300 mb-3">
        <a href="#about" className="hover:text-[#9215e6] transition-all duration-300 hover:drop-shadow-md">About</a>
        <a href="#tech" className="hover:text-[#9215e6] transition-all duration-300 hover:drop-shadow-md">Skills</a>
        <a href="#work" className="hover:text-[#9215e6] transition-all duration-300 hover:drop-shadow-md">Projects</a>
        <a href="#contact" className="hover:text-[#9215e6] transition-all duration-300 hover:drop-shadow-md">Contact</a>
      </nav>

      <div className="flex gap-6 justify-center">
        <a href={Bio.githubsvg} target="_blank" rel="noopener noreferrer" className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
          <GitHubIcon fontSize="medium" />
        </a>
        <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
          <LinkedInIcon fontSize="medium" />
        </a>
        <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="hover:text-[#9215e6] transition duration-300 hover:drop-shadow-[0_0_6px_#9215e6]">
          <InstagramIcon fontSize="medium" />
        </a>
      </div>

      <p className="text-gray-400 text-xs mt-3 text-center">
        &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;