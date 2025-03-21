import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [userName, setUserName] = useState("Joe");
  return (
    <main>
      <Header userName={userName} />
      <Body userName={userName} />
    </main>
  );
}

export default App;
