let users = [
  { username: "User one", online: true },
  { username: "User two", online: false }
];

function getUsers() {
  setTimeout(() => {
    let listUsers = "";
    users.forEach((user, index) => {
      listUsers += `<li>${user.username} ${
        user.online ? "Online" : "Offline"
      }</li>`;
    });
    document.body.innerHTML = listUsers;
  }, 1000);
}

function createUser(post, callback) {
  setTimeout(() => {
    users.push(post);
    callback();
  }, 2000);
}

createUser({ username: "User three", online: false }, getUsers);
