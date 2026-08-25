// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function alertMessage(message, scroll = true) {
  const alert = document.createElement("div");
  alert.className = "alert";

  const text = document.createElement("p");
  text.textContent = message;
  const close = document.createElement("button");
  close.type = "button";
  close.textContent = "X";
  close.setAttribute("aria-label", "Dismiss message");
  close.addEventListener("click", () => alert.remove());
  alert.append(text, close);

  const main = qs("main");
  main.prepend(alert);
  if (scroll) window.scrollTo(0, 0);
}

export function removeAllAlerts() {
  document.querySelectorAll(".alert").forEach((alert) => alert.remove());
}
