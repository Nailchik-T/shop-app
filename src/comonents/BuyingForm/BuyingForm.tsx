import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { message } from "antd";

interface Props {
  open: boolean;
  setOpen: (close: boolean) => void;
}

const BuyingForm: FC<Props> = ({ open, setOpen }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    city: "",
    street: "",
    houseNumber: "",
    comment: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const products = JSON.parse(localStorage.getItem("cart") || "[]");

    console.log("Form data:", formData);
    console.log("Products:", products);

    localStorage.removeItem("cart");

    message.success("Спасибо за покупку, в ближайшее время с вами свяжуться!");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <form
      className={`mt-10 bg-white shadow-md hover:shadow-lg rounded-2xl p-12 absolute ${
        open ? "block" : "hidden"
      }`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <h3 className=" text-lg font-bold text-[#333] mb-6">
          Персональные данные
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Имя"
              value={formData.name}
              onChange={(e) => handleInputChange(e, "name")}
              className=" font-extralight px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 24 24"
            >
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Фамилия"
              value={formData.surname}
              onChange={(e) => handleInputChange(e, "surname")}
              className="font-extralight px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 24 24"
            >
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="font-extralight px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 682.667 682.667"
            >
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
              <g
                clip-path="url(#a)"
                transform="matrix(1.33 0 0 -1.33 0 682.667)"
              >
                <path
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="40"
                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  data-original="#000000"
                ></path>
                <path
                  d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div className="relative flex items-center">
            <input
              type="number"
              placeholder="Номер телефона"
              className="font-extralight px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange(e, "phoneNumber")}
            />
            <svg
              fill="#bbb"
              className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 64 64"
            >
              <path
                d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold text-[#333] mb-6">Адрес доставки</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Город"
            className="font-extralight px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            value={formData.city}
            onChange={(e) => handleInputChange(e, "city")}
          />

          <input
            type="text"
            placeholder="Улица"
            className="font-extralight px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            value={formData.street}
            onChange={(e) => handleInputChange(e, "street")}
          />

          <input
            type="text"
            placeholder="Номер дома"
            className=" font-extralight px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            value={formData.houseNumber}
            onChange={(e) => handleInputChange(e, "houseNumber")}
          />
          <input
            type="text"
            placeholder="Коментарий к адресу"
            className="font-extralight px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            value={formData.comment}
            onChange={(e) => handleInputChange(e, "comment")}
          />
        </div>
        <div className="flex gap-6 max-sm:flex-col mt-10">
          <button
            onClick={() => setOpen(false)}
            type="button"
            className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]"
          >
            Отмена
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-primary-1 text-white hover:bg-card-2"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </form>
  );
};

export default BuyingForm;
