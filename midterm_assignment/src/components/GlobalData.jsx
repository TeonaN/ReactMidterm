import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Categories";

function GlobalData() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://sv443.net/jokeapi/v2/categories")
      .then((response) => {
        setCategory(response.data.categories);
        console.log(response.data.categories);
      })
      .catch((err) => {
        console.error("[GlobalData.jsx]", err.message);
      });
  }, []);

  const style = {
    fontWeight: "bold",
  };
  //   const categories= category.map(ob =>{
  //       ret
  //   })

  let content = null;
  let id = Math.round(Math.random() * 1000);

  content = category.map((ob) => {
    return <Categories key={id++} category={ob}></Categories>;
  });

  return (
    <div className="row flex-column">
      <h1 style={style}>Global Data</h1>
      {content}
    </div>
  );
}

export default GlobalData;
