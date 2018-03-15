function adShow(config) {
  let picList = config.picList
  let element = config.element
  this.picLength = 0
  this.nowPosition = 0
  this.boxSize = config.size
  let addItem = (item, i) => {
    let src = item.src
    let alt = item.alt
    let picWidth = this.boxSize.width
    let picLeft = picWidth * i
    let adItem =
      `<div class="ad-item" style="left: ${picLeft}px;">
        <a href="#">
          <img src="${src}" alt="${alt}" class="ad-img">
        </a>
      </div>`

    console.log('ad-item', adItem)
    return adItem
  }
  let addStyl = () => {
    let {width, height} = {...this.boxSize}
    let stylTpl =
      `
      .ad-wrap {    
        position: relative;
        display: inline-block;
        overflow: hidden;
        transition: all .3s;
      }
      .ad-item {
        position: absolute;
        top: 0;
        left: 0;
        width: ${width}px;
        height: ${height}px;
        foot-size: 0;
      }
      .ad-img {
        width: ${width}px;
        display: inline-block;
      }
      .ad-btns {
        position: absolute;
        z-index: 10;
        width: ${width}px;
        left: 0;        
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
    let adBox = element
    adBox.style.width = width + 'px'
    adBox.style.height = height + 'px'
    adBox.style.overflow = 'hidden'
    var adStyl = document.createElement('style')
    adStyl.innerHTML = stylTpl
    document.querySelector('head').appendChild(adStyl)
  }
  let switchItem = (num) => {
    let len = this.picLength
    let pos = this.nowPosition
    let width = this.boxSize.width
    let adWrap = document.querySelector('.ad-wrap')
    let adBox = element
    console.log('switchItem', len, pos, width, adWrap)
    adWrap.style.width = len * width + 'px'
    if (pos + num > len) {
      //位置超过图片数量
      this.nowPosition = 0
      adWrap.style.transform = `translate3D(0, 0, 0)`
    } else if (pos + num < 0) {
      //位置小于起始位置
      this.nowPosition = len - 1
      let translateX = this.nowPosition * width
      adWrap.style.transform = `translate3D(${-translateX}px, 0, 0)`
    } else {
      this.nowPosition = this.nowPosition + num
      let translateX = this.nowPosition * width
      console.log('translate', translateX)
      adWrap.style.transform = `translate3D(${-translateX}px, 0, 0)`
    }
  }
  let addEvents = () => {
    let btns = document.querySelector('.ad-btns')
    btns.addEventListener('click', event => {
      var btn = event.target.className.toLocaleLowerCase()
      console.log('btn click', btn)
      if (btn === 'prev-ad') {
        switchItem(-1)
      } else if (btn === 'next-ad') {
        switchItem(1)
      }
    })
    if (config.autoplay) {
      var delay = config.delay || 1000
      this.t = setInterval(() => {
        switchItem(1)
      }, delay)
    }
  }
  let render = (picList, element) => {
    let list = picList
    let len = list.length
    let res = ''
    if (len === 0) {
      return false
    }
    if (this.picLength < len) {
      for (let i = this.picLength; i < len; i++ ){
        res += addItem(list[i], i)
      }
    }
    this.picLength = len
    let btns =
      `
        <div class="ad-btns">
          <button class="prev-ad">prev</button>
          <button class="next-ad">next</button>
        </div>
      `
    res = `<div class='ad-wrap'>${res}</div>${btns}`
    addStyl()
    element.innerHTML = res
    addEvents()
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
    picList,
    size: {
      height: 100,
      width: 300
    },
    autoplay: true,
  })
}

init();