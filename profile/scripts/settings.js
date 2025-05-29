const profileAppThemeBtn = document.getElementById("profile-edit-theme");
const profileRedeemBtn = document.getElementById("profile-edit-redeem");

const profileNavBar = document.querySelector(".sticky-content");
const profileContentContainer = document.getElementById("profile-content");
const profilePopUp = document.getElementById("profile-popup");

const profilePopUpHeader = profilePopUp.querySelector("h2");
const profileThemeContent = document.getElementById("profile-popup-theme");
const profileRedeemCode = document.querySelector(".profile-popup-input");

// Choose an Theme

profileAppThemeBtn.addEventListener("click", () =>  {
    profileNavBar.classList.add("invisible");
    profileContentContainer.classList.add("invisible");
    profileContentContainer.classList.remove("profile-content");
    profilePopUp.classList.remove("invisible");
    profilePopUp.classList.add("profile-popup");

    profilePopUpHeader.innerText = "App Theme";
    profileThemeContent.classList.remove("invisible");
    profileThemeContent.classList.add("profile-popup-theme");
});

const profileWhiteTheme = document.querySelector(".profile-white-btn");
const profileBlackTheme = document.querySelector(".profile-black-btn");

profileWhiteTheme.addEventListener("click", () => {
    if(profileBlackTheme.classList.contains("profile-selected-btn")) return;

    profileWhiteTheme.classList.toggle("profile-selected-btn");
});

profileBlackTheme.addEventListener("click", () => {
    if(profileWhiteTheme.classList.contains("profile-selected-btn")) return;

    profileBlackTheme.classList.toggle("profile-selected-btn");
});

// Send an Redeem Code

profileRedeemBtn.addEventListener("click", () =>  {
    profileNavBar.classList.add("invisible");
    profileContentContainer.classList.add("invisible");
    profileContentContainer.classList.remove("profile-content");
    profilePopUp.classList.remove("invisible");
    profilePopUp.classList.add("profile-popup");

    profilePopUpHeader.innerText = "Redeem Code";
    profileRedeemCode.classList.remove("invisible");
});

// Exit from PopUp

const profilePopUpCancelBtn = document.querySelector(".profile-cancel-btn");

profilePopUpCancelBtn.addEventListener("click", () => {
    profileNavBar.classList.remove("invisible");
    profileContentContainer.classList.remove("invisible");
    profileContentContainer.classList.add("profile-content");
    profilePopUp.classList.add("invisible");
    profilePopUp.classList.remove("profile-popup");

    profilePopUpHeader.innerText = "";

    if(!profileRedeemCode.classList.contains("invisible")) {
        profileRedeemCode.classList.add("invisible");
    }

    if (!profileThemeContent.classList.contains("invisible")) {
        profileThemeContent.classList.add("invisible");
        profileThemeContent.classList.remove("profile-popup-theme");
    }
});