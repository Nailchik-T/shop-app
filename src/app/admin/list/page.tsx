"use client";
import ProductCard from "@/ui/product-card/ProductCard";
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/IProduct.interface";

const List = () => {
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
      <div className="flex flex-row justify-start px-10 flex-wrap gap-3">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default List;
