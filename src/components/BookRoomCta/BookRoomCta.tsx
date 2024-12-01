"use client";

import { Dispatch, FC, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  checkinDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  setDuration: Dispatch<SetStateAction<number>>;
  price: number;
  discount: number;
  duration: number;
  specialNote: string;
  isBooked: boolean;
  handleBookNowClick: () => void;
};

const BookRoomCta: FC<Props> = (props) => {
  const {
    price,
    discount,
    specialNote,
    checkinDate,
    setCheckinDate,
    setDuration,
    duration,
    isBooked,
    handleBookNowClick,
  } = props;

  const discountPrice = price - (price / 100) * discount;

  const calcNoOfHours = () => {
    if (!checkinDate || !duration) return 0;
    const d = duration;
    return d;
  };

  const hours = [];

  for (let i = 1; i < 25; i++) {
    hours.push(i);
  }

  return (
    <div className="px-7 py-6">
      <h1 className=" text-blue-700 text-2xl cursor: default  hover:text-blue-950 hover:cursor-default font-bold">
        Reserve your Pod here...
      </h1>
      <div className="w-full border-b-2 border-b-secondary my-2" />
      <h3>
        <div className="font-semibold">
          <span className="text-tertiary-dark text-lg font-semibold">
            $ {price + "  "}
          </span>
          <span> per hour</span>
        </div>
      </h3>
      <h4 className="my-4">{specialNote}</h4>

      <div className="flex">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="check-in-date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check In date
          </label>
          <DatePicker
            selected={checkinDate}
            onChange={(date) => setCheckinDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            id="check-in-date"
            className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <br />
      <div className="flex">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Duration
          </label>

          <select
            name=""
            id="duration"
            value={duration}
            className="w-full border text-sm text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
            onChange={(e) => setDuration(Number(e.target.value))}
          >
            {hours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour} hours
              </option>
            ))}
          </select>
        </div>
      </div>

      {calcNoOfHours() > 0 ? (
        <p className="mt-3">Total Price: $ {calcNoOfHours() * discountPrice}</p>
      ) : (
        <></>
      )}

      <button
        disabled={isBooked}
        onClick={handleBookNowClick}
        className="btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isBooked ? "Booked" : "Book Now"}
      </button>
    </div>
  );
};

export default BookRoomCta;
