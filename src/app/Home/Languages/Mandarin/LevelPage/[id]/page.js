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
        title: "Mandarin lessons for beginners",
        description:
          "Welcome to The Language Network's Mandarin lessons for beginners! Whether you're a non-native speaker seeking to enhance your Mandarin skills or a complete beginner embarking on your language journey, we've got you covered. Our lessons are crafted to be enjoyable, interactive, and customised to your individual requirements, ensuring you learn at your own pace and gain confidence in your progress. From fundamental grammar and vocabulary to practical conversation skills, our expert instructors will support you every step of the way. So, why wait? Begin your Mandarin language journey with us today!",
      },
      WhatWillYouLearn: [
        {
          title: " Beginner Level- HSK 1",
          img: img1,
          ListData: [
            "This level caters to students with minimal to no prior experience in Mandarin.",
            "It focuses on essential survival Mandarin for immediate use in daily situations, such as introducing oneself and discussing basic personal details like age and nationality.",
            "Following initial classes, students will progress to constructing basic sentences related to common topics such as food, transportation, and shopping.",
            "Upon completion of this level, students will have acquired a vocabulary of around 150 words, enabling them to engage in simple conversations and handle routine tasks in Mandarin.",
          ],
        },
        {
          title: "Elementary Level- HSK 2",
          img: img2,
          ListData: [
            "At this level, students can converse about themselves, their families, and place orders at restaurants using basic Mandarin sentences.",
            "Level 2 builds on basic daily life functions, emphasizing sentence structure, basic story retelling, and simple grammar.",
            "Completion of this level equips students to discuss various everyday topics like weather, family, and life in China.",
            "By the end of Level 2, students should have expanded their vocabulary to around 300 words, enabling them to express themselves more fluently in Mandarin.",
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
            "What job opportunities will I get after completing my Mandarin course?",
          answer:
            "Upon completing your Mandarin course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Mandarin an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Mandarin is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Mandarin useful in India?",
          answer:
            "Learning Mandarin opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Mandarin is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Mandarin?",
          answer:
            "The time it takes to learn Mandarin depends on the level you aim to achieve. It typically takes around 3 months to clear HSK 1 & 2, about 4 months to complete HSK 3 & 4 and approximately 6 months to clear HSK 5 & 6 . Completing all levels up to HSK 6 proficiency usually spans around 11 months.        ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Mandarin language and teaching methodologies.",
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
      SayBonjur: "Say Nǐ hǎo to language learning with us!   ",
      LanguageLesson: [
        {
          title: "Mandarin Classes Near Me",
          list: [
            "Mandarin Classes In Mumbai",
            " Mandarin language course in delhi",
            " Mandarin classes in pune",
            "Mandarin language courses near me",
            "Mandarin language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Mandarin Speaking Course",
            "Mandarin Language Classes Online",
            "Learn Mandarin Online With Certificate",
            "Mandarin course near me",
            "Mandarin courses online",
          ],
        },
        {
          title: "Online Mandarin Classes",
          list: [
            "learn Mandarin online course",
            "online Mandarin language course",
            "Mandarin courses online",
            "Mandarin classes near me",
            "learn Mandarin online",
            "online Mandarin lessons",
          ],
        },
        {
          title: "Mandarin Classes for Focused Learning",
          list: [
            "Online Mandarin classes for Beginner",
            "Online Mandarin classes for Intermediate",
            "Online Mandarin classes for Advanced",
            "Online Mandarin classes for Kids ",
            "Online Mandarin classes for adults",
            "Online Mandarin classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const IntermediateData = useMemo(
    () => ({
      BannerData: {
        title: "Mandarin lessons for Intermediate",
        description:
          "Take your Mandarin language skills to the next level with The Language Network's online classes for intermediate learner Once you've grasped the basics, it's crucial to progress further to enhance your conversational abilities and achieve fluency akin to that of a native speaker. Our intermediate courses are meticulously crafted to build upon your existing knowledge, focusing on refining pronunciation, expanding vocabulary, and mastering complex grammar structures. Join us and elevate your Mandarin proficiency to confidently engage in conversations and express yourself with fluency and authenticity.        ",
      },
      WhatWillYouLearn: [
        {
          title: "Intermediate Level-HSK 3        ",
          img: img1,
          ListData: [
            "At this level, you'll engage in basic social and work-related conversations for everyday activities, demonstrating proficiency in Mandarin.",
            "Students are adept at confidently communicating with native speakers on various aspects of daily life in Mandarin, with few errors.",
            "They can express opinions on straightforward topics and provide reasoning behind their viewpoints.",
            "By this stage, students should have a vocabulary of around 600 words, enhancing their ability to understand and use Mandarin effectively.",
          ],
        },
        {
          title: "Upper Intermediate Level-HSK 4",
          img: img2,
          ListData: [
            "At this level, proficiency is sufficient for many universities, enabling students to discuss various daily life topics and engage in genuine conversations.",
            "Students should feel at ease commenting on a broad range of subjects related to life, study, and work, though they may lack precise vocabulary in specialized topics.",
            "They should be capable of effortless communication with native Mandarin speakers, whether in daily life or during travel.",
            "By this stage, students should have a vocabulary of around 1,200 words, enhancing their ability to express themselves effectively in Mandarin.",
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
            "What job opportunities will I get after completing my Mandarin course?",
          answer:
            "Upon completing your Mandarin course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Mandarin an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Mandarin is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Mandarin useful in India?",
          answer:
            "Learning Mandarin opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Mandarin is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Mandarin?",
          answer:
            "The time it takes to learn Mandarin depends on the level you aim to achieve. It typically takes around 3 months to clear HSK 1 & 2, about 4 months to complete HSK 3 & 4 and approximately 6 months to clear HSK 5 & 6 . Completing all levels up to HSK 6 proficiency usually spans around 11 months.        ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Mandarin language and teaching methodologies.",
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
      SayBonjur: "Say Nǐ hǎo to language learning with us!  ",
      LanguageLesson: [
        {
          title: "Mandarin Classes Near Me",
          list: [
            "Mandarin Classes In Mumbai",
            "Mandarin language course in delhi",
            "Mandarin classes in pune",
            "Mandarin language courses near me",
            "Mandarin language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Mandarin Speaking Course",
            "Mandarin Language Classes Online",
            "Learn Mandarin Online With Certificate",
            "Mandarin course near me",
            "Mandarin courses online",
          ],
        },
        {
          title: "Online Mandarin Classes",
          list: [
            "learn Mandarin online course",
            "online Mandarin language course",
            "Mandarin courses online",
            "Mandarin classes near me",
            "learn Mandarin online",
            "online Mandarin lessons",
          ],
        },
        {
          title: "Mandarin Classes for Focused Learning",
          list: [
            "Online Mandarin classes for Beginner",
            "Online Mandarin classes for Intermediate",
            "Online Mandarin classes for Advanced",
            "Online Mandarin classes for Kids ",
            "Online Mandarin classes for adults",
            "Online Mandarin classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const AdvancedData = useMemo(
    () => ({
      BannerData: {
        title: "Mandarin lessons for Advanced",
        description:
          "Take your Mandarin skills to the next level with The Language Network's online advanced classes. After mastering the intermediate level, advancing to a higher  proficiency is crucial for fluent conversations and native-like speaking. A HSK 5 level in Mandarin opens up numerous job opportunities, as bilingual candidates are highly sought after. Join us to enhance your conversational skills, master complex grammar, and increase your career prospects with advanced proficiency in Mandarin.         ",
      },
      WhatWillYouLearn: [
        {
          title: "Advanced Level- HSK 5          ",
          img: img1,
          ListData: [
            "Upon reaching HSK5, students excel in a Mandarin business setting, understanding nearly every spoken sentence and conversing fluently.",
            "At this level, students can engage in fluent conversations across various life and workplace topics, incorporating idiomatic expressions in their exchanges.",
            "They demonstrate the ability to read simple Mandarin passages, comprehend Mandarin films and TV shows, and recognize a vocabulary of approximately 2500 words.",
          ],
        },
        {
          title: "Master Level- HSK 6        ",
          img: img2,
          ListData: [
            "At this stage, students have the freedom to express themselves on any topic, both orally and in writing, ranging from practical to philosophical subjects.",
            "They possess the ability to discuss nearly any topic, especially within their areas of specialization, with only occasional errors or confusion.",
            "Their conversational skills are robust, and they can comprehend a significant portion of the language used in Mandarin news, films, and TV shows.",
            "Additionally, they have mastered a vocabulary of approximately 5000 words.",
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
            "What job opportunities will I get after completing my Mandarin course?",
          answer:
            "Upon completing your Mandarin course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Mandarin an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Mandarin is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Mandarin useful in India?",
          answer:
            "Learning Mandarin opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Mandarin is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Mandarin?",
          answer:
            "The time it takes to learn Mandarin depends on the level you aim to achieve. It typically takes around 3 months to clear HSK 1 & 2, about 4 months to complete HSK 3 & 4 and approximately 6 months to clear HSK 5 & 6 . Completing all levels up to HSK 6 proficiency usually spans around 11 months.        ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Mandarin language and teaching methodologies.",
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
          title: "Mandarin Classes Near Me",
          list: [
            "Mandarin Classes In Mumbai",
            "Mandarin language course in delhi",
            "Mandarin classes in pune",
            "Mandarin language courses near me",
            "Mandarin language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Mandarin Speaking Course",
            "Mandarin Language Classes Online",
            "Learn Mandarin Online With Certificate",
            "Mandarin course near me",
            "Mandarin courses online",
          ],
        },
        {
          title: "Online Mandarin Classes",
          list: [
            "learn Mandarin online course",
            "online Mandarin language course",
            "Mandarin courses online",
            "Mandarin classes near me",
            "learn Mandarin online",
            "online Mandarin lessons",
          ],
        },
        {
          title: "Mandarin Classes for Focused Learning",
          list: [
            "Online Mandarin classes for Beginner",
            "Online Mandarin classes for Intermediate",
            "Online Mandarin classes for Advanced",
            "Online Mandarin classes for Kids ",
            "Online Mandarin classes for adults",
            "Online Mandarin classes to study abroad",
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
  // console.log(params.id);
  return (
    <div>
      <SharedLevelPage Data={LevelData} language={"Mandarin"}/>
    </div>
  );
};

export default DynamicPage;
