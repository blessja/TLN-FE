import school from "@/Assets/FrenchPage/FrenchMain/school.png";
import college from "@/Assets/FrenchPage/FrenchMain/college.png";
import corporate from "@/Assets/FrenchPage/FrenchMain/corporate.png";
import ClassesForAnyGoalCard from "@/Shared/ClassesForAnyGoalCard";
const EnglishClassesForAnyGoal = () => {
  const levelDatas = [
    {
      title: "English Classes for School",
      img: school,
      description:
        " Boost cognitive development and cultural awareness among students with our engaging English language program tailored for schools.        ",
      link: "",
    },
    {
      title: "English Classes for College",
      img: college,
      description:
        " Equip college students with essential language skills for academic success and international career opportunities through our specialized English course.        ",
      link: "",
    },
    {
      title: "English Classes for Corporate",
      img: corporate,
      description:
        " Elevate your career with English training for corporates. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!        ",
      link: "",
    },
  ];

  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Online English Classes for any goal
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassesForAnyGoalCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EnglishClassesForAnyGoal;
