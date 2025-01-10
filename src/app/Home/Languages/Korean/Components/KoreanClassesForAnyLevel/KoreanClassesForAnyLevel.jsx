import ClassLevelCard from "@/Shared/ClassLevelCard";

const KoreanClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "TOPIK I-Level 1 & 2",
      title2: "Beginner ",
      description:
        "Begin your Korean language journey with our beginner courses, specially designed to introduce you to the basics of Korean grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Korean, our courses will guide you through the fascinating world of three different Korean scripts.",
      link: "",
    },
    {
      title: "TOPIK II-Level 3 & 4",
      title2: "Intermediate Classes",
      description:
        "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Korean proficiency.        ",
      link: "",
    },
    {
      title: "TOPIK II-Level 5 & 6",
      title2: "Advanced Classes",
      description:
        "Elevate your Korean proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.        ",
      link: "",
    },
  ];
  return (
    <div className="xl:max-w-[1684px] mt-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Korean Classes for Any Level
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default KoreanClassesForAnyLevel;
