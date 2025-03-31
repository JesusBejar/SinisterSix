// import axios
import axios from "axios";

// make and export  function w/ axios
export function fetchData() {
  // return content
  return (
    axios
      // send request
      .get("https://jsonplaceholder.typicode.com/users")
      // get response from url
      // response.data is parsed JSON
      .then((response) => response.data)
      // error handling
      .catch((error) => {
        console.error("Error: ", error);
      })
  );
}

// call function within App.jsx
