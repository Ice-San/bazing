const text = document.querySelector(".about > h2:last-child");
const texts = document.querySelectorAll(".about > h2");
const sectionText = document.querySelector(".about");

window.addEventListener("scroll", () => {
    const rect = text.getBoundingClientRect();

    if (rect.top < innerHeight) {
        const visiblePart = 1 - rect.top / innerHeight;
        const width = Math.min(visiblePart * 100, 100);

        text.style.backgroundSize = width + "% 100%";
    }
});

const textIntroOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const textIntro = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;

        entry.target.classList.add("text-intro");
        sectionText.classList.remove("opacity-zero");
        textIntro.unobserve(entry.target);
    });
}, textIntroOptions);

texts.forEach(elem => textIntro.observe(elem));