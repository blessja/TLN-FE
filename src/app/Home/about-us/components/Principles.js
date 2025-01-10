import Image from "next/image";
import { useEffect, useState } from "react";
import P1 from "../../../../Assets/about-us/p1.svg";
import P2 from "../../../../Assets/about-us/p2.svg";
import P3 from "../../../../Assets/about-us/p3.svg";
import P4 from "../../../../Assets/about-us/p4.svg";
import P5 from "../../../../Assets/about-us/p5.svg";

const Principles = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile width
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col gap-y-8 p-8 items-center justify-center">
            <p className="font-bold md:text-4xl text-2xl">Our Principles</p>

            {isMobile ? (
                <div className="relative w-full overflow-hidden">
                    <div className="slide-track flex gap-4 justify-center items-center p-8 mb-8">
                        <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center border-2 border-[#1F9F90] rounded-2xl p-4 md:h-[0px] h-[600px]">
                            <Image src={P1} alt="no img" />
                            <p className="font-bold text-xl">EINHEIT [UNITY]</p>
                            <p>
                                We work collaboratively towards a common purpose and goals of providing the best value of investment for the The Language Networkier, focused learning and priority support from our team.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center border-2 border-[#1F9F90] rounded-2xl p-4 md:h-[0px] h-[600px]">
                            <Image src={P2} alt="no img" />
                            <p className="font-bold text-xl">KAIZEN [IMPROVEMENT]</p>
                            <p>
                                We embrace change and constantly innovate to help our students, colleagues and ourselves. We strive for constant improvement and adaptability each passing day.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center border-2 border-[#1F9F90] rounded-2xl p-4 md:h-[0px] h-[600px]">
                            <Image src={P3} alt="no img" />
                            <p className="font-bold text-xl">RENXING [HUMANITY]</p>
                            <p>
                                We are authentic in our interactions and communicate openly, honestly and respectfully. We act with integrity and fairness.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center border-2 border-[#1F9F90] rounded-2xl p-4 md:h-[0px] h-[600px]">
                            <Image src={P4} alt="no img" />
                            <p className="font-bold text-xl">SUPERBIA [PRIDE]</p>
                            <p>
                                We deliver the best possible learning experience to our students and take pride in our work with a pinch of arrogance, as they say in the capital ROME.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center border-2 border-[#1F9F90] rounded-2xl p-4 md:h-[0px] h-[600px]">
                            <Image src={P5} alt="no img" />
                            <p className="font-bold text-xl">FRANC [OPEN]</p>
                            <p>
                                We care for our students, each other, cultures and communities all across the world -understanding that empathy makes us stronger.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                // Original grid layout for desktop view
                <div className="grid grid-cols-3 gap-8 justify-items-center place-items-center w-full">
                    <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center">
                        <Image src={P1} alt="no img" />
                        <p className="font-bold text-xl"> EINHEIT [UNITY]</p>
                        <p>
                            We work collaboratively towards a common purpose and goals of providing the best value of investment for the The Language Networkier, focused learning and priority support from our team.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center">
                        <Image src={P2} alt="no img" />
                        <p className="font-bold text-xl">KAIZEN [IMPROVEMENT]</p>
                        <p>
                            We embrace change and constantly innovate to help our students, colleagues and ourselves. We strive for constant improvement and adaptability each passing day.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center">
                        <Image src={P3} alt="no img" />
                        <p className="font-bold text-xl">RENXING [HUMANITY]</p>
                        <p>
                            We are authentic in our interactions and communicate openly, honestly and respectfully. We act with integrity and fairness.
                        </p>
                    </div>

                    <div className="col-span-3 flex justify-between items-center gap-10 w-[800px]">
                        <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center">
                            <Image src={P4} alt="no img" />
                            <p className="font-bold text-xl">SUPERBIA [PRIDE]</p>
                            <p>
                                We deliver the best possible learning experience to our students and take pride in our work with a pinch of arrogance, as they say in the capital ROME.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-8 w-[240px] text-center">
                            <Image src={P5} alt="no img" />
                            <p className="font-bold text-xl">FRANC [OPEN]</p>
                            <p>
                                We care for our students, each other, cultures and communities all across the world -understanding that empathy makes us stronger.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            
            <style jsx>{`
                .slide-track {
                    display: flex;
                    animation: scroll 20s linear infinite;
                    width: max-content;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

export default Principles;
