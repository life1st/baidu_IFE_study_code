var phoneNum = document.getElementById('phoneNum')
var submit = document.getElementById('submit')

function Validate() {
    var o = [];
    var res = [];
    this.setData = function (data) {
        o = data;
    }

    this.getData = function () {
        if (o.length === 0) {
            return;
        }
        res = [];
        o.forEach(function (data) {
            var el = document.querySelector('input[name=' + data.name + ']')
            console.log(data.reg)
            if (data.reg.test(el.value)) {
                res.push({
                    name: data.name,
                    res: true
                })
            }else {
                res.push({
                    name: data.name,
                    res: false,
                    msg: data.msg
                })
            }
        })
        this.show(res)
        return res
    }

    this.show = function (data) {
        var nodes = document.querySelectorAll('.prompt')
        console.log(nodes)
        nodes.forEach(function (node) {
            // node.parentNode.removeChild(node);
            node.remove()
        })
        data.forEach(function (item) {
            console.log(item)
            if (!item.res) {
                var el = document.querySelector('input[name=' + item.name + ']')
                var prompt = document.createElement('p')
                prompt.className = 'prompt'
                prompt.innerText = item.msg
                el.parentNode.insertBefore(prompt, el)
            }
        })
    }

    return this;
}

var vali = new Validate();
vali.setData([
    {
        name: 'phoneNum',
        reg: /1[3578][0-9]{9}/,
        msg: '请输入正确的号码'
    },
    {
        name: 'string',
        reg: /\b(\w+)\b\s+\1\b/,
        msg: 'false'
    }
])

// var data = vali.getData();

submit.addEventListener('click', function () {
    var data = vali.getData();
})