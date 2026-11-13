

import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { updateCartCount } from './utils.mjs';

const dataSource = new ProductData('tents');

const listElement = document.querySelector('.product-list');

const productList = new ProductList(
  'tents',
  dataSource,
  listElement
);

productList.init();

// Display the current cart count
updateCartCount();
