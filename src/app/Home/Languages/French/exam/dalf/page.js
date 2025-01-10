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
import dalf from "../../../../../../Assets/FrenchPage/FrenchMain/dalf.png";

//components
import Banner from "../../../../../../Shared/ReusableExamPage/Banner";
import FaqsExam from "../../../../../../Shared/ReusableExamPage/FaqsExam";

const Page = () => {

  const FaqsData = [
    {
      question: "Why should I give the DALF exam?",
      answer:
        "You should give the DALF exam to obtain a recognized certification of your French-language proficiency, which can enhance your career opportunities, academic pursuits, and personal development.",
    },
    {
      question: "What are the different levels of the DALF exam?",
      answer:
        "The DALF exam consists of four levels: A1, A2, B1, and B2, representing increasing proficiency from beginner to upper-intermediate levels.",
    },
    {
      question: "What are the sections of the DALF exam?",
      answer:
        "The DALF exam typically includes four sections: listening, reading, writing, and speaking.",
    },
    {
      question: "How can I prepare for the DALF exam?",
      answer:
        "You can prepare for the DALF exam through study materials, practice tests, and language courses.",
    },
    {
      question: "When is the DALF exam conducted?",
      answer:
        "The DALF exam is conducted year-round, with multiple testing sessions available, allowing candidates to choose a convenient date based on their schedule and availability.",
    },
    {
      question: "Can I retake the DALF exam if I don't pass?",
      answer:
        "Yes, you can retake the DALF exam if you do not pass on your first attempt.",
    },
    {
      question: "Is there a difference between the DALF and DALF exams?",
      answer:
        "Yes, the DALF exam assesses proficiency at lower levels (A1-B2), while the DALF exam assesses proficiency at higher levels (C1-C2).",
    },
    {
      question: "Are there any age restrictions for taking the DALF exam?",
      answer: "No, there are no age restrictions for taking the DALF exam.",
    },
    {
      question: "What job opportunities will I get after giving the DALF exam?",
      answer:
        "Upon passing the DALF exam, you can pursue careers in language teaching, translation, international business, tourism, government, media, and cultural organizations.",
    },
  ];

  const say = "Say Bonjour to language learning with us!";

  const lessonData = [
    {
      title: "Popular classes We Offer",
      list: [
        "Online French Classes",
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
        "Online French Grammar Classes",
        "Online French Speaking Classes",
        "Online English Grammar Classes",
        "Online English Speaking Classes",
        "Online Spanish Grammar Classes",
        "Online Spanish Speaking Classes",
      ],
    },
    {
      title: "Popular classes by target group",
      list: [
        "Online French Classes for kids",
        "Online French Classes for adults",
        "Online French Classes for corporates",
        "Online English Classes for kids",
        "Online English Classes for adults",
        "Online English Classes for corporates",
      ],
    },
    {
      title: "Popular online classes by level",
      list: [
        "Online French Classes for Beginners",
        "Online French Classes for Intermediate",
        "Online French Classes for Advance",
        "Online English Classes for Beginners",
        "Online English Classes for Intermediate",
        "Online English Classes for Advance",
      ],
    },
  ];

  const aboutExam = {
    title: "Know more about DALF exam",
    image: dalf,
    paraTitle: "DALF Exam",
    para: "The DALF exam, or Diplôme Approfondi de Langue Française, is an advanced-level certification in the French language. It assesses proficiency at levels C1 and C2 of the Common European Framework of Reference for Languages (CEFR). It's important to take this exam as it provides an internationally recognized credential that demonstrates advanced French language skills, which can be beneficial for academic, professional, and personal purposes. The exam is challenging, especially at the higher levels, but with dedicated preparation, candidates can successfully demonstrate their proficiency and obtain the DALF certification.",
  };

  const examHelpData = {
    title: "How we help you clear your DALF exam",
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
    title: "DALF Preparation Classes",
    para: "Acing your DALF exam is one click away with The Language Network. Our online exam preparation courses are designed to accommodate your schedule, offering flexibility and convenience. Led by top-notch trainers, we provide insider tips, strategies, and essential study materials to excel in the exam. Whether you're starting from scratch or aiming for advanced proficiency, our comprehensive approach will arm you with the skills and confidence required to thrive. Join us at The Language Network and pave the way for your success in the DALF exam.",
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
        <UpcomingBatches language={"French"} />
      </div> */}

      <StudentsTestomony language={"French"} context={''} />

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
