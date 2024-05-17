import { FC } from "react";

interface IProps {
  name: string;
  type?: string;
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ name, type, label, value, onChange }) => {
  return (
    <div className="flex flex-col w-full mt-4">
      {label && (
        <label className="text-font-gray font-extralight mb-3.5">{label}</label>
      )}
      <input
        className="bg-card-3 w-full p-3 rounded-3xl text-font-dark-blue border border-gray-300"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
