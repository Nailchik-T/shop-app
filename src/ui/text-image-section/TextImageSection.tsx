interface Props {
  image: string;
  title: string;
}

const TextImageSection = ({ image, title }: Props) => {
  return (
    <div className="relative max-w-[1920px] h-[90vh]">
      <div
        className="absolute inset-0 bg-cover bg-center 	"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white max-w-[630px] ml-16">
        <h1 className=" text-6xl font-extrabold leading-[1.3]">{title}</h1>
        <p className={" mt-6 bg-gray-950 bg-opacity-[60%] p-6 rounded-2xl"}>
          Откройте для себя широкий выбор качественных специй, которые сделают
          ваши блюда неповторимыми и удовлетворят самые изысканные вкусы. В
          нашем магазине мы гордимся свежестью и аутентичностью каждого
          продукта, чтобы вы могли наслаждаться натуральными вкусами в полной
          мере.
        </p>
      </div>
    </div>
  );
};

export default TextImageSection;
