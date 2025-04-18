const intro = document.querySelector(".intro");
const content = document.querySelector(".content");

setTimeout(() => {
    content.classList.remove("invisible");
}, 8200);

setTimeout(() => {
    intro.classList.add("invisible");
}, 8405);