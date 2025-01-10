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
import ielts from "../../../../../../Assets/English/ielts.png";

//components
import Banner from "../../../../../../Shared/ReusableExamPage/Banner";
import FaqsExam from "../../../../../../Shared/ReusableExamPage/FaqsExam";

const Page = () => {
  const StudentTestimonialsData = {
    title: "What our French students say",
    testimonial: [
      {
        id: 1,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      {
        id: 2,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      {
        id: 3,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      {
        id: 4,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      {
        id: 1,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      // Add more testimonial objects as needed
    ],
  };

  const FaqsData = [
    {
      question: "Why should I give the IELTS exam?",
      answer:
        "You should give the IELTS exam to obtain a recognized certification of your French-language proficiency, which can enhance your career opportunities, academic pursuits, and personal development.",
    },
    {
      question: "What are the different levels of the IELTS exam?",
      answer:
        "The IELTS exam consists of four levels: A1, A2, B1, and B2, representing increasing proficiency from beginner to upper-intermediate levels.",
    },
    {
      question: "What are the sections of the IELTS exam?",
      answer:
        "The IELTS exam typically includes four sections: listening, reading, writing, and speaking.",
    },
    {
      question: "How can I prepare for the IELTS exam?",
      answer:
        "You can prepare for the IELTS exam through study materials, practice tests, and language courses.",
    },
    {
      question: "When is the IELTS exam conducted?",
      answer:
        "The IELTS exam is conducted year-round, with multiple testing sessions available, allowing candidates to choose a convenient date based on their schedule and availability.",
    },
    {
      question: "Can I retake the IELTS exam if I don't pass?",
      answer:
        "Yes, you can retake the IELTS exam if you do not pass on your first attempt.",
    },
    {
      question: "Is there a difference between the IELTS and IELTS exams?",
      answer:
        "Yes, the IELTS exam assesses proficiency at lower levels (A1-B2), while the IELTS exam assesses proficiency at higher levels (C1-C2).",
    },
    {
      question: "Are there any age restrictions for taking the IELTS exam?",
      answer: "No, there are no age restrictions for taking the IELTS exam.",
    },
    {
      question:
        "What job opportunities will I get after giving the IELTS exam?",
      answer:
        "Upon passing the IELTS exam, you can pursue careers in language teaching, translation, international business, tourism, government, media, and cultural organizations.",
    },
  ];

  const say = "Say Hello to language learning with us!";

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
    title: "Know more about IELTS exam",
    image: ielts,
    paraTitle: "IELTS Exam",
    para: "The IELTS exam, or International English Language Testing System, assesses English language proficiency for non-native speakers. It's crucial to take this exam as it's widely accepted for study, work, and migration purposes in English-speaking countries. Achieving a high score in IELTS opens doors to educational opportunities, employment prospects, and immigration pathways, facilitating communication and integration into English-speaking communities globally.",
  };

  const examHelpData = {
    title: "How we help you clear your IELTS exam",
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
    title: "IELTS Preparation Classes",
    para: "Acing your IELTS exam is one click away with The Language Network. Our online exam preparation courses are designed to accommodate your schedule, offering flexibility and convenience. Led by top-notch trainers, we provide insider tips, strategies, and essential study materials to excel in the exam. Whether you're starting from scratch or aiming for advanced proficiency, our comprehensive approach will arm you with the skills and confidence required to thrive. Join us at The Language Network and pave the way for your success in the IELTS exam.",
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
        <UpcomingBatches language={"English"} />
      </div> */}

      <StudentsTestomony language={"English"} context={""} />
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