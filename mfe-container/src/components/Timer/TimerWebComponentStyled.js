import React, { useEffect, useReducer, useRef } from "react";
import { useDynamicImport } from "../../hooks";
import { Loading, ErrorComponent } from "..";

const PATH = "http://localhost:8080/esm/htmlelementstyled/index.js";

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
    console.log(event)
    alert("Hey, soy tu padre y te escucho aunque seas una sombra, :)");
  };

  let content = null;
  if (error) {
    return <ErrorComponent description={error} />;
  }
  if (loading) {
    return <Loading />;
  } else {
    if (!window.customElements.get("timer-ce-styled")) {
      window.customElements.define("timer-ce-styled", data.default);
    }
    content = <timer-ce-styled  ref={ref}></timer-ce-styled>;
  }

  return (
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
};

export default TimerWebComponent;
