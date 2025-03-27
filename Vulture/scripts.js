// fetch + url (returns postive or negative Promise)
fetch("https://jsonplaceholder.typicode.com/users")
  // parse response as JSON using .then
  .then((response) => response.json())
  // handle data
  .then((data) => {
    // log data (then inject into html)
    console.log(data);
  })
  // error handling
  .catch((error) => {
    console.error("Error: ", error);
  });
