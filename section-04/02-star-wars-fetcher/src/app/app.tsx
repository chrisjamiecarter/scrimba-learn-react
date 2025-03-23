import { useEffect, useState } from "react";

const App = () => {
  const [characterId, setCharacterId] = useState<number>(1);
  const [starWarsData, setStarWarsData] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${characterId}`)
      .then((result) => result.json())
      .then((data) => setStarWarsData(data));
  }, [characterId]);

  return (
    <div>
      <h2>Character ID: {characterId}</h2>
      <button onClick={() => setCharacterId((prev) => prev + 1)}>
        Get next character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default App;
