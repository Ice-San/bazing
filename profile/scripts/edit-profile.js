const usernameInput = document.querySelector(".profile-inputs .profile-input:nth-child(1) input");
  const emailInput = document.querySelector(".profile-inputs .profile-input:nth-child(2) input");
  const passwordInput = document.querySelector(".profile-inputs .profile-input:nth-child(3) input");

  const saveBtn = document.querySelector(".profile-save");

  let loggedUser = JSON.parse(localStorage.getItem("isLogin"));

  saveBtn.addEventListener("click", () => {
    const newUsername = usernameInput.value.trim();
    const newEmail = emailInput.value.trim();
    const newPassword = passwordInput.value;

    if (!newUsername) return alert("Username cannot be empty");
    if (!newEmail || !newEmail.includes("@")) return alert("Please enter a valid email");
    if (!newPassword) return alert("Password cannot be empty");

    const users = JSON.parse(localStorage.getItem("users"));

    const userIndex = users.findIndex(u => u.email === loggedUser.email);
    users[userIndex] = {
      ...users[userIndex],
      username: newUsername,
      email: newEmail,
      password: newPassword
    };

    localStorage.setItem("users", JSON.stringify(users));

    loggedUser = {
      ...loggedUser,
      username: newUsername,
      email: newEmail,
      password: newPassword
    };
    localStorage.setItem("isLogin", JSON.stringify(loggedUser));

    window.location.reload();
  });