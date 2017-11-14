function FloatWindow(options) {
    var o = {
        width: (options.width || '400') + 'px',
        height: (options.height || '300') + 'px',
        title: options.title || '浮出层标题',
        msg: options.msg || '默认提示',
        btn: options.btn || '',
        class : options.className || 'float-window',
        animation: options.animation || true
    };

    //内容区域的html字符串模板
    var content = '';
    content += '<div class="content"><p class="msg">'+ o.msg +'</p>'
    if (!!o.btn) {
        content += '<div class="btn-box">'
        o.btn.forEach(function (ctx) {
            content += '<button>'+ ctx +'</button>';
        })
        content += '</div>'
    }
    content += '</div>'

    //整个窗口的html字符串模板
    var box = '<div class="box" style="height:'+o.height+';width:'+o.width+';">'
            + '<h2>' + o.title + '</h2>'
            + content
            + '</div>';

    //遮罩层的添加
    var node = document.createElement('div');
    node.className = o.class;
    node.innerHTML = box;
    node.addEventListener('click', function (e) {
        if (e.target.className === 'float-window') {
            this.remove();
        }
    })

    //添加方法
    this.show = function() {
        node.style.display = 'block';
    }
    this.hide = function() {
        node.style.display = 'none';
    }
    this.remove = function() {
        node.parentNode.removeChild(node);
    }

    document.querySelector('body').appendChild(node);
    return this;
}

var window1 = new FloatWindow({
    width: 500,
    height: 400,
    title: '这是一个浮出层',
    btn: ['确定', '取消'],
    msg: '浮出层提示信息'
})

document.querySelector('body').addEventListener('click', function (e) {
    switch (e.target.className.toLowerCase()){
        case 'show-window':
            window1.show();
            break;
        case 'add-window':
            console.log('111')
            var window2 = new FloatWindow({
                title: '弹出层2',
                btn: ['非常确定', '一般确定'],
                msg: '这是第二个弹出层，第一个关闭后被销毁了,这个点一次就会创建一次'
            }).show();
    }
})