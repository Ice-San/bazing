document.querySelector('.profile-delete').addEventListener('click', () => {
  const loggedUser = JSON.parse(localStorage.getItem('isLogin'));
  let users = JSON.parse(localStorage.getItem('users'));

  users = users.filter(user => user.email !== loggedUser.email);

  localStorage.setItem('users', JSON.stringify(users));
  localStorage.removeItem('isLogin');

  window.location.href = "../memberzone/";
});