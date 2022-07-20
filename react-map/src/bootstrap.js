import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

class ReactElement extends HTMLElement {
  root = ReactDOM.createRoot(this);

  connectedCallback() {
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

// customElements are attached to the window
// https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements
customElements.define("react-element", ReactElement);
