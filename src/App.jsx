import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Saludo from "./components/Saludo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Saludo nombre="Javier" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador es {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          molestias neque soluta nihil, quisquam illum eum consectetur. Omnis
          eveniet sequi ut. Delectus numquam eveniet ab consectetur facere
          assumenda mollitia maiores.
        </p>
      </div>
      <p className="read-the-docs">
        Click en los logos de Vite y React para aprender más
      </p>
    </>
  );
}

export default App;
