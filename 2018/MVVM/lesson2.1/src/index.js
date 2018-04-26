console.log('success load mainjs')

import './assets/style/common.css'
import san, { DataTypes } from 'san'

let App = san.defineComponent({

  template: 
  `
  <div class='root'>
    <h1>Hello San.</h1>
    <p>the first san app. Ver {{version}}</p>
    <div class='lesson3'>
      <p><input placeholder='input name' value='{= infomation.name =}' ></p>
      <p><input placeholder='input age' value='{= infomation.age =}' ></p>
      <p><input placeholder='input bio' value='{= infomation.bio =}' ></p>
    <div class='display'>
      <p>name:<span class='msg'>{{infomation.name}}</span></p>
      <p>age:<span class='msg'>{{infomation.age}}</span></p>
      <p>bio:<span class='msg'>{{infomation.bio}}</span></p>
    <button on-click='clearAll'>Clean All Info</button>
  </div>
  `,

  clearAll() {
    let info = {
      name: null,
      age: null,
      bio: null
    }
    this.data.set('infomation', info)
  },
  dataTypes: {
    infomation: DataTypes.shape({
      name: DataTypes.string,
      age: DataTypes.number,
      bio: DataTypes.string
    })
  },
  initData() {
    return {
      version: '0.0.2',
      infomation: {
        name: '',
        age: null,
        bio: ''
      }
    }
  }
})
let myApp = new App()
myApp.attach(document.body)