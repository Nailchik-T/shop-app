import { FC } from "react";

interface IProps {
  name: string;
  type: string;
  label?: string;
}
const Input: FC<IProps> = ({ name, type, label }) => {
  return (
    <>
      <div className={"flex flex-col w-full"}>
        <label className={"text-font-gray mb-3.5"}>{label}</label>
        <input
          className={"bg-card-3 w-full p-3 rounded-3xl text-font-dark-blue "}
          name={name}
          type={type}
        />
      </div>
    </>
  );
};

export default Input;
