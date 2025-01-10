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
        title: "German lessons for beginners",
        description:
          "Welcome to The Language Network's German lessons for beginners! Whether you're a non-native speaker seeking to enhance your German skills or a complete beginner embarking on your language journey, we've got you covered. Our lessons are crafted to be enjoyable, interactive, and customised to your individual requirements, ensuring you learn at your own pace and gain confidence in your progress. From fundamental grammar and vocabulary to practical conversation skills, our expert instructors will support you every step of the way. So, why wait? Begin your German language journey with us today!",
      },
      WhatWillYouLearn: [
        {
          title: "Beginner Level A1",
          img: img1,
          ListData: [
            "Understand simple German sentences and basic vocabulary related to self and surroundings.",
            "Use familiar greetings, introduce oneself, and complete simple written tasks like filling out forms.",
            "Comprehend common everyday expressions and phrases, and ask/respond to questions about personal information.",
            "Communicate straightforwardly, with the ability to engage in simple exchanges, especially if the other person speaks slowly and simply.",
            "Develop potential to introduce oneself and others, inquire about personal details, and understand fundamental German vocabulary in slow speech.",
          ],
        },
        {
          title: "Elementary Level A2          ",
          img: img2,
          ListData: [
            "Relate information about job, family, and basic needs at A2 level proficiency.",
            "Understand practical materials such as train schedules and short written/spoken messages.",
            "Comprehend sentences and common expressions related to personal, family, and daily life matters.",
            "Interact in simple tasks, sharing basic information on familiar topics like personal background and immediate surroundings.",
            "Describe background, aspects of life, and immediate needs in simple terms.",
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
            "What job opportunities will I get after completing my German course?",
          answer:
            "After completing your German course, you'll gain access to job opportunities in various sectors such as international business, tourism, translation and interpretation, diplomacy, teaching, and multinational corporations with German operations. You may also find employment as a language specialist, cultural liaison, or customer service representative for German-speaking clients. Additionally, proficiency in German can enhance your prospects for roles in research, academia, and cultural exchange programs.",
        },
        {
          question: "Is German an easy language to learn?",
          answer:
            "About 40% of German and English vocabulary are very similar to each other, which makes German one of the easiest languages to learn for native English speakers. So, basically, if you already know English, it should be a piece of cake for you to learn German.",
        },
        {
          question: "Is German useful in India?",
          answer:
            "Learning German opens up numerous career opportunities in India, particularly in sectors such as engineering, power, education, IT, healthcare, and pharmaceuticals. Proficiency in German can lead to new professional avenues and enhance prospects for employment and advancement in these industries.",
        },
        {
          question: "How much time will it take to learn German?",
          answer:
            "The time it takes to learn German depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 5 months to complete B1-B2 level and approximately 12 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both German language and teaching methodologies.",
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
      SayBonjur: "Say Hallo to language learning with us!",
      LanguageLesson: [
        {
          title: "German Classes Near Me",
          list: [
            "German Classes In Mumbai",
            " German language course in delhi",
            " German classes in pune",
            "German language courses near me",
            "German language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online German Speaking Course",
            "German Language Classes Online",
            "Learn German Online With Certificate",
            "German course near me",
            "German courses online",
          ],
        },
        {
          title: "Online German Classes",
          list: [
            "learn German online course",
            "online German language course",
            "German courses online",
            "German classes near me",
            "learn German online",
            "online German lessons",
          ],
        },
        {
          title: "German Classes for Focused Learning",
          list: [
            "Online German classes for Beginner",
            "Online German classes for Intermediate",
            "Online German classes for Advanced",
            "Online German classes for Kids ",
            "Online German classes for adults",
            "Online German classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const IntermediateData = useMemo(
    () => ({
      BannerData: {
        title: "German lessons for Intermediate",
        description:
          "Take your German language skills to the next level with The Language Network's online classes for intermediate learner Once you've grasped the basics, it's crucial to progress further to enhance your conversational abilities and achieve fluency akin to that of a native speaker. Our intermediate courses are meticulously crafted to build upon your existing knowledge, focusing on refining pronunciation, expanding vocabulary, and mastering complex grammar structures. Join us and elevate your German proficiency to confidently engage in conversations and express yourself with fluency and authenticity.        ",
      },
      WhatWillYouLearn: [
        {
          title: "Intermediate Level B1",
          img: img1,
          ListData: [
            "Enjoy German media and grasp main ideas of TV/radio programs with slow and clear narration at B1 level.",
            "Expressions become more sophisticated in both written and spoken forms.",
            "Understand key points of simple/standard German language on common topics encountered in daily life.",
            "Write easy, linked texts on familiar or personal interest topics and justify views and plans briefly.",
            "Deal with majority of language-required situations while traveling, discuss familiar subjects, and share personal experiences concisely.",
          ],
        },
        {
          title: "Upper Intermediate Level B2",
          img: img2,
          ListData: [
            "At B2 level, you can appreciate German media more fully, although fast dialogue or idiomatic expressions may still pose challenges.",
            "Your use of German becomes more nuanced, with less hesitation and more fluency in expressing ideas.",
            "You understand complex texts on concrete and abstract subjects, as well as technical discussions in your field.",
            "You can converse fluently with native speakers, expressing your opinions on various topics and discussing current issues.",
            "You can write straightforward, concise texts and understand challenging texts, communicating naturally with native speakers on their interests and specializations.",
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
            "What job opportunities will I get after completing my German course?",
          answer:
            "After completing your German course, you'll gain access to job opportunities in various sectors such as international business, tourism, translation and interpretation, diplomacy, teaching, and multinational corporations with German operations. You may also find employment as a language specialist, cultural liaison, or customer service representative for German-speaking clients. Additionally, proficiency in German can enhance your prospects for roles in research, academia, and cultural exchange programs.",
        },
        {
          question: "Is German an easy language to learn?",
          answer:
            "About 40% of German and English vocabulary are very similar to each other, which makes German one of the easiest languages to learn for native English speakers. So, basically, if you already know English, it should be a piece of cake for you to learn German.",
        },
        {
          question: "Is German useful in India?",
          answer:
            "Learning German opens up numerous career opportunities in India, particularly in sectors such as engineering, power, education, IT, healthcare, and pharmaceuticals. Proficiency in German can lead to new professional avenues and enhance prospects for employment and advancement in these industries.",
        },
        {
          question: "How much time will it take to learn German?",
          answer:
            "The time it takes to learn German depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 5 months to complete B1-B2 level and approximately 12 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both German language and teaching methodologies.",
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
      SayBonjur: "Say Hallo to language learning with us!",
      LanguageLesson: [
        {
          title: "German Classes Near Me",
          list: [
            "German Classes In Mumbai",
            " German language course in delhi",
            " German classes in pune",
            "German language courses near me",
            "German language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online German Speaking Course",
            "German Language Classes Online",
            "Learn German Online With Certificate",
            "German course near me",
            "German courses online",
          ],
        },
        {
          title: "Online German Classes",
          list: [
            "learn German online course",
            "online German language course",
            "German courses online",
            "German classes near me",
            "learn German online",
            "online German lessons",
          ],
        },
        {
          title: "German Classes for Focused Learning",
          list: [
            "Online German classes for Beginner",
            "Online German classes for Intermediate",
            "Online German classes for Advanced",
            "Online German classes for Kids ",
            "Online German classes for adults",
            "Online German classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const AdvancedData = useMemo(
    () => ({
      BannerData: {
        title: "German lessons for Advanced",
        description:
          "Take your German skills to the next level with The Language Network's online advanced classes. After mastering the intermediate level, advancing to C1 and C2 proficiency is crucial for fluent conversations and native-like speaking. A C1-C2 level in German opens up numerous job opportunities, as bilingual candidates are highly sought after. Join us to enhance your conversational skills, master complex grammar, and increase your career prospects with advanced proficiency in German.         ",
      },
      WhatWillYouLearn: [
        {
          title: "Advanced Level C1         ",
          img: img1,
          ListData: [
            "After completing C1 German courses, you can comprehend challenging, longer texts and recognize implicit meanings effortlessly.",
            "You express yourself fluently and naturally, using language confidently in various social, academic, and professional contexts.",
            "You can write well-structured, informative texts on complex topics, using organizational patterns and cohesive devices effectively.",
            "Your understanding extends to demanding and longer documents, and you can express yourself fluently and instinctively without hesitation.",
            "At the C1 level, your use and understanding of German become more intuitive, allowing you to engage in complex conversations and enjoy native-level media more fully.",
          ],
        },
        {
          title: "Master Level C2",
          img: img2,
          ListData: [
            "At the C2 level, you demonstrate near-native comprehension of both spoken and written German, understanding almost anything at the level of a native speaker.",
            "You can effectively summarize information from diverse sources and articulate claims and accounts logically.",
            "Your expression in German is instinctive, fluent, and precise, even in nuanced contexts.",
            "Your mastery at the C2 level enables you to produce and comprehend highly complex German, akin to native-level fluency.",
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
            "What job opportunities will I get after completing my German course?",
          answer:
            "After completing your German course, you'll gain access to job opportunities in various sectors such as international business, tourism, translation and interpretation, diplomacy, teaching, and multinational corporations with German operations. You may also find employment as a language specialist, cultural liaison, or customer service representative for German-speaking clients. Additionally, proficiency in German can enhance your prospects for roles in research, academia, and cultural exchange programs.",
        },
        {
          question: "Is German an easy language to learn?",
          answer:
            "About 40% of German and English vocabulary are very similar to each other, which makes German one of the easiest languages to learn for native English speakers. So, basically, if you already know English, it should be a piece of cake for you to learn German.",
        },
        {
          question: "Is German useful in India?",
          answer:
            "Learning German opens up numerous career opportunities in India, particularly in sectors such as engineering, power, education, IT, healthcare, and pharmaceuticals. Proficiency in German can lead to new professional avenues and enhance prospects for employment and advancement in these industries.",
        },
        {
          question: "How much time will it take to learn German?",
          answer:
            "The time it takes to learn German depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 5 months to complete B1-B2 level and approximately 12 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both German language and teaching methodologies.",
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
      SayBonjur: "Say Hallo to language learning with us!",
      LanguageLesson: [
        {
          title: "German Classes Near Me",
          list: [
            "German Classes In Mumbai",
            " German language course in delhi",
            " German classes in pune",
            "German language courses near me",
            "German language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online German Speaking Course",
            "German Language Classes Online",
            "Learn German Online With Certificate",
            "German course near me",
            "German courses online",
          ],
        },
        {
          title: "Online German Classes",
          list: [
            "learn German online course",
            "online German language course",
            "German courses online",
            "German classes near me",
            "learn German online",
            "online German lessons",
          ],
        },
        {
          title: "German Classes for Focused Learning",
          list: [
            "Online German classes for Beginner",
            "Online German classes for Intermediate",
            "Online German classes for Advanced",
            "Online German classes for Kids ",
            "Online German classes for adults",
            "Online German classes to study abroad",
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
      <SharedLevelPage Data={LevelData} language={"German"} />
    </div>
  );
};

export default DynamicPage;
