"use client";
import { IProductSingleData } from "@/interfaces/IProduct.interface";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { message } from "antd";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";

const ProductCard: FC<IProductSingleData> = ({ product }) => {
  const loggedIn = Cookies.get("loggedin");

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = () => {
    message.success("Товар добавлен в корзину.");

    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const deleteProduct = async () => {
    try {
      const response = await fetch("/api/product", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: product.id }),
      });

      if (response.ok) {
        message.success("Продукт успешно удален");
        window.location.reload();
      } else {
        message.error("Ошибка при удалении продукта");
      }
    } catch (error) {
      console.error("Ошибка удаления продукта:", error);
      message.error("Ошибка при удалении продукта");
    }
  };

  return (
    <div className="w-80 bg-card-1 px-6 py-4 rounded-2xl ">
      <div className={"flex justify-between cursor-pointer"}>
        <div className="bg-font-dark-blue inline-block text-white text-xs py-2.5 px-4  rounded-2xl font-bold">
          {product.category.name}
        </div>
        {loggedIn ? (
          <MdDelete onClick={deleteProduct} className={"text-2xl"} />
        ) : (
          product.available && (
            <CiShoppingBasket
              className={"text-2xl"}
              onClick={addToCart} // Call addToCart function when clicked
            />
          )
        )}
      </div>

      <Image
        width={300}
        height={200}
        className={"rounded-3xl p-4"}
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg">{product.name}</div>
        <div>
          <div>
            <p className={"font-bold text-sm text-font-dark-blue"}>
              {product.cost.toLocaleString()} ₸
            </p>
            <p className="text-xs text-font-gray">
              {product.available ? "В наличии" : " Нет в наличии"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
