import WhyCard from "./WhyCard";
const WhyNeeded = ({ institute, cardInfo }) => {
  return (
    <div className="pb-[50px]">
      <h2 className="text-[35px]/[50px] sm:text-[40px]/[55px] md:text-[45px]/[60px] lg:text-[50px]/[65px] xl:text-[55px]/[70px] 2xl:text-[60px]/[72.61px] text-[#1E1E1E] font-bold text-center mt-[50px] xl:mt-[90px] 2xl:mt-[120px] mb-[67px]     mx-4 lg:mx-[44px] 2xl:mx-[88px] 3xl:mx-[96px] 4xl:mx-[120px] 2xl:max-w-[1680px]">
        Why {institute} Should Include Foreign Language in their Curriculum?
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {cardInfo.map((card) => {
          return (
            <WhyCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default WhyNeeded;
