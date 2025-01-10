const GreenBanner = ({title}) => {
  return (
    <div className="w-full xl:h-[360px] 2xl:h-[380px]">
      <div className="w-full  bg-teal-600 min-h-[380px] relative flex justify-center items-center">
        <div className=" bg-teal-600 absolute w-full flex-col justify-center items-center gap-8 inline-flex">
          <div className="text-center text-white xl:text-[55px]/[65px] 2xl:text-[60px]/[72px] font-bold max-lg:text-2xl">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenBanner;
