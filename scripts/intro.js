const intro = document.querySelector(".intro");
const hero = document.querySelector(".hero");

setTimeout(() => {
    hero.classList.remove("invisible");
}, 8200);

setTimeout(() => {
    intro.classList.add("invisible");
}, 8405);