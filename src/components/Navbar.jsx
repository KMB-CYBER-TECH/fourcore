import React, { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { IoIosArrowDown, IoLogoInstagram } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  return (
    <div className="bg-white">
      <nav className="fixed top-0 left-0 w-full bg-white flex justify-between items-center z-50">
        <div className="container xl:max-w-[1200px] mx-auto flex justify-between items-center">
          <div>
            <a href="hero">
              <img src="core.webp" alt="About Us" />
            </a>
          </div>
          <button
            className="bg-[#EB8317] font-semibold text-white px-5 py-7 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto text-white z-40">
          <div className="container mx-auto py-45 ml-67">
            <ul className="text-3xl space-y-10">
              <li>
                <a href="hero" className="block text-[#EB8317] font-bold ">
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                  className="flex items-center gap-2 hover:text-[#EB8317] focus:outline-none cursor-pointer"
                >
                  Company
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      companyDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    companyDropdownOpen ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="ml-6 mt-4 text-2xl space-y-4">
                    <li>
                      <a href="about" className="block hover:text-[#EB8317]">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="LeadershipTeam"
                        className="block hover:text-[#EB8317]"
                      >
                        Leadership Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="Certificate"
                        className="block hover:text-[#EB8317]"
                      >
                        Certificate & Compliance
                      </a>
                    </li>
                    <li>
                      <a href="our" className="block hover:text-[#EB8317]">
                        Our Affiliates
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="SuccessStories" className="block hover:text-[#EB8317]">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="career" className="block hover:text-[#EB8317]">
                  Career
                </a>
              </li>
            </ul>

            <a href="contact" className="block text-[#EB8317] ">
              <button className="mt-6 bg-[#EB8317] px-6 py-3 rounded-md text-white font-semibold cursor-pointer">
                Contact Us
              </button>
            </a>

            <div className="mt-8 flex gap-25 text-[20px] cursor-pointer">
              <SlSocialFacebook />
              <CiTwitter />
              <IoLogoInstagram />
              <LuLinkedin />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
