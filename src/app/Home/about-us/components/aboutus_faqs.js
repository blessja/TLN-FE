"use client";
import FaqsCard from "../../../../Shared/FaqsCard";
import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import { useGetFilteredFAQsQuery } from "../../../../store/apiSlice"
import Image from "next/image";
import { useEffect, useState } from "react";

const Faqscbus = () => {
 
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Others",
    context: "AboutUs",
    category: "General",
  });

 
  const [splicing, setsplicing] = useState(true);
  return (
    <div className="flex justify-center bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px] flex-col justify-center w-full mx-auto items-start gap-7 flex">
        <div className="flex-col justify-start items-center gap-12 flex">
          <div className="text-black md:text-5xl text-2xl font-bold pt-5">FAQs</div>
          <div className="justify-center mx-4 h-full items-center max-xl:gap-4 order-2  grid lg:grid-cols-2 max-xl:flex-col-reverse">
            <div className="w-full lg:order-2 order-1 flex justify-center">
              <Image
                alt="frenchFlag"
                className="max-w-[562px] w-full object-contain  max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col md:w-full mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
              {splicing &&
                faqData?.slice(0,6).map((data, index) => (
                    <FaqsCard key={index} data={data} i={index} />
                  ))}
              {!splicing &&
                faqData.map((data, index) => (
                  <FaqsCard key={index} data={data} i={index} />
                ))}
            </div>
          </div>
        </div>
        <button
            onClick={() => setsplicing(!splicing)}
            className="h-[48px] sm:h-[58px] px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg border border-teal-600 justify-center items-start gap-2.5 inline-flex ml-4"
            >
            <div className="text-center text-teal-600 text-lg sm:2xl font-medium">
                {!splicing ? "Read less FAQs" : "Read all FAQs"}
            </div>
        </button>
      </div>
    </div>
  );
};

export default Faqscbus;
