const STORE_ID = 'san-todos'

function getData(id) {
  return JSON.parse(localStorage.getItem(id)) || null
}
function setData(id, data) {
  return new Promise(resolve => {
    localStorage.setItem(id, JSON.stringify(data))
    resolve(true)
  })
}
export function getTodos() {
  let data = getData(STORE_ID)
  return new Promise(resolve => {
    if (data) resolve(data)
    else resolve([])
  })
}

export function updateTodos(todos) {
  setData(STORE_ID, todos).then(res => {
    return res
  })
}