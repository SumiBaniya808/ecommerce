import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="block rounded-lg border p-4 transition hover:shadow-lg"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
        className="h-40 w-full object-contain"
      />
      <p className="mt-3 text-xs uppercase text-gray-500">{product.category}</p>
      <h3 className="line-clamp-1 font-semibold">{product.title}</h3>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-lg font-bold">${product.price}</span>
        <span className="text-yellow-500">★ {product.rating}</span>
      </div>
    </Link>
  );
}