function verificat(node,reg) {
    return !!node.querySelector('input[type=text]').value.match(reg);
}

document.querySelector('.Form-box').addEventListener('click',function (e) {
    console.log(e)
})

var msg = {
    name: ['必填，长度为4-16个字符', '名称不能为空', '名称可用'],
    password: ['请输入大写字母+小写字母的组合，不少于8位','密码不可用'],
    confirmPw: ['d']
}