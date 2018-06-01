console.log('success load mainjs')

import './assets/style/common.less'
import san, { DataTypes } from 'san'

import root from './root.san'

let App = san.defineComponent({
  components: {
    root
  },

  template:
    `
  <div class='main'>
    <h1>Hello San.</h1>
    <p>the first san app. Ver {{version}}</p>
    <div class='lesson31'>
      <root />
    </div>
  </div>
  `,
  initData() {
    return {
      version: '0.3.1',
    }
  }
})
let myApp = new App()
myApp.attach(document.body)