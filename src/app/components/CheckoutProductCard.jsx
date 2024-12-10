import Image from "next/image";
import { deleteFromCart } from "../data/cart";
import { useState } from "react";

export default function CheckoutProductCard({ cartItem }) {
  const [display, setDisplay] = useState("block");
  function reflectDelete(id) {
    setDisplay("none");
    deleteFromCart(id);
  }
  return display !== "none" ? (
    <div
      key={cartItem.id}
      className="md:mx-auto mb-7 max-w-[600px] border-gray-600 border-2 py-4 px-2 rounded-md"
    >
      <Image
        src={cartItem.src}
        alt={cartItem.productName}
        className="shadow-lg w-full mx-auto max-w-[400px] mb-4 rounded-md border-gray-200 border-2"
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
  ) : (
    ""
  );
}
