import React from "react";
import ReactDOM from "react-dom";

/**
 *
 * @param {React.Component} Component
 * @param {string} tagName
 * @param {*} options, { tagName, properties, customEvents, shadowDOM, mode }
 * @returns {HTMLElement}
 */

const createHTLMElement = (
  Component,
  {
    tagName = "",
    properties = [],
    customEvents = [],
    shadowDOM = false,
    mode = "open",
  } = {}
) => {
  class WebComponent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.node = this;
      if (shadowDOM) {
        this.node = this.attachShadow({ mode });
      }
      this.render();
    }

    static get observedAttributes() {
      return [...properties] || [];
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      try {
        const events = this.getCustomEvents();
        const props = this.getCustomProps();
        ReactDOM.render(<Component {...props} {...events} />, this.node);
      } catch (error) {
          console.log(error)
      }
    }

    getCustomProps() {
      const props = {};
      properties.forEach((key) => {
        props[key] = this.getAttribute(key);
      });
      return props;
    }

    getCustomEvents() {
      const events = {};
      customEvents.forEach((key) => {
        events[key] = function (e) {
          const event = this.createEvent("Event");
          event.initEvent(key, true, true);
          this.dispatchEvent(event, e);
        };
        events[key] = events[key].bind(this);
      });
      return events;
    }

    disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this);
    }
  }
  if (tagName !== "") {
    window.customElements.define(tagName, WebComponent);
  }

  return WebComponent;
};

export default createHTLMElement;
