// fetch + url (returns postive or negative Promise)
fetch("https://jsonplaceholder.typicode.com/users")
  // parse response as JSON using .then
  .then((response) => response.json())
  // handle data
  .then((data) => {
    data.forEach((user) => {
      //   console.log(data);
      // log data (then inject into html)
      const { name, email, address } = user;
      // returns all users
      console.log(name, email, address);
    });
  })
  // error handling
  .catch((error) => {
    console.error("Error: ", error);
  });
