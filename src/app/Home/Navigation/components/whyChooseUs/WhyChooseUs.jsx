import React from "react";
import CardInfo from "./CardInfo";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {
  return (
    <div>
      <h2 className="text-[35px]/[50px] sm:text-[40px]/[55px] md:text-[45px]/[60px] lg:text-[50px]/[65px] xl:text-[55px]/[70px] 2xl:text-[60px]/[72.61px] font-bold text-center mt-[50px] xl:mt-[60px] 2xl:mt-[120px] mb-[67px]">
        Why choose us ?
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {CardInfo.map((card) => {
          return (
            <WhyChooseUsCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              width={card.width}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
