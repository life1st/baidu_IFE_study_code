document.querySelector('body').addEventListener('contextmenu',function (e) {
    e.preventDefault();
    removeWindow();
    var pos = {
        x: e.clientX,
        y: e.clientY
    }
    addWindow(pos);
    console.log(pos.x, pos.y,'contextmenu add');
})

document.addEventListener('click', function () {
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