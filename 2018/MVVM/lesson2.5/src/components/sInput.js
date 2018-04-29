console.log('sinputer loaded.')

import san from 'san'
import '../assets/style/inputer.less'

export default san.defineComponent({
  template: `
  <div class='inputer'>
    <p class="alert" s-if="!!alert">
      <span class="content">{{alert}}</span>
    </p>
    <input 
    class="{{!!warning ? 'warning' : ''}}"
    type="text" 
    value="{= value =}"
    disabled="{{disabled ? 'true' : '' }}"
    readonly="{{readonly ? 'ture' : ''}}"
    placeholder="{{placeholder}}"
    on-focus="emitFocus" 
    on-blur="emitBlur"
    on-input="emitInput">
    <span class="warning-text" s-if="!!warning">{{warning}}</span>
  </div>
  `,

  emitBlur(e) {
    this.fire('blur', e)
  },
  emitFocus(e) {
    this.fire('focus', e)
  },
  emitInput(e){
    this.fire('input', e)
  },
  initData() {
    return {
      msg: `I'm inputer.`,
    }
  }
})