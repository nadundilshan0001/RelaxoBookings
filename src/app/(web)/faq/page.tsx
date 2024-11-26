"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What are the sleeping pods, and how do they work?",
    answer: `
    Sleeping pods are compact, self-contained units designed to provide travelers with a private and comfortable space for rest and relaxation in busy environments like airports.
    
    <b>Booking:</b> Guests can book a pod in advance online or via walk-in.

    <b>Check-in:</b> On arrival, guests receive a keycard to access their reserved pod.

    <b>Usage:</b> Inside the pod, guests can enjoy features like adjustable lighting, temperature control, a reclining massage chair, and multimedia entertainment.
    
    <b>Duration:</b> Pods are rented by the hour, giving travelers flexibility.

    <b>Check-out:</b> Upon completing their rest, guests leave the pod, and it is cleaned and prepared for the next user.
    `,
  },
  {
    question: "Where are the sleeping pods located within the airport?",
    answer: `
    <b>VIP Pods:</b> Conveniently located on the first floor of Bandaranaike International Airport, near the Ceylon Coffee shop, just before the pathway leading to Gates 6-14. This area ensures a seamless check-in experience for premium customers.
    
    <b>Standard Pods:</b> Strategically positioned along the corridor leading to Gates 6-14 on the first floor, featuring large windows for a bright and welcoming environment.
    `,
  },
  {
    question: "How do I book a sleeping pod in advance?",
    answer:
      "You can book a sleeping pod in advance through our official website. Simply select your desired time, date, and duration, and complete the reservation process online.",
  },
  {
    question: "Can I make a last-minute booking at the airport?",
    answer:
      "Yes, last-minute bookings are available at the airport on a walk-in basis, subject to pod availability.",
  },
  {
    question: "What amenities and facilities do the sleeping pods offer?",
    answer: `
    <b>Standard Pods:</b> Ergonomic seating, climate control, free Wi-Fi, a charging station, luggage storage, a mirror, and a smart control panel.
    
    <b>VIP Pods:</b> Convertible massage chair, multimedia screen, mini bar, work area, and coat hanger for added luxury.
    Check out our <a href="#">homepage</a> for more details.
    `,
  },
  {
    question:
      "What are the rates for using the sleeping pods? Are there hourly rates or overnight options?",
    answer:
      "Rates vary based on duration and pod type. Contact us directly or visit our website for detailed pricing options.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We accept credit and debit cards, mobile payments, and cash at the reception desk for walk-in bookings. Online bookings are secured through secure digital payment gateways.",
  },
  {
    question: "What is the maximum duration I can stay in a sleeping pod?",
    answer:
      "The maximum stay in a Relaxo sleeping pod is 24 hours. Guests requiring a longer stay must rebook after the initial reservation period ends.",
  },
  {
    question: "Are the sleeping pods soundproof and private?",
    answer:
      "Yes, Relaxo sleeping pods are designed to ensure privacy and are soundproof, providing a quiet and undisturbed environment for travelers to rest and recharge.",
  },
  {
    question: "Is there a shower or restroom facility available nearby?",
    answer:
      "Relaxo do not have shower or restroom facilities. However, there are restroom facilities available nearby at the airport for your convenience.",
  },
  {
    question:
      "What are the check-in and check-out procedures for the sleeping pods?",
    answer: `
<b>Check-in:</b>

Upon arrival, guests can approach the reception to confirm their booking.

Guests will be assigned a pod number based on availability or their reservation.

A keycard will be provided to access their assigned pod.

The reception team will guide guests

<b>Check-out:</b>

At the end of the booked duration, guests should vacate their assigned pod.

The keycard is returned to the reception.

The pod will be cleaned and prepared for the next guest.
`,
  },
  {
    question: "Are the sleeping pods cleaned and sanitized between uses?",
    answer:
      "Yes, after each use, the housekeeping team cleans and sanitizes the pod within 30 minutes, ensuring it is ready for the next guest",
  },
  {
    question: "Can families or couples share a sleeping pod?",
    answer:
      "No, our sleeping pods are designed for single occupancy only, ensuring privacy and comfort for individual travelers. For families or couples, we recommend booking separate pods to maintain the intended experience of a restful, personal space.",
  },
  {
    question: "Is there luggage storage available with the sleeping pods?",
    answer:
      "Each sleeping pod at Relaxo includes a single luggage compartment for storing personal items such as small bags or backpacks.",
  },
  {
    question: "Are children allowed in the sleeping pods?",
    answer:
      "Since the pods are designed for single occupancy, each pod can accommodate only one person. For families, separate bookings will be required for each adult or older child.",
  },
  {
    question:
      "What should I do if I need assistance while using the sleeping pod?",
    answer:
      "If you need assistance while using the sleeping pod, simply contact the reception desk or the on-site staff and if there is a medical emergency or any urgent situation, each sleeping pod is equipped with an emergency button. Pressing the button will immediately notify the on-site staff or security team, who will respond promptly to assist you",
  },
  {
    question:
      "Are there power outlets or charging stations in the sleeping pods?",
    answer:
      "Yes, each sleeping pod is equipped with power outlets and charging stations, allowing guests to charge their electronic devices while they rest.",
  },
  {
    question: "Is Wi-Fi included in the sleeping pod service?",
    answer:
      "Yes, Wi-Fi is included with the sleeping pod service. Guests can enjoy complimentary access to high-speed Wi-Fi while resting in the pod",
  },
  {
    question:
      "What happens if I need to extend my time beyond the booked hours?",
    answer:
      "If you need to extend your time beyond the booked hours, you can either make the request through the website or contact the front desk for assistance. The additional time will be calculated at the same hourly rate, and the pod will be made available for you until the new desired duration. Extensions are subject to availability, so it’s best to notify the staff in advance if you anticipate needing extra time.",
  },
  {
    question: "What safety measures are in place in the sleeping pods?",
    answer: `<b>Emergency Button:</b> Each pod is equipped with an emergency button that guests can use to request immediate assistance from the front desk in case of a medical emergency or any other urgent situation.

    <b>Pod Security:</b> The pods are lockable for privacy and security, with guests receiving a keycard to access their assigned pod.

<b>Fire Safety:</b> The pods are made from fire-resistant materials, and there are fire exits nearby in the airport.

<b>Surveillance:</b> While Relaxo does not have specialized pod monitoring systems, the airport's general security and surveillance cameras cover the area to ensure a secure environment.

<b>Maintenance and Cleanliness:</b> The housekeeping team ensures that pods are cleaned and sanitized after each use to maintain hygiene and safety
`,
  },
  {
    question:
      "Are there any restrictions or rules for using the sleeping pods?",
    answer: `
    <b>Single Occupancy:</b> Each pod is designed for one person only. Sharing a pod with another person, including families or couples, is not permitted.

    <b>Duration of Stay:</b> The maximum stay in a pod is 24 hours. If you need to stay longer, you must make a new booking.

<b>Prohibited Items:</b> Smoking, strong-smelling foods, and alcoholic beverages are not allowed inside the pods. Please dispose of any non-smelly snacks in the designated bins.

<b>Behavior:</b> Guests are expected to maintain respectful and quiet behavior within the pods to ensure a peaceful environment for all users.

<b>Cleanliness:</b> Guests should ensure that the pod is left in good condition for the next user. Any damage or misuse may result in additional charges.

<b>Security:</b> Relaxo is not responsible for the loss or theft of personal items. Please ensure that all valuables are securely stored.

<b>Emergency Use:</b> If you encounter any issues or emergencies, please use the emergency button in the pod to contact the front desk.
`,
  },
  {
    question:
      "What happens if my flight is delayed or rescheduled after booking a sleeping pod?",
    answer: `
    <b>Contact Relaxo Front Desk:</b> Inform the front desk about your flight change as soon as possible. Our team will assist you in adjusting your booking accordingly.

    <b>Rebooking:</b> If you need to extend your stay beyond the original booking time, you can either rebook your pod through the website or by contacting the front desk for availability.

    <b>No Refund for Cancellations:</b> Please note that Relaxo does not offer refunds for missed or delayed flights, as stated in the terms and conditions.`,
  },
  {
    question:
      "Are there any special discounts and how can I get information on them?",
    answer:
      "We offer discounts for frequent travelers, loyalty members, and special promotions. Check our website or follow us on social media for updates.",
  },
  {
    question: "What languages is customer support available in?",
    answer: `At Relaxo, currently, our customer support is available in:

<b>English</b>

<b>Sinhala (for local travelers in Sri Lanka)</b>

<b>Spanish</b>

<b>Portuguese</b> 

<b>Mandarin</b> 

<b>Arabic</b> 
`,
  },
  {
    question: "How do I cancel or modify my sleeping pod reservation?",
    answer:
      "You can cancel or modify your booking through our website. Changes are subject to availability and our cancellation policy.",
  },
  {
    question: "Is there a refund policy for cancellations?",
    answer:
      "Yes, refunds are available for cancellations made within the time frame specified in our policy.",
  },
  {
    question: "Do the sleeping pods have climate control for comfort?",
    answer:
      "Yes, each sleeping pod is equipped with a temperature control panel, allowing you to adjust the climate inside to your comfort level. Whether you prefer a cooler or warmer environment, you can easily set the pods temperature to your liking.",
  },
  {
    question:
      "Can I use the sleeping pod for purposes other than sleeping (e.g., working or relaxing)?",
    answer:
      "Absolutely! Our pods are versatile spaces, perfect for working, relaxing, or even catching up on your favorite content.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg p-6"
      >
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-600">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center text-left px-4 py-3 focus:outline-none transition 
                  ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg"
                      : "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800"
                  }
                  hover:from-blue-300 hover:to-blue-200 hover:text-black hover:shadow-lg active:scale-95`}
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▼
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <div
                  className="p-4 text-blue-900 bg-blue-50 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;
