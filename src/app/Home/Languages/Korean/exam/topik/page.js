"use client";
import { TopBar } from "../../../../../../Shared/ReusableExamPage/top-bar";
import UpcomingBatches from "../../../../../../Shared/UpcomingBatches";
import studentPic from "../../../../../../Assets/Homepage/Testomony/testomony.png";
import React from "react";
import StudentsTestomony from "../../../../../../Shared/SharedMainLanguagePage/Components/StudentTestomony/StudentsTestomony";

import Say from "../../../../../../Shared/ReusableExamPage/Say";
import Faqs from "../../../../../../Shared/ReusableExamPage/Faq";
import LanguageLessons from "../../../../../../Shared/FrenchAdultReusableComponents/Languagelessons/LanguageLessons";
import SubscribeToOur from "../../../../../../Shared/SubscribeToOur";
import PaymentBar from "../../../../../../Components/HomeComp/PaymentBar";
import ExamHelp from "../../../../../../Shared/ReusableExamPage/Exam-Help";
import AboutDelf from "../../../../../../Shared/ReusableExamPage/About-Delf";
import TOPIK from "../../../../../../Assets/KoreanPage/Topik.svg";

//components
import Banner from "../../../../../../Shared/ReusableExamPage/Banner";
import FaqsExam from "../../../../../../Shared/ReusableExamPage/FaqsExam";

const Page = () => {

  const FaqsData = [
    {
      question: "Why should I give the TOPIK exam?",
      answer:
        "You should give the TOPIK exam to obtain a recognized certification of your Korean-language proficiency, which can enhance your career opportunities, academic pursuits, and personal development.",
    },
    {
      question: "What are the different levels of the TOPIK exam?",
      answer:
        "The TOPIK exam consists of six levels, ranging from beginner (Level 1) to advanced (Level 6), each assessing increasing proficiency in reading, listening, and writing skills.",
    },
    {
      question: "What are the sections of the TOPIK exam?",
      answer:
        "The TOPIK exam typically includes sections assessing reading, listening, and writing skills, with speaking proficiency optionally tested for higher levels.",
    },
    {
      question: "How can I prepare for the TOPIK exam?",
      answer:
        "You can prepare for the TOPIK exam through study materials, practice tests, and advanced language courses tailored to each level.",
    },
    {
      question: "When is the TOPIK exam conducted?",
      answer:
        "The TOPIK exam is conducted twice a year, once in April and another in July or October, with testing centers available globally, allowing candidates to choose a convenient date based on their schedule and availability.",
    },
    {
      question: "Can I retake the TOPIK exam if I don't pass?",
      answer:
        "Yes, you can retake the TOPIK exam if you do not pass on your first attempt.",
    },
    {
      question: "Are there any age restrictions for taking the TOPIK exam?",
      answer: "No, there are no age restrictions for taking the TOPIK exam.",
    },
    {
      question:
        "What job opportunities will I get after giving the TOPIK exam?",
      answer:
        "Upon passing the TOPIK exam, you can pursue careers in advanced language teaching, translation, international relations, research, and academia, among others.",
    },
  ];

  const say = "Say Annyeonghaseyo to language learning with us!";

  const lessonData = [
    {
      title: "Popular classes We Offer",
      list: [
        "Online Japanese Classes",
        "Online Spanish Classes",
        "Online German Classes",
        "Online Mandarin Classes",
        "Online Japanese Classes ",
        "Online Korean Classes",
        "Online English Classes",
      ],
    },
    {
      title: "Popular Online classes",
      list: [
        "Online Japanese Grammar Classes",
        "Online Japanese Speaking Classes",
        "Online English Grammar Classes",
        "Online English Speaking Classes",
        "Online Spanish Grammar Classes",
        "Online Spanish Speaking Classes",
      ],
    },
    {
      title: "Popular classes by target group",
      list: [
        "Online Japanese Classes for kids",
        "Online Japanese Classes for adults",
        "Online Japanese Classes for corporates",
        "Online English Classes for kids",
        "Online English Classes for adults",
        "Online English Classes for corporates",
      ],
    },
    {
      title: "Popular online classes by level",
      list: [
        "Online Japanese Classes for Beginners",
        "Online Japanese Classes for Intermediate",
        "Online Japanese Classes for Advance",
        "Online English Classes for Beginners",
        "Online English Classes for Intermediate",
        "Online English Classes for Advance",
      ],
    },
  ];
  // marati
  const aboutExam = {
    title: "Know more about TOPIK exam",
    image: TOPIK,
    paraTitle: "TOPIK Exam",
    para: "The TOPIK exam, or Test of Proficiency in Korean, is a standardized test designed to assess and certify the Korean language proficiency of non-native speakers. It evaluates reading, writing, and listening skills at different levels, ranging from beginner to advanced. Taking the TOPIK exam is important for several reasons. Firstly, it provides an official certification of Korean language proficiency, recognized by academic institutions, employers, and government agencies in South Korea and around the world. This certification can enhance educational and professional opportunities, such as studying at Korean universities or securing employment in Korean-speaking environments.",
  };

  const examHelpData = {
    title: "How we help you clear your TOPIK exam",
    data: [
      {
        title: "Assessment and Readiness Tools",
        description:
          "Mock exams provide simulated tests, while audio files and textual materials aid listening and reading comprehension respectively.",
      },
      {
        title: "Interactive Skill Development",
        description:
          "Group discussions enhance speaking skills, while situational writing activities focus on practical writing within specific contexts.",
      },
      {
        title: "Exam Preparation Emphasis",
        description:
          "Maintaining an exam approach since day one ensures consistent readiness strategies throughout the learning process.",
      },
      {
        title: "Holistic Language Instruction",
        description:
          "Comprehensive instruction covers listening, reading, writing, and speaking skills to provide a well-rounded language learning experience.",
      },
      {
        title: "Learning Support Resources",
        description:
          "Class recordings serve as valuable archives for review and reinforcement of lessons.",
      },
    ],
  };

  const TopBarData = {
    title: "TOPIK Preparation Classes",
    para: "Acing your TOPIK exam is one click away with The Language Network. Our online exam preparation courses are designed to accommodate your schedule, offering flexibility and convenience. Led by top-notch trainers, we provide insider tips, strategies, and essential study materials to excel in the exam. Whether you're starting from scratch or aiming for advanced proficiency, our comprehensive approach will arm you with the skills and confidence required to thrive. Join us at The Language Network and pave the way for your success in the TOPIK exam.",
  };

  return (
    <div>
      <div className="2xl:w-[1280px] 3xl:w-[1530px] 4xl:w-[1680px] lg:mx-10 mx-auto 2xl:mx-auto  relative  flex justify-center items-center flex-col mb-[112px]">
        <Banner BannerData={TopBarData} />
      </div>
      {/* <TopBar data={TopBarData} /> */}
      <AboutDelf data={aboutExam} />
      <ExamHelp data={examHelpData} />
      {/* <div className="-mt-[100px] -mb-[50px] lg:-mt-[50px] lg:-mb-[90px]">
        <UpcomingBatches language={"Korean"} />
      </div> */}

      <StudentsTestomony language={"Korean"} context={''} />

      <div className="mb-9">
        <FaqsExam FaqsData={FaqsData} />
      </div>
      {/* <Faqs data={FaqsData} /> */}
      {/* <Say say={say} /> */}
      {/* <div className="mb-10">
      <LanguageLessons LanguageLesson={lessonData} />
      </div> */}

      {/* //added this because of commenting the above sections */}
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default Page;
