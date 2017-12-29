// WebExtensions / Chrome compat
var browser = browser || chrome;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#msg').value = browser.storage.local.get('netflix_msg', (result) => {
    document.querySelector('#msg').value = result.netflix_msg || '';
  });
  document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
    browser.storage.local.set({
      netflix_msg: document.querySelector('#msg').value,
    });
  });
});
