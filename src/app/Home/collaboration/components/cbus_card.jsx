import Image from "next/image";

const Cards = ({bgColor, Cardimg, Cardtitle, CardContent, textColor}) => {
    return(
        <div className="flex flex-col gap-y-10 justify-center items-center p-8 rounded-2xl max-w-[400px]" style={{backgroundColor: bgColor}}>
            <Image src={Cardimg} alt='image of the card'/>
            <p className="text-center font-bold text-2xl" style={{color: textColor}}>{Cardtitle}</p>
            <p className="text-left text-xl font-light" style={{color: textColor}}>{CardContent}</p>
        </div>
    );
}

export default Cards;