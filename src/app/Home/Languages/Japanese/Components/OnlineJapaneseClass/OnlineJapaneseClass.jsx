import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import OnlineClassCard from "@/Shared/OnlineClassCard";

const OnlineJapaneseClass = () => {
  const levelDatas = [
    {
      title: "Japanese Classes for Kids",
      img: kids,
      description:
        "Dive into Japanese fun with interactive online classes designed to spark excitement and curiosity in young learners!",
      link: "/Languages/Japanese/ForKids",
    },
    {
      title: "Japanese Classes for Adults",
      img: adults,
      description:
        "Embark on a journey to Japanese fluency with dynamic online classes tailored to fit your busy lifestyle and ignite your passion for language learning!",
      link: "/Languages/Japanese/adults",
    },
    {
      title: "Japanese Classes to Study Abroad",
      img: studyAbroad,
      description:
        "Prepare for your Japanese adventure with immersive online classes that will equip you with the language skills and cultural insights needed to thrive abroad!",
      link: "/Languages/Japanese/StudyAbroad",
    },
  ];
  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Online Japanese classes
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <OnlineClassCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OnlineJapaneseClass;
