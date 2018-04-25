console.log('success load mainjs')

import './assets/style/common.css'
import iconHappy from './assets/image/icon_happy.png'
import _ from 'lodash'
import printIn from './print'
import san from 'san'

let App = san.defineComponent({
  template: 
  `
  <div class='root'>
  <h1>Hello San.</h1>
  <p>the first san app. Ver {{version}}</p>
  <img src='${iconHappy}' >
  </div>
  `,

  initData() {
    return {
      version: '0.0.1'
    }
  }
})
let myApp = new App()
myApp.attach(document.body)