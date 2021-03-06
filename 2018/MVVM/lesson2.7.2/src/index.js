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
    <div class='lesson11'>
      <root />
    </div>
  </div>
  `,
  initData() {
    return {
      version: '0.2.7.2',
      tasks: [
        {
          title: '第一个task',
          content: [
            '列表中的第一项',
            '列表中的第二项',
            '列表中的第三项',
            '列表中的第四项',
          ]
        },
        {
          title: '第二个task',
          content: [
            '列表中的第一项',
            '列表中的第二项',
            '列表中的第三项',
            '列表中的第四项',
          ]
        },
        {
          title: '第三个task',
          content: [
            '列表中的第一项',
            '列表中的第二项',
            '列表中的第三项',
            '列表中的第四项',
          ]
        },
      ]
    }
  }
})
let myApp = new App()
myApp.attach(document.body)