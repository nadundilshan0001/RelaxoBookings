"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

import ThemeContext from "@/context/themeContext";
import Image from "next/image";
import logo from "../../../public/images/Relaxo.png";

const Header = () => {
  const themeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;

  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  return (
    <header
      className={`${
        darkTheme
          ? "bg-black border-b-white border-b-2"
          : "bg-soft_white w-full"
      } px-10  text-xl flex flex-wrap md:flex-nowrap items-center justify-between mb-5 `}
    >
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-tertiary-dark">
          <Image src={logo} alt="Company Logo" width={150} height={75} />
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className="scale-animation img"
                    />
                  </div>
                ) : (
                  <FaUserCircle className="cursor-pointer" size={30} />
                )}
              </Link>
            ) : (
              <Link href="/auth">
                <FaUserCircle className="cursor-pointer" size={30} />
              </Link>
            )}
          </li>
          <li className="ml-5">{""} </li>
        </ul>
      </div>

      <motion.ul
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between w-full md:w-1/3 mt-4 font-medium"
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }}
          className="hover:-translate-y-2 duration-500 transition-all"
        >
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }}
          className="hover:-translate-y-2 duration-500 transition-all"
        >
          <Link href="/rooms">Pods</Link>
        </motion.li>
        <motion.li
          className="hover:-translate-y-2 duration-500 transition-all"
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }}
        >
          <Link href="/contactus">Contact</Link>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }}
        >
          <Link href="/faq">FAQ</Link>
        </motion.li>
      </motion.ul>
    </header>
  );
};

export default Header;
