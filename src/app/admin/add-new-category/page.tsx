"use client";
import Input from "@/ui/input/Input";

import { useState } from "react";
import { message } from "antd";

const AddNewCategory: React.FC = () => {
  const [categoryName, setCategoryName] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategory = async () => {
    try {
      const response = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: categoryName }),
      });
      if (response.ok) {
        setCategoryName("");
        message.success(`Добавлена новая категория ${categoryName}`);
      } else {
        console.error("Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div className="w-3/5 flex items-center">
      <div className="w-full flex items-center flex-col gap-10">
        <h2 className="text-font-black font-extralight text-lg">
          Информация о новой категории
        </h2>
        <Input
          label={"Название категории"}
          name={"categoryName"}
          type="text"
          value={categoryName}
          onChange={handleInputChange}
        />
        <button
          onClick={handleAddCategory}
          className="cursor-pointer flex w-full bg-primary-1 text-white justify-center py-3 rounded-2xl"
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddNewCategory;
