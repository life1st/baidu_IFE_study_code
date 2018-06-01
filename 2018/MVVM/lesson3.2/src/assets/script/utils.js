export function debounce(fn, delay = 300) {
  let timer
  return function () {
    let _this = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, delay)
  }
}

export function throttle(fn, threshold = 300) {
  // 记录上次执行的时间
  var last
  // 定时器
  var timer
  // 默认间隔为 250ms
  // 返回的函数，每过 threshold 毫秒就执行一次 fn 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this
    var args = arguments
    var now = +new Date()
    // 如果距离上次执行 fn 函数的时间小于 threshold，那么就放弃
    // 执行 fn，并重新计时
    if (last && now < last + threshold) {
      clearTimeout(timer)
      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshold)
      // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

export function formatDate(timestamp) {

}

export function initMonth(y,m) {
  let now = new Date()

  if (!m || !y) {
    // todo
  }
  // 一个月中的第几天 从1开始
  let day = now.getDate()
  // 一周中的第几天 从0开始
  let week = now.getDay()

  // 第几个月 从0开始
  let month = m || now.getMonth()

  // 年份
  let year = y || now.getFullYear()

  // 本月第一天是周几
  let month1stDayOfWeek = new Date(year, month, 1).getDay()

  // 上月总天数
  let prevMonthCountDayNum = countDay(month)

  // 本月总天数
  let thisMonthCountDayNum = countDay(month + 1)

  let data = []

  // 日历的行列数（虽然都是7列。。。
  const ROW = 5
  const COLUMN = 7

  for (let i = 0; i < ROW; i++) {
    data.push([])
    for (let j = 1; j <= COLUMN; j++) {

      if (7*i + j <= month1stDayOfWeek) {
        // 上月
        data[i].push(prevMonthCountDayNum - month1stDayOfWeek + j)
      } else if ((7 * i + j) > (thisMonthCountDayNum + month1stDayOfWeek)) {
        // 下月
        data[i].push((7 * i + j) - (thisMonthCountDayNum + month1stDayOfWeek))
      } else {
        // 本月
        data[i].push(7 * i + j - month1stDayOfWeek)
      }
    }
  }

  return {
    data, month1stDayOfWeek, thisMonthCountDayNum
  }
}

export function countDay(month, flag) {
  console.log(month)
  let feb = flag ? 28 : 29
  let map = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  return map[month - 1]
}