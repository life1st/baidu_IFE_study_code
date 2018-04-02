let dom = document.querySelector('.color-picker')

;(function () {
  function colorPicker(config) {
    this.dom = config.dom
    this.randerDom(this.dom)
  }

  colorPicker.prototype.randerDom = function (dom) {
    console.log(dom)
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
        </div>
      </div>`
    let styl =
      `<style>
        .picker-wrap {
          font-family: 'Consolas';
         }
       </style>
      `
    let head = document.querySelector('head')
    head.innerHTML += styl
    dom.innerHTML = tpl
  }

  window.addEventListener('load', () => {
    console.log('loaded.')
    new colorPicker({
      dom
    })
  })
})()
