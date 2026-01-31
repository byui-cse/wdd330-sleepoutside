// js/CheckoutProcess.mjs
import ProductData from "./ProductData.mjs";
import { qs, getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class CheckoutProcess {
  constructor(formSelector) {
    this.form = qs(formSelector);
    this.cart = getLocalStorage("cart") || [];
    this.init();
  }

  init() {
    if (!this.form) return;
    // Listen for form submission
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // HTML form validation
      if (!this.form.checkValidity()) {
        this.form.reportValidity();
        return;
      }

      // Proceed with checkout
      await this.checkout();
    });
  }

  async checkout() {
    try {
      // Normally, you'd send cart + customer info to the server
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: this.cart }),
      });

      // Convert response to JSON
      const jsonResponse = await response.json();

      if (!response.ok) {
        // Throw a custom error object
        throw { name: "servicesError", message: jsonResponse };
      }

      // Success: clear cart and redirect
      localStorage.removeItem("cart");
      window.location.href = "success.html";
    } catch (err) {
      // Handle errors (display message above form)
      this.showError(err);
    }
  }

  showError(err) {
    // Use JSON.stringify if the message is an object
    const message =
      typeof err.message === "object"
        ? JSON.stringify(err.message)
        : err.message || "Unknown error";

    // Create alert element
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
      <span>${message}</span>
      <button type="button" class="close-alert">X</button>
    `;
    const main = qs("main");
    main.prepend(alert);

    // Close button
    qs(".close-alert", alert).addEventListener("click", () => {
      main.removeChild(alert);
    });

    // Scroll to top to see alert
    window.scrollTo(0, 0);
  }
}
