import { ICategory } from "@/interfaces/ICategory";

export interface IProduct {
  id: number;
  category: ICategory;
  name: string;
  image: string;
  cost: number;
  available: boolean;
}

export interface IProductSingleData {
  product: IProduct;
}

export interface IProductsData {
  products: IProduct[];
}
