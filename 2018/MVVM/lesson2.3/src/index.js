console.log('success load mainjs')

import './assets/style/common.css'
import san, { DataTypes } from 'san'

let App = san.defineComponent({

  template: 
  `
  <div class='root'>
    <h1>Hello San.</h1>
    <p>the first san app. Ver {{version}}</p>
    <div class='lesson5'>
      <div class='block' style="{{bgColor ? 'background-color: '+bgColor+';' : ''}}" on-click='changeColor'></div>
    </div>
  </div>
  `,
  changeColor() {
    let color = this.data.get('bgColor')
    if (color === 'black') {
      color = 'red'
    } else {
      color = 'black'
    }
    this.data.set('bgColor', color)
  },

  initData() {
    return {
      version: '0.0.4',
      bgColor: 'black'
    }
  }
})
let myApp = new App()
myApp.attach(document.body)