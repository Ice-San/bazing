const intro = document.querySelector(".intro");
const content = document.querySelector(".content");
const hero = document.querySelector(".hero");

setTimeout(() => {
    content.classList.remove("invisible");

    hero.classList.remove("layer-back");
    hero.classList.add("layer-front");
    
    intro.classList.add("invisible");
}, 8405);