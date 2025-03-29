import { useState } from "react";
import { FetchData } from "./api/fetchData";

function App() {
  const [count, setCount] = useState(0);

  return <FetchData />;
}

export default App;
