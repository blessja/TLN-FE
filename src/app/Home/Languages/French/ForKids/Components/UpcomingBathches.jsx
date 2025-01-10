import "@/css/Custom.css";
import girlRashi from "@/Assets/Homepage/UpComingCourseCard/girlRashi.png";
import girlIshwari from "@/Assets/Spanish/Ishwari-1 1.png";
import girlPrachi from "@/Assets/Spanish/Prachi-1.png";
import Image from "next/image";
const UpcomingBatches = () => {
  const data = [
    {
      id: 1,
      name: "Abhinav Kaushal",
      language: "French",
      img: girlRashi,
      batch: "March 20th 2024",
      seats: "07",
      timing: "SAT 8:00 pm - 10:00 pm | 2 hrs",
      certificate: "Beginners French | A1",
    },
    {
      id: 2,
      name: "T. Vijayan Joseph Scott",
      language: "French",
      img: girlIshwari,
      batch: "March 15th 2024",
      seats: "07",
      timing: "SAT 10:00 pm - 11:00 pm | 1 hrs",
      certificate: "Intermediate French | A1",
    },
    {
      id: 3,
      name: "Anchal Gupta",
      language: "French",
      img: girlPrachi,
      batch: "March 20th 2024",
      seats: "07",
      timing: "SAT 9:00 pm - 11:00 pm | 3 hrs",
      certificate: "Advanced French | A1",
    },
  ];
  return (
    <div className="my-[92px]  flex justify-center flex-col items-center">
      <h1 className="my-[40px] text-center self-stretch text-stone-900 2xl:text-[40px] xl:text-[40px] max-md:text-2xl max-xl:text-5xl text-[24px] font-bold  ">
        Upcoming Batches
      </h1>
      <section
        id="upComingCourseMonths"
        className="flex items-center justify-center flex-wrap gap-[16px]  p-[8px] w-fit mx-auto rounded-lg shadow-xl shadow-neutral-color/5 mb-[32px]"
      >
        <button className="upcomingCourseActive">January</button>
        <button className="upcomingCourseDeActive">February</button>
        <button className="upcomingCourseDeActive">March</button>
      </section>
      <section
        className=" flex
      justify-center items-center w-full mx-auto lg:min-w-[1000px] 2xl:max-w-[1681px] flex-col gap-4  "
        id="UpcomingCourseCards"
      >
        <div className=" flex-wrap gap-[17px]  flex xl:justify-center justify-center w-full  mb-[40px]">
          {/* this part will by dynamic based on the data and the cards will be mapped */}
          <div className="lg:w-[354px] xl:w-[540px]  lg:scale-100   p-4 flex-col justify-start items-start gap-2.5 shadow-2xl rounded-xl  shadow-[#bab8b8]/40 flex">
            <div className="h-[240px] bg-[#F7DF10] rounded-t-xl flex items-center  w-full relative">
              <div className="bg-[#FFF00D] h-[60%] w-full absolute -z-0"></div>
              <Image
                alt="girlRashi"
                src={girlRashi}
                className="object-contain w-full h-full z-10"
              ></Image>
            </div>
            <div className="  rounded-b-lg flex-col justify-start w-full items-start gap-16 flex">
              <div className="self-stretch min-h-[344px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[60px] px-4 flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch h-[23px] text-stone-900 text-2xl font-bold ">
                    Abhinav Kaushal
                  </div>
                  <div className="self-stretch h-[25px] text-neutral-500 text-xl font-normal  leading-7">
                    Spanish Trainer
                  </div>
                </div>
                <div className="h-[252px] w-full flex-col justify-start items-start flex">
                  <div className="self-stretch px-4 pt-5 pb-4 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[122px] h-[23px] text-stone-900 text-base font-medium ">
                      Batch Starts{" "}
                    </div>
                    <div className="text-stone-900 lg:text-xl text-[15px] font-bold ">
                      March 20th 2024
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[159px] h-[23px] text-stone-900 text-base font-medium ">
                      Number of seats
                    </div>
                    <div className="text-stone-900 lg:text-xl font-bold ">
                      07
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center flex">
                    <div className="w-[65px] h-[23px] text-stone-900 text-base font-medium ">
                      Timing
                    </div>
                    <div className="lg:w-[335px] w-[195px] flex-col justify-center items-end gap-[13px] inline-flex">
                      <div className="self-stretch text-right text-stone-900 text-nowrap lg:text-xl text-sm font-bold ">
                        SAT 8:00 pm - 10:00 pm | 2 hrs
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[120px] h-[23px] text-stone-900 text-base font-medium ">
                      Certification{" "}
                    </div>
                    <div className="text-stone-900 lg:text-xl text-xs font-bold ">
                      Beginners French | A1
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex justify-end  w-full">
                <div className="w-[183px] h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-neutral-50 text-2xl font-medium ">
                    Enroll now
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-[354px] xl:w-[540px]  lg:scale-100   p-4 flex-col justify-start items-start gap-2.5 shadow-2xl rounded-xl  shadow-[#bab8b8]/40 flex">
            <div className="h-[240px] bg-[#9127a3] rounded-t-xl overflow-hidden flex items-center  w-full relative">
              <div className="bg-[#771192] w-[33%] h-full  absolute -z-0"></div>
              <div className="bg-[#8c0f8d] w-[33%] h-full right-0 absolute -z-0"></div>
              <Image
                alt="girlRashi"
                src={girlPrachi}
                className="object-contain w-full h-full z-10"
              ></Image>
            </div>
            <div className="  rounded-b-lg flex-col justify-start w-full items-start gap-16 flex">
              <div className="self-stretch min-h-[344px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[60px] px-4 flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch h-[23px] text-stone-900 text-2xl font-bold ">
                    T. Vijayan Joseph Scott
                  </div>
                  <div className="self-stretch h-[25px] text-neutral-500 text-xl font-normal  leading-7">
                    French Trainer
                  </div>
                </div>
                <div className="h-[252px] w-full flex-col justify-start items-start flex">
                  <div className="self-stretch px-4 pt-5 pb-4 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[122px] h-[23px] text-stone-900 text-base font-medium ">
                      Batch Starts{" "}
                    </div>
                    <div className="text-stone-900 lg:text-xl text-[15px] font-bold ">
                      March 15th 2024
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[159px] h-[23px] text-stone-900 text-base font-medium ">
                      Number of seats
                    </div>
                    <div className="text-stone-900 lg:text-xl font-bold ">
                      07
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center flex">
                    <div className="w-[65px] h-[23px] text-stone-900 text-base font-medium ">
                      Timing
                    </div>
                    <div className="lg:w-[335px] w-[195px] flex-col justify-center items-end gap-[13px] inline-flex">
                      <div className="self-stretch text-right text-stone-900 text-nowrap lg:text-xl text-sm font-bold ">
                        SAT 10:00 pm - 11:00 pm | 1 hrs
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[120px] h-[23px] text-stone-900 text-base font-medium ">
                      Certification{" "}
                    </div>
                    <div className="text-stone-900 lg:text-xl text-xs font-bold ">
                      Intermediate French | A1
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex justify-end  w-full">
                <div className="w-[183px] h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-neutral-50 text-2xl font-medium ">
                    Enroll now
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-[354px] xl:w-[540px]  lg:scale-100   p-4 flex-col justify-start items-start gap-2.5 shadow-2xl rounded-xl  shadow-[#bab8b8]/40 flex">
            <div className="h-[240px] bg-[#e76c10] overflow-hidden rounded-t-xl flex items-center  w-full relative">
              <div className="bg-[#d06c10] h-[33%] w-full top-0  absolute -z-0"></div>
              <div className="bg-[#ea8110] h-[33%] w-full bottom-0 absolute -z-0"></div>{" "}
              <Image
                alt="girlRashi"
                src={girlIshwari}
                className="object-contain w-full h-full z-10"
              ></Image>
            </div>
            <div className="  rounded-b-lg flex-col justify-start w-full items-start gap-16 flex">
              <div className="self-stretch min-h-[344px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[60px] px-4 flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch h-[23px] text-stone-900 text-2xl font-bold ">
                    Anchal Gupta
                  </div>
                  <div className="self-stretch h-[25px] text-neutral-500 text-xl font-normal  leading-7">
                    German Trainer
                  </div>
                </div>
                <div className="h-[252px] w-full flex-col justify-start items-start flex">
                  <div className="self-stretch px-4 pt-5 pb-4 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[122px] h-[23px] text-stone-900 text-base font-medium ">
                      Batch Starts{" "}
                    </div>
                    <div className="text-stone-900 lg:text-xl text-[15px] font-bold ">
                      March 20th 2024
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[159px] h-[23px] text-stone-900 text-base font-medium ">
                      Number of seats
                    </div>
                    <div className="text-stone-900 lg:text-xl font-bold ">
                      07
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center flex">
                    <div className="w-[65px] h-[23px] text-stone-900 text-base font-medium ">
                      Timing
                    </div>
                    <div className="lg:w-[335px] w-[195px] flex-col justify-center items-end gap-[13px] inline-flex">
                      <div className="self-stretch text-right text-stone-900 text-nowrap lg:text-xl text-sm font-bold ">
                        SAT 9:00 pm - 11:00 pm | 3 hrs
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                    <div className="w-[120px] h-[23px] text-stone-900 text-base font-medium ">
                      Certification{" "}
                    </div>
                    <div className="text-stone-900 lg:text-xl text-xs font-bold ">
                      Advanced French | A1
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex justify-end  w-full">
                <div className="w-[183px] h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-neutral-50 text-2xl font-medium ">
                    Enroll now
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* load more button will load more datas */}
      <div className="w-full flex justify-center mt-4">
        {" "}
        <button className="px-[32px]  text-primary-color py-3.5 rounded-lg border border-primary-color font-medium text-2xl text justify-center focus:outline-none hover:bg-primary-color focus:bg-primary-color hover:text-white focus:text-white items-center gap-2.5 inline-flex">
          Load more
        </button>
      </div>
    </div>
  );
};

export default UpcomingBatches;
