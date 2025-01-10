import ClassLevelCard from "@/Shared/ClassLevelCard";

const JapaneseClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "N5",
      title2: "Beginner ",
      description:
        "Begin your Japanese language journey with our beginner courses, specially designed to introduce you to the basics of Japanese grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Japanese, our courses will guide you through the fascinating world of three different Japanese scripts.",
      link: "",
    },
    {
      title: "N4-N3",
      title2: "Intermediate Classes",
      description:
        "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Japanese proficiency.        ",
      link: "",
    },
    {
      title: "N2-N1",
      title2: "Advanced Classes",
      description:
        "Elevate your Japanese proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.        ",
      link: "",
    },
  ];
  return (
    <div className="xl:max-w-[1684px] mt-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Japanese Classes for Any Level
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default JapaneseClassesForAnyLevel;
