import products from "./products";

// const cart = [];

export function addToCart(index) {
  const cart = getCart();
  const productToAdd = products[parseInt(index) - 1];
  cart.push(productToAdd);
  saveCart(cart);
}

export function deleteFromCart(id) {
    const cart = getCart();
    const filteredCart = cart.filter((cartItem) => cartItem.id !== id );
    saveCart(filteredCart);
}

export function getCart() {  
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// export default cart;
