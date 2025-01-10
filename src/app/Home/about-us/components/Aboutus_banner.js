'use client'
import Image from "next/image";
//import bannerimg from "../../../../Assets/about-us/logo22.svg";
import { useGetBannerQuery} from "../../../../store/apiSlice";
const Banner = () => {
  const { data } = useGetBannerQuery({
    context: "AboutUs",
    language: "Others", 
  });

  return (
    <div className=" relative flex justify-center items-center flex-col mb-[30px]">
      <div className="mt-[67px] max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 p-3 md:p-10 justify-center items-start">
            <div className="flex flex-col  w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full gap-y-8 ">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-2xl">
                {data?.length>0 &&  data[0]?.bannerTitle|| "title"} 
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                  {data?.length>0 && data[0]?.bannerDescription}
                  </div>
                  {" "}
                  {/* <div className="max-sm:absoluteflex justify-star max-md:-ml-8 ">
                    <ApplyNowbutton />
                  </div> */}
                </div>
              </div>
            </div>
            {data?.length>0 && 
             <Image
             alt="homePageBanner"
             className="w-[90%] 2xl:max-w-[769px] max-h-[515px] lg:w-[50%] relative top-[27px] lg:block md:p-10 p-2 md:ml-0 ml-4"
             src={data[0]?.bannerImage}
             width={800}
             height={520}
             priority={true}
             ></Image>
            }
               
            </div>
        </div>
      </div>
    </div>
  
  );
};

export default Banner;
