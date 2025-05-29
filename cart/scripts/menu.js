const menu = document.querySelector(".menu");
const navbar = document.querySelector(".sticky-content");
const cartMenuContent = document.getElementById("cart-content");

const menuContent = document.querySelector(".menu-content");
const exitMenu = document.querySelector(".exit-item");

menu.addEventListener("click", () => {
    navbar.classList.add("invisible");

    if(cartMenuContent) {
        cartMenuContent.classList.add("invisible");
        cartMenuContent.classList.remove("cart-content");
    }

    menuContent.classList.remove("invisible");
});

exitMenu.addEventListener("click", () => {
    navbar.classList.remove("invisible");
    cartMenuContent.classList.remove("invisible");
    cartMenuContent.classList.add("cart-content");

    menuContent.classList.add("invisible");
});