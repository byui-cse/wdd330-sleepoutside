import { getLocalStorage, setLocalStorage } from "./utils.mjs";

// Select the Add to Cart button
const addBtn = document.getElementById("addToCart");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    // Get product info from the page
    const productId = addBtn.dataset.id;
    const productName = document.getElementById("productName").textContent;
    const productPrice = parseFloat(document.getElementById("productPrice").textContent.replace("$", ""));
    const productImage = document.getElementById("productImage").src;

    // Get current cart from localStorage
    const cart = getLocalStorage("cart") || [];

    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
      });
    }

    // Save updated cart back to localStorage
    setLocalStorage("cart", cart);

    // Optional: feedback to user
    alert(`${productName} has been added to your cart!`);
  });
}