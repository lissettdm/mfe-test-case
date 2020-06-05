import React, { useEffect } from "react";
import "./App.css";

const URL = "http://192.168.1.86:8080/";

const WEB_COMPONENTS = ["counter.bundle.js", "timer/static/js/main.js"];

const App = () => {
  useEffect(() => {
    WEB_COMPONENTS.forEach((component) => {
      const script = document.createElement("script");
      script.src = URL + component;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <div className="App">
      <div className="App__header">
        <h1 className="App__header-title">Web Components</h1>
      </div>

      <div className="web-components">

        <count-ce></count-ce>
        <timer-ce></timer-ce>
      </div>
    </div>
  );
};

export default App;
