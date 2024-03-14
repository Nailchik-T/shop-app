import { FC } from "react";

interface IProps {
  image: string;
  title: string;
}

const Banner: FC<IProps> = ({ image, title }) => {
  return (
    <div className=" 2xl:container 2xl:mx-auto relative h-[30vh] m-5">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat w-full my-2 px-16 rounded-2xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white ">
        <h1 className=" text-4xl font-extrabold leading-[1.3]">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
