import React, { useState, useEffect } from "react";
import axios from "axios";

function Joke({ category }) {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    axios
      .get(`https://sv443.net/jokeapi/v2/joke/${category}`)
      .then((response) => {
        setJoke(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("[Joke.jsx]", err.message);
      });
  }, [category]);

  return (
    <div>
      <h3>Category: {category}</h3>
      <p>{joke.setup}</p>
      <p>{joke.joke}</p>
      <p>{joke.delivery}</p>
    </div>
  );
}

export default Joke;
