"use client";
import FaqsCard from "@/Shared/FaqsCard";
import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const EverythingYouNeedToKnowAboutGerman = () => {
  const datas = [
    {
      question: "Why Is It Important To Excel In German Exams?",
      answer:
        "Excelling in German exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in German significantly enhances communication skills. German is spoken in several countries around the world and is one of the official languages of international organizations like the European Union and the Goethe-Institut. Therefore, mastering German provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship. Moreover, excelling in German exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning German, individuals gain insight into the customs, traditions, and perspectives of German-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world. Furthermore, proficiency in German enhances global connectivity. In an increasingly globalized society, the ability to speak multiple languages, including German, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in German exams have a competitive edge in navigating global networks and building meaningful relationships across borders. Additionally, mastering a second language like German has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
    },
    {
      question: "Studying A German Course Sharpens The Mind:",
      answer:
        "Studying a German course offers more than just language acquisition; it serves as a robust mental exercise that positively impacts overall cognitive function. Much like physical exercise strengthens muscles, learning German challenges various cognitive functions and stimulates neural pathways in the brain. Firstly, mastering German involves memorizing vocabulary, grammar rules, and language structures. This process requires active engagement of memory systems, which enhances memory retention and recall abilities. Constantly recalling and applying new linguistic knowledge exercises the brain's memory centers, leading to improvements in both short-term and long-term memory. Additionally, learning German demands focused attention and concentration. Whether deciphering unfamiliar words in a text or constructing grammatically correct sentences, students must maintain a high level of concentration throughout their studies. This sustained mental effort strengthens attentional control and improves concentration skills, which can benefit other areas of life, such as work or academic pursuits. Moreover, studying German encourages critical thinking and problem-solving skills. Language learners often encounter challenges such as deciphering meaning from context, understanding complex grammar concepts, or expressing ideas coherently in speech or writing. Addressing these challenges requires analytical thinking, logical reasoning, and creative problem-solving strategies. As students navigate these linguistic puzzles, they develop more effective cognitive processing techniques that can be applied beyond language learning contexts. Furthermore, engaging with the cultural aspects of the German language, such as literature, art, and history, stimulates higher-order thinking skills. Analyzing German texts, discussing cultural nuances, and interpreting historical events foster intellectual curiosity and promote a deeper understanding of the world. This multidimensional approach to language learning enriches cognitive flexibility and promotes a broader perspective on diverse cultural experiences.",
    },
    {
      question: "Even Primary School German Makes Travelling Easier:",
      answer:
        "Basic proficiency in German can significantly enhance travel experiences in German-speaking countries. Whether ordering food in a café, asking for directions, or interacting with locals, knowing even a few phrases can make travel more enjoyable and immersive. Additionally, understanding the local language fosters cultural appreciation and facilitates deeper connections with people and places. As one of the most spoken languages in the world, German is spoken in several countries including Germany, Austria, Switzerland, Belgium, Luxembourg, Liechtenstein, Italy (Bolzano/Südtirol), France (Alsatian), Czech Republic, Hungary, Denmark, Poland (Silesia), Russia, Romania, Slovakia, and Vatican City.",
    },
    {
      question: "A German Course Helps With Employment Prospects:",
      answer:
        "In the contemporary job market, where globalization is the norm, proficiency in multiple languages, including German, is increasingly valued by employers across diverse industries. Here's how enrolling in a German course can significantly enhance one's employment prospects: International Opportunities: German is not only spoken in Germany but also in other countries such as Austria, Switzerland, and parts of Belgium and Italy. Acquiring proficiency in German expands job opportunities beyond one's home country, opening doors to international positions and global career paths. Sectors with High Demand: Many industries have a high demand for German-speaking professionals. For instance, in the field of diplomacy and international relations, knowing German can be a significant advantage, as it is one of the official languages of the European Union and widely used in international business settings. Similarly, the tourism industry often seeks employees who can communicate effectively with German-speaking tourists, enhancing customer satisfaction and promoting cultural exchange. International Business: With the increasing globalization of business operations, companies are expanding their reach to German-speaking markets. Proficiency in German can be particularly beneficial for roles involving international business development, marketing, sales, and customer service, as it enables effective communication and relationship-building with German-speaking clients, partners, and stakeholders. Translation and Interpretation Services: The demand for professional translators and interpreters is on the rise, driven by the need for multilingual communication in various domains. Fluency in German equips individuals with the skills to provide translation and interpretation services, facilitating cross-cultural communication and bridging language barriers. Soft Skills Development: Beyond linguistic proficiency, studying German cultivates valuable soft skills that are highly valued in today's workforce. Effective communication, cultural awareness, adaptability, and intercultural competence are essential attributes that employers seek in candidates. By immersing oneself in the German language and culture, individuals develop a deeper understanding of diverse perspectives and enhance their ability to collaborate and engage with people from different backgrounds.",
    },
    {
      question: "How to do well in a German Exam?",
      answer:
        "Achieving success in a German exam requires strategic preparation and diligent practice. Students should focus on mastering key language skills, including reading, writing, listening, and speaking. Effective study techniques include regular practice with diverse study materials, such as textbooks and online resources. Additionally, seeking feedback from teachers or tutors, engaging in immersive language activities, and utilizing exam-specific strategies can enhance exam performance. Top Tips For German Revision: Effective revision involves a combination of repetition, practice, and targeted improvement. Spaced repetition techniques help reinforce learning over time, while practicing with diverse materials exposes students to different language contexts and challenges. Immersive activities, such as watching German films or participating in language exchange programs, can enhance fluency and cultural understanding. Furthermore, seeking feedback from tutors or peers allows for targeted improvement in areas of weakness, ultimately leading to better exam outcomes.",
    },
    {
      question: "Why you need German tutoring?",
      answer:
        "Personalized German tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
    },
    {
      question:
        "Improving German language skills through tutoring involves a multifaceted approach that addresses all aspects of language proficiency: reading, writing, listening, and speaking.",
      answer:
        "Comprehension: Tutors employ a range of reading materials, such as articles, short stories, and literary texts, suited to the student's level and interests. Through guided reading exercises, students learn to comprehend and analyze German texts, expanding their vocabulary and understanding of grammar structures. Tutors may also introduce reading strategies to improve comprehension and speed, fostering independent reading habits. Writing: Writing practice is essential for developing grammar proficiency, vocabulary expansion, and coherent expression in German. Tutors guide students through writing exercises, including essays, journal entries, and creative writing tasks. By providing constructive feedback on grammar, syntax, and style, tutors help students refine their writing skills and develop a distinct voice in German. Listening: Listening comprehension is honed through exposure to authentic audio materials, such as podcasts, interviews, and speeches, in German. Tutors incorporate listening activities into lessons, allowing students to practice discerning spoken German in various contexts and accents. By engaging with audio content, students improve their auditory processing skills, vocabulary recognition, and understanding of spoken grammar patterns. Tutors may also provide listening transcripts or comprehension questions to reinforce comprehension and facilitate active listening. Speaking: Oral communication skills are developed through structured speaking activities and conversation practice in German. Tutors facilitate interactive speaking exercises, role-plays, and discussions, encouraging students to express themselves fluently and confidently. Through regular speaking practice, students gain proficiency in pronunciation, intonation, and conversational fluency. Tutors offer corrective feedback on pronunciation errors, grammatical inaccuracies, and communication strategies, guiding students towards clearer and more effective oral communication. Additionally, tutors may introduce vocabulary-building exercises and idiomatic expressions to enrich students' spoken German repertoire.",
    },
  ];

  const [splicing, setsplicing] = useState(true);
  return (
    <div className="flex justify-center px-4 bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px]  flex-col justify-start w-full mx-auto items-start gap-12 flex">
        <div className="flex-col w-full justify-start items-center gap-12 flex">
          <div className="text-black max-md:text-xl text-2xl font-bold text-center">
            Everything you need to know about German
          </div>
          <div className="justify-center  w-full  h-full items-center gap-8 flex">
            <div className="flex-col w-full gap-y-2 gap-x-2">
              {splicing &&
                datas
                  .splice(0, 4)
                  .map((data, index) => (
                    <FaqsCard key={index} data={data} i={index} />
                  ))}
              {!splicing &&
                datas.map((data, index) => (
                  <FaqsCard key={index} data={data} i={index} />
                ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => setsplicing(!splicing)}
          className="h-[58px] px-8 py-3.5 rounded-lg border border-teal-600 mx-auto w-[190px] justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-teal-600 text-2xl font-medium font-['Inter']">
            {!splicing ? "Read less" : "Read more"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default EverythingYouNeedToKnowAboutGerman;
