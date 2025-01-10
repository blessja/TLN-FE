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
import Goethe from "../../../../../../Assets/GermanPage/Gothe.svg";

//components
import Banner from "../../../../../../Shared/ReusableExamPage/Banner";
import FaqsExam from "../../../../../../Shared/ReusableExamPage/FaqsExam";

const Page = () => {

  const FaqsData = [
    {
      question: "Why should I give the GOETHE exam?",
      answer:
        "You should give the GOETHE exam to obtain a recognized certification of your French-language proficiency, which can enhance your career opportunities, academic pursuits, and personal development.",
    },
    {
      question: "What are the different levels of the GOETHE exam?",
      answer:
        "The GOETHE exam consists of four levels: A1, A2, B1, and B2, representing increasing proficiency from beginner to upper-intermediate levels.",
    },
    {
      question: "What are the sections of the GOETHE exam?",
      answer:
        "The GOETHE exam typically includes four sections: listening, reading, writing, and speaking.",
    },
    {
      question: "How can I prepare for the GOETHE exam?",
      answer:
        "You can prepare for the GOETHE exam through study materials, practice tests, and language courses.",
    },
    {
      question: "When is the GOETHE exam conducted?",
      answer:
        "The GOETHE exam is conducted year-round, with multiple testing sessions available, allowing candidates to choose a convenient date based on their schedule and availability.",
    },
    {
      question: "Can I retake the GOETHE exam if I don't pass?",
      answer:
        "Yes, you can retake the GOETHE exam if you do not pass on your first attempt.",
    },
    {
      question: "Is there a difference between the GOETHE and DALF exams?",
      answer:
        "Yes, the GOETHE exam assesses proficiency at lower levels (A1-B2), while the DALF exam assesses proficiency at higher levels (C1-C2).",
    },
    {
      question: "Are there any age restrictions for taking the GOETHE exam?",
      answer: "No, there are no age restrictions for taking the GOETHE exam.",
    },
    {
      question:
        "What job opportunities will I get after giving the GOETHE exam?",
      answer:
        "Upon passing the GOETHE exam, you can pursue careers in language teaching, translation, international business, tourism, government, media, and cultural organizations.",
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
  // marati
  const aboutExam = {
    title: "Know more about GOETHE exam",
    image: Goethe,
    paraTitle: "GOETHE Exam",
    para: "The GOETHE exam is a German language proficiency test offered by the Goethe-Institut. It assesses individuals' language skills in listening, reading, writing, and speaking. Taking this exam is important for those seeking to study, work, or immigrate to German-speaking countries, as it provides a recognized certification of proficiency. It serves as proof of one's language abilities and can enhance opportunities for education, employment, and immigration.",
  };

  const examHelpData = {
    title: "How we help you clear your GOETHE exam",
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
    title: "GOETHE Preparation Classes",
    para: "Master the GOETHE proficiency exam effortlessly with The Language Network. Our online exam preparation courses are crafted in accordance with your timing and schedule. Get study material and access to insider tips and tricks and from our expert tuto₹Whether you're beginning your journey or striving for advanced proficiency, our comprehensive approach will empower you with the skills and confidence to thrive. Join us at The Language Network and embark on your path to success in the GOETHE exam.",
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
        <UpcomingBatches language={"German"} />
      </div> */}

      <StudentsTestomony language={"German"} context={''} />

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
