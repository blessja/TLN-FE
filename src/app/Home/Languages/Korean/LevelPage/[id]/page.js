"use client";

import SharedLevelPage from "../../../../../../Shared/SharedLevelPage/SharedLevelPage";
import { useCallback, useEffect, useMemo, useState } from "react";
import img1 from "../../../../../../Assets/SharedLevelPage/Level1.svg";
import img2 from "../../../../../../Assets/SharedLevelPage/Level2.svg";
const DynamicPage = ({ params }) => {
  const [LevelData, setLevelData] = useState({});
  const BeginnerData = useMemo(
    () => ({
      BannerData: {
        title: "Korean lessons for beginners",
        description:
          "Welcome to The Language Network's Korean lessons for beginners! Whether you're a non-native speaker seeking to enhance your Korean skills or a complete beginner embarking on your language journey, we've got you covered. Our lessons are crafted to be enjoyable, interactive, and customised to your individual requirements, ensuring you learn at your own pace and gain confidence in your progress. From fundamental grammar and vocabulary to practical conversation skills, our expert instructors will support you every step of the way. So, why wait? Begin your Korean language journey with us today!",
      },
      WhatWillYouLearn: [
        {
          title: "Beginner Level (TOPIK I-Level 1)",
          img: img1,
          ListData: [
            "Capable of basic conversations for daily survival skills like self-introduction, purchasing, and ordering food.",
            "Proficient in comprehending personal and familiar topics such as family, hobbies, and weather.",
            "Able to construct straightforward sentences using a basic vocabulary of around 800 words.",
            "Grasps fundamental grammar concepts.",
            "Adept at understanding and formulating practical sentences for everyday situations.",
          ],
        },
        {
          title: "Elementary (TOPIK I-Level 2)   ",
          img: img2,
          ListData: [
            "Proficient in conducting basic conversations concerning daily routines, such as making phone calls and requesting favors, and utilizing public facilities.",
            "Utilizes a vocabulary of approximately 1,500 to 2,000 words and comprehends personal and familiar topics, presented in a structured manner, such as paragraphing.",
            "Applies formal and informal expressions appropriately, depending on the context of the situation.",
          ],
        },
      ],
      Faqs: [
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
            "What job opportunities will I get after completing my Korean course?",
          answer:
            "Upon completing your Korean course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Korean an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Korean is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Korean useful in India?",
          answer:
            "Yes, Korean can be quite useful in India, especially in sectors like technology, manufacturing, entertainment, and tourism, where there are increasing business and cultural ties with South Korea. Proficiency in Korean can open up job opportunities in multinational corporations with Korean operations, as well as in translation, interpretation, and language teaching roles. Additionally, knowledge of Korean can facilitate cultural exchange programs and collaborations between Indian and South Korean organisations.        ",
        },
        {
          question: "How much time will it take to learn Korean?",
          answer:
            "The time it takes to learn Korean depends on the level you aim to achieve. It typically takes around 4 months to clear TOPIK I - Level 1 & 2, about 5 months to complete  TOPIK II - Level 3 & 4  and approximately 6 months to clear  TOPIK II - Level 5 & 6.  Completing all levels up to TOPIK II Level 6 proficiency usually spans around 15 months.         ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Korean language and teaching methodologies.",
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
      ],
      SayBonjur: "Say Annyeonghaseyo to language learning with us!     ",
      LanguageLesson: [
        {
          title: "Korean Classes Near Me",
          list: [
            "Korean Classes In Mumbai",
            " Korean language course in delhi",
            " Korean classes in pune",
            "Korean language courses near me",
            "Korean language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Korean Speaking Course",
            "Korean Language Classes Online",
            "Learn Korean Online With Certificate",
            "Korean course near me",
            "Korean courses online",
          ],
        },
        {
          title: "Online Korean Classes",
          list: [
            "learn Korean online course",
            "online Korean language course",
            "Korean courses online",
            "Korean classes near me",
            "learn Korean online",
            "online Korean lessons",
          ],
        },
        {
          title: "Korean Classes for Focused Learning",
          list: [
            "Online Korean classes for Beginner",
            "Online Korean classes for Intermediate",
            "Online Korean classes for Advanced",
            "Online Korean classes for Kids ",
            "Online Korean classes for adults",
            "Online Korean classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const IntermediateData = useMemo(
    () => ({
      BannerData: {
        title: "Korean lessons for Intermediate",
        description:
          "Take your Korean language skills to the next level with The Language Network's online classes for intermediate learner Once you've grasped the basics, it's crucial to progress further to enhance your conversational abilities and achieve fluency akin to that of a native speaker. Our intermediate courses are meticulously crafted to build upon your existing knowledge, focusing on refining pronunciation, expanding vocabulary, and mastering complex grammar structures. Join us and elevate your Korean proficiency to confidently engage in conversations and express yourself with fluency and authenticity.        ",
      },
      WhatWillYouLearn: [
        {
          title: "Intermediate (TOPIK II- Level 3)        ",
          img: img1,
          ListData: [
            "Capable of managing daily routines independently and navigating public facilities with reasonable proficiency, while also engaging in social interactions without major difficulty.",
            "Demonstrates the ability to express thoughts on familiar social topics and comprehend specific subjects, presented in paragraph form.",
            "Displays understanding and distinction between written and spoken language, identifying their basic characteristics effectively.",
          ],
        },
        {
          title: "Upper Intermediate (TOPIK II- Level 4)",
          img: img2,
          ListData: [
            "Proficient in utilizing public facilities, engaging in social interactions, and performing basic tasks at work.",
            "Capable of comprehending simple segments of news broadcasts and newspapers.",
            "Demonstrates fluency in using expressions related to social and abstract topics with relative accuracy.",
            "Exhibits understanding of social and cultural subjects, drawing from knowledge of Korean culture and frequently used idiomatic expressions.",
          ],
        },
      ],
      Faqs: [
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
            "What job opportunities will I get after completing my Korean course?",
          answer:
            "Upon completing your Korean course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Korean an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Korean is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Korean useful in India?",
          answer:
            "Yes, Korean can be quite useful in India, especially in sectors like technology, manufacturing, entertainment, and tourism, where there are increasing business and cultural ties with South Korea. Proficiency in Korean can open up job opportunities in multinational corporations with Korean operations, as well as in translation, interpretation, and language teaching roles. Additionally, knowledge of Korean can facilitate cultural exchange programs and collaborations between Indian and South Korean organisations.        ",
        },
        {
          question: "How much time will it take to learn Korean?",
          answer:
            "The time it takes to learn Korean depends on the level you aim to achieve. It typically takes around 4 months to clear TOPIK I - Level 1 & 2, about 5 months to complete  TOPIK II - Level 3 & 4  and approximately 6 months to clear  TOPIK II - Level 5 & 6.  Completing all levels up to TOPIK II Level 6 proficiency usually spans around 15 months.         ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Korean language and teaching methodologies.",
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
      ],
      SayBonjur: "Say Annyeonghaseyo to language learning with us!    ",
      LanguageLesson: [
        {
          title: "Korean Classes Near Me",
          list: [
            "Korean Classes In Mumbai",
            " Korean language course in delhi",
            " Korean classes in pune",
            "Korean language courses near me",
            "Korean language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Korean Speaking Course",
            "Korean Language Classes Online",
            "Learn Korean Online With Certificate",
            "Korean course near me",
            "Korean courses online",
          ],
        },
        {
          title: "Online Korean Classes",
          list: [
            "learn Korean online course",
            "online Korean language course",
            "Korean courses online",
            "Korean classes near me",
            "learn Korean online",
            "online Korean lessons",
          ],
        },
        {
          title: "Korean Classes for Focused Learning",
          list: [
            "Online Korean classes for Beginner",
            "Online Korean classes for Intermediate",
            "Online Korean classes for Advanced",
            "Online Korean classes for Kids ",
            "Online Korean classes for adults",
            "Online Korean classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const AdvancedData = useMemo(
    () => ({
      BannerData: {
        title: "Korean lessons for Advanced",
        description:
          "Take your Korean skills to the next level with The Language Network's online advanced classes. After mastering the intermediate level, advancing to enhanced proficiency is crucial for fluent conversations and native-like speaking. A level 5 & 6 in Korean opens up numerous job opportunities, as bilingual candidates are highly sought after. Join us to enhance your conversational skills, master complex grammar, and increase your career prospects with advanced proficiency in Korean.         ",
      },
      WhatWillYouLearn: [
        {
          title: "Advanced (TOPIK II- Level 5)          ",
          img: img1,
          ListData: [
            "Capable of performing linguistic functions required for research and work in professional domains to a certain extent.",
            "Proficient in understanding and utilizing expressions related to unfamiliar aspects of politics, economics, society, and culture.",
            "Demonstrates the ability to use expressions appropriately, adapting to the formal or informal context of spoken or written communication.",
          ],
        },
        {
          title: "Master (TOPIK II- Level 6)        ",
          img: img2,
          ListData: [
            "Proficient in performing linguistic functions required for research and work in professional fields with relative accuracy and fluency.",
            "Capable of understanding and utilizing expressions related to unfamiliar subjects in politics, economics, society, and culture.",
            "Demonstrates ease in performing functions and conveying meanings, although proficiency may not yet match that of a native speaker.",
          ],
        },
      ],
      Faqs: [
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
            "What job opportunities will I get after completing my Korean course?",
          answer:
            "Upon completing your Korean course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Korean an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Korean is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Korean useful in India?",
          answer:
            "Yes, Korean can be quite useful in India, especially in sectors like technology, manufacturing, entertainment, and tourism, where there are increasing business and cultural ties with South Korea. Proficiency in Korean can open up job opportunities in multinational corporations with Korean operations, as well as in translation, interpretation, and language teaching roles. Additionally, knowledge of Korean can facilitate cultural exchange programs and collaborations between Indian and South Korean organisations.        ",
        },
        {
          question: "How much time will it take to learn Korean?",
          answer:
            "The time it takes to learn Korean depends on the level you aim to achieve. It typically takes around 4 months to clear TOPIK I - Level 1 & 2, about 5 months to complete  TOPIK II - Level 3 & 4  and approximately 6 months to clear  TOPIK II - Level 5 & 6.  Completing all levels up to TOPIK II Level 6 proficiency usually spans around 15 months.         ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Korean language and teaching methodologies.",
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
      ],
      SayBonjur: "Say Kon'nichiwa to language learning with us!   ",
      LanguageLesson: [
        {
          title: "Korean Classes Near Me",
          list: [
            "Korean Classes In Mumbai",
            " Korean language course in delhi",
            " Korean classes in pune",
            "Korean language courses near me",
            "Korean language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Korean Speaking Course",
            "Korean Language Classes Online",
            "Learn Korean Online With Certificate",
            "Korean course near me",
            "Korean courses online",
          ],
        },
        {
          title: "Online Korean Classes",
          list: [
            "learn Korean online course",
            "online Korean language course",
            "Korean courses online",
            "Korean classes near me",
            "learn Korean online",
            "online Korean lessons",
          ],
        },
        {
          title: "Korean Classes for Focused Learning",
          list: [
            "Online Korean classes for Beginner",
            "Online Korean classes for Intermediate",
            "Online Korean classes for Advanced",
            "Online Korean classes for Kids ",
            "Online Korean classes for adults",
            "Online Korean classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const fetchData = useCallback(() => {
    if (params.id === "BeginnerLevel(A1-A2)") {
      setLevelData(BeginnerData);
    }
    if (params.id === "IntermediateLevel(B1-B2)") {
      setLevelData(IntermediateData);
    }
    if (params.id === "AdvancedLevel(C1-C2)") {
      setLevelData(AdvancedData);
    }
  }, [params.id, BeginnerData, IntermediateData, AdvancedData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <SharedLevelPage Data={LevelData} language={"Korean"}/>
    </div>
  );
};

export default DynamicPage;
