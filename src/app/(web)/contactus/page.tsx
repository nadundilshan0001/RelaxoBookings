"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import contactus from "../../../../public/images/contactus.png";

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
      const { data } = await axios.post("/api/complaint", formData);
      toast.success("Complaint submitted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit complaint");
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="container mx-auto flex gap-2">
      <div className="p-6 space-y-6 sm:p-8 w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-800">
            Contact Us
          </h1>
          <p className="mt-2 text-gray-600">
            Contact us for all questions about rates, and new or existing
            reservations at any of our locations. If you already hold a
            reservation, please quote your booking number for easier reference.
            For all new requests, kindly specify which services you are
            enquiring about.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Make a Complaint
          </h2>
        </div>
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
      </div>
      <div className="flex-1  flex items-center justify-center">
        <Image
          src={contactus}
          alt="Company Logo"
          width={400}
          className=" h-auto"
        />
      </div>
    </section>
  );
};

export default ContactUs;
