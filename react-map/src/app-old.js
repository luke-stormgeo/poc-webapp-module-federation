import React from 'react'
import ReactDOM from 'react-dom/client'

class App extends React.Component {

  render() {
    const reactVersion = require('../package.json').dependencies['react'];

    return ([
        <h1>
          React
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>,
        <p>
          React Version: {reactVersion}
        </p>
    ])
  }
}

class ReactElement extends HTMLElement {
  root = ReactDOM.createRoot(this);
  connectedCallback() {
    this.root.render(<App/>);
  }
}

customElements.define('react-element', ReactElement);