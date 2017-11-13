function FloatWindow(options) {
    var o = options;
    var node = document.createElement('div');
    node.className = o.class || 'float-window'
    var box = document.createElement('div');
    box.className = 'box';
    box.style.width = (o.width || '400') + 'px';
    box.style.height = (o.height || '300') + 'px';
    var header = document.createElement('h2');
    header.innerText = o.title || '浮出层标题';
    box.appendChild(header);
    node.appendChild(box);

    node.addEventListener('click', function (e) {
        if (e.target.className != 'box') {
            node.parentNode.removeChild(node);
        }
    })
    return node;
}

var window1 = new FloatWindow({
    width: 500,
    height: 400,
    title: '这是一个浮出层',
    btn: ['确定', '取消']
})

document.querySelector('input[type=button]').onclick = function () {
    document.querySelector('body').appendChild(window1);
}