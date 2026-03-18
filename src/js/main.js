// import ProductList from "./ProductList.mjs";
// const listElement = document.querySelector(".product-list");
// const productList = new ProductList("tents", dataSource, listElement);
// productList.init();

// import ProductData from "./ProductData.mjs";
// const dataSource = new ProductData("tents");
// console.log(dataSource);

import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");

const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);

productList.init();