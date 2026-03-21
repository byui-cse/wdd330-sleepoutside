import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { updateCartCount } from "./main.js";

const cartContainer = document.getElementById("cartContainer");
const cartTotal = document.getElementById("cartTotal");

function renderCart() {
  const cart = getLocalStorage("cart") || [];
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "$0.00";
    updateCartCount(); // ✅ update when empty
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: 
          <button class="decrease" data-index="${index}">-</button>
          ${item.quantity}
          <button class="increase" data-index="${index}">+</button>
        </p>
        <p>Total: $${itemTotal.toFixed(2)}</p>
        <button class="remove" data-index="${index}">Remove</button>
      </div>
    `;
    cartContainer.appendChild(cartItem);
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;

  attachCartEvents();
}

function attachCartEvents() {
  const removeBtns = document.querySelectorAll(".remove");
  const increaseBtns = document.querySelectorAll(".increase");
  const decreaseBtns = document.querySelectorAll(".decrease");
  const cart = getLocalStorage("cart") || [];

  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      cart.splice(index, 1);
      setLocalStorage("cart", cart);
      updateCartCount(); // ✅ FIX
      renderCart();
    });
  });

  increaseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      cart[index].quantity += 1;
      setLocalStorage("cart", cart);
      updateCartCount(); // ✅ FIX
      renderCart();
    });
  });

  decreaseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      setLocalStorage("cart", cart);
      updateCartCount(); // ✅ FIX
      renderCart();
    });
  });
}

// Initialize cart
renderCart();
updateCartCount(); // ✅ also update on load