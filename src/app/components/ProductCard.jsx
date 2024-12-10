import Image from "next/image";
import { addToCart, updateQuantity } from "../data/cart";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [addButtonText, setAddButtonText] = useState("Add to Cart");
  const [ quantity, setQuantity] = useState(product.quantity);

  const quantityOptions = [];
  for (let i = 0; i < 10; i++) {
    quantityOptions.push(i + 1);
  }

  function addProduct(i) {
    addToCart(i, quantity);
    notifyAdded(i);
  }

  function notifyAdded(i) {
    setTimeout(() => {
      setAddButtonText(addButtonText);
    }, 1000);
    setAddButtonText("Added to Cart");
  }

  return (
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

      <div>
        <p className="inline">Quantity: </p>
        <select
          key={product.id}
          className="cursor-pointer p-0.5 font-bold text-orange-700 border-gray-500 border-2 rounded-md"
          id="select"
          onChange={(e) => { setQuantity(parseInt(e.target.value))}}
        >
          {quantityOptions.map((optionValue) => (
            <option key={optionValue} className="cursor-pointer">
              {optionValue}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2 mt-4">
        <button
          id={product.id}
          className="rounded-md text-gray-700 font-bold px-4 py-2 shadow-md bg-orange-400"
          onClick={() => addProduct(product.id)}
        >
          {addButtonText}
        </button>
      </div>
    </div>
  );
}
