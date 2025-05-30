const profileEditBtn = document.querySelector(".profile-edit");

const profileInputsP = document.querySelectorAll(".profile-input > p");
const profileInputs = document.querySelectorAll(".profile-input > input");

profileEditBtn.addEventListener("click", () => {

    profileInputsP.forEach(profileInputP => {
        profileInputP.classList.toggle("invisible");
    });

    profileInputs.forEach(profileInput =>  {
        profileInput.classList.toggle("invisible");
    });

    if(profileEditBtn.querySelector("p").textContent === "Cancel Edit") {
        profileEditBtn.querySelector("p").innerText = "Edit Profile";
        return;
    }

    profileEditBtn.querySelector("p").innerText = "Cancel Edit";
});