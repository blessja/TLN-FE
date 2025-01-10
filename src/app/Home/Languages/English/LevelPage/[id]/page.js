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
        title: "English lessons for beginners",
        description:
          "Welcome to The Language Network's English lessons for beginners! Whether you're a non-native speaker seeking to enhance your English skills or a complete beginner embarking on your language journey, we've got you covered. Our lessons are crafted to be enjoyable, interactive, and customised to your individual requirements, ensuring you learn at your own pace and gain confidence in your progress. From fundamental grammar and vocabulary to practical conversation skills, our expert instructors will support you every step of the way. So, why wait? Begin your English language journey with us today!",
      },
      WhatWillYouLearn: [
        {
          title: "Beginner Level A1",
          img: img1,
          ListData: [
            "Able to comprehend and utilize common everyday phrases, and basic expressions primarily for fulfilling specific needs.",
            "Capable of introducing oneself and others, as well as asking and answering questions about personal information like residence, acquaintances, and possessions.",
            "Can engage in simple interactions, given that the other person speaks slowly and clearly, and is willing to provide assistance.",
            "Grammar is limited to present tense verb forms, with short sentences being common.",
            "Vocabulary is limited to a few hundred words, requiring reliance on context clues for comprehension.",
            "Listening comprehension is restricted to very simple, slow speech.",
          ],
        },
        {
          title: "Elementary Level A2          ",
          img: img2,
          ListData: [
            "Able to comprehend common expressions related to personal information, shopping, geography, and employment.",
            "Capable of engaging in simple and routine tasks, exchanging information on familiar matters directly.",
            "Grammar usage includes basic present, past, and future verb forms.",
            "Vocabulary consists of approximately 1,000 words, enabling discussion on a wider range of topics with less reliance on context.",
            "At A2 level, learners begin using more complex grammar structures like conditional sentences and compound verb tenses.",
            "Listening comprehension includes understanding everyday phrases and common vocabulary when spoken slowly and clearly, as well as following simple directions.",
            "Speaking involves short, simple sentences, often requiring clarification.",
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
            "What job opportunities will I get after completing my English course?",
          answer:
            "Upon completing your English course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is English an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, English is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is English useful in India?",
          answer:
            "Yes, English is highly useful in India. It is widely spoken and serves as an official language alongside Hindi in many states and territories. English proficiency is essential for communication in business, education, government, media, and various other sectors. It also provides access to a vast array of global resources, opportunities, and networks.",
        },
        {
          question: "How much time will it take to learn English?",
          answer:
            "The time it takes to learn English varies depending on your specific goal, such as achieving proficiency in exams like IELTS or TOEFL. It requires dedicated study and practice to reach your desired level.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both English language and teaching methodologies.",
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
      SayBonjur: "Say Annyeonghaseyo to language learning with us!",
        LanguageLesson: [
      {
        title: "Popular classes we offer",
        list: [
         "Online French Classes",
         "Online Spanish Classes",
         "Online German Classes",
         "Online Mandarin Classes",
         "Online Japanese Classes",
         "Online Korean Classes",
         "Online English Classes",

        ],
      },
      {
        title: "Popular online classes",
        list: [
          "Online French Grammar Classes",
          "Online French Speaking Classes",
          "Online English Grammar Classes",
          "Online English Speaking Classes",
          "Online Spanish Grammar Classes",
          "Online English Speaking Classes",
        ],
      },
      {
        title: "Popular classes by target group",
        list: [
          "Online French Classes For Kids",
          "Online French Classes For Adults",
          "Online French Classes For Corporates",
          "Online English Classes For Kids",
          "Online English Classes For Adults",
          "Online English Classes For Corporates",
        ],
      },
      {
        title: "Popular online classes by level",
        list: [
          "Online English classes for Beginner",
          "Online English classes for Intermediate",
          "Online English classes for Advanced",
          "Online English classes for Kids ",
          "Online English classes for adults",
          "Online English classes to study abroad",
        ],
      },
    ],
    }),
    []
  );

  const IntermediateData = useMemo(
    () => ({
      BannerData: {
        title: "English lessons for intermediate",
        description:
          "Take your English language skills to the next level with The Language Network's online classes for intermediate learners. Once you've grasped the basics, it's crucial to progress further to enhance your conversational abilities and achieve fluency akin to that of a native speaker. Our intermediate courses are meticulously crafted to build upon your existing knowledge, focusing on refining pronunciation, expanding vocabulary, and mastering complex grammar structures. Join us and elevate your English proficiency to confidently engage in conversations and express yourself with fluency and authenticity.        ",
      },
      WhatWillYouLearn: [
        {
          title: "Intermediate Level B1",
          img: img1,
          ListData: [
            "Able to discuss experiences, dreams, hopes, and provide reasons and explanations for opinions and plans.",
            "Capable of expressing themselves on various topics in detail.",
            "Understands the main points of familiar subjects encountered in work, school, leisure, etc.",
            "Can handle most situations while traveling in English-speaking areas.",
            "Can produce clear and detailed text on different subjects.",
            "Uses a range of verb tenses and sentence structures.",
            "Possesses a vocabulary of approximately 2,000 words, enabling discussion on diverse topics in depth and utilizing more complex grammar structures.",
            "Communicates fluently and naturally, employing a variety of sentence structures and vocabulary.",
          ],
        },
        {
          title: "Intermediate Level B1          ",
          img: img2,
          ListData: [
            "Can grasp the main ideas of complex texts, including technical discussions within their field of expertise.",
            "Able to grasp both concrete and abstract topics with ease.",
            "Can produce detailed and comprehensive texts covering a wide range of subjects.",
            "Capable of explaining viewpoints on topical issues, including advantages and disadvantages of various options.",
            "Interacts fluently and spontaneously, facilitating smooth conversations with native speakers without strain.",
            "Can effortlessly express themselves on diverse subjects and discuss abstract concepts, provide opinions, and explain viewpoints with clarity.",
            "Can utilize a wide range of verb tenses and sentence structures accurately with minimal errors.",
            "Possesses a vocabulary of approximately 3,000 words, enabling discussions on diverse topics with depth and sophistication.",
            "Can follow a variety of conversations and lectures, including more complex talks, with ease and understanding.",
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
            "What job opportunities will I get after completing my English course?",
          answer:
            "Upon completing your English course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is English an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, English is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is English useful in India?",
          answer:
            "Yes, English is highly useful in India. It is widely spoken and serves as an official language alongside Hindi in many states and territories. English proficiency is essential for communication in business, education, government, media, and various other sectors. It also provides access to a vast array of global resources, opportunities, and networks.",
        },
        {
          question: "How much time will it take to learn English?",
          answer:
            "The time it takes to learn English varies depending on your specific goal, such as achieving proficiency in exams like IELTS or TOEFL. It requires dedicated study and practice to reach your desired level.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both English language and teaching methodologies.",
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
      SayBonjur: "Say Annyeonghaseyo to language learning with us!",
        LanguageLesson: [
      {
        title: "Popular classes we offer",
        list: [
         "Online French Classes",
         "Online Spanish Classes",
         "Online German Classes",
         "Online Mandarin Classes",
         "Online Japanese Classes",
         "Online Korean Classes",
         "Online English Classes",

        ],
      },
      {
        title: "Popular online classes",
        list: [
          "Online French Grammar Classes",
          "Online French Speaking Classes",
          "Online English Grammar Classes",
          "Online English Speaking Classes",
          "Online Spanish Grammar Classes",
          "Online English Speaking Classes",
        ],
      },
      {
        title: "Popular classes by target group",
        list: [
          "Online French Classes For Kids",
          "Online French Classes For Adults",
          "Online French Classes For Corporates",
          "Online English Classes For Kids",
          "Online English Classes For Adults",
          "Online English Classes For Corporates",
        ],
      },
      {
        title: "Popular online classes by level",
        list: [
          "Online English classes for Beginner",
          "Online English classes for Intermediate",
          "Online English classes for Advanced",
          "Online English classes for Kids ",
          "Online English classes for adults",
          "Online English classes to study abroad",
        ],
      },
    ],
    }),
    []
  );
  const AdvancedData = useMemo(
    () => ({
      BannerData: {
        title: "English lessons for Advanced",
        description:
          "Take your English skills to the next level with The Language Network's online advanced classes. After mastering the intermediate level, advancing to C1 and C2 proficiency is crucial for fluent conversations and native-like speaking. A C1-C2 level in English opens up numerous job opportunities, as bilingual candidates are highly sought after. Join us to enhance your conversational skills, master complex grammar, and increase your career prospects with advanced proficiency in English.         ",
      },
      WhatWillYouLearn: [
        {
          title: "Advanced Level C1",
          img: img1,
          ListData: [
            "Capable of producing clear, well-structured texts incorporating figurative speech and literary methods.",
            "Demonstrates smooth-flowing expression in written communication.",
            "Understands lengthy and complex texts, such as lectures or political speeches, recognizing implicit meaning.",
            "Expresses themselves almost effortlessly in English, using language flexibly and effectively for social, academic, and professional purposes.",
            "Handles subtlety and nuance in language, including humor and criticism.",
            "Utilizes a wide range of verb tenses and sentence structures accurately with minimal errors.",
            "Possesses a vocabulary of approximately 5,000 words, including idiomatic expressions and slang, for both written and spoken English.",
            "Follows lengthy and complicated conversations and lectures, discerning subtleties and nuances, and understanding different accents.",
          ],
        },
        {
          title: "Advanced Level C2          ",
          img: img2,
          ListData: [
            "Easily comprehends everything read or heard in English, including complex texts and extended speech.",
            "Produces logically structured texts expressing ideas fluently and precisely.",
            "Expresses themselves spontaneously, fluently, and precisely, discerning finer shades of meaning even in complex situations.",
            "Utilizes the full range of sentence structures and tenses accurately.",
            "Possesses a large and varied vocabulary of around 10,000 words, including idiomatic expressions and slang.",
            "Utilizes the full range of sentence structures and tenses accurately.",
            "Possesses a large and varied vocabulary of around 10,000 words, including idiomatic expressions and slang.",
            "Demonstrates native-level mastery of the language, sounding like a native speaker of English.",
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
            "What job opportunities will I get after completing my English course?",
          answer:
            "Upon completing your English course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is English an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, English is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is English useful in India?",
          answer:
            "Yes, English is highly useful in India. It is widely spoken and serves as an official language alongside Hindi in many states and territories. English proficiency is essential for communication in business, education, government, media, and various other sectors. It also provides access to a vast array of global resources, opportunities, and networks.",
        },
        {
          question: "How much time will it take to learn English?",
          answer:
            "The time it takes to learn English varies depending on your specific goal, such as achieving proficiency in exams like IELTS or TOEFL. It requires dedicated study and practice to reach your desired level.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both English language and teaching methodologies.",
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
      SayBonjur: "Say Annyeonghaseyo to language learning with us!",
        LanguageLesson: [
      {
        title: "Popular classes we offer",
        list: [
         "Online French Classes",
         "Online Spanish Classes",
         "Online German Classes",
         "Online Mandarin Classes",
         "Online Japanese Classes",
         "Online Korean Classes",
         "Online English Classes",

        ],
      },
      {
        title: "Popular online classes",
        list: [
          "Online French Grammar Classes",
          "Online French Speaking Classes",
          "Online English Grammar Classes",
          "Online English Speaking Classes",
          "Online Spanish Grammar Classes",
          "Online English Speaking Classes",
        ],
      },
      {
        title: "Popular classes by target group",
        list: [
          "Online French Classes For Kids",
          "Online French Classes For Adults",
          "Online French Classes For Corporates",
          "Online English Classes For Kids",
          "Online English Classes For Adults",
          "Online English Classes For Corporates",
        ],
      },
      {
        title: "Popular online classes by level",
        list: [
          "Online English classes for Beginner",
          "Online English classes for Intermediate",
          "Online English classes for Advanced",
          "Online English classes for Kids ",
          "Online English classes for adults",
          "Online English classes to study abroad",
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
      <SharedLevelPage Data={LevelData} />
    </div>
  );
};

export default DynamicPage;
