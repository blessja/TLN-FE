const LanguageLessons = () => {
  return (
    <div className="my-[112px]  flex justify-center">
      <div className="max-w-[1680px] h-full min-h-[380px] flex-col justify-start mx-auto items-center gap-12 inline-flex">
        <div className="text-emerald-900 xl:text-4xl 2xl:text-[40px] font-bold ">
          Online language lessons and classes
        </div>
        <div className="justify-center items-start gap-5 inline-flex flex-wrap">
          <div className="max-sm:w-[330px] mx-auto w-[270px] 2xl:w-[405px] rounded-lg border flex-col justify-start items-center inline-flex">
            <div className="self-stretch px-4 py-2 rounded-tl-lg rounded-tr-lg justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-stone-900 2xl:text-xl text-lg font-bold ">
                Popular classes we offer
              </div>
            </div>
            <div className="self-stretch  min-h-[230px] px-4 py-2 flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-neutral-500 2xl:text-xl font-normal  underline leading-7">
                Online French Classes
                <br />
                Online Spanish Classes
                <br />
                Online German Classes
                <br />
                Online Mandarin Classes
                <br />
                Online Japanese Classes <br />
                Online Korean Classes
                <br />
                Online English Classes
              </div>
            </div>
          </div>
          <div className="w-[285px] max-sm:w-[330px] mx-auto 2xl:w-[405px] rounded-lg border flex-col justify-start items-center inline-flex">
            <div className="self-stretch px-4 py-2 rounded-tl-lg rounded-tr-lg justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-stone-900 2xl:text-xl text-lg font-bold ">
                Popular online classes
              </div>
            </div>
            <div className="self-stretch min-h-[230px] px-4 py-2 flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch grow shrink basis-0 text-neutral-500 2xl:text-xl font-normal  underline leading-7">
                Online French Grammar Classes
                <br />
                Online French Speaking Classes
                <br />
                Online English Grammar Classes
                <br />
                Online English Speaking Classes
                <br />
                Online Spanish Grammar Classes
                <br />
                Online Spanish Speaking Classes
                <br />
              </div>
            </div>
          </div>
          <div className="w-[320px] 2xl:w-[405px] max-sm:w-[330px] mx-auto  rounded-lg border flex-col justify-start items-center inline-flex">
            <div className="self-stretch px-4 py-2 rounded-tl-lg rounded-tr-lg justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-stone-900 2xl:text-xl font-bold ">
                Popular classes by target group
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 px-4 py-2 flex-col min-h-[230px]  justify-start items-center gap-2 flex">
              <div className="self-stretch grow shrink basis-0 text-neutral-500 2xl:text-xl  font-normal  underline leading-7">
                Online French Classes for kids
                <br />
                Online French Classes for adults
                <br />
                Online French Classes for corporates
                <br />
                Online English Classes for kids
                <br />
                Online English Classes for adults
                <br />
                Online English Classes for corporates
              </div>
            </div>
          </div>
          <div className="w-[330px] 2xl:w-[405px] mx-auto max-sm:w-[330px] rounded-lg border flex-col justify-start items-center inline-flex">
            <div className="self-stretch px-4 py-2 rounded-tl-lg rounded-tr-lg justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-stone-900 2xl:text-xl text-lg font-bold ">
                Popular online classes by level
              </div>
            </div>
            <div className="self-stretch  grow shrink basis-0 px-4 py-2 flex-col min-h-[228px] justify-center items-start gap-2 flex">
              <div className="self-stretch grow shrink basis-0 text-neutral-500 text-nowrap  2xl:text-xl font-normal  underline leading-7">
                Online French Classes for Beginners
                <br />
                Online French Classes for Intermediate
                <br />
                Online French Classes for Advance
                <br />
                Online English Classes for Beginners
                <br />
                Online English Classes for Intermediate
                <br />
                Online English Classes for Advance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageLessons;
