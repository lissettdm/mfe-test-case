import React from "react";
import { useDynamicImport } from "../../hooks";
import { Loading, ErrorComponent } from "..";

const PATH = "http://localhost:8080/esm/htmlelement/index.js";

const renderContent = (content) => (
  <div className="Timer">
    <div className="Timer__header">
      <h3 className="Timer__title">
        {"Importado como HTMLElement con peerDependencies React, ReactDOM"}
      </h3>
      <h5 className="Timer__title">
        Si se copia el contenido del fichero en un fichero local y se importa desde la ruta local, funciona sin problemas
      </h5>
    </div>
    <div className="Timer__content">{content}</div>
  </div>
);

const TimerWebComponent = () => {
  const { error, loading, data } = useDynamicImport(PATH, /** cache */ false);

  if (error) {
    return renderContent(<ErrorComponent description={error} />);
  }
  if (loading) {
    return renderContent(<Loading />);
  } else {
    if (!window.customElements.get("timer-ce")) {
      window.customElements.define("timer-ce", data.default);
    }
    return renderContent(<timer-ce></timer-ce>);
  }
};

export default TimerWebComponent;
