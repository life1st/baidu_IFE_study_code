import san from 'san'
import '../assets/style/tasker.less'

export default san.defineComponent({
  template: `
  <div class='task-item'>
    <div class="title" s-if="!!title">{{title}}</div>
    <div class="title" s-else>
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content" ></slot>
    </div>
    <!--<div class="border-line"></div>-->
  </div>
  `
})