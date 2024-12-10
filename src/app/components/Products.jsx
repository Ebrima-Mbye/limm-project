"use client";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="p-3 mx-auto max-w-[1300px] grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
