import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import createHTMLElement from "react-create-custom-element";
import style from "./index.scss";

const Timer = ({ name, onUpdate }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const onClick = () => {
    onUpdate();
  };

  return (
    <div>
      <style>{style}</style>
      <div className="timer">
        <span className="timer__value">{time.toLocaleTimeString()}</span>
        <button type="button" className="timer__btn" onClick={onClick}>
          Update
        </button>
      </div>
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

// export default createHTMLElement(Timer, {
//   shadowDOM: true,
//   properties: ["timerName"],
//   customEvents: ["onUpdate"],
// });

export default Timer;
