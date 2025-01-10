import dalf from "../../../../../Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "../../../../../Assets/FrenchPage/FrenchMain/delf.png";
import telf from "../../../../../Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForKoreanExam = () => {
  const levelDatas = [
    {
      title: "TOPIK",
      img: dalf,
      description:
        "Get ready for the TOPIK proficiency exam with our expert courses. Our comprehensive curriculum covers all aspects of the exam, helping you excel in vocabulary, grammar, listening, and speaking. Join us and achieve your Korean language goals!        ",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Korean Exams
      </div>
      <div className="flex flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-fit lg:gap-[18px] items-center mt-[48px]">
        {levelDatas.map((data, index) => (
          <div key={index} className="max-w-[548px]">
          <PreapareForExamCard data={data} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreapareForKoreanExam;
