function adShow(config) {
  let picList = config.picList
  let element = config.element
  this.picLength = 0
  let addItem = item => {
    let src = item.src
    let alt = item.alt
    let adItem =
      `<div class="ad-item">
        <a href="#">
          <img src="${src}" alt="${alt}">
        </a>
      </div>`

    console.log('ad-item', adItem)
    return adItem
  }
  let addStyl = () => {
    let stylTpl =
      `.ad-item {
        position: absolute;
        top: 0;
        left: 0;
      }
      .ad-wrap {    
        position: relative;
        display: inline-block;
        width: 289px;
        height：100px;
      }
      .ad-btns {
        position: relative;
        z-index: 10;
      }
      .prev-ad {
        position: absolute;
        left: 0;
      }
      .next-ad {
        position: absolute;
        right: 0;
      }
      `
    var adStyl = document.createElement('style')
    adStyl.innerHTML = stylTpl
    document.querySelector('head').appendChild(adStyl)
  }
  let switchItem = (num) => {
    let len = this.length
  }
  let addEvents = () => {
    let btns = document.querySelector('.ad-btns')
    btns.addEventListener('click', event => {
      var btn = event.target.className.toLocaleLowerCase()
      if (btn === 'prev-ad') {
        switchItem(-1)
      } else if (btn === 'next-ad') {
        switchItem(1)
      }
    })
  }
  let render = (picList, element) => {
    let list = picList
    let len = list.length
    let res = ''
    if (len === 0) {
      return false
    }
    if (this.length < len) {
      for (let i = this.length; i < len; i++ ){
        res += addItem(list[i])
      }
    }
    this.length = len
    let btns =
      `
        <div class="ad-btns">
          <button class="prev-ad">prev</button>
          <button class="next-ad">next</button>
        </div>
      `
    res = `<div class='ad-wrap'>${btns}${res}</div>`
    addStyl()
    element.innerHTML = res

  }

  let res = false
  render(picList, element) ?
    res = true : res = false
  return res
}

function init() {
  let picList = [
    {
      src: './img/ad-img.png',
      alt: '第一张图片'
    },
    {
      src: './img/ad-img.png',
      alt: '第二张图片'
    },
    {
      src: './img/ad-img.png',
      alt: '第三张图片'
    },
    {
      src: './img/ad-img.png',
      alt: '第四张图片'
    }
  ]
  var showWrap = document.getElementsByClassName('ad-show')[0]

  adShow({
    element: showWrap,
    picList
  })
}

init();