import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/api";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <Link href="/" className="text-blue-600">
        ← Back to products
      </Link>

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <Image
          src={product.images[0] ?? product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="w-full object-contain"
        />

        <div>
          <p className="text-sm text-gray-500">
            {product.brand ? `${product.brand} · ` : ""}
            {product.category}
          </p>
          <h1 className="mt-1 text-3xl font-bold">{product.title}</h1>
          <p className="mt-2 text-yellow-500">★ {product.rating}</p>
          <p className="mt-4 text-2xl font-bold">${product.price}</p>
          <p className="text-sm text-green-600">
            {product.discountPercentage}% off
          </p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <p className="mt-2 text-sm">In stock: {product.stock}</p>
          <button className="mt-6 rounded bg-black px-6 py-3 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}