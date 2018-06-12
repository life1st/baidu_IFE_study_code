function getList(config) {
  const DATA_LEN = 300
  let data = []
  for (let i = 0; i < DATA_LEN; i++ ){
    data.push(getItem(i))
  }

  return new Promise(resolve => resolve({
    list: data,
    index: config.index
  }))
}

function getItem(index) {
  let i = index

  const TEXTS = [
    'Aliqua pariatur est consectetur consectetur et commodo dolor nostrud cupidatat.',
    'Consectetur incididunt culpa Lorem fugiat do enim.',
    'Reprehenderit qui laboris duis eiusmod fugiat amet proident et consequat ad reprehenderit occaecat.',
    'Velit non consequat occaecat consectetur id adipisicing magna nulla eiusmod irure do ipsum commodo.',
    'Nostrud duis nulla consequat dolore amet nostrud.',
    'Laboris cupidatat veniam id laborum enim eu id aute officia deserunt ut.',
    'Occaecat consequat adipisicing consequat veniam consequat laboris Lorem nulla ad.',
    'Consectetur consectetur laboris sit enim consequat adipisicing cillum mollit cillum veniam voluptate velit cillum.'
  ]
  const LEN = TEXTS.length

  let now = mockTime()

  return {
    title: `${TEXTS[i % LEN]}`,
    time: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDay()}`,
    media: mockMedia()
  }
}

function mockTime() {
  let time_str = Math.floor(Math.random * 100000000)
  return new Date(time_str)
}

function mockMedia() {
    // #define media type 
  // @1: picture
  // @2: video

  const IMGS_URL = [
    ''
  ]

  const MEDIAS = [
    {type: 1, urls: []},
    {type: 2, urls: []},
  ]

  return MEDIAS
}

export {
  getList
}