"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";

const defaultFormData = {
  email: "",
  complaint: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post("/api/complaint", formData);
      toast.success("Complaint submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit complaint");
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="container mx-auto mt-8 px-4">
      {/* Header Section */}
      <motion.div
        className="text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We’re Here to Help! At Relaxo, your comfort and satisfaction are our
          top priorities. Whether you have questions about our services, need
          assistance with a booking, or want to share feedback, we’re just a
          message away.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <motion.div
          className="p-6 space-y-6 sm:p-8 w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Make a Complaint
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Enter your email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="jhon@gmail.com"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-tertiary-dark"
              />
            </div>
            <div>
              <label
                htmlFor="complaint"
                className="block text-gray-700 font-medium mb-1"
              >
                Complaint
              </label>
              <textarea
                name="complaint"
                placeholder="Explain your complain..."
                cols={50}
                rows={6}
                value={formData.complaint}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-tertiary-dark"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-tertiary-dark text-white font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-tertiary-light transition-colors"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-6 p-6 sm:p-8 w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-warm_gray text-xl" />
              <p>
                <strong>Email Us:</strong> support@relaxo.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-warm_gray text-xl" />
              <p>
                <strong>Call Us:</strong> +94 (000) 123-4567
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-warm_gray text-xl" />
              <p>
                <strong>Visit Us:</strong> Relaxo pods at Bandaranayake
                International Airport
              </p>
            </div>
          </div>

          {/* Quick Assistance */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Assistance
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <a href="/faq" className="text-clam_blue hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <p>
                  Live Chat Support: Click the chat icon below to connect with
                  us.
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-4">
              <FaFacebook className="text-black text-2xl cursor-pointer hover:text-warm_gray" />
              <FaTwitter className="text-black text-2xl cursor-pointer hover:text-warm_gray" />
              <FaInstagram className="text-black text-2xl cursor-pointer hover:text-warm_gray" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
