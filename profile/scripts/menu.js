const menu = document.querySelector(".menu");
const navbar = document.querySelector(".sticky-content");
const profileContent = document.getElementById("profile-content");

const menuContent = document.querySelector(".menu-content");
const exitMenu = document.querySelector(".exit-item");

menu.addEventListener("click", () => {
    navbar.classList.add("invisible");
    profileContent.classList.add("invisible");
    
    profileContent.classList.remove("profile-content");
    menuContent.classList.remove("invisible");
});

exitMenu.addEventListener("click", () => {
    navbar.classList.remove("invisible");
    profileContent.classList.remove("invisible");

    profileContent.classList.add("profile-content");
    menuContent.classList.add("invisible");
});