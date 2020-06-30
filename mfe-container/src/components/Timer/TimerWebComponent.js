import React, { useRef, useEffect } from "react";
import { useDynamicImport } from "../../hooks";
import { Loading, ErrorComponent } from "..";
import ShadowContainer from "react-shadow-portal";

const PATH = "http://localhost:8080/esm/htmlelement/index.js";

const renderContent = (content) => (
  <div className="Timer">
    <div className="Timer__header">
      <h3 className="Timer__title">
        {
          "Importado como un componente de React con peerDependencies React, ReactDOM y PropTypes"
        }
      </h3>
      <h5 className="Timer__title">
        Al importarse el componente se inserta dentro de un shadow DOM
        utilizando la lib react-shadow-portal
      </h5>
    </div>
    <div className="Timer__content">{content}</div>
  </div>
);

const TimerWebComponent = () => {
  const { error, loading, data } = useDynamicImport(PATH, /** cache */ false);

  const onUpdate = () => {
    alert("Presionaste Actualizar");
  };

  if (error) {
    return renderContent(<ErrorComponent description={error} />);
  }
  if (loading) {
    return renderContent(<Loading />);
  } else {
    return renderContent(
      <ShadowContainer.section>
        <data.default onUpdate={onUpdate}></data.default>
      </ShadowContainer.section>
    );
  }
};

export default TimerWebComponent;
