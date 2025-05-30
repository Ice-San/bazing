const bookInfo = JSON.parse(localStorage.getItem("bookInfo"));

if(!localStorage.getItem("bookInfo")) {
    window.location.href = "../memberzone/";
}

const titleEl = document.querySelector(".info-content > h2");
const priceEl = document.querySelector(".info-price > p:first-child");
const stockEl = document.querySelector(".info-price > p:last-child");
const descEl = document.querySelector(".info-content-about > p");
const imgContainer = document.querySelector(".info-img > .img-container");

if (titleEl) titleEl.textContent = bookInfo.name || "No title";
if (priceEl) priceEl.textContent = 'Price: EUR ' + bookInfo.price || "Price: EUR 0.00";
if (stockEl) stockEl.textContent = 'Stock: ' + bookInfo.stock || "Stock: 0";
if (descEl) descEl.textContent = bookInfo.description || "No description available.";

if (imgContainer && bookInfo.name) {
    imgContainer.style.backgroundImage = `url(../src/img/books/${bookInfo.categoria}/${bookInfo.name}.jpg)`;
    imgContainer.style.borderRadius = '8px';
}