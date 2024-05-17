"use client";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "@/ui/product-card/ProductCard";
import TextImageSection from "@/ui/text-image-section/TextImageSection";
import Banner from "@/ui/banner/Banner";
import Link from "next/link";
import AboutShop from "@/ui/about-shop/AboutShop";
import { IProduct } from "@/interfaces/IProduct.interface";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product"); // Замените 'YOUR_API_ENDPOINT' на адрес вашего сервера API
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);
  const latestProducts = products.slice(-5);

  return (
    <>
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
          {latestProducts.map((productData, index) => (
            <ProductCard key={index} product={productData} />
          ))}
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
