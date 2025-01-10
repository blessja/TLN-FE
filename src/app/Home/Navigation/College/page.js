import WhyNeeded from "../components/whyNeeded/WhyNeeded";
import Newsletter from "../../../../Components/HomeComp/Newsletter";
import Contact from "../../../../Shared/Contact";
import Banner from "../components/Banner";
import bannerImg from "../../../../Assets/college/CollegeBanner.png";
import collegeWhyCardInfo from "./data/collegeWhyCardInfo";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import howItWorksData from "./data/howItWorksData";
import Plans from "../components/plans/Plans";
import plansData from "../components/plans/plansData";
import SchoolForm from "../components/forms/SchoolForm";
import OurAlumni from "../../../../Components/HomeComp/OurAlumni";
import ProficiencyExams from "../../../../Components/HomeComp/ProficiencyExams";
import EducationSlider from "../components/EducationSlider";
import GreenBanner from "../components/GreenBanner";
import PaymentBarMoving from "../components/PaymentBarMoving";

const CollegePage = () => {
  return (
    <div className="">
      <section className="relative flex flex-col mx-auto">
        <Contact />
      </section>
      <div className="flex flex-col items-center justify-between mx-4 lg:mx-[44px] 2xl:mx-[88px] 3xl:mx-[96px] 4xl:mx-[120px] 2xl:max-w-[1680px]">
        <Banner bannerImg={bannerImg} />
      </div>
      <WhyNeeded institute={"Colleges"} cardInfo={collegeWhyCardInfo} />
      <Newsletter />
      <WhyChooseUs />
      <HowItWorks data={howItWorksData} />
      {/* 3 plans */}
      <Plans data={plansData} />
      <div className="w-full flex flex-col bg-[#FAFAFA] py-[32px] xl:mt-[75px] 2xl:mt-[98px] xl:h-[1000px] 2xl:h-[1063px]">
        <div className="mb-[75px]">
          <OurAlumni />
        </div>
        <div className="">
          <ProficiencyExams />
        </div>
        <EducationSlider />
      </div>
      <SchoolForm />
      <GreenBanner title={"Subscribe to our newsletter"} />
      <PaymentBarMoving />
    </div>
  );
};

export default CollegePage;
