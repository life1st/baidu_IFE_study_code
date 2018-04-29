console.log('success load mainjs')

import './assets/style/common.less'
import san, { DataTypes } from 'san'

import sInputer from './components/sInput'

let App = san.defineComponent({
  components: {
    's-inputer': sInputer
  },

  template:
    `
  <div class='root'>
    <h1>Hello San.</h1>
    <p>the first san app. Ver {{version}}</p>
    <div class='lesson8'>
      <div class="input">
        <div class="title">
          <div class="info">
            <span class="name">输入框</span>
            <div class="block">
              <p class="type">控件</p>
              <p class="name-en">Input</p>
            </div>
          </div>
        </div>
        <div class="content">
          <h2>基础状态</h2>
          <s-inputer placeholder="{{placeholder}}"
          on-input="handleInput"
          on-focus="handleFocus"
          on-blur="handleBlur"
          disabled="true"
          alert="{{'提示文字'}}"
          warning="{{'错误提示文字'}}"
          <!--readonly="true"-->
          value="{= value =}" />
        </div>        
      </div>
    </div>
  </div>
  `,
  handleBlur(e) {
    console.log('handle blur', e)
  },
  handleFocus(e) {
    console.log('handle focus', e)
  },
  handleInput(e) {
    console.log('handle input', e)
  },
  initData() {
    return {
      version: '0.2.4',
      msg: '',
      alert: '提示文字',
      placeholder: 'this is a inputer.',
      value: 'inputer.'
    }
  }
})
let myApp = new App()
myApp.attach(document.body)