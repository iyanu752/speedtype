import arrowDown from "/assets/chevron-down.svg";
import challenges from "/assets/challenges.svg";
import analytics from "/assets/analytics.svg";
import leaderboard from "/assets/leaderboard.svg";
import logo from "/assets/speedlogo.svg";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StickyNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="py-4 flex font-roboto w-full flex-row justify-between items-center bg-white px-6 md:px-16 shadow-md z-50">
      <a href="/">
        <img src={logo} alt="Logo" className="w-[120px] md:w-[150px]" />
      </a>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      <ul className="hidden md:flex items-center gap-4 font-roboto text-t2 font-bold text-black">
        <li className="hover:text-blue">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-blue">
          <a href="/About">About Us</a>
        </li>
        <li className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-blue"
            onClick={toggleDropdown}
          >
            <span>More Options</span>
            <img src={arrowDown} alt="arrow down" />
          </div>
          <AnimatePresence>
            {showDropdown && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 mt-1 rounded-[10px] bg-white z-50 border border-gray-200 px-4 py-4 min-w-[260px] md:w-[368px] shadow-lg"
              >
                {[
                  {
                    href: "/Challenges",
                    img: challenges,
                    title: "Typing Challenges",
                    desc: "Improve your typing speed with fun challenges.",
                  },
                  {
                    href: "/Analytics",
                    img: analytics,
                    title: "Analytics Dashboard",
                    desc: "Track your progress and see your stats.",
                  },
                  {
                    href: "/Leaderboard",
                    img: leaderboard,
                    title: "Leaderboard",
                    desc: "Track your typing speed and progress here.",
                  },
                ].map(({ href, img, title, desc }) => (
                  <li
                    key={title}
                    className="pb-3 flex flex-row items-start hover:bg-gray-100 cursor-pointer rounded-md p-2"
                  >
                    <img src={img} className="pr-3" alt={title} />
                    <div className="flex flex-col">
                      <a href={href} className="text-t2 font-semibold hover:text-blue">
                        {title}
                      </a>
                      <p className="font-normal text-t3">{desc}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li className="hover:text-blue">
          <a href="/Contact">Contact Us</a>
        </li>
        <li>
          <a href="/Login">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="border-blue text-blue hover:bg-blue font-bold hover:text-white border-2 rounded-[10px] py-2 px-5"
            >
              Log in
            </motion.button>
          </a>
        </li>
        <li>
          <a href="/Signup">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="border-blue text-blue hover:bg-blue font-bold hover:text-white border-2 rounded-[10px] py-2 px-5"
            >
              Sign Up
            </motion.button>
          </a>
        </li>
      </ul>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg z-50 flex flex-col px-6 py-8 gap-6"
          >
            <button
              onClick={toggleMenu}
              className="self-end text-black font-bold text-xl"
            >
              ✕
            </button>
            <a href="/" onClick={toggleMenu}>Home</a>
            <a href="/About" onClick={toggleMenu}>About Us</a>
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-blue"
                onClick={toggleDropdown}
              >
                <span>More Options</span>
                <img src={arrowDown} alt="arrow down" />
              </div>
              <AnimatePresence>
                {showDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 rounded-[10px] bg-white border border-gray-200 px-4 py-4 w-full shadow-lg"
                  >
                    {[
                      {
                        href: "/Challenges",
                        img: challenges,
                        title: "Typing Challenges",
                        desc: "Improve your typing speed with fun challenges.",
                      },
                      {
                        href: "/Analytics",
                        img: analytics,
                        title: "Analytics Dashboard",
                        desc: "Track your progress and see your stats.",
                      },
                      {
                        href: "/Leaderboard",
                        img: leaderboard,
                        title: "Leaderboard",
                        desc: "Track your typing speed and progress here.",
                      },
                    ].map(({ href, img, title, desc }) => (
                      <li
                        key={title}
                        className="pb-3 flex flex-row items-start hover:bg-gray-100 cursor-pointer rounded-md p-2"
                      >
                        <img src={img} className="pr-3" alt={title} />
                        <div className="flex flex-col">
                          <a
                            href={href}
                            className="text-t2 font-semibold hover:text-blue"
                          >
                            {title}
                          </a>
                          <p className="font-normal text-t3">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <a href="/Contact" onClick={toggleMenu}>Contact Us</a>
            <a href="/Login" onClick={toggleMenu}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="border-blue text-blue hover:bg-blue font-bold hover:text-white border-2 rounded-[10px] py-2 px-5 w-full"
              >
                Log in
              </motion.button>
            </a>
            <a href="/Signup" onClick={toggleMenu}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="border-blue text-blue hover:bg-blue font-bold hover:text-white border-2 rounded-[10px] py-2 px-5 w-full"
              >
                Sign Up
              </motion.button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default StickyNavbar;
