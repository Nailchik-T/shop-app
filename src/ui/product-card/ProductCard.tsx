import { IProductSingleData } from "@/interfaces/IProduct.interface";
import { FC } from "react";
import Image from "next/image";

const ProductCard: FC<IProductSingleData> = ({ product }) => {
  return (
    <div className="w-80 bg-card-1 px-6 py-4 rounded-2xl ">
      <div className="bg-font-dark-blue inline-block text-white text-xs py-2.5 px-4  rounded-2xl font-bold">
        {product.category}
      </div>
      <Image
        width={300}
        height={37}
        priority
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg">{product.name}</div>
        <div>
          <div>
            <p className={"font-bold text-sm text-font-dark-blue"}>
              {product.cost} ₸
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
