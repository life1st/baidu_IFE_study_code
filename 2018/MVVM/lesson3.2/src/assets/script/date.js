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