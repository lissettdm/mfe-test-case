import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import createHTMLElement from "react-create-custom-element";
import Page1 from "./Page1";
import Page2 from "./Page2";
import style from "./index.scss";

const RouterApp2 = () => {
  return (
    <BrowserRouter>
      <>
        <style>{style}</style>
        <ul className={"test"}>
          <li>
            <NavLink to="/page1">Pagina 1</NavLink>
          </li>
          <li>
            <NavLink to="/page2">Pagina 2</NavLink>
          </li>
        </ul>
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" render={Page2} />
      </>
    </BrowserRouter>
  );
};

export default createHTMLElement(RouterApp2, {
  shadowDOM: true,
});
