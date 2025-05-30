const menu = document.querySelector(".menu");
const navbar = document.querySelector(".sticky-content");
const pageBook = document.getElementById("info");

const menuContent = document.querySelector(".menu-content");
const exitMenu = document.querySelector(".exit-item");

menu.addEventListener("click", () => {
    navbar.classList.add("invisible");

    if(pageBook) {
        pageBook.classList.add("invisible");
        pageBook.classList.remove("info");
    }

    menuContent.classList.remove("invisible");
});

exitMenu.addEventListener("click", () => {
    navbar.classList.remove("invisible");
    pageBook.classList.remove("invisible");

    pageBook.classList.add("info");
    menuContent.classList.add("invisible");
});