import Image from "next/image";
import logo1 from "../../../../Assets/Homepage/Educationalbar/EducationalBar.png";
import education from "../../../../../public/sliders/Education.png"
const EducationSlider = () => {
  return (
    <div>
      <div className="max-w-[1681px]  mx-auto flex justify-center items-center ">
        <section>
          <div>
            <h1 className="text-stone-900 text-[30px]/[45px] sm:text-[40px]/[55px] md:text-[45px]/[60px] lg:text-[50px]/[65px] xl:text-[55px]/[70px] 2xl:text-[60px]/[72px] font-bold text-center mb-[20.9px]">
              Our Educational Partners
            </h1>
          </div>
          <div className="flex  flex-wrap justify-center items-center w-full gap-[30px]">
            <Image className="xl:w-[1001px] 2xl:w-[1111px] lg:flex " alt="logo" src={education} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationSlider;