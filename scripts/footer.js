const footerHeader = document.querySelector(".left-content > h2");

const footerHeaderOptions = {
    root: null,
    rootMargin: '0px',
    threadshold: 0.3
}

const footerHeaderIntro = new IntersectionObserver(entries => {
    const entry = entries[0];

    if(!entry.isIntersecting) return;

    entry.target.classList.add("text-intro");
    entry.target.classList.remove("opacity-zero");

    footerHeaderIntro.unobserve(entry.target);
}, footerHeaderOptions);

footerHeaderIntro.observe(footerHeader);

// Discount Intro

const discount = document.querySelector(".discount");

const discountOptions = {
    root: null,
    rootMargin: '0px',
    threadshold: 0.3
}

const discountIntro = new IntersectionObserver(entries => {
    const entry = entries[0];

    if(!entry.isIntersecting) return;

    entry.target.classList.add("discount-intro");
    entry.target.classList.remove("opacity-zero");

    discountIntro.unobserve(entry.target);
}, discountOptions);

discountIntro.observe(discount);

// Steve Book & Table Intro

const rightContent = document.querySelector(".right-content");

const rightContentOption = {
    root: null,
    rootMargin: '0px',
    threadshold: 0.3
}

const rightContentIntro = new IntersectionObserver(entries => {
    const entry = entries[0];

    if(!entry.isIntersecting) return;

    entry.target.classList.add("right-content-intro");
    entry.target.classList.remove("opacity-zero");

    rightContentIntro.unobserve(entry.target);
}, rightContentOption);

rightContentIntro.observe(rightContent);