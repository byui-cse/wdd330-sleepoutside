// Query selector shortcut
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// Get data from localStorage safely
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Cross-device click handler
export function setClick(selector, callback) {
  const element = qs(selector);
  if (!element) return;

  element.addEventListener("touchend", (event) => {
    event.preventDefault();
    callback(event);
  });

  element.addEventListener("click", callback);
}