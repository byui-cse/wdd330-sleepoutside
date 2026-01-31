import { getLocalStorage, setLocalStorage } from "./utils.mjs";

// Select the Add to Cart button (if it exists on the page)
const addBtn = document.getElementById("addToCart");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    // Get product info from data attributes
    const id = addBtn.dataset.id;
    const name = addBtn.dataset.name;
    const price = parseFloat(addBtn.dataset.price);
    const image = addBtn.dataset.image;
    const color = addBtn.dataset.color;

    // Get the existing cart from localStorage, or empty array if none
    const cart = getLocalStorage("so-cart") || [];

    // Check if the product is already in the cart
    const exists = cart.find(item => item.id === id);

    if (!exists) {
      cart.push({
        id,
        Name: name,
        FinalPrice: price,
        Image: image,
        Colors: [{ ColorName: color }]
      });
    }

    // Save updated cart to localStorage
    setLocalStorage("so-cart", cart);

    // Redirect to success page
    window.location.href = "../checkout/success.html";
  });
}
