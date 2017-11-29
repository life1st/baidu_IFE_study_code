function verificat(node,reg) {
    return !!node.querySelector('input[type=text]').value.match(reg);
}

var msg = {
    name: ['必填，长度为4-16个字符', '名称不能为空', '名称可用'],
    password: ['请输入大写字母+小写字母的组合，不少于8位', '密码格式错误', '密码不可用'],
    confirmPw: ['请再次输入密码', '两次输入不匹配', '输入正确'],
    mail: ['请输入邮箱地址', '邮箱格式错误', '邮箱格式正确'],
    phoneNum: ['请输入手机号码', '手机号码格式错误', '手机格式正确']
}


var vail = new vaildaete()
vail.setMsg(msg)
var txt = vail.res('.Form-box');

function vaildaete() {
    var o = {}
    this.setMsg = function (msg) {
        o.msg = msg;
        console.log(o)
    }
    this.res = function (node) {
        document.querySelector(node).addEventListener('focusin', function (e) {
            var input = e.target
            var name = input.name
            console.log(input, name, 'test')
            console.log(document.querySelectorAll('.prompt'))
            if (!input.parentNode.querySelector('.prompt')){
                var prompt = document.createElement('p')
                prompt.className = 'prompt'
                prompt.innerText = o.msg[name][0]
                console.log(prompt)
                input.parentNode.appendChild(prompt)
            }
        })
        document.querySelector(node).addEventListener('onchange', function (e) {
            console.log(e.target)
        })
    }

    return this
}