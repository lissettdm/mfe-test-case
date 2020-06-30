import React, { useEffect } from "react";
import "./App.css";
import {
  TimerWebComponent,
  TimerWebComponentStyled,
  RouterWebComponent,
  RouterWebComponent2,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="App__header">
        <h1 className="App__header-title">Componentes web</h1>
        <h3 className="App__header-subtitle">
          React, ReactDOM y PropTypes se utilizan de forma global
        </h3>
      </div>
      <div className="App__container">
        <div className="App__sidebar">
          <TimerWebComponentStyled />
          <TimerWebComponent />
        </div>
        <div className="App__routes">
          <RouterWebComponent />
          <RouterWebComponent2 />
        </div>
      </div>
    </div>
  );
};

export default App;
