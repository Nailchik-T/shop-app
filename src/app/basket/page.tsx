"use client";
import { IProduct } from "@/interfaces/IProduct.interface";
import { useEffect, useState } from "react";
import Link from "next/link";
import BuyingForm from "@/comonents/BuyingForm/BuyingForm";

const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems !== null) {
      setBasketItems(JSON.parse(storedItems));
    }
  }, []);
  const removeFromBasket = (itemId: number) => {
    const indexToRemove = basketItems.findIndex(
      (item: IProduct) => item.id === itemId,
    );
    if (indexToRemove !== -1) {
      const updatedBasketItems = [...basketItems];
      updatedBasketItems.splice(indexToRemove, 1);
      setBasketItems(updatedBasketItems);
      localStorage.setItem("cart", JSON.stringify(updatedBasketItems));
    }
  };

  const countItems = (itemId: number) => {
    return basketItems.filter((item: IProduct) => item.id === itemId).length;
  };
  const uniqueBasketItems: IProduct[] = Array.from(
    new Set(basketItems.map((item: IProduct) => item.id)),
  ).map((id) => {
    return {
      // @ts-ignore
      ...basketItems.find((item) => item.id === id)!,
      count: countItems(id),
    };
  });

  return (
    <div className="flex justify-center flex-col w-full items-center">
      <h1 className="text-font-black font-extralight text-lg text-center w-1/2 mt-6">
        Корзина
      </h1>
      {basketItems.length === 0 ? (
        <h3 className="text-font-black flex-col text-lg text-center w-1/2 mt-52">
          Вы еще ничего не выбрали в каталоге! <br />
          <Link
            className={'"text-font-black font-extralight text-lg'}
            href={"catalog"}
          >
            перейти к покупкам
          </Link>
        </h3>
      ) : (
        <>
          <div className="w-2/5 flex flex-col bg-white shadow-md hover:shodow-lg rounded-2xl p-12">
            {uniqueBasketItems.map((item: IProduct) => (
              <div
                key={item.id}
                className="flex items-center justify-between mt-6"
              >
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex flex-col ml-3">
                    <div className="font-medium leading-none">{item.name}</div>
                    <p className="text-sm text-gray-600 leading-none mt-1">
                      {item.category.name}
                    </p>
                  </div>
                </div>
                <div className={"flex items-center"}>
                  <p className="text-sm text-gray-600 leading-none ml-2">
                    {countItems(item.id)}x
                  </p>
                  <button
                    onClick={() => removeFromBasket(item.id)}
                    className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            className={
              "bg-primary-1 rounded-3xl hover:bg-card-2 cursor-pointer mt-20"
            }
          >
            <h4
              onClick={() => setOpen(true)}
              className="text-font-black font-extralight text-lg text-center text-white py-3.5 px-16 "
            >
              Оформить покупку
            </h4>
          </div>
          <BuyingForm open={open} setOpen={setOpen} />
        </>
      )}
    </div>
  );
};

export default Basket;
