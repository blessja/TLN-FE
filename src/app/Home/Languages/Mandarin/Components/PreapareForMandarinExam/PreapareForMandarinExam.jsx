import dalf from "../../../../../Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "../../../../../Assets/FrenchPage/FrenchMain/delf.png";
import telf from "../../../../../Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForMandarinExam = () => {
  const levelDatas = [
    {
      title: "DALF preparation classes",
      img: dalf,
      description:
        "Master the HSK exam, the gold standard in Mandarin proficiency. Our expert-led courses comprehensively cover vocabulary, grammar, reading, and listening, ensuring your success in this globally recognized assessment.        ",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Mandarin Exams
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

export default PreapareForMandarinExam;
