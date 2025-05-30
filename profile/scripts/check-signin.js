const isLoginData = localStorage.getItem("isLogin");
const userLoggedIn = isLoginData ? JSON.parse(isLoginData) : null;

const headerSigninBtn = document.getElementById("signin-header");
const mobileMenuSigninBtn = document.getElementById("signin-menu");

const headerProfileBtn = document.getElementById("profile-header");
const mobileMenuProfileBtn = document.getElementById("profile-menu");

if (userLoggedIn) {
    headerSigninBtn.classList.add("invisible");
    mobileMenuSigninBtn.classList.add("invisible");

    headerProfileBtn.classList.remove("invisible");
    mobileMenuProfileBtn.classList.remove("invisible");
} else {
    window.location.href = '../memberzone/';
}