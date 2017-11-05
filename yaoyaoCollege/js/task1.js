function verificat(node,reg) {
    return !!node.querySelector('input[type=text]').value.match(reg);
}
function addClass(node,newClassName) {
        var n = node;
        var c = newClassName;
        var oldClass = node.getAttribute('class');
        n.className = oldClass + ' ' + c;
}

document.querySelector('.name input[type=submit]').onclick = function () {
    var n = document.querySelector('.name');
    var r = /\W{4,16}/;
    var t = n.querySelector('.tips');
    console.log(verificat(n,r))
    if (verificat(n,r)){
        t.className = 'tips';
        t.innerText = '输入正确。';
        addClass(t,'success')
        //submit logic
    }else {
        t.className = 'tips';
        t.innerText = '必填，长度为4~16个字符之间。'
        addClass(t,'false');
    }
}
document.querySelector('.other_name input[type=submit]').onclick = function () {
    var n = document.querySelector('.other_name');
    var r = /\W+/;
    var t = n.querySelector('.tips');
    console.log(verificat(n,r))
    if (verificat(n,r)){
        t.className = 'tips';
        t.innerText = '输入正确。';
        addClass(t,'success')
        //submit logic
    }else {
        t.className = 'tips';
        t.innerText = '姓名不能为空。'
        addClass(t,'false');
    }
}
document.querySelector('.yet_another_name input[type=submit]').onclick = function () {
    var n = document.querySelector('.yet_another_name');
    var r = /\W+/;
    var t = n.querySelector('.tips');
    console.log(verificat(n,r))
    if (verificat(n,r)){
        t.className = 'tips';
        t.innerText = '名称格式正确。';
        addClass(t,'success')
        //submit logic
    }else {
        t.className = 'tips';
        t.innerText = '名称格式不正确。';
        addClass(t,'false');
    }
}