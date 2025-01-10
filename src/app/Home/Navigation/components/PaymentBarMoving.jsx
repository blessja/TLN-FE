import React from "react";
import amazon from "../../../../Assets/Homepage/PaymentBar/amazon.png";
import bhim from "../../../../Assets/Homepage/PaymentBar/bhim-upi-100.png";
import bajaj from "../../../../Assets/Homepage/PaymentBar/bajaj-finserv.png";
import Paytm from "../../../../Assets/Homepage/PaymentBar/Paytm.png";
import Gpay from "../../../../Assets/Homepage/PaymentBar/Gpay.png";
import Razor from "../../../../Assets/Homepage/PaymentBar/razorpay 1.png";
import upi from "../../../../Assets/Homepage/PaymentBar/upi-ar21 1.png";
import rupay from "../../../../Assets/Homepage/PaymentBar/rupay.png";

import Image from "next/image";

const PaymentBarMoving = () => {
  return (
    <div className="bg-[#000000] min-h-[66px] justify-center ">
      <div className="slider ">
        <div className="slide-track flex">
          {/* Add flex to slide-track */}
          <div className="slide ">
            <Image className="mr-[-10px]" src={amazon} alt="amazon" />
            {/* Adjust negative margin as needed */}
          </div>
          <div className="slide">
            <Image className="mr-[-10px]" alt="logo" src={bhim} />
          </div>
          <div className="slide ">
            <Image className="mr-[-10px]" alt="logo" src={bajaj} />
          </div>
          <div className="slide ">
            <Image className="mr-[-10px]" alt="logo" src={Paytm} />
          </div>
          <div className="slide ">
            <Image className="mr-[-10px]" alt="logo" src={Gpay} />
          </div>
          <div className="slide ">
            <Image className="mr-[-10px]" alt="logo" src={Razor} />
          </div>
          <div className="slide">
            <Image className="mr-[-10px]" alt="logo" src={upi} />
          </div>
          <div className="slide ">
            <Image className="mr-[-10px]" alt="logo" src={rupay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBarMoving;
