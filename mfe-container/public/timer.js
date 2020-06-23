import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head =  document.getElementsByTagName('div')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index_timer__2vTNW {\n  background-image: linear-gradient(to right bottom, #80b918, #55a630);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  min-width: 12rem; }\n\n.index_timer__value__1jPZT {\n  font-size: 2rem;\n  font-weight: 300;\n  color: #fff;\n  text-align: center; }\n\n.index_timer__btn__3ggDP {\n  border: none;\n  display: block;\n  background-color: #fff;\n  color: #007f5f;\n  padding: 0.5rem;\n  font-size: 1.6rem;\n  text-transform: uppercase;\n  transition: all 0.2s;\n  cursor: pointer; }\n\n.index_timer__btn__3ggDP:focus {\n  outline: none; }\n\n.index_timer__btn__3ggDP:active {\n  transform: translateY(0.2rem) scale(0.99); }\n\n.index_timer__btn__3ggDP:hover {\n  outline: none; }\n\n.index_overlay__1E23D {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(92, 92, 92, 0.5);\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.index_modal__3RCGp {\n  width: 60%;\n  background-color: #fff;\n  min-height: 100px;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n";
styleInject(css_248z);

const Timer = ({name, onUpdate}) => {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const onClick = () => {
    console.log('update');
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "timer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "timer__value"
  }, time.toLocaleTimeString()), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "timer__btn",
    onClick: onClick
  }, "Update")));
};

Timer.protoTypes = {
  onUpdate: PropTypes.func,
  name: PropTypes.string
};
Timer.defaultProps = {
  onUpdate: () => {},
  name: ""
};

export default Timer;
