import { FaArrowRight } from "react-icons/fa";
import ProductCard from "@/ui/product-card/ProductCard";
import { IProductSingleData } from "@/interfaces/IProduct.interface";
import TextImageSection from "@/ui/text-image-section/TextImageSection";
import Banner from "@/ui/banner/Banner";
import Link from "next/link";
import AboutShop from "@/ui/about-shop/AboutShop";
import Header from "@/comonents/Header/Header";
import { CiShoppingBasket } from "react-icons/ci";
const navLinks = [
  { id: 1, name: "Каталог", path: "/catalog" },
  { id: 2, name: "О нас", path: "#about" },
  { id: 4, name: <CiShoppingBasket className="text-2xl" />, path: "/auth" },
];
export default function Home() {
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
    <>
      <Header navItems={navLinks} />
      <main>
        <TextImageSection
          image={"/bg.jpeg"}
          title={"Магазин  натуральных специй"}
        />

        <Banner image={"/banner.jpg"} title={"Скидка 10%  на всю продукцию "} />

        <Link
          href={"/catalog"}
          className="flex flex-row gap-2 justify-end px-10 py-4 items-center cursor-pointer "
        >
          <span className="font-light text-font-dark-blue">
            Посмотреть каталог
          </span>
          <FaArrowRight className={"block"} />
        </Link>

        <div className="flex flex-row justify-between px-10">
          <ProductCard product={product.product} />
          <ProductCard product={product1.product} />
          <ProductCard product={product2.product} />
          <ProductCard product={product2.product} />
        </div>
        <AboutShop
          image={"/about.jpg"}
          title={"Природные ароматы: Магазин органических специй"}
          description={
            "Наш магазин специй предлагает разнообразные органические специи высокого качества. В нашем каталоге" +
            " найдете широкий выбор ароматных перцев, душистых пряностей, разнообразных семян и других уникальных специй. Все наши продукты выращиваются без использования химических удобрений и пестицидов, чтобы сохранить их натуральность и питательные свойства. Приходите в наш магазин и откройте для себя мир вкусов и ароматов органических специй!"
          }
        />
      </main>
    </>
  );
}
