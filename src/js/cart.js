import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  // 1. Obtenemos el carrito (si es null, usamos un arreglo vacío por defecto)
  const cartItems = getLocalStorage("so-cart") || [];
  
  // 2. Dibujamos la lista de productos
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // 3. NUEVA LÓGICA: Calcular y mostrar el total
  if (cartItems.length > 0) {
    // Sumamos los precios de cada producto en el arreglo
    const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);
    
    // Mostramos el contenedor y le inyectamos el texto con el precio a 2 decimales
    document.querySelector(".cart-footer").classList.remove("hide");
    document.querySelector(".cart-total").innerHTML = `Total: $${total.toFixed(2)}`;
  } else {
    // Ocultamos el contenedor si no hay nada en el carrito
    document.querySelector(".cart-footer").classList.add("hide");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
