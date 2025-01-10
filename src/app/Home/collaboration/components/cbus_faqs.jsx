"use client";
import FaqsCard from "../../../../Shared/FaqsCard";
import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const Faqscbus = () => {
  const datas = [
    {
      question: "What types of collaboration opportunities does The Language Network offer?",
      answer:
        "The Language Network provides a range of collaboration options, including paid workshops, seminars, webinars, summer camps, masterclasses, and sponsorships. Each of these opportunities offers unique ways for individuals and organizations to engage with language learning, cultural exchange, and professional development.",
    },
    {
      question: "What are the benefits of collaborating with The Language Network?",
      answer:
        "Collaborating with The Language Network can yield numerous benefits. For individuals, it offers access to high-quality language learning resources, cultural immersion experiences, and networking opportunities. For organizations, collaboration can enhance employee skills, foster cross-cultural understanding, and expand market reach.",
    },
    {
      question:
        "Can individuals or organizations from any location collaborate with The Language Network?",
      answer:
        "Yes, individuals and organizations from any location can collaborate with The Language Network. Our virtual platform enables seamless communication and cooperation regardless of geographical boundaries.",
    },
    {
      question: "Are there specific prerequisites for becoming a collaboration partner with The Language Network?",
      answer:
        "The Language Network welcomes collaboration partners who are committed to language learning. While specific requirements may vary for each collaborator we value diversity and a shared dedication to our goals. We're happy to discuss potential partnerships and tailor them to suit your needs.",
    },
    {
        //till here updated questions of faqs
      question: "How can I get in touch with The Language Network to discuss potential collaboration opportunities further?",
      answer:
        "To explore collaboration opportunities further, you can reach out to The Language Network through our website or contact our team directly via email or phone. We welcome inquiries and are eager to discuss how we can tailor our offerings to meet your needs.",
    },
    {
      question: "Can collaboration opportunities with The Language Network be customized to fit specific needs or preferences?",
      answer:
        "Certainly! Collaboration opportunities with The Language Network can be fully customized to accommodate specific needs and preferences. Whether you require tailored language learning programs, cultural exchange initiatives, or educational partnerships, we are committed to adapting our offerings to align closely with your requirements. Your input and feedback are highly valued, allowing us to craft a collaboration experience that meets your objectives and expectations effectively.",
    },
    {
      question: "Are there any unique features or benefits that distinguish collaboration with The Language Network from other organizations?",
      answer:
        "A key aspect that sets collaborating with The Language Network apart is our dedication to providing personalized service. We place a high priority on comprehending the distinct requirements and preferences of our partners, enabling us to customize collaboration opportunities accordingly. Furthermore, our wide-reaching network of language professionals who cultural experts ensures that we deliver thorough and impactful solutions to those we collaborate with.",
    },
  ];
  const [splicing, setsplicing] = useState(true);
  return (
    <div className="flex justify-center bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px] flex-col justify-center w-full mx-auto items-start gap-7 flex">
        <div className="flex-col justify-start items-center gap-12 flex">
          <div className="text-black md:text-5xl text-2xl font-bold pt-5">FAQs</div>
          <div className="justify-center mx-4 h-full items-center max-xl:gap-4 order-2  grid lg:grid-cols-2 max-xl:flex-col-reverse">
            <div className="w-full lg:order-2 order-1 flex justify-center">
              <Image
                alt="frenchFlag"
                className="max-w-[562px] w-full object-contain  max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col md:w-full mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
              {splicing &&
                datas
                  .splice(0, 6)
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
            className="h-[48px] sm:h-[58px] px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg border border-teal-600 justify-center items-start gap-2.5 inline-flex ml-4"
            >
            <div className="text-center text-teal-600 text-lg sm:2xl font-medium">
                {!splicing ? "Read less FAQs" : "Read all FAQs"}
            </div>
        </button>
      </div>
    </div>
  );
};

export default Faqscbus;
