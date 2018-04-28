console.log('success load mainjs')

import './assets/style/common.less'
import san, { DataTypes } from 'san'

import parent from './components/parent'

let App = san.defineComponent({
  components: {

  },

  template: 
  `
  <div class='root'>
    <h1>Hello San.</h1>
    <p>the first san app. Ver {{version}}</p>
    <div class='lesson7'>
      <div class='result'>
        <span s-if='!msg'>waiting for msg from child.</span>
        <span s-else>msg recived:{{msg}}</span>
      </div>
      <parent on-bubbing='handleMsg' />
    </div>
  </div>
  `,
  handleMsg(msg) {
    console.log('mainJS', msg)
    this.data.set('msg', msg)
  },
  initData() {
    return {
      version: '0.2.4',
      msg: ''
    }
  }
})
let myApp = new App()
myApp.attach(document.body)