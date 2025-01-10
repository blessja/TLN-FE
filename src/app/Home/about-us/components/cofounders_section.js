"use client"
import Image from "next/image";
import { useGetAllCoFoundersQuery } from "../../../../store/apiSlice";

import { useState } from "react";

const Cofounders = () => {
    const { data: foundersData } = useGetAllCoFoundersQuery();

    const [showMore, setShowMore] = useState({});

    const handleToggle = (cofounder) => {
        setShowMore((prev) => ({ ...prev, [cofounder]: !prev[cofounder] }));
    };

    if (!foundersData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center p-8 gap-y-10"
            style={{
                background: "linear-gradient(to bottom, rgba(117, 117, 117, 0.5), #F6F3F3)"
            }}
        >
            <p className="text-2xl md:text-4xl font-bold mb-7">Meet our Co-Founders:</p>
            <div className="flex flex-col gap-y-10">
              {
                 foundersData.map((data, index) => (
                    <div className="flex flex-col md:flex-row gap-9 justify-center items-center" key={index}>
                        <Image
                            src={data.image}
                            alt={data.name}
                            className="w-100 h-100 md:w-auto md:h-auto"
                            width={280}
                            height={400}
                        />
                        <div className="flex flex-col gap-y-4 md:gap-y-7 max-w-lg">
                            <p className="text-2xl md:text-4xl font-bold">{data.name}</p>

                            <div className="block md:hidden">
                                <p className="text-xl font-medium">{data.designation}</p>
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="h-[48px] sm:h-[58px] px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg border border-teal-600 justify-center items-start gap-2.5 inline-flex mt-2"
                                >
                                    <div className="text-center text-teal-600 text-lg sm:text-2xl font-medium">
                                        {showMore[index] ? "Read Less" : "Read More"}
                                    </div>
                                </button>
                            </div>

                            <p className={`text-sm md:text-base leading-relaxed mt-4 ${showMore[index] ? "block" : "hidden"} md:block`}
                            >
                                {data.description}
                                </p>
                        </div>
                    </div>
                ))
              }
                   
            </div>
        </div>
    );
};

export default Cofounders;
