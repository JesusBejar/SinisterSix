const list = document.querySelector("#display");
// make function w/ async + await
async function getData() {
  // start try-catch
  try {
    // get response from url
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // parse reponse
    const data = await response.json();
    // inject data into html
    let content = "";
    data.forEach((user) => {
      const { name, email, address } = user;
      //   console.log(name, email, address);
      content += `<li> ${name}, ${email}, ${address.city} </li>`;
    });
    list.innerHTML = content;
    // error handling
  } catch (error) {
    // log error
    console.error("Error: ", error);
  }
}

// call function
getData();
