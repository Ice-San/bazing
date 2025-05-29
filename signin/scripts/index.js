const inputs = document.querySelectorAll(".input");
const emailInput = document.querySelector(".input:first-child > input");
const passwordInput = document.querySelector(".input:last-child > input");
const hideBtn = document.querySelector(".password-input");
const submitBtn = document.querySelector(".signin");

let errorEmail = false;
let errorPassword = false;

emailInput.addEventListener("focus", () => {
    if(!errorEmail) return;

    emailInput.value = "";
    emailInput.style.color = "";
    inputs[0].style.border = "";
    errorEmail = false;
});

passwordInput.addEventListener("focus", () => {
    if(!errorPassword) return;

    passwordInput.type = "password";
    passwordInput.value = "";
    passwordInput.style.color = "";
    inputs[1].style.border = "";
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

    if(passwordInput.value.trim().length === 0) {
        passwordInput.type = "text";
        passwordInput.value = "Please provide an password!";
        
        passwordInput.style.color = "var(--red)";
        inputs[1].style.border = "2px solid var(--red)";

        errorPassword = true;
    }

    const usersSignInData = JSON.parse(localStorage.getItem("users")) || [];
    
    const userSignIn = usersSignInData.find(user => user.email === emailInput.value);
    if(!userSignIn) {
        emailInput.value = "That email doens't exists!";
        
        emailInput.style.color = "var(--red)";
        inputs[0].style.border = "2px solid var(--red)";

        errorEmail = true;
    } else {
        if(userSignIn.password === passwordInput.value) {
            if(!errorPassword && !errorEmail) {
                localStorage.setItem("isLogin", "true");
                window.location.href = '../../memberzone/';
            }
        } else {
            passwordInput.type = "text";
            passwordInput.value = "Password doesn't matches!";
            
            passwordInput.style.color = "var(--red)";
            inputs[1].style.border = "2px solid var(--red)";

            errorPassword = true;
        }
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