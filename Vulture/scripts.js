// fetch + url (returns postive or negative Promise)
fetch("https://jsonplaceholder.typicode.com/users")
  // parse response as JSON using .then
  .then((response) => response.json())
  // handle data
  .then((data) => {
    console.log(data);
    // log data (then inject into html)
    const { name: name, email: email, address: address } = data[0];
    // returns one user , the first one
    console.log(name, email, address);
  })
  // error handling
  .catch((error) => {
    console.error("Error: ", error);
  });
