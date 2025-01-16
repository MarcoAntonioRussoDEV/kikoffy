import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { menuScreen } from "./mobile menu/Variants";
import NavLink from "./mobile menu/NavLink";
import MobileMenuToggle from "./mobile menu/MobileMenuToggle";
import NavExtra from "./mobile menu/NavExtra";

export default function Header({ data, light }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNav() {
    setIsOpen(!isOpen);
    document.querySelector("body").style.overflow = isOpen
      ? "hidden auto"
      : "hidden";
  }
  return (
    <header className="absolute top-0 left-0 z-50 w-full text-white ">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuScreen}
            initial="hidden"
            exit="hidden"
            animate="visible"
            id="mob-menu"
            className="fixed inset-0 z-50 overflow-y-scroll text-center text-white pointer-events-auto bg-[#373737]"
          >
            <div
              id="menu-items"
              className="z-10 inline-flex flex-col items-center justify-center min-h-full space-y-5 text-left page-container-simple"
            >
              {data.links.map(({ item }, i) => (
                <NavLink
                  className="py-2 text-3xl text-white lg:block"
                  order={i}
                  onClick={() => {
                    toggleNav();
                  }}
                  item={item}
                  key={item.text}
                />
              ))}

              <NavExtra
                order={data.links.length}
                playAnimation={isOpen}
                onClick={() => toggleNav()}
              >
                <div className="flex items-center space-x-6">
                  {data.socials.map(({ item }) => (
                    <a
                      key={item.icon}
                      href={item.link}
                      target="_blank"
                      className="duration-200 focus-visible:opacity-60 hover:opacity-60"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.icon}
                        alt="social"
                        className="w-auto h-7"
                      />
                    </a>
                  ))}
                </div>
              </NavExtra>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-50 flex items-center justify-between px-5 py-4 mx-auto">
        <Link className="lg:flex-1" href="/">
          <img
            src={light ? data.logoLight : data.logo}
            alt="Logo"
            className="object-contain w-20 md:w-28"
          />
        </Link>

        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center space-x-16 xl:space-x-24">
              {data.links.map(({ item }) => (
                <li className="xl:px-2" key={item.link}>
                  <Link
                    className="text-2xl text-center duration-200 focus-visible:opacity-60 hover:opacity-60"
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-col items-end justify-center flex-1 hidden space-y-3 lg:flex">
          {data.socials.map(({ item }) => (
            <a
              key={item.icon}
              href={item.link}
              target="_blank"
              className="duration-200 focus-visible:opacity-60 hover:opacity-60"
              rel="noopener noreferrer"
            >
              <img src={item.icon} alt="social" className=" h-7 w-7" />
            </a>
          ))}
        </div>
        <MobileMenuToggle
          className="lg:hidden"
          isOpen={isOpen}
          onClick={() => toggleNav()}
        />
      </div>
    </header>
  );
}
