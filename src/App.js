// Файл App.js
import "./App.css";
import Grandma from "./Grandma";
import Daughter from "./Daughter";
import Child from "./Child";

function App() {
  return (
    <div className="first-test">
      <Grandma wisdom={"ніколи не блядуй"} />
      <Daughter
        data={
          "Я викинула  бабцю з цієї ланки, і створила свою мудрість -  путін хуйло"
        }
      />
      <Child
        data={
          "Мене так задовбали батьки, невже вони не рощуміють, що головне - це Блохерство?"
        }
      />
    </div>
  );
}

export default App;
