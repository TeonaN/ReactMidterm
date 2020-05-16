import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Joke from "./Jokes/Joke";
import Login from "./Form/Login";
import { AuthContext } from "./contex/authContext";

function GlobalData() {
  const { isAuthenticated } = useContext(AuthContext);
  const [categories, setcategories] = useState([]);
  const [category, setcategory] = useState(null);
  useEffect(() => {
    axios
      .get("https://sv443.net/jokeapi/v2/categories")
      .then((response) => {
        setcategories(response.data.categories);
        console.log(response.data.categories);
      })
      .catch((err) => {
        console.error("[GlobalData.jsx]", err.message);
      });
  }, []);

  const style = {
    fontWeight: "bold",
  };

  let content = null;
  let id = Math.round(Math.random() * 1000);

  function handleClick(countryId) {
    setcategory(countryId);
  }

  content = categories.map((ob) => {
    return (
      <button
        key={id++}
        value={ob}
        onClick={(e) => handleClick(e.target.value)}
      >
        {ob}
      </button>
    );
  });

  return (
    <div className="row flex-column">
      <h1 style={style}>Global Data</h1>
      {content}
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Joke category={category} />}
    </div>
  );
}

export default GlobalData;
