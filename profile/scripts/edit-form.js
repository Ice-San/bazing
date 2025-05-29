const profileEditBtn = document.querySelector(".profile-edit");

const profileInputsP = document.querySelectorAll(".profile-input > p");
const profileInputs = document.querySelectorAll(".profile-input > input");

const profileBanner = document.querySelector(".profile-photo > .img-container");
const profileInputBanner = document.querySelector(".profile-photo > label");

profileEditBtn.addEventListener("click", () => {

    profileInputsP.forEach(profileInputP => {
        profileInputP.classList.toggle("invisible");
    });

    profileInputs.forEach(profileInput =>  {
        profileInput.classList.toggle("invisible");
    });

    profileBanner.classList.toggle("invisible");
    profileInputBanner.classList.toggle("invisible");
    profileInputBanner.classList.toggle("profile-send-img");

    if(profileEditBtn.querySelector("p").textContent === "Cancel Edit") {
        profileEditBtn.querySelector("p").innerText = "Edit Profile";
        return;
    }

    profileEditBtn.querySelector("p").innerText = "Cancel Edit";
});