import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [starWarsData, setStarWarsData] = useState({});

  console.log("Rendered!");

  useEffect(() => {
    console.log("Effect ran!");
    fetch("https://swapi.dev/api/people/1")
      .then((result) => result.json())
      .then((data) => setStarWarsData(data));
  }, []);

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default App;
