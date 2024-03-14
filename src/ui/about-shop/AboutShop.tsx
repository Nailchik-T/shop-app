import { FC } from "react";
import Image from "next/image";

interface IProps {
  image: string;
  title: string;
  description: string;
}

const AboutShop: FC<IProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-row justify-center items-center my-6">
      <div className=" relative">
        <Image src={image} alt={title} width={500} height={120} />
      </div>
      <div className="flex flex-col bg-white w-[500px] ml-[-20px] z-50 p-6 rounded-2xl">
        <h3 className={"text-green-500 font-serif"}>Eco Friendly</h3>
        <h2 className={"text-font-dark-blue font-bold text-3xl mb-3.5"}>
          {title}
        </h2>
        <p className={"text-font-dark-blue font-light text-sm"}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutShop;
