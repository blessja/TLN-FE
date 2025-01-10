"use client";
import FaqsCard from "@/Shared/FaqsCard";
import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const FaqsGerman = () => {
  const datas = [
    {
      question: "Why learn with The Language Network?",
      answer:
        "Learn with The Language Network for personalised instruction, flexible scheduling, and immersive learning experiences tailored to your specific needs. Our expert tutors offer 1:1 and small group classes, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for your convenience and offer free study material worth ₹10,000+ to support your language learning journey.",
    },
    {
      question: "Will I get a certificate after completing each level?",
      answer:
        "Yes, you will receive a certificate upon completion of each level. We, as a language school are ISO-certified and our certificates are PAN India recognised. We also prepare for language proficiency exams, the certificates for which are recognised worldwide.",
    },
    {
      question:
        "What job opportunities will I get after completing my German course?",
      answer:
        "After completing your German course, you'll gain access to job opportunities in various sectors such as international business, tourism, translation and interpretation, diplomacy, teaching, and multinational corporations with German operations. You may also find employment as a language specialist, cultural liaison, or customer service representative for German-speaking clients. Additionally, proficiency in German can enhance your prospects for roles in research, academia, and cultural exchange programs.",
    },
    {
      question: "Is German an easy language to learn?",
      answer:
        "About 40% of German and English vocabulary are very similar to each other, which makes German one of the easiest languages to learn for native English speakers. So, basically, if you already know English, it should be a piece of cake for you to learn German.",
    },
    {
      question: "Is German useful in India?",
      answer:
        "Learning German opens up numerous career opportunities in India, particularly in sectors such as engineering, power, education, IT, healthcare, and pharmaceuticals. Proficiency in German can lead to new professional avenues and enhance prospects for employment and advancement in these industries.",
    },
    {
      question: "How much time will it take to learn German?",
      answer:
        "The time it takes to learn German depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 5 months to complete B1-B2 level and approximately 12 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
    },
    {
      question: "What if I miss a class?",
      answer:
        "Missing a class should not be a worry as you will have lifetime access to the recorded classes and can refer to them at your convenience.",
    },
    {
      question: "Will I be provided with study material?",
      answer:
        "Yes, you'll be provided with comprehensive study material worth ₹10,000 + free of cost to supplement your learning and reinforce key concepts.",
    },
    {
      question: "Who will be teaching me?",
      answer:
        "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both German language and teaching methodologies.",
    },
    {
      question: "How many students are accommodated in one batch?",
      answer:
        "Our batches are usually small in size, typically accommodating 5 students to ensure personalised attention.",
    },
    {
      question: "What is included in the curriculum?",
      answer:
        "The curriculum includes grammar, vocabulary, listening, speaking, reading, and writing exercises tailored to each proficiency level, along with cultural insights and practical applications.",
    },
  ];

  const [splicing, setsplicing] = useState(true);
  return (
    <div className="flex justify-center bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px] flex-col justify-center w-full mx-auto items-center  gap-12 flex">
        <div className="flex-col justify-start items-center gap-12 flex">
          <div className="text-black text-2xl font-bold ">FAQs</div>
          <div className="justify-center mx-4 h-full items-center max-xl:gap-4 order-2  grid lg:grid-cols-2 max-xl:flex-col-reverse">
            <div className="w-full lg:order-2 order-1 flex justify-center">
              <Image
                alt="frenchFlag"
                className="max-w-[562px] w-full object-contain  max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col  md:w-full mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
              {splicing &&
                datas
                  .splice(0, 6)
                  .map((data, index) => (
                    <FaqsCard key={index} data={data} i={index} />
                  ))}
              {!splicing &&
                datas.map((data, index) => (
                  <FaqsCard key={index} data={data} i={index} />
                ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => setsplicing(!splicing)}
          className="h-[58px] px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-teal-600 text-2xl font-medium ">
            {!splicing ? "Read less FAQs" : "Read all FAQs"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FaqsGerman;
