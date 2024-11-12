import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaUser, FaPhoneAlt, FaHome, FaTools, FaFileAlt,
  FaBookmark } from "react-icons/fa";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const contactSection = document.querySelector("#Contact");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        openMenu(false);
        setShowmenu(true);
      }
    };

    // Menambahkan event listener untuk klik di luar area navbar
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 fixed top-0 w-full z-50 bg-opacity-90 backdrop-filter backdrop-blur-lg transition-colors duration-300 ${
        isContactVisible ? "text-black" : "text-white"
      }`}
    >
      <span className="text-xl font-bold tracking-wide">Abi</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-transparent md:bg-transparent px-0 md:border-none text-center md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#Home">
          <li className="text-md transition-all duration-300 p-1 md:p-0 flex items-center gap-2">
            <FaHome />
            Home
          </li>
        </a>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 flex items-center gap-2">
            <FaUser />
            About
          </li>
        </a>
        <a href="#Resume">
          <li className="text-md transition-all duration-300 p-1 md:p-0 flex items-center gap-2">
            <FaFileAlt />
            Resume
          </li>
        </a>
        <a href="#Certificate">
          <li className="text-md transition-all duration-300 p-1 md:p-0 flex items-center gap-2">
            <FaBookmark />
            Certificate
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 flex items-center gap-2">
            <FaTools />
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0 flex items-center gap-2">
            <FaPhoneAlt />
            Contact
          </li>
        </a>
      </ul>

      {showMenu ? (
        <FaBars
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <FaTimes
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;