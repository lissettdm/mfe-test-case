import React, { useEffect } from "react";
import "./App.css";
import { TimerWebComponent, TimerWebComponentStyled, RouterWebComponent, RouterWebComponent2 } from "./components";

const App = () => {

  return (
    <div className="App">
      <div className="App__header">
        <h1 className="App__header-title">Componentes web</h1>
      </div>
      <div className="App__container">
        <TimerWebComponentStyled />
        <TimerWebComponent />
        <RouterWebComponent />
        <RouterWebComponent2 />
      </div>
    </div>
  );
};

export default App;
