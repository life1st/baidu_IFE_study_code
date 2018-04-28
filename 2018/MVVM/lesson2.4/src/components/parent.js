console.log('success load parent.')

import san from 'san'
import child from './child'


export default san.defineComponent({
  components: {
    child
  },

  template: `
  <div class='parent'>
    This is Parent Component.
    <p>
      <span s-if='!msg' class='msg'>Waiting for msg.</span>
      <span s-else>
        and msg from other:
        <br /><span class='msg'>{{msg}}</span>
      </span>
    </p>
    <child on-submit='handleSubmit'/>
  </div>
  `,
  handleSubmit(msg) {
    this.data.set('msg', msg)
    this.fire('bubbing', msg)
  },
  initData() {
    return {
      msg: ''
    }
  }
})