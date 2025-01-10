"use client"
import BelowBanner from "../../../Components/Common/BelowBanner";
import PaymentBar from "../../../Components/HomeComp/PaymentBar";
import Principlescomp from "../about-us/components/Principles";
import Workculture from "./components/Workculture";
import Howitworks from "./components/Howitworks";
import OpenPositions from "./components/OpenPositions";
import Banner from "./components/Careers_banner";

const Career = () => {
    return(
        <div>
            <Banner />

            <Principlescomp />

            <Workculture />

            <Howitworks />

            <OpenPositions />

            {/* Below Banner */}
            <BelowBanner title={"Make learning a breeze with us!"} />

            {/* Payment Bar */}
            <PaymentBar />
        </div>
    );
}

export default Career;