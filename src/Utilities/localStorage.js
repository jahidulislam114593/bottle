const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const saveToLS = (cart) => {
  const storedCart = JSON.stringify(cart);
  localStorage.setItem("cart", storedCart);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);

  // store to local storage
  saveToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveToLS(remaining);
};

export { addToLS, getStoredCart, removeFromLS };
