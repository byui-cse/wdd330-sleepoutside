import { alertMessage, getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  const cart = getLocalStorage("so-cart");
  setLocalStorage("so-cart", [
    ...(Array.isArray(cart) ? cart : [cart]),
    product,
  ]);
  alertMessage(`${product.Name} was added to your cart.`, false);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
