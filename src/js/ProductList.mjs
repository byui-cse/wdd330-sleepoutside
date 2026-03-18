// function productCardTemplate(product) {
//   return `<li class="product-card">
//     <a href="product_pages/${product.Id}.html">
//       <img src="${product.Image}" alt="Image of ${product.Name}">
//       <h3 class="card__brand">${product.Brand.Name}</h3>
//       <h2 class="card__name">${product.NameWithoutBrand}</h2>
//       <p class="product-card__price">$${product.FinalPrice}</p>
//     </a>
//   </li>`;
// }

// export default class ProductList {
//   constructor(category, dataSource, listElement) {
//     this.category = category;
//     this.dataSource = dataSource;
//     this.listElement = listElement;
//   }

//   async init() {
//     const list = await this.dataSource.getData();
//     console.log(list); // TEMP: check if data is loading

//     this.renderList(list);
//   }

//   renderList(products) {
//   const html = products.map(productCardTemplate);
//   this.listElement.innerHTML = html.join("");
//     }
    
// }

import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `
    <li class="product-card">
      <a href="product_pages/?products=${product.Id}">
        <img src="${product.Image}" alt="${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
    `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    // const htmlStrings = list.map(productCardTemplate);
    // this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

    // apply use new utility function instead of the commented code above
    renderListWithTemplate(productCardTemplate, this.listElement, list);

  }

}