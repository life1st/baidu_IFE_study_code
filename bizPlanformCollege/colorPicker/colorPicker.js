
;(function () {
  function colorPicker(config) {
    this.dom = config.dom
    this.randerDom(this.dom)
  }

  colorPicker.prototype.randerDom = function (dom) {
    let tpl =
      `<div class="picker-wrap">
        <div class="picker-box"><i class="picker"></i></div>
        <div class="color-switcher"><i class="picker"></i></div>
        <div class="color-selector">
          <div class="item">
            <span class="title">R</span>
            <input type="number" min="0" max="255">
          </div>
          <div class="item">
            <span class="title">G</span>
            <input type="number" min="0" max="255">
          </div>
          <div class="item">
            <span class="title">B</span>
            <input type="number" min="0" max="255">
          </div>
          <div class="line"></div>
          <div class="item">
            <span class="title">H</span>
            <input type="number" min="0" max="255">
          </div>
          <div class="item">
            <span class="title">S</span>
            <input type="number" min="0" max="255">
          </div>
          <div class="item">
            <span class="title">L</span>
            <input type="number" min="0" max="255">
          </div>
        </div>
      </div>`
    let styl =
      `<style>
        .picker-wrap {
          font-family: 'Consolas';
          display: flex;
         }
        .line {
          height: 1px;
          margin: 20px 0;
          background-color: #666;
        }
        .picker-box {
          width: 255px;
          height: 255px;
        }
       </style>
      `
    let head = document.querySelector('head')
    head.innerHTML += styl
    dom.innerHTML = tpl
  }

  window.colorPicker = colorPicker
})()
let dom = document.querySelector('.color-picker')
window.addEventListener('load', () => {
  console.log('loaded.')
  new colorPicker({
    dom
  })
})