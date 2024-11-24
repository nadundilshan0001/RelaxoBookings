"use client";

import { useContext } from "react";
import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import Image from "next/image";
import logo from "../../../public/images/Relaxo.png";
import ThemeContext from "@/context/themeContext";

const Footer = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <footer
      className={`${
        darkTheme
          ? "bg-black border-t-white border-t-2"
          : "bg-soft_white w-full"
      } mt-16 `}
    >
      <hr className=" mb-2 bg-black h-0.5" />
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          <Image src={logo} alt="Company Logo" width={150} height={75} />
        </Link>

        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <h4 className="font-semibold text-[40px] py-6">Contact</h4>
            <p>123 Road, Colombo, Sri Lanka.</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">relaxo@info.com</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">0112-0030-30</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">Relaxo.chat.whatsapp</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of service</p>
            <p>Customer Assistance</p>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Dining Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          darkTheme ? " border-t-white border-t-2" : ""
        } bg-black h-6 md:h-[40px] mt-16 w-full bottom-0 left-0 flex `}
      >
        <ul className="flex text-white flex-wrap justify-around text-sm py-2 flex-1">
          <li>@ Copyright 2024 </li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className=" flex-1" />
      </div>
    </footer>
  );
};

export default Footer;
