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
        title: "Spanish lessons for beginners",
        description:
          "Welcome to The Language Network's Spanish lessons for beginners! Whether you're a non-native speaker seeking to enhance your Spanish skills or a complete beginner embarking on your language journey, we've got you covered. Our lessons are crafted to be enjoyable, interactive, and customised to your individual requirements, ensuring you learn at your own pace and gain confidence in your progress. From fundamental grammar and vocabulary to practical conversation skills, our expert instructors will support you every step of the way. So, why wait? Begin your Spanish language journey with us today!",
      },
      WhatWillYouLearn: [
        {
          title: "Beginner Level A1",
          img: img1,
          ListData: [
            "The A1 level of Spanish marks the beginning of your journey in learning the language, focusing on basic vocabulary and grammar.",
            "The syllabus covers essential topics like greetings, personal information, family, food, directions, and basic grammar rules.",
            "You'll develop skills in reading, writing, listening, and speaking as you progress through the A1 level.",
            "By the end of this level, you'll be able to understand and use everyday expressions and introduce yourself and others.",
            "You'll also be able to ask and answer simple questions, provided the other person speaks slowly and clearly.",
          ],
        },
        {
          title: "Elementary Level A2          ",
          img: img2,
          ListData: [
            "The A2 level of Spanish builds upon the foundation laid in A1, offering a deeper understanding of the language.",
            "Your skills in reading, writing, listening, and speaking will improve after completing the A2 level.",
            "You'll learn more complex grammar structures like past and future verb tenses, indirect and direct object pronouns, and reflexive verbs.",
            "At this level, you'll be able to understand and use sentences and expressions related to everyday topics like personal information, shopping, and employment.",
            "You'll also be able to communicate effectively in simple and routine tasks, describing aspects of your background and immediate environment.",
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
            "What job opportunities will I get after completing my Spanish course?",
          answer:
            "Upon completing your Spanish course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Spanish an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Spanish is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Spanish useful in India?",
          answer:
            "Learning Spanish opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Spanish is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Spanish?",
          answer:
            "The time it takes to learn Spanish depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Spanish language and teaching methodologies.",
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
      SayBonjur: "Say Hola to language learning with us!",
      LanguageLesson: [
        {
          title: "Spanish Classes Near Me",
          list: [
            "Spanish Classes In Mumbai",
            " Spanish language course in delhi",
            " Spanish classes in pune",
            "Spanish language courses near me",
            "Spanish language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Spanish Speaking Course",
            "Spanish Language Classes Online",
            "Learn Spanish Online With Certificate",
            "Spanish course near me",
            "Spanish courses online",
          ],
        },
        {
          title: "Online Spanish Classes",
          list: [
            "learn Spanish online course",
            "online Spanish language course",
            "Spanish courses online",
            "Spanish classes near me",
            "learn Spanish online",
            "online Spanish lessons",
          ],
        },
        {
          title: "Spanish Classes for Focused Learning",
          list: [
            "Online Spanish classes for Beginner",
            "Online Spanish classes for Intermediate",
            "Online Spanish classes for Advanced",
            "Online Spanish classes for Kids ",
            "Online Spanish classes for adults",
            "Online Spanish classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const IntermediateData = useMemo(
    () => ({
      BannerData: {
        title: "Spanish lessons for Intermediate",
        description:
          "Take your Spanish language skills to the next level with The Language Network's online classes for intermediate learner Once you've grasped the basics, it's crucial to progress further to enhance your conversational abilities and achieve fluency akin to that of a native speaker. Our intermediate courses are meticulously crafted to build upon your existing knowledge, focusing on refining pronunciation, expanding vocabulary, and mastering complex grammar structures. Join us and elevate your Spanish proficiency to confidently engage in conversations and express yourself with fluency and authenticity.        ",
      },
      WhatWillYouLearn: [
        {
          title: "Intermediate Level B1",
          img: img1,
          ListData: [
            "B1 Spanish level marks an intermediate stage, where you possess a strong command of the language.",
            "The syllabus covers more complex topics like society, culture, education, and work, building on the foundation of A-level Spanish.",
            "By the end of B1, you'll communicate effectively in various situations, with a solid understanding of well-written texts on familiar subjects.",
            "You'll be able to produce coherent texts on topics of personal interest or familiarity.",
            "At this level, you can understand and handle standard input on common topics encountered at work, school, or leisure, and express opinions and plans clearly.",
          ],
        },
        {
          title: "Upper Intermediate Level B2",
          img: img2,
          ListData: [
            "B2 Spanish level signifies upper-intermediate proficiency, showcasing a high level of fluency.",
            "This level delves into advanced topics such as arts, culture, science, and international relations, fostering effective communication and proficiency.",
            "At B2, you grasp complex texts covering practical and intellectual subjects, engaging fluently with native speakers.",
            "You demonstrate the ability to understand and discuss intricate concepts, offering viewpoints on topical issues with clarity and detail.",
            "With B2 proficiency, you communicate effortlessly and spontaneously, interacting fluently with native speakers without difficulty.",
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
            "What job opportunities will I get after completing my Spanish course?",
          answer:
            "Upon completing your Spanish course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Spanish an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Spanish is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Spanish useful in India?",
          answer:
            "Learning Spanish opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Spanish is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Spanish?",
          answer:
            "The time it takes to learn Spanish depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Spanish language and teaching methodologies.",
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
      SayBonjur: "Say Hola to language learning with us!",
      LanguageLesson: [
        {
          title: "Spanish Classes Near Me",
          list: [
            "Spanish Classes In Mumbai",
            " Spanish language course in delhi",
            " Spanish classes in pune",
            "Spanish language courses near me",
            "Spanish language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Spanish Speaking Course",
            "Spanish Language Classes Online",
            "Learn Spanish Online With Certificate",
            "Spanish course near me",
            "Spanish courses online",
          ],
        },
        {
          title: "Online Spanish Classes",
          list: [
            "learn Spanish online course",
            "online Spanish language course",
            "Spanish courses online",
            "Spanish classes near me",
            "learn Spanish online",
            "online Spanish lessons",
          ],
        },
        {
          title: "Spanish Classes for Focused Learning",
          list: [
            "Online Spanish classes for Beginner",
            "Online Spanish classes for Intermediate",
            "Online Spanish classes for Advanced",
            "Online Spanish classes for Kids ",
            "Online Spanish classes for adults",
            "Online Spanish classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const AdvancedData = useMemo(
    () => ({
      BannerData: {
        title: "Spanish lessons for Advanced",
        description:
          "Take your Spanish skills to the next level with The Language Network's online advanced classes. After mastering the intermediate level, advancing to C1 and C2 proficiency is crucial for fluent conversations and native-like speaking. A C1-C2 level in Spanish opens up numerous job opportunities, as bilingual candidates are highly sought after. Join us to enhance your conversational skills, master complex grammar, and increase your career prospects with advanced proficiency in Spanish.   ",
      },
      WhatWillYouLearn: [
        {
          title: "Advanced Level C1         ",
          img: img1,
          ListData: [
            "C1 Spanish level represents advanced proficiency, showcasing exceptional language skills.",
            "This level explores advanced topics like professional skills, scientific language, and intricate grammar.",
            "By mastering C1, you effectively communicate in challenging situations, both orally and in writing.",
            "You understand demanding texts and convey ideas fluently, using language flexibly for various purposes.",
            "With C1 proficiency, you produce clear, detailed texts on complex subjects, displaying controlled organization and cohesion.",
          ],
        },
        {
          title: "Master Level C2",
          img: img2,
          ListData: [
            "Spanish C2 level signifies near-native proficiency, with exceptional command of the language.",
            "At this level, you effortlessly understand and express yourself in any language domain: reading, writing, listening, and speaking.",
            "Your vocabulary, grammar, and idiomatic expressions are exemplary, allowing you to communicate with fluency and precision.",
            "You comprehend virtually everything you hear or read, summarizing information from various sources coherently.",
            "With C2 proficiency, you express yourself spontaneously and precisely, even in the most complex situations, discerning subtle nuances of meaning.",
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
            "What job opportunities will I get after completing my Spanish course?",
          answer:
            "Upon completing your Spanish course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is Spanish an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, Spanish is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is Spanish useful in India?",
          answer:
            "Learning Spanish opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Spanish is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn Spanish?",
          answer:
            "The time it takes to learn Spanish depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Spanish language and teaching methodologies.",
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
      SayBonjur: "Say Hola to language learning with us!",
      LanguageLesson: [
        {
          title: "Spanish Classes Near Me",
          list: [
            "Spanish Classes In Mumbai",
            " Spanish language course in delhi",
            " Spanish classes in pune",
            "Spanish language courses near me",
            "Spanish language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online Spanish Speaking Course",
            "Spanish Language Classes Online",
            "Learn Spanish Online With Certificate",
            "Spanish course near me",
            "Spanish courses online",
          ],
        },
        {
          title: "Online Spanish Classes",
          list: [
            "learn Spanish online course",
            "online Spanish language course",
            "Spanish courses online",
            "Spanish classes near me",
            "learn Spanish online",
            "online Spanish lessons",
          ],
        },
        {
          title: "Spanish Classes for Focused Learning",
          list: [
            "Online Spanish classes for Beginner",
            "Online Spanish classes for Intermediate",
            "Online Spanish classes for Advanced",
            "Online Spanish classes for Kids ",
            "Online Spanish classes for adults",
            "Online Spanish classes to study abroad",
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
      <SharedLevelPage Data={LevelData} language={"Spanish"}/>
    </div>
  );
};

export default DynamicPage;
