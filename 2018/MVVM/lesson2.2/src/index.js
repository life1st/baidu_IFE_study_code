console.log('success load mainjs')

import './assets/style/common.css'
import san, { DataTypes } from 'san'

let App = san.defineComponent({

  template: 
  `
  <div class='root'>
    <h1>Hello San.</h1>
    <p>the first san app. Ver {{version}}</p>
    <div class='lesson4'>
      <div class='btns'>
        <button on-click='addUser'>add</button>
      </div>
      <table>
        <tr>
        <th>name</th>
        <th>status</th>
        <th>operate</th>
        </tr>
        <tr s-for='user, i in users'>
        <td>{{user.name}}</td>
        <td>
          <span s-if='user.status === -1'>un verify</span>
          <span s-elif='user.status === 1'>pass</span>
          <span s-else>fail</span>
        </td>
        <td>
          <button s-if='user.status === -1' on-click='verifyUser(i)'>verify</button>
          <button s-else on-click='delUser(i)'>del</button>
        </td>
        </tr>
      </table>
    </div>
  </div>
  `,

  delUser(i) {
    // 删除数组项的方法是真的骚
    // 完了，remove方法需要 === ，改变状态后就不等了。但是也有问题啊，改变状态改变的是数据，为什么不等？
    // this.data.remove('users', user)
    // 算了 还是用 index 吧。
    this.data.removeAt('users',i)
  },
  addUser() {
    let users = [
      {
        name: 'zero',
        status: 1
      },
      {
        name: 'yily',
        status: -1
      },
      {
        name: 'Xii',
        status: -1
      }
    ]

    let index = Math.floor(Math.random() * 3) 
    let newUser = users[index]
    this.data.push('users', newUser)
  },
  verifyUser(i) {
    this.data.set(`users[${i}].status`, 1)
  },
  initData() {
    return {
      version: '0.2.2',
      users: [
        {
          name: 'anny',
          status: 1,
        },
        {
          name: 'bella',
          status: 0,
        },
        {
          name: 'carol',
          status: 1,
        }
      ]
    }
  }
})
let myApp = new App()
myApp.attach(document.body)