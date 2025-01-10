import dalf from "@/Assets/Homepage/ProficiencyExam/logo6.png";
import telf from "@/Assets/English/toefl.webp";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForEnglishExam = () => {
  const levelDatas = [
    {
      title: "IELTS",
      img: dalf,
      description:
        "Take your English skills to new heights with our IELTS preparation courses. Designed to help you excel in all four components - reading, writing, listening, and speaking - our expert instructors will guide you towards success in this globally recognized English proficiency exam.",
      link: "",
    },
    {
      title: "TOEFL",
      img: telf,
      description:
        "Open doors to international opportunities with our TOEFL preparation courses. From mastering academic English to excelling in listening, speaking, reading, and writing, our comprehensive training ensures you're fully prepared to ace this crucial exam.",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for English Exams
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

export default PreapareForEnglishExam;
