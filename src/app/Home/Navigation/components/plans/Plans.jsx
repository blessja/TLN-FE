"use client";
import React from "react";
import PlansCard from "./PlansCard";

const Plans = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-[35px]/[50px] sm:text-[40px]/[55px] md:text-[45px]/[60px] lg:text-[50px]/[65px] xl:text-[55px]/[70px] 2xl:text-[60px]/[72.61px] text-[#1E1E1E] font-bold text-center mb-10">
        3 Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((val, index) => (
          <PlansCard cardData={val} isFirst={index === 0} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
