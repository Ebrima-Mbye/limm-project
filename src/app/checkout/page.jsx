"use client";

import Image from "next/image";
import { getCart, deleteFromCart } from "../data/cart";
import { useState } from "react";

export default function Checkout() {
  const [cart, setCart] = useState(getCart());
  const [updateButtonVisible, setUpdateButtonVisible] = useState(true);

  function reflectDelete(id) {
    deleteFromCart(id);
    setCart(getCart());
  }

  function notifyUpdate(id) {
    
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-4 ">
      <div>
        {cart.map((cartItem, index) => (
          <div
            key={index}
            className="md:mx-auto mb-7 max-w-[600px] border-gray-600 border-2 py-4 px-2"
          >
            <Image
              src={cartItem.src}
              alt={cartItem.productName}
              className="shadow-md w-full mx-auto max-w-[400px] mb-4 rounded-sm"
            />
            <div className="max-w-[400px] mx-auto w-full flex justify-around items-center mb-4">
              <button
                className="bg-orange-500 px-4 py-2"
                onClick={() => notifyUpdate(cartItem.id)}
              >
                Update
              </button>
              <p>Quantity: {cartItem.quantity}</p>
              <button
                className="bg-red-500 px-4 py-2"
                onClick={() => reflectDelete(cartItem.id)}
              >
                Delete
              </button>
            </div>
            <div className="text-center">
              <p>Name: {cartItem.productName}</p>
              <p>Price: {cartItem.price}</p>
            </div>
          </div>
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
