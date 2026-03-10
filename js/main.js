import { getLocalStorage, qs } from "./utils.mjs";

function updateCartCount() {
  const cart = getLocalStorage("so-cart");
  const countElement = qs("#cart-count");

  if (!countElement) return;

  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  countElement.textContent = total;
}

updateCartCount();