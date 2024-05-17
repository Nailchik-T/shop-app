"use client";
import ProductCard from "@/ui/product-card/ProductCard";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IProduct } from "@/interfaces/IProduct.interface";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product"); // Adjust the endpoint to match your API route
        if (response.ok) {
          const productsData = await response.json();
          setProducts(productsData);
        } else {
          console.error("Failed to fetch products:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Image
        width={120}
        height={20}
        className={"ml-10 mb-5"}
        src={"/offer.svg"}
        alt={"image"}
      />
      <div className="flex flex-row justify-between px-10">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Catalog;
