import Image from "next/image";
import Workcultureimg from "../../../../Assets/career-screen/work_culture_img.svg";

const Workculture = () => {
    return(
        <div className="bg-[#EBF7F6] flex flex-col justify-center items-center p-8 gap-y-10">
            <p className="text-2xl md:text-4xl font-bold">Our Work Culture</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-8 border-2 border-[#1F9F90] rounded-xl mb-6">
                <Image src={Workcultureimg} alt="no img"/>
                <p>At The Language Network, our work culture is fun, collaborative, and empowering. With a flat hierarchy and openness to creativity, every team member&apos;s voice is valued. Our dynamic and young team is committed to growth and development, ensuring credibility and overall workplace satisfaction. Our employees&apos; willingness to recommend The Language Network reflects our positive culture, driving motivation and collective success.</p>
            </div>
        </div>
    ); 
}

export default Workculture;