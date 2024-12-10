import products from "./products";

export function addToCart(index, quantity) {
  const cart = getCart();
  const productToAdd = products[parseInt(index) - 1];
  productToAdd.quantity = quantity;
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

export function updateQuantity(id, newQuantity) {
  const cart = getCart();
  const correspondingItem = cart.find((item) => item.id === id);
  correspondingItem.quantity = newQuantity;
  saveCart(cart);
}

// export default cart;
