const text = document.querySelector(".about h2:last-child");

window.addEventListener("scroll", () => {
    const rect = text.getBoundingClientRect();

    if (rect.top < innerHeight) {
        const visiblePart = 1 - rect.top / innerHeight;
        const width = Math.min(visiblePart * 170, 100);

        text.style.backgroundSize = width + "% 100%";
    }
});