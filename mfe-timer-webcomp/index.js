import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import createHTMLElement from "../mfe-timer-webcomp-styled/node_modules/react-create-custom-element";
import "./index.scss";

const Timer = ({ onUpdate, name }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const onClick = () => {
    console.log("update");
  };

  return (
    <div>
      {/* <link rel="stylesheet" href={STYLE_URL}></link> */}
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

export default createHTMLElement(Timer, { shadowDOM: true });
