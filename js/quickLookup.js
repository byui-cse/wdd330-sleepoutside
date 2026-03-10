const searchInput = document.getElementById("product-search");
const products = document.querySelectorAll(".product-card");

if (searchInput) {

  searchInput.addEventListener("keyup", function () {

    const searchValue = this.value.toLowerCase();

    products.forEach((product) => {

      const name =
        product.querySelector(".card__name").textContent.toLowerCase();

      const brand =
        product.querySelector(".card__brand").textContent.toLowerCase();

      if (name.includes(searchValue) || brand.includes(searchValue)) {

        product.style.display = "block";

      } else {

        product.style.display = "none";

      }

    });

  });

}