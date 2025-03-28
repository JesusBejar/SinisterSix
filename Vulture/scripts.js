const list = document.querySelector("#display");
// fetch + url (returns postive or negative Promise)
fetch("https://jsonplaceholder.typicode.com/users")
  // parse response as JSON using .then
  .then((response) => response.json())
  // handle data
  .then((data) => {
    let content = "";
    data.forEach((user) => {
      // log data (then inject into html)
      // console.log(data);
      const { name, email, address } = user;
      // returns all users
      content += `<li> ${name}, ${email}, ${address.city} </li>`;
    });
    list.innerHTML = content;
  })
  // error handling
  .catch((error) => {
    console.error("Error: ", error);
  });
