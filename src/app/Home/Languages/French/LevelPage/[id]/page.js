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
        title: "French lessons for beginners",
        description:
          "Welcome to The Language Network's French lessons for beginners! Whether you're a non-native speaker seeking to enhance your French skills or a complete beginner embarking on your language journey, we've got you covered. Our lessons are crafted to be enjoyable, interactive, and customised to your individual requirements, ensuring you learn at your own pace and gain confidence in your progress. From fundamental grammar and vocabulary to practical conversation skills, our expert instructors will support you every step of the way. So, why wait? Begin your French language journey with us today!",
      },
      WhatWillYouLearn: [
        {
          title: "Beginner Level A1",
          img: img1,
          ListData: [
            "At this level, individuals can manage routine tasks and navigate daily situations with ease.",
            "They possess the ability to express basic needs, understand dates, times, and numbers, and engage in simple social interactions.",
            "A1 learners are familiar with common expressions and basic phrases necessary for meeting essential needs and engaging in basic conversations.",
            "They can introduce themselves and others, ask and answer basic questions about personal details, and communicate in simple exchanges, provided the other person speaks slowly and clearly.",
          ],
        },
        {
          title: "Elementary Level A2          ",
          img: img2,
          ListData: [
            "A2 French level entails understanding common sentences and frequently used expressions in areas of immediate relevance, such as personal information, shopping, and employment.",
            "Learners at this level can effectively communicate in simple and routine tasks, exchanging information on familiar topics.",
            "They are capable of describing aspects of their background, immediate environment, and addressing matters of immediate need using simple terms.",
            "Proficiency at the A2 level enables individuals to easily construct simple sentences and engage in basic daily conversations.",
            "Many companies require a minimum recruitment level of A2 proficiency in French.",
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
            "What job opportunities will I get after completing my French course?",
          answer:
            "Upon completing your French course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is French an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, French is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is French useful in India?",
          answer:
            "Learning French opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. French is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn French?",
          answer:
            "The time it takes to learn French depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both French language and teaching methodologies.",
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
      SayBonjur: "Say Bonjour to language learning with us!",
      LanguageLesson: [
        {
          title: "French Classes Near Me",
          list: [
            "French Classes In Mumbai",
            " French language course in delhi",
            " French classes in pune",
            "French language courses near me",
            "French language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online French Speaking Course",
            "French Language Classes Online",
            "Learn French Online With Certificate",
            "French course near me",
            "French courses online",
          ],
        },
        {
          title: "Online French Classes",
          list: [
            "learn french online course",
            "online french language course",
            "french courses online",
            "french classes near me",
            "learn french online",
            "online french lessons",
          ],
        },
        {
          title: "French Classes for Focused Learning",
          list: [
            "Online french classes for Beginner",
            "Online french classes for Intermediate",
            "Online french classes for Advanced",
            "Online french classes for Kids ",
            "Online french classes for adults",
            "Online french classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const IntermediateData = useMemo(
    () => ({
      BannerData: {
        title: "French lessons for Intermediate",
        description:
          "Take your French language skills to the next level with The Language Network's online classes for intermediate learner Once you've grasped the basics, it's crucial to progress further to enhance your conversational abilities and achieve fluency akin to that of a native speaker. Our intermediate courses are meticulously crafted to build upon your existing knowledge, focusing on refining pronunciation, expanding vocabulary, and mastering complex grammar structures. Join us and elevate your French proficiency to confidently engage in conversations and express yourself with fluency and authenticity.        ",
      },
      WhatWillYouLearn: [
        {
          title: "Intermediate Level B1",
          img: img1,
          ListData: [
            "Understand the main points of standard input on familiar topics encountered in various settings like work, school, or leisure activities.          ",
            "Handle a wide range of travel situations effectively while in French-speaking areas.",
            "Generate simple connected text on topics of personal interest and describe experiences, dreams, and ambitions with brief explanations.",
            "Give clear instructions and comprehend directives, effectively communicate in social and professional environments, and actively engage in discussions and meetings.",
            "Confidently converse with native speakers, seek clarification when necessary, and express ideas with ease, demonstrating the ability to overcome unexpected challenges.",
          ],
        },
        {
          title: "Upper Intermediate Level B2",
          img: img2,
          ListData: [
            "Understand complex text on concrete and abstract topics, including technical discussions in your field.          ",
            "Interact fluently and spontaneously with native speakers without strain for either party.",
            "Produce clear, detailed text on a wide range of subjects and explain viewpoints on topical issues.",
            "Communicate effectively in difficult tasks and situations, such as leading meetings or conferences.",
            "Speak and understand French fluently even in challenging subjects, engaging in multi-person discussions and delivering clear presentations.",
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
            "What job opportunities will I get after completing my French course?",
          answer:
            "Upon completing your French course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is French an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, French is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is French useful in India?",
          answer:
            "Learning French opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. French is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn French?",
          answer:
            "The time it takes to learn French depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both French language and teaching methodologies.",
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
      SayBonjur: "Say Bonjour to language learning with us!",
      LanguageLesson: [
        {
          title: "French Classes Near Me",
          list: [
            "French Classes In Mumbai",
            " French language course in delhi",
            " French classes in pune",
            "French language courses near me",
            "French language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online French Speaking Course",
            "French Language Classes Online",
            "Learn French Online With Certificate",
            "French course near me",
            "French courses online",
          ],
        },
        {
          title: "Online French Classes",
          list: [
            "learn french online course",
            "online french language course",
            "french courses online",
            "french classes near me",
            "learn french online",
            "online french lessons",
          ],
        },
        {
          title: "French Classes for Focused Learning",
          list: [
            "Online french classes for Beginner",
            "Online french classes for Intermediate",
            "Online french classes for Advanced",
            "Online french classes for Kids ",
            "Online french classes for adults",
            "Online french classes to study abroad",
          ],
        },
      ],
    }),
    []
  );
  const AdvancedData = useMemo(
    () => ({
      BannerData: {
        title: "French lessons for Advanced",
        description:
          "Take your French skills to the next level with The Language Network's online advanced classes. After mastering the intermediate level, advancing to C1 and C2 proficiency is crucial for fluent conversations and native-like speaking. A C1-C2 level in French opens up numerous job opportunities, as bilingual candidates are highly sought after. Join us to enhance your conversational skills, master complex grammar, and increase your career prospects with advanced proficiency in French.         ",
      },
      WhatWillYouLearn: [
        {
          title: "Advanced Level C1         ",
          img: img1,
          ListData: [
            "Understand a wide range of demanding texts and grasp implicit meaning.   ",
            "Express yourself fluently and spontaneously without hesitation.",
            "Use language flexibly and effectively in social, academic, and professional contexts.",
            " Produce clear, well-structured, detailed text on complex subjects.",
            "Have full command of the language, demonstrating fluency, appropriateness, and clarity in communication.          ",
          ],
        },
        {
          title: "Master Level C2",
          img: img2,
          ListData: [
            "Understand spoken and written content effortlessly.          ",
            "Summarize information from various sources coherently.",
            "Express yourself spontaneously, fluently, and precisely, even in complex situations.",
            "Demonstrate full command of the language, including a broad and deep vocabulary.",
            "Communicate fluently, appropriately, and coherently, developing ideas clearly in speech, and speak like a native speaker.",
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
            "What job opportunities will I get after completing my French course?",
          answer:
            "Upon completing your French course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
        },
        {
          question: "Is French an easy language to learn?",
          answer:
            "According to the Foreign Service Institute, French is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
        },
        {
          question: "Is French useful in India?",
          answer:
            "Learning French opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. French is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
        },
        {
          question: "How much time will it take to learn French?",
          answer:
            "The time it takes to learn French depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
            "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both French language and teaching methodologies.",
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
      SayBonjur: "Say Bonjour to language learning with us!",
      LanguageLesson: [
        {
          title: "French Classes Near Me",
          list: [
            "French Classes In Mumbai",
            " French language course in delhi",
            " French classes in pune",
            "French language courses near me",
            "French language classes near me",
          ],
        },
        {
          title: "Most Searched",
          list: [
            "Online French Speaking Course",
            "French Language Classes Online",
            "Learn French Online With Certificate",
            "French course near me",
            "French courses online",
          ],
        },
        {
          title: "Online French Classes",
          list: [
            "learn french online course",
            "online french language course",
            "french courses online",
            "french classes near me",
            "learn french online",
            "online french lessons",
          ],
        },
        {
          title: "French Classes for Focused Learning",
          list: [
            "Online french classes for Beginner",
            "Online french classes for Intermediate",
            "Online french classes for Advanced",
            "Online french classes for Kids ",
            "Online french classes for adults",
            "Online french classes to study abroad",
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
      <SharedLevelPage Data={LevelData} language={"French"}/>
    </div>
  );
};

export default DynamicPage;
