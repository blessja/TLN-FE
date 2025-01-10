import school from "@/Assets/FrenchPage/FrenchMain/school.png";
import college from "@/Assets/FrenchPage/FrenchMain/college.png";
import corporate from "@/Assets/FrenchPage/FrenchMain/corporate.png";
import ClassesForAnyGoalCard from "@/Shared/ClassesForAnyGoalCard";
const SpanishClassesForAnyGoal = () => {
  const levelDatas = [
    {
      title: "Spanish Classes for School",
      img: school,
      description:
        "Spark excitement with our online Spanish classes for kids! Whether it's curriculum-based or as a hobby, we make learning engaging and enjoyable.",
      link: "",
    },
    {
      title: "Spanish Classes for College",
      img: college,
      description:
        "Dive into Spanish fluency with our flexible online classes tailored to fit your college schedule. Explore the language, culture, and opportunities that await!",
      link: "",
    },
    {
      title: "Spanish Classes for Corporate",
      img: corporate,
      description:
        "Elevate your Spanish skills with our customized online classes. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!",
      link: "",
    },
  ];
  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Online Spanish Classes for any goal
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassesForAnyGoalCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SpanishClassesForAnyGoal;
