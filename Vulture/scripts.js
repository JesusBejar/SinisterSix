const list = document.querySelector("#display");
// fetch + url (returns postive or negative Promise)
fetch("https://jsonplaceholder.typicode.com/users")
  // parse response as JSON using .then
  .then((response) => response.json())
  // handle data
  .then((data) => {
    data.forEach((user) => {
      // log data (then inject into html dynamically)
      // console.log(data);
      const { name, email, address } = user;
      // returns all users
      const li = document.createElement("li");
      li.textContent += `${name}, ${email}, ${address.city}`;
      list.appendChild(li);
    });
  })
  // error handling
  .catch((error) => {
    console.error("Error: ", error);
  });
