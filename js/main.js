import { getLocalStorage, qs } from "./utils.mjs";

export function updateCartCount() {
  const cart = getLocalStorage("cart") || [];
  const countElement = qs("#cart-count");

  if (!countElement) return;

  const total = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  countElement.textContent = total;
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});