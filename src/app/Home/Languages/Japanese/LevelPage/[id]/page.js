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
        title: "Japanese lessons for beginners",
        description:
          "Welcome to The Language Network's Japanese lessons for beginners! Whether you're a non-native speaker seeking to enhance your Japanese skills or a complete beginner embarking on your language journey, we've got you covered. Our lessons are crafted to be enjoyable, interactive, and customised to your individual requirements, ensuring you learn at your own pace and gain confidence in your progress. From fundamental grammar and vocabulary to practical conversation skills, our expert instructors will support you every step of the way. So, why wait? Begin your Japanese language journey with us today!",
      },
      WhatWillYouLearn: [
        {
          title: "Beginner N5 Level",
          img: img1,
          ListData: [
            "Proficient in Reading: This entails the ability to effectively read and understand common expressions and sentences written in hiragana, katakana, and basic kanji characters. Learners at this level should be adept at comprehending written texts covering everyday topics.",
            "Capable Listening Skills: Learners are capable of actively listening and understanding conversations that occur in daily life and classroom environments. They can extract necessary information from dialogues, even if they are spoken slowly, demonstrating an understanding of commonly encountered topics.",
          ],
        },
        // {
        //   title: "Elementary Level A2          ",
        //   img: img2,
        //   ListData: [
        //     "The A2 level of Japanese builds upon the foundation laid in A1, offering a deeper understanding of the language.",
        //     "Your skills in reading, writing, listening, and speaking will improve after completing the A2 level.",
        //     "You'll learn more complex grammar structures like past and future verb tenses, indirect and direct object pronouns, and reflexive verbs.",
        //     "At this level, you'll be able to understand and use sentences and expressions related to everyday topics like personal information, shopping, and employment.",
        //     "You'll also be able to communicate effectively in simple and routine tasks, describing aspects of your background and immediate environment.",
        //   ],
        // },
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
            "What job opportunities will I get after completing my Japanese course?",
          answer:
            "Upon completing your Japanese course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Japanese an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Japanese is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Japanese useful in India?",
          answer:
            "Learning Japanese opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Japanese is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Japanese?",
          answer:
            "The time it takes to learn Japanese depends on the level you aim to achieve. It typically takes around 8 months to clear N5-N4 level, about 8 months to complete N3-N2 level and approximately 4 months to clear N1 level. Completing all levels up to N1 proficiency usually spans around 20 months.         ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Japanese language and teaching methodologies.",
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
          title: "Japanese Classes Near Me",
          list: [
            "Japanese Classes In Mumbai",
            " Japanese language course in delhi",
            " Japanese classes in pune",
            "Japanese language courses near me",
            "Japanese language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Japanese Speaking Course",
            "Japanese Language Classes Online",
            "Learn Japanese Online With Certificate",
            "Japanese course near me",
            "Japanese courses online",
          ],
        },
        {
          title: "Online Japanese Classes",
          list: [
            "learn Japanese online course",
            "online Japanese language course",
            "Japanese courses online",
            "Japanese classes near me",
            "learn Japanese online",
            "online Japanese lessons",
          ],
        },
        {
          title: "Japanese Classes for Focused Learning",
          list: [
            "Online Japanese classes for Beginner",
            "Online Japanese classes for Intermediate",
            "Online Japanese classes for Advanced",
            "Online Japanese classes for Kids ",
            "Online Japanese classes for adults",
            "Online Japanese classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const IntermediateData = useMemo(
    () => ({
      BannerData: {
        title: "Japanese lessons for Intermediate",
        description:
          "Take your Japanese language skills to the next level with The Language Network's online classes for intermediate learner Once you've grasped the basics, it's crucial to progress further to enhance your conversational abilities and achieve fluency akin to that of a native speaker. Our intermediate courses are meticulously crafted to build upon your existing knowledge, focusing on refining pronunciation, expanding vocabulary, and mastering complex grammar structures. Join us and elevate your Japanese proficiency to confidently engage in conversations and express yourself with fluency and authenticity.        ",
      },
      WhatWillYouLearn: [
        {
          title: "Intermediate N4 Level",
          img: img1,
          ListData: [
            "Reading Proficiency: Demonstrates the ability to read and understand written passages covering common daily topics, utilizing fundamental vocabulary and basic kanji characters. This includes comprehending texts encountered in everyday situations.",
            "Listening Comprehension: Exhibits the capacity to listen and grasp conversations typical of daily life, being able to follow the dialogue's content, especially when spoken at a slower pace. This skill enables understanding and interpretation of spoken language in various contexts.",
          ],
        },
        {
          title: "Upper Intermediate N3 Level ",
          img: img2,
          ListData: [
            "Reading Proficiency: Can comprehend written materials focusing on common everyday subjects. Additionally, can grasp summarized information like newspaper headlines. Furthermore, able to understand the main points of slightly more challenging texts encountered in daily scenarios, utilizing alternative phrases to aid comprehension.",
            "Listening Comprehension: Capable of understanding coherent conversations in everyday contexts, even when spoken at near-natural speed. Demonstrates the ability to follow the content and discern the relationships among the individuals involved.",
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
            "What job opportunities will I get after completing my Japanese course?",
          answer:
            "Upon completing your Japanese course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Japanese an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Japanese is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Japanese useful in India?",
          answer:
            "Learning Japanese opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Japanese is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Japanese?",
          answer:
            "The time it takes to learn Japanese depends on the level you aim to achieve. It typically takes around 8 months to clear N5-N4 level, about 8 months to complete N3-N2 level and approximately 4 months to clear N1 level. Completing all levels up to N1 proficiency usually spans around 20 months.         ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Japanese language and teaching methodologies.",
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
          title: "Japanese Classes Near Me",
          list: [
            "Japanese Classes In Mumbai",
            " Japanese language course in delhi",
            " Japanese classes in pune",
            "Japanese language courses near me",
            "Japanese language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Japanese Speaking Course",
            "Japanese Language Classes Online",
            "Learn Japanese Online With Certificate",
            "Japanese course near me",
            "Japanese courses online",
          ],
        },
        {
          title: "Online Japanese Classes",
          list: [
            "learn Japanese online course",
            "online Japanese language course",
            "Japanese courses online",
            "Japanese classes near me",
            "learn Japanese online",
            "online Japanese lessons",
          ],
        },
        {
          title: "Japanese Classes for Focused Learning",
          list: [
            "Online Japanese classes for Beginner",
            "Online Japanese classes for Intermediate",
            "Online Japanese classes for Advanced",
            "Online Japanese classes for Kids ",
            "Online Japanese classes for adults",
            "Online Japanese classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const AdvancedData = useMemo(
    () => ({
      BannerData: {
        title: "Japanese lessons for Advanced",
        description:
          "Take your Japanese skills to the next level with The Language Network's online advanced classes. After mastering the intermediate level, advancing to C1 and C2 proficiency is crucial for fluent conversations and native-like speaking. A C1-C2 level in Japanese opens up numerous job opportunities, as bilingual candidates are highly sought after. Join us to enhance your conversational skills, master complex grammar, and increase your career prospects with advanced proficiency in Japanese.   ",
      },
      WhatWillYouLearn: [
        {
          title: "Advanced N2 Level          ",
          img: img1,
          ListData: [
            "Reading Proficiency: Can read clearly written materials covering various topics, including newspaper articles, magazine commentaries, simple critiques, and general narratives, comprehending their contents effectively.",
            "Listening Comprehension: Capable of understanding spoken materials, such as coherent conversations and news reports, delivered at near-natural speed in everyday situations and diverse settings. Demonstrates the ability to follow ideas, comprehend content, discern relationships among individuals, and grasp essential points presented orally.",
          ],
        },
        {
          title: "Master N1 Level ",
          img: img2,
          ListData: [
            "Reading Proficiency: Can comprehend complex and abstract writings, including newspaper editorials and critiques, understanding both their structures and contents effectively.",
            "Listening Comprehension: Capable of comprehending orally presented materials, such as coherent conversations, news reports, and lectures, delivered at natural speed in diverse settings. Demonstrates comprehensive understanding of ideas, content, details, relationships among individuals, logical structures, and essential points presented orally.",
            "Mastering the Language: Achieves fluency to speak like a native speaker, embodying the linguistic nuances and expressions inherent to the language.",
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
            "What job opportunities will I get after completing my Japanese course?",
          answer:
            "Upon completing your Japanese course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Japanese an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Japanese is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Japanese useful in India?",
          answer:
            "Learning Japanese opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Japanese is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Japanese?",
          answer:
            "The time it takes to learn Japanese depends on the level you aim to achieve. It typically takes around 8 months to clear N5-N4 level, about 8 months to complete N3-N2 level and approximately 4 months to clear N1 level. Completing all levels up to N1 proficiency usually spans around 20 months.         ",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Japanese language and teaching methodologies.",
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
          title: "Japanese Classes Near Me",
          list: [
            "Japanese Classes In Mumbai",
            " Japanese language course in delhi",
            " Japanese classes in pune",
            "Japanese language courses near me",
            "Japanese language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Japanese Speaking Course",
            "Japanese Language Classes Online",
            "Learn Japanese Online With Certificate",
            "Japanese course near me",
            "Japanese courses online",
          ],
        },
        {
          title: "Online Japanese Classes",
          list: [
            "learn Japanese online course",
            "online Japanese language course",
            "Japanese courses online",
            "Japanese classes near me",
            "learn Japanese online",
            "online Japanese lessons",
          ],
        },
        {
          title: "Japanese Classes for Focused Learning",
          list: [
            "Online Japanese classes for Beginner",
            "Online Japanese classes for Intermediate",
            "Online Japanese classes for Advanced",
            "Online Japanese classes for Kids ",
            "Online Japanese classes for adults",
            "Online Japanese classes to study abroad",
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
      <SharedLevelPage Data={LevelData} language={"Japanese"} />
    </div>
  );
};

export default DynamicPage;
