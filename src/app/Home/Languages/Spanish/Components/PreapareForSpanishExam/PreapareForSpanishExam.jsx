import dele from "@/Assets/Spanish/DELE.png";
import seile from "@/Assets/Spanish/Siele.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForSpanishExam = () => {
  const levelDatas = [
    {
      title: "DELE preparation classes",
      img: dele,
      description:
        "Achieve Spanish language proficiency with our DELE exam preparation courses. These diplomas are internationally recognised and validate your Spanish skills for academic, professional, or personal purposes.",
      link: "",
    },
    {
      title: "SIELE preparation classes",
      img: seile,
      description:
        "Prepare for the SIELE exam, a globally recognized certification of Spanish language proficiency. Whether for academic or professional advancement, our courses are tailored to help you succeed.",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Spanish Exams
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

export default PreapareForSpanishExam;
