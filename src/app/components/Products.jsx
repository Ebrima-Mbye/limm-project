"use client";

import Image from "next/image";
import products from "../data/products";
import { addToCart } from "../data/cart";

export default function Products() {
  function addProduct(i) {
    addToCart(i);
    notifyAdded(i);
  }

  function notifyAdded(i) {
    const element = document.getElementById(i);
    const text = element.innerHTML;
    setTimeout(() => {
      element.innerHTML = text;
    }, 1000);
    element.innerHTML = "Added to Cart";
  }
  return (
    <div className="p-3 mx-auto max-w-[1300px] grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="py-3 px-2 mb-5 border-gray-300 shadow-md border-2 rounded-md"
        >
          <Image
            className="shadow-lg mb-3 border-gray-200 rounded-md border-2"
            src={product.src}
            alt={product.productName}
          />
          <div className="p-2 border-t-black border-yellow-400">
            <p className="block ">Name: {product.productName}</p>
            <p className="block ">Price: {product.price}</p>
          </div>

          <div className="mb-2 mt-4">
            <button
              id={product.id}
              className="rounded-md text-gray-700 font-bold px-4 py-2 shadow-md bg-orange-400"
              onClick={() => addProduct(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
