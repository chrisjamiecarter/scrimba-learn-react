import { useState } from "react";

const App = () => {
  const [starWarsData, setStarWarsData] = useState(null);

  // fetch("https://swapi.dev/api/people/1")
  //   .then((result) => result.json())
  //   .then((data) => setStarWarsData(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default App;
