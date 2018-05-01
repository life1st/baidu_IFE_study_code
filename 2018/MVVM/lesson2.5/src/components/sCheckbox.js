console.log('checkboxer loaded.')

import san from 'san'
import '../assets/style/checkboxer.less'

export default san.defineComponent({
  template: `
  <div class='checkboxer'>
    <label class="s-checkbox {{size ? size : 'md'}}">
      <input type="checkbox" 
      on-change="emitChange"
      disabled="{{disabled ? true : false}}"
      checked="{{checked ? true : false}}">
      <i class="icon"></i>
      <slot></slot>
    </label>
  </div>
  `,
  emitChange(e) {
    this.fire('change', e)
  },
  initData() {
    return {
      checkedColor: 'f00',
    }
  }
})