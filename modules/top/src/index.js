import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

class XTop extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)

    new Vue({
      el: mountPoint,
      template: '<App/>',
      components: { App },
    })
  }
}

customElements.define('x-top', XTop)
