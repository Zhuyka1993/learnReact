// Файл Grandma.js
import React from "react";
import Daughter from "./Daughter";

function Grandma(props) {
  return (
    <div>
      <h1>Бабушка</h1>
      <p>{props.wisdom}</p>
      <Daughter data={props.wisdom} />
    </div>
  );
}

export default Grandma;
