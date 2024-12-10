"use client";

import { getCart, deleteFromCart } from "../data/cart";
import { useState } from "react";
import CheckoutProductCard from "../components/CheckoutProductCard"

export default function Checkout() {
  const [cart, setCart] = useState(getCart);
  const [updateButtonVisible, setUpdateButtonVisible] = useState(true);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-4 ">
      <div>
        {cart.map((cartItem, index) => (
          <CheckoutProductCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="sticky top-16 flex flex-col justify-around max-h-[300px] mt-5 border-2 border-gray-600 py-4 px-5">
        <div className=" text-center">
          <p className="m-6 text-gray-600 font-extrabold text-5xl">Checkout</p>
        </div>
        <div className="px-3">
          <p>Total: $450</p>
          <p>Shipping Method: Cargo</p>
          <p>Shipping date: 12th of December, 2024</p>
        </div>
      </div>
    </div>
  );
}
