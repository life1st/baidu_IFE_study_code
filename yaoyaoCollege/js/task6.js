function FloatWindow(options) {
    var o = options;
    this.width = o.width || 400;
    this.height = o.height || 300;
    var node = document.createElement('div');
    node.className = o.class || 'float-window'
    var box = document.createElement('div');
    box.className = 'box';
    var header = document.createElement('h2');
    header.innerText = o.title || '浮出层标题';
    box.appendChild(header);
    node.appendChild(box);
    return node;
}

var window1 = new FloatWindow({
    width: 500,
    height: 400,
    title: '这是一个浮出层'
})

document.querySelector('input[type=button]').onclick = function () {
    document.querySelector('body').appendChild(window1);
}