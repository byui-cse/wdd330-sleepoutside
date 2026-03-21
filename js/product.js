import { getLocalStorage, setLocalStorage } from "./utils.mjs";

// Select the Add to Cart button
const addBtn = document.getElementById("addToCart");

// Update cart count function (LOCAL version)
function updateCartCount() {
  const cart = getLocalStorage("cart") || [];
  const countElement = document.getElementById("cart-count");

  if (!countElement) return;

  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  countElement.textContent = total;
}

if (addBtn) {
  addBtn.addEventListener("click", () => {
    // Get product info from page
    const productId = addBtn.dataset.id;
    const productName = document.getElementById("productName").textContent;
    const productPrice = parseFloat(
      document.getElementById("productPrice").textContent.replace("$", "")
    );
    const productImage = document.getElementById("productImage").src;

    // Get current cart
    const cart = getLocalStorage("cart") || [];

    // Check if exists
    const existingProduct = cart.find(
      item => item.id === productId
    );

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

    // Save cart
    setLocalStorage("cart", cart);

    // ✅ UPDATE NUMBER
    updateCartCount();

    alert(`${productName} has been added to your cart!`);
  });
}

// Run on page load
updateCartCount();