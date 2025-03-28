// make function w/ async + await
async function getData() {
  // start try-catch
  try {
    // get response from url
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    // parse reponse
    const data = await response.json();
    // log data
    console.log(data);
    // error handling
  } catch (error) {
    // log error
    console.error("Error: ", error);
  }
}

// call function
getData();
