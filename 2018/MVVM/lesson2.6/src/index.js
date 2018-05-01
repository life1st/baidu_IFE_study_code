console.log('success load mainjs')

import './assets/style/common.less'
import san, { DataTypes } from 'san'

import tasker from './components/TaskItem'

let App = san.defineComponent({
  components: {
    'task-item': tasker
  },

  template:
    `
  <div class='root'>
    <h1>Hello San.</h1>
    <p>the first san app. Ver {{version}}</p>
    <div class='lesson9'>
      <task-item s-for="item in tasks">
        <div slot="title">{{item.title}}</div>
        <ul slot="content">
          <li s-for="li in item.content">{{li}}</li>
        </ul>
      </task-item>
      <!-- other way -->
      <task-item title="Other way">
        <ul slot="content">
          <li>用title绑定的task item</li>
          <li>第二项</li>
        </ul>
      </task-item>
    </div>
  </div>
  `,
  initData() {
    return {
      version: '0.2.6',
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