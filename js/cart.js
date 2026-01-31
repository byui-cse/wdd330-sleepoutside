import { getLocalStorage } from "./utils.mjs";

// Render the cart items
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || []; // handle null

  const container = document.querySelector(".product-list");

  if (cartItems.length === 0) {
    container.innerHTML = `<p class="empty-cart">Your cart is empty. <a href="../index.html">Go shopping</a>!</p>`;
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  container.innerHTML = htmlItems.join("");
}

// Template for each cart item
function cartItemTemplate(item) {
  return `
  <li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
}

renderCartContents();
