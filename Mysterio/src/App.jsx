import { useEffect, useState } from "react";
import { fetchData } from "./api/fetchData";

function App() {
  // useState to store user data
  const [users, setUsers] = useState([]);
  // useEffect to fetch user data upon mount (calls FetchData)
  useEffect(() => {
    fetchData()
      .then((data) => setUsers(data))
      // error handling
      .catch((error) => console.error("Error: ", error));
    // empty dependancy means run once (upon mount)
  }, []);

  // return user data using jsx
  console.log("users", users);
  return "";
}

export default App;
