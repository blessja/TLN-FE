import React from "react";
import CustomImage from "./CustomImage";

const WhyChooseUsCard = ({ icon, title, description,width }) => {
  return (
    <div
      key={title}
      className="flex flex-col items-center w-[372px]  h-[526px]"
    >
      <CustomImage icon={icon} title={title} width={width}/>
      <div className="flex flex-col items-center border border-[#1F9F90] rounded-lg w-[339px] h-[300px] 2xl:h-[330px]">
        <h3 className="w-full text-center py-[14px] px-[32px] text-[#FAFAFA] bg-[#1F9F90] border border-[#1F9F90] rounded-lg font-[500] text-[19px]/[24px] sm:text-[20px]/[25px] md:text-[21px]/[26px] lg:text-[22px]/[27px] xl:text-[23px]/[28px] 2xl:text-[24px]/[29px]">
          {title}
        </h3>
        <p className="mx-[20px] my-[10px] text-center text-[#757575] text-[15px]/[24px] sm:text-[16px]/[25px] md:text-[17px]/[25px] lg:text-[18px]/[26px] xl:text-[19px]/[27px] 2xl:text-[20px]/[28px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
