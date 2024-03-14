export interface IProduct {
    id:number,
    category:string,
    name:string,
    image:string,
    cost: number
    available:boolean
}

export interface IProductSingleData{
    product: IProduct
}

export interface IProductsData{
    products: IProduct[]
}