import ClassLevelCard from "@/Shared/ClassLevelCard";

const EnglishClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "Reading",
      description:
        "Dive into a world of knowledge and imagination with our reading courses. Enhance comprehension, vocabulary, and critical thinking skills as you explore diverse texts and genres.",
      link: "",
    },
    {
      title: "Writing",
      description:
        "Writing: Harness your creativity and communication prowess with our writing courses. From crafting compelling essays to mastering professional correspondence, we'll help you hone your written English skills.",
      link: "",
    },
    {
      title: "Listening",
      description:
        "Listening: Sharpen your listening skills and become an active participant in conversations with our engaging courses. Improve comprehension, pronunciation, and fluency as you train your ears to understand various accents and contexts.",
      link: "",
    },
    {
      title: "Speaking",
      description:
        "Speaking: Develop confidence and fluency in spoken English with our dynamic courses. Practice speaking in various situations, build vocabulary, and improve pronunciation to express yourself effectively in any setting.",
      link: "",
    },
  ];
  return (
    <div className="xl:max-w-[1684px] mt-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        English Learning According To Your Requirement
      </div>
      <div className="xl:grid-cols-4 2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default EnglishClassesForAnyLevel;
