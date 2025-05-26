const inputs = document.querySelectorAll(".input");
const emailInput = document.querySelector(".input:first-child > input");
const usernameInput = document.querySelector(".input:nth-child(2) > input")
const passwordInput = document.querySelector(".input:last-child > input");
const hideBtn = document.querySelector(".password-input");
const submitBtn = document.querySelector(".signin");

let errorEmail = false;
let errorUsername = false;
let errorPassword = false;

emailInput.addEventListener("focus", () => {
    if(!errorEmail) return;

    emailInput.value = "";
    emailInput.style.color = "";
    inputs[0].style.border = "";
    errorEmail = false;
});

usernameInput.addEventListener("focus", () => {
    if(!errorUsername) return;

    usernameInput.value = "";
    usernameInput.style.color = "";
    inputs[1].style.border = "";
    errorUsername = false;
});

passwordInput.addEventListener("focus", () => {
    if(!errorPassword) return;

    passwordInput.type = "password";
    passwordInput.value = "";
    passwordInput.style.color = "";
    inputs[2].style.border = "";
    errorPassword = false;
});

submitBtn.addEventListener("click", () => {
    if(emailInput.value.trim().length === 0) {
        emailInput.value = "Please provide an email!";
        
        emailInput.style.color = "var(--red)";
        inputs[0].style.border = "2px solid var(--red)";

        errorEmail = true;
    }

    if(!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        emailInput.value = "That email is invalid!";
        
        emailInput.style.color = "var(--red)";
        inputs[0].style.border = "2px solid var(--red)";

        errorEmail = true;
    }

    if(usernameInput.value.trim().length === 0) {
        usernameInput.value = "Please provide an Username!";
        
        usernameInput.style.color = "var(--red)";
        inputs[1].style.border = "2px solid var(--red)";

        errorUsername = true;
    }

    if(passwordInput.value.trim().length === 0) {
        passwordInput.type = "text";
        passwordInput.value = "Please provide an password!";
        
        passwordInput.style.color = "var(--red)";
        inputs[2].style.border = "2px solid var(--red)";

        errorPassword = true;
    }

    if(!errorPassword && !errorEmail && !errorUsername) {
        window.location.href = '../../signin/';
    }
});

hideBtn.addEventListener("click", () => {
    const hideIcon = document.querySelector(".password-input > .img-container");

    if(hideIcon.classList.contains("show-password-icon")) {
        passwordInput.type = "password";
        hideIcon.classList.add("password-icon");
        hideIcon.classList.remove("show-password-icon");

        return;
    }

    passwordInput.type = "text";
    hideIcon.classList.remove("password-icon");
    hideIcon.classList.add("show-password-icon");
})