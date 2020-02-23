// using fetch with promise

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  let listUsers = "";
  users.forEach(user => {
    listUsers += `<li>${user.name}</li>`;
  });
  document.body.innerHTML = listUsers;
}

getUsers();
