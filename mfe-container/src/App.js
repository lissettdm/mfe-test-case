import React, { useEffect } from "react";
import "./App.css";
import { TimerWebComponent, TimerWebComponentStyled } from "./components";

const App = () => {
  console.log(window.React)

  return (
    <div className="App">
      <div className="App__header">
        <h1 className="App__header-title">Componentes web</h1>
      </div>
      <div className="App__container">
        <TimerWebComponentStyled />
        <TimerWebComponent />
      </div>
    </div>
  );
};

export default App;
