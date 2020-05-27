import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)

    const name = this.getAttribute('name')
    if (!name) {
      throw new Error('name is required')
    }

    ReactDOM.render(<App name={name} />, mountPoint)
  }
}

customElements.define('x-search', XSearch)
