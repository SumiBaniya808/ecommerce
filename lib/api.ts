import { Product, ProductsResponse } from "@/types/product";

export async function getProducts(limit = 20): Promise<ProductsResponse> {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}