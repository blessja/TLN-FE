import PreapareForExamCard from "@/Shared/PreapareForExamCard";
import Goethe from "@/Assets/GermanPage/Gothe.svg";
const PreapareForGermanExam = () => {
  const levelDatas = [
    {
      title: "GOETHE preparation classes",
      img: Goethe,
      description:
        "The GOETHE exam assesses German language proficiency globally. Success demonstrates effective communication in German for various purposes. Our tailored course helps you master skills and confidently tackle each section of the exam.",
      link: "",
    },
  ];
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for German Exams
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

export default PreapareForGermanExam;
