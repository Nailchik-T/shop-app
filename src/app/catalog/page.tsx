import ProductCard from "@/ui/product-card/ProductCard";
import { IProductSingleData } from "@/interfaces/IProduct.interface";

const Catalog = () => {
  const product: IProductSingleData = {
    product: {
      id: 1,
      name: "Organic Almonds",
      image: "/image.png",
      cost: 1300,
      category: "Приправа",
      available: true,
    },
  };
  const product1: IProductSingleData = {
    product: {
      id: 1,
      name: "Помидоры",
      image: "/IMAGE3.png",
      cost: 1300,
      category: "Овощи",
      available: true,
    },
  };
  const product2: IProductSingleData = {
    product: {
      id: 1,
      name: "Organic Almonds",
      image: "/IMAGE2.png",
      cost: 4300,
      category: "Перец",
      available: false,
    },
  };
  return (
    <div className="flex flex-row justify-between px-10">
      <ProductCard product={product.product} />
      <ProductCard product={product1.product} />
      <ProductCard product={product2.product} />
      <ProductCard product={product2.product} />
    </div>
  );
};

export default Catalog;
