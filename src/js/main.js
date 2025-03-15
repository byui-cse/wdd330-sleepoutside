import ProductList from './ProductList.mjs';
import ProductData from './ProductData.mjs';
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const productList = new ProductList(
  'tents',
  new ProductData('tents'),
  document.querySelector('.product-list')
);
productList.init();
