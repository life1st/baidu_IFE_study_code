import san from 'san'

import sInput from './sInput.san'
import { initMonth } from "../assets/script/utils";
import '../assets/style/sDatePicker.less'

let sDatePicker = san.defineComponent({
  template: `
  <div class='s-date-picker'>
    <button on-click="closeDatePicker">close</button>
    <s-input on-focus="openDatePicker" value="{= date =}"/>
    <div class="picker" s-if="isOpenDatePicker">
      <div class="header">
        <i class="btn prev-year" on-click="setDate('prevYear')"></i>
        <i class="btn prev-month" on-click="setDate('prevMonth')"></i>
        <i class="btn next-month" on-click="setDate('nextMonth')"></i>
        <i class="btn next-year" on-click="setDate('nextYear')"></i>
        <p class="date-display">{{timestamp | format}}</p>
      </div>
      <div class="body">
        <table>
          <tr>
            <th s-for="item in weekTitle">{{item}}</th>
          </tr>
          <tr s-for="week, i in month">
            <td s-for="day, j in week"
            class="day {{isThisMonth(i, j)}}"
            on-click="selectDay(day)">{{day}}</td>
          </tr>
        </table>
      </div>
    </div>  
  </div>
  `,
  // san-loader 好像有问题，为啥用单文件不刷新?
  components: {
    's-input': sInput
  },
  initData() {
    return {
      date: '',
      timestamp: 12,
      weekTitle: ['日', '一', '二', '三', '四', '五', '六'],
      month: [],
      month1stDayOfWeek: 0,
      thisMonthCountDayNum: null,
      d: null,
      m: null,
      y: null
    }
  },
  openDatePicker() {
    this.data.set('isOpenDatePicker', true)
    console.log(this.data.get('isOpenDatePicker'))
  },
  closeDatePicker() {
    this.data.set('isOpenDatePicker', false)
    console.log(this.data.get('isOpenDatePicker'))
  },
  isThisMonth(i, j) {
    let month1stDayOfWeek = this.data.get('month1stDayOfWeek')
    let thisMonthCountDayNum = this.data.get('thisMonthCountDayNum')
    if ((7 * i + j) < month1stDayOfWeek) {
      return 'prev'
    } else if ((7 * i + j) > thisMonthCountDayNum) {
      return 'next'
    } else {
      return ''
    }
  },
  setDate(str) {
    let y = this.data.get('y')
    let m = this.data.get('m')
    let d = this.data.get('d')
    let now = new Date(y, m, d)
    y = now.getFullYear()
    m = now.getMonth()
    d = now.getDate()
    switch (str) {
      case 'prevYear':
        y = now.getFullYear() - 1
        break
      case 'prevMonth':
        m = now.getMonth() - 1
        if (m < 0) m = 11
        break
      case 'nextMonth':
        m = now.getMonth() + 1
        break
      case 'nextYear':
        y = now.getFullYear() + 1
        break
    }
    let {data, month1stDayOfWeek, thisMonthCountDayNum} = initMonth(y, m)
    this.data.set('month', data)
    this.data.set('month1stDayOfWeek', month1stDayOfWeek)
    this.data.set('thisMonthCountDayNum', thisMonthCountDayNum)
    this.data.set('timestamp', new Date(y, m, d))
    this.data.set('d', d)
    this.data.set('m', m)
    this.data.set('y', y)
    console.log(this.data.get('timestamp'))
  },
  selectDay(day) {
    let y = this.data.get('y')
    let m = this.data.get('m') + 1
    let date = `${y}-${m}-${day}`
    console.log(date, this.data.get('thisMonthCountDayNum'))
    this.data.set('date', date)
    this.closeDatePicker()
    this.fire('selectDate', date)
  },
  inited() {
    let now = new Date()
    let y = now.getFullYear()
    let m = now.getMonth()
    let d = now.getDate()

    let {data, month1stDayOfWeek, thisMonthCountDayNum} = initMonth(y, m)
    this.data.set('month', data)
    this.data.set('month1stDayOfWeek', month1stDayOfWeek)
    this.data.set('thisMonthCountDayNum', thisMonthCountDayNum)
    this.data.set('d', d)
    this.data.set('m', m)
    this.data.set('y', y)
    this.data.set('timestamp', now)
  },
  filters: {
    format(value) {
      let date = new Date(value)
      let d = {
        YY: date.getFullYear(),
        MM: date.getMonth() + 1,
        DD: date.getDate()
      }
      return `${d.YY}/${d.MM}/${d.DD}`
    }
  }

})

export default sDatePicker