import React from "react";

import "./ErrorComponent.css";

const ErrorComponent = ({ description }) => (
  <div className="Error">
    <div className="Error__content">{description}</div>
  </div>
);

export default ErrorComponent;
