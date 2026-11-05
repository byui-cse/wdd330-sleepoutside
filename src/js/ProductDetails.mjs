import { setLocalStorage, getLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // 1. Obtener detalles del producto
    this.product = await this.dataSource.findProductById(this.productId);
    
    // 2. Renderizar el HTML
    this.renderProductDetails("main");
    
    // 3. Añadir el evento al botón
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }

  addProductToCart() {
    let cart = getLocalStorage("so-cart") || [];
    if (!Array.isArray(cart)) {
        cart = [cart];
    }
    cart.push(this.product);
    setLocalStorage("so-cart", cart);
  }

  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    // Construimos el HTML dinámico usando los datos del producto (this.product)
    const html = `
      <section class="product-detail">
        <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.Name}"
        />
        <p class="product-card__price">$${this.product.FinalPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">
          ${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
        </div>
      </section>`;
      
    element.innerHTML = html;
  }
}
