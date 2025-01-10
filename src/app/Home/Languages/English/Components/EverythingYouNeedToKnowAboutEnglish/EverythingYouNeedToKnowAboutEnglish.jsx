"use client";
import FaqsCard from "@/Shared/FaqsCard";
import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const EverythingYouNeedToKnowAboutEnglish = () => {
  const datas = [
    {
      question: "Why is it important to excel at English exams?",
      answer:
        "Excelling in English exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in English significantly enhances communication skills. English is spoken in numerous countries around the world and is one of the official languages of international organisations like the United Nations and the International Red Cross. Therefore, mastering English provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship.\n\nMoreover, excelling in English exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning English, individuals gain insight into the customs, traditions, and perspectives of English-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world.\n\nFurthermore, proficiency in English enhances global connectivity. In an increasingly globalised society, the ability to speak multiple languages, including English, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in English exams have a competitive edge in navigating global networks and building meaningful relationships across borders.\n\nAdditionally, mastering a second language like English has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
    },
    {
      question: "How can kids do well in a English exam?",
      answer:
        "To ace a English exam, it's essential to prepare strategically and practice diligently. Kids should focus on mastering key language skills like reading, writing, listening, and speaking. Effective study methods include practicing regularly with fun materials like storybooks and online games. Kids can also improve by getting feedback from teachers or parents, participating in activities like storytelling or singing English songs, and using special techniques for exams.\n\nTop tips for English revision:\nFor effective revision, kids should mix repetition, practice, and focused improvement. Using tools like flashcards, quizzes and educational videos can help reinforce learning over time. Watching cartoons or playing language-learning games exposes kids to different English contexts and makes learning more enjoyable. It's also helpful for kids to get feedback from tutors or friends to improve in specific areas, leading to better results in exams.",
    },
    {
      question: "Why does your child need English tutoring?",
      answer:
        "Personalised English tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
    },
  ];
  const [splicing, setsplicing] = useState(true);
  return (
    <div className="flex justify-center px-4 bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px]  flex-col justify-start w-full mx-auto items-start gap-12 flex">
        <div className="flex-col w-full justify-start items-center gap-12 flex">
          <div className="text-black max-md:text-xl text-2xl font-bold text-center">
            Everything you need to know about English
          </div>
          <div className="justify-center  w-full  h-full items-center gap-8 flex">
            <div className="flex-col w-full gap-y-2 gap-x-2">
              {splicing &&
                datas
                  .splice(0, 4)
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
          className="h-[58px] px-8 py-3.5 rounded-lg border border-teal-600 mx-auto w-[190px] justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-teal-600 text-2xl font-medium font-['Inter']">
            {!splicing ? "Read less" : "Read more"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default EverythingYouNeedToKnowAboutEnglish;
