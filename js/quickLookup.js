const searchInput = document.getElementById("product-search");
const searchBtn = document.getElementById("search-btn");
const products = document.querySelectorAll(".product-card");

function searchProducts() {
  const searchValue = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const name = product
      .querySelector(".card__name")
      .textContent.toLowerCase();

    const brand = product
      .querySelector(".card__brand")
      .textContent.toLowerCase();

    if (name.includes(searchValue) || brand.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

/* search when typing */
if (searchInput) {
  searchInput.addEventListener("keyup", searchProducts);
}

/* search when clicking button */
if (searchBtn) {
  searchBtn.addEventListener("click", searchProducts);
}