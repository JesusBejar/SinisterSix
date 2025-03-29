// import axios
import axios from "axios";

// make and export  function w/ axios
export function FetchData() {
  // return content
  axios
    // send request
    .get("https://jsonplaceholder.typicode.com/users/1")
    // get response from url
    .then((response) => console.log(response.data))
    // error handling
    .catch((error) => {
      console.error("Error: ", error);
    });
}

// call function within App.jsx
