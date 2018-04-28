console.log('hey there, it\'s child.')

import san from 'san'

export default san.defineComponent({
  template: `
  <div class='child'>
    <p class='desc'>I'm child component,and there it's.</p>
    <p>child: <input type='text' value='{= msg =}'><button on-click='submitIt'>click to tell parent</button></p>
  </div>
  `,
  submitIt() {
    let msg = this.data.get('msg')
    console.log('handle msg', msg)
    this.fire('submit', msg)
  },
  initData() {
    return {
      msg: ''
    }
  }
})