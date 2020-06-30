import React, { useEffect, useReducer, useRef } from "react";
import { useDynamicImport } from "../../hooks";
import { Loading, ErrorComponent } from "..";

const PATH = "http://localhost:8080/esm/routerelement/index.js";

const renderContent = (content) => (
  <div className="Timer">
    <div className="Timer__header">
      <h3 className="Timer__title">
        {"Importado como HTMLElement dentro de un shadowDOM"}
      </h3>
      <h5 className="Timer__title">
        Comportamiento de Router 2
      </h5>
    </div>
    <div className="Timer__content">{content}</div>
  </div>
);

const RouterWebComponent = () => {
  const { error, loading, data } = useDynamicImport(PATH, /** cache */ false);

  if (error) {
    return renderContent(<ErrorComponent description={error} />);
  }
  if (loading) {
    return renderContent(<Loading />);
  } else {
    if (!window.customElements.get("router-element")) {
      window.customElements.define("router-element", data.default);
    }
    return renderContent(
      <router-element></router-element>
    );
  }
};

export default RouterWebComponent;
