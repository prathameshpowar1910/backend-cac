import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/superheroes")
      .then((response) => {
        setSuperheroes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1> Chai with Backend{">>>>"}Frontend </h1>
      <p>Superheroes : {superheroes.length} </p>
      {superheroes.map((superhero) => (
        <div key={superhero.id}>
          <h3>{superhero.name}</h3>
          <p>{superhero.universe}</p>
        </div>
      ))}
    </>
  );
}

export default App;
