import { useEffect, useState } from "react";
import { fetchData } from "./api/fetchData";
import "./index.css";

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
  return (
    <div>
      <ul>
        {users.map((user) => (
          // why is the key prop necessary?
          <li key={user.id}>
            {user.name}, {user.email}, {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
