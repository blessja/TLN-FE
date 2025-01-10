"use client";
import FaqsCard from "../../../../../Shared/FaqsCard";
import frenchFlag from "../.../../../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const Faqs = ({ data }) => {
  const [faqs, setFaqs] = useState(data.slice(0, 6)); // Initialize state with sliced data

  const toggleSplicing = () => {
    setFaqs(splicing ? data.slice(0, 6) : data); // Toggle between sliced and full data
    setSplicing(!splicing); // Toggle splicing state
  };

  const [splicing, setSplicing] = useState(true);

  return (
    <div className="flex  justify-center bg-[#F6F3F3] pb-4 sm:pb-10">
      <div className="max-w-[1463px] flex-col justify-center w-full mx-auto items-center gap-5 sm:gap-6 flex">
        <div className="flex-col w-full justify-center items-center gap-8 flex">
          <div className="text-black text-4xl font-bold ">FAQs</div>
          <div className="lg:justify-around justify-center xl:justify-around mx-4 px-4 sm:px-10 h-full items-center gap-1 max-xl:gap-4 flex w-full md:flex-row  flex-col">
            <div className="sm:w-1/2 xl:ml-0 lg:ml-0 md:ml-6 lg:order-2 sm:p-4 order-1  flex justify-center">
              <Image
                alt="frenchFlag"
                className="sm:p-6 md:10 p-4 w-full object-contain max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col sm:w-1/2 xl:w-[869px] w-full px-0 mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
              {faqs.map((faq, index) => (
                <FaqsCard key={index} data={faq} i={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full p-4 py-4 sm:py-6 sm:px-12">
          <button
            onClick={toggleSplicing}
            className="h-[58px] px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-center text-teal-600 text-2xl font-medium">
              {splicing ? "Read less FAQs" : "Read all FAQs"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
