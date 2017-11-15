function FloatWindow(options) {
    var o = {
        width: (options.width || '400'),
        height: (options.height || '300'),
        title: options.title || '浮出层标题',
        msg: options.msg || '默认提示',
        btn: options.btn || '',
        class : options.className || 'float-window',
        animation: options.animation || true,
        moveable: options.moveable || 1
    };
    o.left = (window.innerWidth - o.width)/2
    o.top = (window.innerHeight -o.height)/2
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
    var box = '<div class="box" style="height:'+o.height+'px;width:'+o.width+'px;top:'+o.top+'px;left:'+o.left+'px;">'
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

    var move = function() {
        //拖动
        var click = 0,
            center = 1;
        var x,y;
        node.addEventListener('mousedown' ,function (e) {
            if (e.target.nodeName.toLowerCase() === 'h2'){
                click = 1;
                x = e.clientX - o.left;
                y = e.clientY - o.top;
            }
        })
        node.addEventListener('mouseup', function (e) {
            click = 0;
        })
        node.addEventListener('mousemove', function (e) {
            if (click != 1){
                return;
            }
            center = 0;
            var box = node.querySelector('.box')
            o.left = e.clientX -x;
            o.top = e.clientY -y;
            box.style.left = o.left + 'px';
            box.style.top = o.top + 'px';
        })
    }


    this.show = function() {
        node.style.display = 'block';
    }
    this.hide = function() {
        node.style.display = 'none';
    }
    this.remove = function() {
        node.parentNode.removeChild(node);
    }
    window.onresize = function () {
        if (center === 0){
            return;
        }
        var box = node.querySelector('.box');//todo: 存在两个窗口时，不能获取当前窗口
        o.left = (window.innerWidth - o.width)/2;
        o.top = (window.innerHeight - o.height)/2;
        box.style.left = o.left + 'px';
        box.style.top = o.top + 'px';
    }
    if (o.moveable === 1){
        console.log('moveable')
        move();
    }
    document.querySelector('body').appendChild(node);
    return this;
}

var window1 = new FloatWindow({
    width: 500,
    height: 400,
    title: '这是一个浮出层',
    btn: ['确定', '取消'],
    msg: '浮出层提示信息',
})

document.querySelector('body').addEventListener('click', function (e) {
    switch (e.target.className.toLowerCase()){
        case 'show-window':
            window1.show();
            break;
        case 'add-window':
            var window2 = new FloatWindow({
                title: '弹出层2',
                btn: ['非常确定', '一般确定'],
                msg: '这是第二个弹出层，第一个关闭后被销毁了,这个点一次就会创建一次'
            }).show();
    }
})