import CheckoutProcess from "./CheckoutProcess.mjs";

const checkout = new CheckoutProcess("so-cart", ".checkout-summary");
checkout.init();
checkout.calculateOrdertotal();

document
  .querySelector("#zip")
  .addEventListener("blur", checkout.calculateOrdertotal.bind(checkout));

document.forms.checkout.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.currentTarget.checkValidity()) {
    checkout.checkout();
  } else {
    event.currentTarget.reportValidity();
  }
});
