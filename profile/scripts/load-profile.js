const isLoginProfileData = localStorage.getItem("isLogin");
const userLoggedInProfile = isLoginData ? JSON.parse(isLoginProfileData) : null;

if (userLoggedInProfile) {
    const usernameParagraph = document.getElementById("username-profile");
    usernameParagraph.innerText = userLoggedInProfile.username;

    const emailParagraph = document.querySelector(".profile-inputs .profile-input:nth-child(2) p");
    emailParagraph.textContent = userLoggedInProfile.email;

    const passwordParagraph = document.querySelector(".profile-inputs .profile-input:nth-child(3) p");

    passwordParagraph.textContent = "•".repeat(userLoggedInProfile.password.length);

    const balanceElement = document.querySelector(".profile-balance p");
    balanceElement.textContent = `EUR ${userLoggedInProfile.balance.toFixed(2)}`;

    if (userLoggedInProfile.profilePicture) {
        const profileImgContainer = document.querySelector(".profile-photo > .img-container");
        
        profileImgContainer.style.backgroundImage = `url(${userLoggedInProfile.profilePicture})`;
        profileImgContainer.style.backgroundSize = "cover";
        profileImgContainer.style.backgroundPosition = "center";
    }
}