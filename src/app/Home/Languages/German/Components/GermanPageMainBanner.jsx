import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
import girl1 from "@/Assets/FrenchPage/FrenchMain/girl1.png";
import boy1 from "@/Assets/FrenchPage/FrenchMain/boy1.png";
import girl2 from "@/Assets/FrenchPage/FrenchMain/girl2.png";
import frenchFlag from "@/Assets/FrenchPage/FrenchMain/frenchFlag.png";
const GermanPageMainBanner = () => {
  return (
    <div className=" relative flex justify-center items-center flex-col mb-[112px]">
      <div className="mt-[67px] max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col  w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  Online German Classes
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                    Step into the world of our{" "}
                    <span className="font-bold leading-6">
                      online German classes!
                    </span>{" "}
                    Whether you&apos;re starting from scratch or polishing your
                    already impressive German skills, our tailored and
                    interactive courses are crafted just for you. Bid farewell
                    to traditional classroom setups and say hallo to
                    personalised instruction, flexible scheduling, and immersive
                    learning experiences with our top-notch online German
                    courses. With our team of expert trainers by your side,
                    you&apos;ll smoothly navigate the ins and outs of German
                    grammar, expand your vocabulary, engage in lively
                    conversations, and dive deep into the rich culture of the
                    German-speaking world. Prepare to dive headfirst into the
                    elegance of the German language and experience the thrill of
                    mastering German at your own pace with our 1:1 or Group
                    Online German Classes.
                  </div>{" "}
                  <div className="max-sm:absoluteflex justify-star max-md:-ml-8 ">
                    <BookAFreeDemoButton />
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative hidden lg:block flex-grow">
              <div className="absolute max-xl:top-[300px] max-3xl:top-[90px] top-[40px] max-2xl:top-[150px] max-2xl:-left-[230px] max-xl:-left-[200px] -left-[200px]  ">
                <Image
                  alt="homePageBannerGirl"
                  className="w-[730px]  h-full object-cover "
                  src={girl1}
                ></Image>
              </div>

              <div className="3xl:w-[318px] shadow-2xl  absolute right-36 xl:w-[250px] hidden xl:block h-[165.75px] rounded-2xl ">
                <Image
                  alt="boy1"
                  src={boy1}
                  className="w-full rounded-2xl h-full object-cover"
                ></Image>
              </div>
              <div className="max-xl:w-[200px] max-xl:h-[200px] w-[83px] h-[83px]  absolute right-8 top-5 rounded-full">
                {" "}
                <Image
                  alt="boy1"
                  src={frenchFlag}
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="3xl:w-[318px] shadow-2xl  absolute right-0 top-32 hidden xl:block xl:w-[270px] 2xl:right-3 h-[165.75px] rounded-2xl ">
                {" "}
                <Image
                  alt="boy1"
                  src={girl2}
                  className="w-full rounded-2xl h-full object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <States />
    </div>
  );
};

export default GermanPageMainBanner;
