"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, UploadProps } from "antd";
import { message, Upload } from "antd";
import { Category } from "@prisma/client";
import Input from "@/ui/input/Input";

const AddNewProductPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    categoryId: "",
    available: true,
    image: null as File | null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (files: File[]) => {
    setFormData({
      ...formData,
      image: files[0],
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("cost", formData.cost);
    form.append("categoryId", formData.categoryId);
    form.append("available", formData.available);
    if (formData.image) {
      form.append("image", formData.image.originFileObj as Blob);
    }
    console.log(formData);
    try {
      const response = await fetch("/api/product", {
        method: "POST",
        body: form,
      });
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      const data = await response.json();
      console.log("Product added successfully:", data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className={"mt-14 w-7/12"}>
      <h2 className="text-font-black font-light text-xl">
        Информация о новом товаре
      </h2>
      <form className={"w-auto grid grid-cols-2"} onSubmit={handleSubmit}>
        <div className={"w-96"}>
          <Input
            onChange={handleInputChange}
            value={formData.name}
            label="Название продукта"
            name="name"
            type="text"
          />
          <Input
            onChange={handleInputChange}
            value={formData.cost}
            label="Цена"
            name="cost"
            type="text"
          />
          <div className="flex flex-col w-full">
            <label className="text-font-gray font-extralight mb-3.5">
              Категория
            </label>
            <select
              className="bg-card-3 w-full p-3 mr-2.5 rounded-3xl text-font-dark-blue border border-gray-300"
              name="categoryId"
              onChange={handleInputChange}
              value={formData.categoryId}
            >
              <option value="">Выберите категорию</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Upload.Dragger
            {...props}
            onChange={(info) => handleFileChange(info.fileList)}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="font-extralight">Нажмите для загрузки изображения</p>
            <p className="ant-upload-hint font-extralight">
              Фотография будет отображдаться в карточке продукта.
            </p>
          </Upload.Dragger>
        </div>
        <button
          type="submit"
          className="mt-14 cursor-pointer flex w-full bg-primary-1 text-white justify-center py-3 rounded-2xl"
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddNewProductPage;
