// ProductList.mjs
function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/?product=">
        <img src="" alt="Image of ">
        <h2 class="card__brand"></h2>
        <h3 class="card__name"></h3>
        <p class="product-card__price">$</p>
      </a>
    </li>`
  }

export default class ProductList {
    constructor(category, dataSource, listElement) {
      // You passed in this information to make the class as reusable as possible.
      // Being able to define these things when you use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
  
    async init() {
      // the dataSource will return a Promise...so you can use await to resolve it.
      const list = await this.dataSource.getData();
      // next, render the list – ** future **
    }
  }