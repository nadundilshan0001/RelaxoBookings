"use client";

import { motion, useInView } from "framer-motion";
import {
  FaCouch,
  FaThermometerHalf,
  FaWifi,
  FaPlug,
  FaBell,
} from "react-icons/fa";
import { GiMirrorMirror, GiPodium } from "react-icons/gi";
import {
  MdAirlineSeatReclineExtra,
  MdWorkOutline,
  MdOutlineTv,
} from "react-icons/md";
import { RiFridgeLine } from "react-icons/ri";
import { useRef } from "react";

export default function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const standardFeatures = [
    { icon: <FaCouch />, label: "Cozy, ergonomic seating for relaxation" },
    {
      icon: <FaThermometerHalf />,
      label: "Smart Control Panel: Adjust lighting and temperature with ease",
    },
    {
      icon: <GiPodium />,
      label: "Luggage Compartment: Secure storage for your belongings",
    },
    { icon: <FaWifi />, label: "Free Wi-Fi: Stay connected at all times" },
    {
      icon: <FaPlug />,
      label: "Charging Station: Power up your devices effortlessly",
    },
    {
      icon: <GiMirrorMirror />,
      label: "Mirror: Freshen up before your next adventure",
    },
    {
      icon: <FaBell />,
      label: "Emergency Button: Added safety for peace of mind",
    },
  ];

  const vipFeatures = [
    {
      icon: <MdAirlineSeatReclineExtra />,
      label: "Convertible Massage Chair: Unwind in style and luxury",
    },
    {
      icon: <FaThermometerHalf />,
      label:
        "Smart Control Panel: Personalize lighting and climate to your liking",
    },
    {
      icon: <MdOutlineTv />,
      label:
        "Multimedia Screen: Stream your favorite content or catch up on news",
    },
    {
      icon: <RiFridgeLine />,
      label: "Mini Bar: Refresh with a selection of snacks and drinks",
    },
    {
      icon: <MdWorkOutline />,
      label:
        "Work Area: A dedicated table and chair for productivity on the go",
    },
    {
      icon: <FaThermometerHalf />,
      label:
        "Air Conditioning: Maintain the perfect temperature throughout your stay",
    },
    {
      icon: <GiPodium />,
      label: "Luggage Compartment: Keep your bags safely stored",
    },
    {
      icon: <GiMirrorMirror />,
      label: "Mirror: Touch up and look your best before you leave",
    },
    {
      icon: <FaWifi />,
      label: "Free Wi-Fi & Charging Station: Stay connected and charged",
    },
    {
      icon: <FaBell />,
      label: "Emergency Button: Advanced safety for a worry-free experience",
    },
  ];

  return (
    <div className="mt-5 p-5">
      <h1 className="text-center text-3xl font-bold mb-10">
        Choose Your Comfort Level
      </h1>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s ease-in-out",
        }}
      >
        <motion.div
          className="p-5 border rounded-lg shadow-lg bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-5 text-center">Standard Pod</h2>
          <ul className="space-y-4">
            {standardFeatures.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {feature.icon} {feature.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="p-5 border rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-5 text-center">VIP Pod</h2>
          <ul className="space-y-4">
            {vipFeatures.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {feature.icon} {feature.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}