import React from "react";

function Joke({ category, type, joke, error }) {
  return (
    <div>
      <h3>Category: {category}</h3>
      <p>Type: {type}</p>
      <p>Joke {joke}</p>
      <p>Error {error}</p>
    </div>
  );
}

export default Joke;
