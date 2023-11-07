// Файл Daughter.js
import React from "react";
import Child from "./Child";

function Daughter(props) {
  return (
    <div>
      <h2>Дочь от бабушки</h2>
      <p>Полученная мудрость от Бабушки: {props.data}</p>
      <Child data={props.data} />
    </div>
  );
}

export default Daughter;
