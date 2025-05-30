const sumaryMobileBtn = document.querySelector(".cart-sumary-mobile-checkout");
const sumaryBtn = document.querySelector(".cart-sumary-checkout");

sumaryBtn.addEventListener("click", () => {
    localStorage.setItem("cart", []);
    window.location.href = "../memberzone/";
});

sumaryMobileBtn.addEventListener("click", () => {
    localStorage.setItem("cart", []);
    window.location.href = "../memberzone/";
});