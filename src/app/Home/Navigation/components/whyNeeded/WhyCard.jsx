import Image from "next/image";
import React from "react";

const WhyCard = ({ icon, title, description }) => {
  return (
    <div id={title} className="flex flex-col items-center gap-4 xl:gap-8 p-[10px] xl:p-[15px] bg-[#F9F9F9] max-w-[90%] sm:w-[350px]  xl:w-[400px] sm:h-[267px] xl:h-[267px] rounded-2xl">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          src={icon}
          alt={`icon`}
          width={500}
          height={500}
          className="w-[64px]"
        />
        <p className="text-[20px]/[24px] font-bold text-[#004D37]">{title}</p>
      </div>
      <p className="text-center xl:text-[16px]/[19.4px] text-[#1F9F90] lg:py-[14px] lg:px-[32px] font-[500]">
        {description}
      </p>
    </div>
  );
};

export default WhyCard;
