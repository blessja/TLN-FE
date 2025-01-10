import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
import girl1 from "@/Assets/FrenchPage/FrenchMain/girl1.png";
import boy1 from "@/Assets/FrenchPage/FrenchMain/boy1.png";
import girl2 from "@/Assets/FrenchPage/FrenchMain/girl2.png";
import frenchFlag from "@/Assets/FrenchPage/FrenchMain/frenchFlag.png";
const JapanesePageMainBanner = () => {
  return (
    <div className=" relative flex justify-center items-center flex-col mb-[112px]">
      <div className="mt-[67px] max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col  w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  Online Japanese Classes
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                    Step into the world of our{" "}
                    <span className="font-bold leading-6">
                      online Japanese classes!
                    </span>{" "}
                    Step into the captivating realm of our online Japanese
                    classes! Whether you&apos;re embarking on your journey from
                    scratch or honing your already impressive Japanese skills,
                    our bespoke and interactive courses are meticulously
                    tailored just for you. Say farewell to conventional
                    classroom setups and konnichiwa to personalised instruction,
                    flexible scheduling, and immersive learning experiences with
                    our top-tier online Japanese courses. With our team of
                    seasoned instructors at your side, you&apos;ll effortlessly
                    navigate the intricacies of Japanese grammar, expand your
                    vocabulary, participate in dynamic conversations, and delve
                    into the vibrant culture of Japan. Get ready to plunge into
                    the beauty of the Japanese language and revel in the
                    excitement of mastering Japanese at your own pace with our
                    1:1 or Group Online Japanese Classes.
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

export default JapanesePageMainBanner;
