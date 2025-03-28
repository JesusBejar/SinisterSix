const list = document.querySelector("#display");
// make function w/ async + await
async function getData() {
  // start try-catch
  try {
    // get response from url
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // parse reponse
    const data = await response.json();
    // inject data into html dynamically
    data.forEach((user) => {
      const { name, email, address } = user;
      //   console.log(name, email, address);
      //   create element
      const li = document.createElement("li");
      li.textContent = `${name}, ${email}, ${address.city}`;
      //   append to list
      list.appendChild(li);
    });
    // error handling
  } catch (error) {
    // log error
    console.error("Error: ", error);
  }
}

// call function
getData();
