import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { updateCartCount } from "./main.js";

/* Elements */

const cartContainer =
document.getElementById("cartContainer");

const cartTotal =
document.getElementById("cartTotal");

const clearBtn =
document.getElementById("clearCartBtn");

/* Render Cart */

function renderCart() {

const cart =
getLocalStorage("cart") || [];

cartContainer.innerHTML = "";

/* If empty */

if (cart.length === 0) {

cartContainer.innerHTML =
"<p>Your cart is empty.</p>";

cartTotal.textContent = "$0.00";

updateCartCount();

return;

}

let total = 0;

/* Loop items */

cart.forEach((item, index) => {

const itemTotal =
item.price * item.quantity;

total += itemTotal;

const cartItem =
document.createElement("li");

cartItem.classList.add("cart-item");

cartItem.innerHTML = `

<h3>${item.name}</h3>

<p>
Price: $${item.price.toFixed(2)}
</p>

<p>

Quantity:

<button
class="qty-btn decrease"
data-index="${index}">
−
</button>

<span class="qty-number">
${item.quantity}
</span>

<button
class="qty-btn increase"
data-index="${index}">
+
</button>

</p>

<p>
Total:
$${itemTotal.toFixed(2)}
</p>

<button
class="remove-btn"
data-index="${index}">
Remove
</button>

`;

cartContainer.appendChild(cartItem);

});

/* Update total */

cartTotal.textContent =
`$${total.toFixed(2)}`;

/* Attach button events */

attachEvents();

}

/* Button Events */

function attachEvents() {

let cart =
getLocalStorage("cart") || [];

/* REMOVE */

document
.querySelectorAll(".remove-btn")
.forEach(btn => {

btn.addEventListener("click", () => {

const index =
parseInt(btn.dataset.index);

cart.splice(index, 1);

setLocalStorage("cart", cart);

renderCart();

updateCartCount();

});

});

/* INCREASE */

document
.querySelectorAll(".increase")
.forEach(btn => {

btn.addEventListener("click", () => {

const index =
parseInt(btn.dataset.index);

cart[index].quantity += 1;

setLocalStorage("cart", cart);

renderCart();

updateCartCount();

});

});

/* DECREASE */

document
.querySelectorAll(".decrease")
.forEach(btn => {

btn.addEventListener("click", () => {

const index =
parseInt(btn.dataset.index);

if (cart[index].quantity > 1) {

cart[index].quantity -= 1;

} 
else {

cart.splice(index, 1);

}

setLocalStorage("cart", cart);

renderCart();

updateCartCount();

});

});

}

/* CLEAR CART */

if (clearBtn) {

clearBtn.addEventListener("click", () => {

/* FIXED VERSION */

setLocalStorage("cart", []);

renderCart();

updateCartCount();

});

}

/* Start */

renderCart();

updateCartCount();

const cart =
getLocalStorage("cart") || [];

cartContainer.innerHTML = "";

if (cart.length === 0) {

cartContainer.innerHTML =
"<p>Your cart is empty.</p>";

cartTotal.textContent = "$0.00";

updateCartCount();

return;

}

let total = 0;

cart.forEach((item, index) => {

const itemTotal =
item.price * item.quantity;

total += itemTotal;

const cartItem =
document.createElement("li");

cartItem.classList.add("cart-item");

cartItem.innerHTML = `

<h3>${item.name}</h3>

<p>Price: $${item.price.toFixed(2)}</p>

<p>

Quantity:

<button class="qty-btn decrease"
data-index="${index}">
−
</button>

<span class="qty-number">
${item.quantity}
</span>

<button class="qty-btn increase"
data-index="${index}">
+
</button>

</p>

<p>
Total:
$${itemTotal.toFixed(2)}
</p>

<button class="remove-btn"
data-index="${index}">
Remove
</button>

`;

cartContainer.appendChild(cartItem);

});

cartTotal.textContent =
`$${total.toFixed(2)}`;

attachEvents();



function attachEvents() {

const cart =
getLocalStorage("cart") || [];

/* REMOVE ITEM */

document.querySelectorAll(".remove-btn")
.forEach(btn => {

btn.addEventListener("click", () => {

const index =
parseInt(btn.dataset.index);

cart.splice(index, 1);

setLocalStorage("cart", cart);

renderCart();

updateCartCount();

});

});

/* INCREASE */

document.querySelectorAll(".increase")
.forEach(btn => {

btn.addEventListener("click", () => {

const index =
parseInt(btn.dataset.index);

cart[index].quantity += 1;

setLocalStorage("cart", cart);

renderCart();

updateCartCount();

});

});

/* DECREASE */

document.querySelectorAll(".decrease")
.forEach(btn => {

btn.addEventListener("click", () => {

const index =
parseInt(btn.dataset.index);

if (cart[index].quantity > 1) {

cart[index].quantity -= 1;

} else {

cart.splice(index, 1);

}

setLocalStorage("cart", cart);

renderCart();

updateCartCount();

});

});

}

/* CLEAR CART */

if (clearBtn) {

clearBtn.addEventListener("click", () => {

localStorage.removeItem("cart");

renderCart();

updateCartCount();

});

}

/* START */

renderCart();

updateCartCount();