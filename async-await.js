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

function createUser(post) {
  return new Promise((resolve, reject) => {
    const error = false;
    users.push(post);
    if (!error) {
      resolve();
    } else {
      reject();
    }
  });
}

// method one
async function init() {
  await createUser({ username: "User three", online: false });
  getUsers();
}
init();

// method two
async function fetchUsers() {
  await createUser({ username: "User three", online: false });
  let data = await getUsers();
  return data;
}

fetchUsers();
