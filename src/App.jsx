
import "./App.css";
import Mainroute from "./Routes/Mainroute";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Mainroute user={user} setUser={setUser} />
    </>
  );
}

export default App;

