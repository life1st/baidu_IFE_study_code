document.querySelector('body').addEventListener('contextmenu',function (e) {
    e.preventDefault();
    removeWindow();
    var pos = {
        cX: e.clientX,
        cY: e.clientY,
        iH: window.innerHeight,
        iW: window.innerWidth,
    }
    if (pos.iW - pos.cX < 120){ //120是css中定义的右键菜单的宽度
        pos.x = pos.cX - 120;
    }else {
        pos.x = pos.cX;
    }
    if (pos.iH - pos.cY < 35*3){ //35是算出来的每一行的高度，3是右键菜单的行数...以hardcode为耻。
        pos.y = pos.cY - 35*3
    }else {
        pos.y = pos.cY;
    }
    addWindow(pos);
    console.log(pos.x, pos.y,'contextmenu add');
})

document.addEventListener('click', function (e) {
    var node = e.target;
    var nodeName = e.target.nodeName.toLowerCase();
    if (nodeName === 'p'){
        console.log(node.innerText);
    }
    removeWindow();
})
function removeWindow() {
    var box = document.querySelector('.context-menu')
    if(box){
        document.querySelector('body').removeChild(box)
    }
}
function addWindow(pos) {
    var box = document.createElement('div')
    var content =
        '<p>Menu item 1</p>'+
        '<p>Menu item 2</p>'+
        '<p>Menu item 3</p>';
    box.className = 'context-menu';
    box.style.top = pos.y + 'px';
    box.style.left = pos.x + 'px';
    box.innerHTML = content;
    document.querySelector('body').appendChild(box);
}