import CefrLevels from "../../Components/HomeComp/CefrLevels";
import Contact from "../../Shared/Contact";
import CoursesWeOffer from "../../Components/HomeComp/CoursesWeOffer";
import EducationPartners from "../../Components/HomeComp/EducationPartners";
import FluencyCarrerCulture from "../../Components/HomeComp/FluencyCarrerCulture";
import HomeBanner from "../../Components/HomeComp/HomeBanner";
import Newsletter from "../../Components/HomeComp/Newsletter";
import OurAlumni from "../../Components/HomeComp/OurAlumni";
import PaymentBar from "../../Components/HomeComp/PaymentBar";
import ProficiencyExams from "../../Components/HomeComp/ProficiencyExams";
import TeachersInfoNew from "../../Components/HomeComp/TeachersInfoNew";
import WhyShould from "../../Components/HomeComp/WhyShould";
import UpcomingBatches from "../../Shared/UpcomingBatches";
import StudentsTestomony from "../../Shared/SharedMainLanguagePage/Components/StudentTestomony/StudentsTestomony";
import SubscribeToOur from "../../Shared/SubscribeToOur";
import {whyShouldData} from "../../Utilities/data/home/data.js"
// import Collaboration from "../../M2/Collaboratewithus";

export default function Home() {
  return (
    <>
      <section className="4xl:mx-auto 2xl:max-w-[1680px] lg:mx-[44px] 2xl:mx-[88px] mx-auto relative flex justify-center items-center flex-col ">
        <HomeBanner />
        <Contact />
      </section>
      <div>
        <Newsletter />
      </div>
      <WhyShould data={whyShouldData}/>
      <div className="flex items-center justify-center">
        <CoursesWeOffer />
      </div>

      {/* <section className="-mt-[150px] lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
        <UpcomingBatches language={"English"} />
      </section> */}
      <CefrLevels />
      <section className="mx-4 lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
        <ProficiencyExams />
      </section>
      <FluencyCarrerCulture />
      <StudentsTestomony language={"French"} context={"Adult"} />
      {/* <TechersInfo /> */}
      <TeachersInfoNew />
      <div className="mt-[40px] lg:-mt-[40px]">
        <OurAlumni />
      </div>
      <div className="pb-[40px]">
        <EducationPartners />
      </div>
      <SubscribeToOur />
      <PaymentBar />
      {/* <Collaboration /> */}
    </>
  );
}
