// Файл Child.js
import React from "react";

function Child(props) {
  return (
    <div>
      <h3>Ребенок</h3>
      <p>Полученная мудрость от Дочери: {props.data}</p>
    </div>
  );
}

export default Child;
