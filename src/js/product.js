
import {
  getLocalStorage,
  setLocalStorage,
  updateCartCount,
} from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

function addProductToCart(product) {
  const cartItems = getLocalStorage('so-cart') || [];

  cartItems.push(product);

  setLocalStorage('so-cart', cartItems);

  updateCartCount();
}

// Add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

// Display the current cart count
updateCartCount();
