import React, { useEffect, useReducer, useRef } from "react";
import { useDynamicImport } from "../../hooks";
import { Loading, ErrorComponent } from "..";

const PATH = "http://localhost:8080/esm/htmlelementstyled/index.js";

const renderContent = (content) => (
  <div className="Timer">
    <div className="Timer__header">
      <h3 className="Timer__title">
        {"Importado como HTMLElement dentro de un shadowDOM"}
      </h3>
      <h5 className="Timer__title">
        Se definió dentro del componente el tag style
      </h5>
    </div>
    <div className="Timer__content">{content}</div>
  </div>
);

const TimerWebComponent = () => {
  const ref = useRef(null);
  const { error, loading, data } = useDynamicImport(PATH, /** cache */ false);

  useEffect(() => {
    if (ref.current) {
      ref.current.shadowRoot.addEventListener("onUpdate", onUpdate);
    }
    return () => {
      ref.current.shadowRoot.removeEventListener("onUpdate", onUpdate);
    };
  });

  const onUpdate = (event) => {
    alert("Hey, soy tu padre y te escucho aunque seas una sombra, :)");
  };

  if (error) {
    return renderContent(<ErrorComponent description={error} />);
  }
  if (loading) {
    return renderContent(<Loading />);
  } else {
    if (!window.customElements.get("timer-ce-styled")) {
      window.customElements.define("timer-ce-styled", data.default);
    }
    return renderContent(<timer-ce-styled id="timer-1" timerName={'Timer Name (propiedad pasada desde el padre, de momento solo strings)'} ref={ref}></timer-ce-styled>);
  }
};

export default TimerWebComponent;
