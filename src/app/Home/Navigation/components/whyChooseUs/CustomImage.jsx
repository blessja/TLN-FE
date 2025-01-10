import Image from "next/image";
import React from "react";

const CustomImage = ({ icon, title, width }) => {
  return (
    <>
      <Image
        src={icon}
        alt={`${title} icon`}
        width={width}
        height={133}
        className={`mt-[20px] mb-[30px] mx-[40px]`}
      />
    </>
  );
};

export default CustomImage;