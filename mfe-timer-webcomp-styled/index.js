import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import createHTMLElement from "react-create-custom-element";
import style from "./index.scss";

const Timer = ({ onUpdate, timerName }) => {
  const [time, setTime] = useState(new Date());
  const [open, SetOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const onClick = () => {
    SetOpen(true);
  };

  const onTimeUpdated = () => {
    SetOpen(false);
    onUpdate(new Date().getTime());
  };

  return (
    <div>
      <style>{style}</style>
      <h3>{timerName}</h3>
      <div className="timer">
        <span className="timer__value">{time.toLocaleTimeString()}</span>
        <button type="button" className="btn btn-default" onClick={onClick}>
          Ajustar
        </button>
      </div>
      {open && (
        <div className="overlay">
          <div className="modal">
            <div className="modal__body">TODO: Actualizar hora aquí</div>
            <div className="modal__footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onTimeUpdated}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Timer.protoTypes = {
  onUpdate: PropTypes.func,
  name: PropTypes.string,
};

Timer.defaultProps = {
  onUpdate: () => {},
  name: "",
};

export default createHTMLElement(Timer, {
  shadowDOM: true,
  properties: ["timerName"],
  customEvents: ["onUpdate"],
});
