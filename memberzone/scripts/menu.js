const menu = document.querySelector(".menu");
const navbar = document.querySelector(".sticky-content");
const pageMenuContent = document.querySelector(".page-content");
const resultTagMenuContent = document.querySelector(".result-tag-content");
const resultSearchMenuContent = document.querySelector(".result-search-content");

const menuContent = document.querySelector(".menu-content");
const exitMenu = document.querySelector(".exit-item");

menu.addEventListener("click", () => {
    navbar.classList.add("invisible");
    pageMenuContent.classList.add("invisible");
    resultSearchMenuContent.classList.add("invisible");
    resultTagMenuContent.classList.add("invisible");

    menuContent.classList.remove("invisible");
});

exitMenu.addEventListener("click", () => {
    navbar.classList.remove("invisible");
    pageMenuContent.classList.remove("invisible");
    resultSearchMenuContent.classList.remove("invisible");
    resultTagMenuContent.classList.remove("invisible");

    menuContent.classList.add("invisible");
});