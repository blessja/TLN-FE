import Image from "next/image";
import BookMeeting from "./BookMeeting"

const Banner = ({bannerImg}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-[16px] lg:w-[1000px] xl:w-[1150px] 2xl:w-[1200px] 3xl:w-[1400px] 4xl:w-[1600px] mt-[25px]">
      <div className="lg:w-1/2 flex flex-col justify-between items-start">
        <h1 className="text-[40px]/[63px] sm:text-[44px]/[64px] md:text-[48px]/[66px] lg:text-[50px]/[66px] xl:text-[54px]/[69px] 2xl:text-[60px]/[72px] font-bold">Foreign Languages For Colleges</h1>
        <p className="text-[14px]/[20px] md:text-[15px]/[24px] lg:text-[16px]/[24px] xl:text-[18px]/[26px] 2xl:text-[20px]/[28px] py-6 w-[95%]">
          Elevate your college&apos;s profile with language learning programs
          tailored to today&apos;s global demands. By integrating languages into your
          curriculum, you equip students with vital skills for success in the
          international arena. Our courses not only enhance linguistic abilities
          but also promote cultural awareness and open doors to study abroad
          opportunities. Join us in shaping a multilingual learning environment
          that prepares students to thrive in a connected world.
        </p>
        <BookMeeting />
      </div>
      <div className="lg:w-1/2 mx-auto">
        <Image alt="Banner Image" src={bannerImg} height={454} width={583} className="w-[583px]"/>
      </div>
    </div>
  );
};
export default Banner;