"use client";
import React, { useState, useEffect } from "react";

const PlansCard = ({ cardData, isFirst }) => {
  const [isOpen, setIsOpen] = useState(isFirst);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const pointUp = (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
    </svg>
  );

  const pointDown = (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  return (
    <div className="w-full h-full bg-white overflow-hidden border flex flex-col border-gray-200 shadow-md rounded-xl">
      {/* Toggle Header for Small Screens */}
      <div
        className={`bg-primary-color flex items-center justify-between text-base py-4 px-6 text-center rounded-t-xl text-white  font-medium cursor-pointer md:hidden `}
        onClick={toggleOpen}
      >
        <span>{cardData.title}</span>
        <span>{isOpen ? pointUp : pointDown}</span>
      </div>

      {/* Title for Larger Screens */}
      <div className="hidden md:block bg-primary-color text-base py-4 px-6 text-center rounded-t-xl text-white mb-2 font-medium">
        {cardData.title}
      </div>

      {/* Content Section */}
      <div className={`flex flex-col flex-grow ${isOpen ? "" : "hidden"} md:flex md:flex-grow `}>
        <p className="text-center pb-1 pt-5 px-6 text-base font-medium">
          {cardData.Description}
        </p>
        <ul role="list" className="px-2 space-y-5 my-7 ">
          {cardData.listData.map((val, index) => (
            <li className="flex items-center" key={index}>
              <svg
                className="flex-shrink-0 w-4 h-4 ms-4 text-primary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-medium leading-tight text-gray-500 ms-3">{val}</span>
            </li>
          ))}
        </ul>
      
        {/* Button */}
        <div className="flex flex-col px-6 py-4 mt-auto">
          <button className="block w-full text-xl bg-white hover:bg-primary-color border hover:border-white text-primary-color border-primary-color hover:text-white justify-center items-center py-3 my-0 focus:bg-indigo-700 text-center rounded-lg px-3 font-semibold">
            {cardData.BoxText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
