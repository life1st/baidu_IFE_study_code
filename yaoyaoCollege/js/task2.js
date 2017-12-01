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
var reg = {
    name: /\w{4,16}/g,
    password: /(\[a-z]+[A-Z]+){8,}/,

}


var vail = new vaildaete()
vail.setMsg(msg,reg)
var txt = vail.res('.Form-box');

function vaildaete() {
    var o = {}
    this.setMsg = function (msg,reg) {
        o.msg = msg
        o.reg = reg
        this.setStyle()
        console.log(o)
    }
    this.setStyle = function () {
        var promptStyle =
            '.prompt {' +
            '   position: absolute;' +
            '   left: 60px;' +
            '}'
        var styleNode = document.createElement('style')
        styleNode.innerHTML = promptStyle
        document.querySelector('head').appendChild(styleNode)
        console.log(styleNode)
    }
    this.res = function (node) {
        document.querySelector(node).addEventListener('focusin', function (e) {
            var input = e.target
            var name = input.name
            var val = input.value
            var prom = input.parentNode.querySelector('.prompt') || false
            if (prom){
                prom.remove();
            }
            var prompt = document.createElement('p')
            prompt.className = 'prompt'
            var txt = '',
                color = ''
            if (val === ''){
                txt = o.msg[name][0]
                color = '#666'
            }
            prompt.innerText = txt
            input.style.borderBottom = '1px solid ' + color
            console.log(prompt)
            input.parentNode.appendChild(prompt)
        })
        document.querySelector(node).addEventListener('focusout', function (e) {
            var input = e.target
            var name = input.name
            var node = input.parentNode.querySelector('.prompt') || false
            var val = input.value
            if (node){
                var color = ''
                console.log(node, 'node')
                if (!o.reg[name]){
                    console.log('no reg')
                    return
                }
                if (o.reg[name].test(val)) {
                    node.innerText = o.msg[name][2]
                    color = '#0f0'
                }else {
                    node.innerText = o.msg[name][1]
                    color = '#f00'
                }
                console.log(val,'val')
                node.style.color = color
                input.style.borderBottom = '1px solid ' + color
            }
        })
    }

    return this
}