function initNum(numArr) {
    console.log(numArr);
    var box = document.getElementById('num_box');
    box.innerText = '';
    for(let i = 0;i<numArr.length;i++){
        var pNode = document.createElement('p');
        pNode.innerText = numArr[i][0];
        if (numArr[i][1] =='select') {
            pNode.setAttribute('class','select');
        }
        box.appendChild(pNode);
        pNode.onclick = function () {
            alert('你点击的第'+(i+1)+'个元素：'+numArr[i]+'，将被删除。');
            numArr.splice(i,1);
            initNum(numArr);//重新绑定点击事件，所有数据都是从数组中更新，保持数据纯洁~
        }
    }
}
function addNum() {
    var numNode = document.getElementById('content_input');
    var num = numNode.value;
    if(num!=''){

        //字面量正则在规则不变时可以获得更好的性能
        //调用构造函数适合模式会发生变化时使用，例如用户输入
        var reg = /\D/;//看了半天以为要很复杂的正则，灵机一动匹配非数字不就好了

        num = num.split(reg);
        numNode.innerText = '';
        return num;
    }else {
        numNode.innerText = '请输入后添加.';
        var t = setTimeout(function () {
            numNode.innerText = '';
            clearTimeout(t);
        },1000);
        return false;
    }
}

function initDom() {
    var left_enter = document.getElementById('left_enter'),
        right_enter = document.getElementById('right_enter'),
        left_out = document.getElementById('left_out'),
        right_out = document.getElementById('right_out');
    var add = document.getElementById('add');
    var select_btn = document.getElementById('select_btn');
    var numArr = [];


    left_enter.onclick = function () {
        var num = addNum();
        console.log(num)
        if(num!==' '){
            for(let i = num.length-1;i>=0;i--){
                numArr.unshift([(num[i]),'null']);
            }
            initNum(numArr);
        }
    };
    right_enter.onclick = function () {
        var num = addNum();
        if(num!==' '){
            for(let i = 0;i<num.length;i++){
                numArr.push([num[i],'null']);
            }
            initNum(numArr);
        }
    };
    left_out.onclick = function () {
        alert('你删除的元素是：'+numArr[0]);
        numArr.shift();
        initNum(numArr);
    };
    right_out.onclick = function () {
        alert('你删除的元素是：'+numArr[numArr.length-1]);
        numArr.pop();
        initNum(numArr);
    };

    add.onclick = function () {
        var num = Math.floor(Math.random()*100);
        var inputNode = document.getElementById('content_input');
        inputNode.value = num;
    };

    select_btn.onclick = function () {
        var content = document.getElementById('select_content').value;
        for (var i = 0;i<numArr.length;i++){
            numArr[i][1] = 'null';
            if(numArr[i][0].match(content)){
                numArr[i][1] = 'select';
            }
        }
        initNum(numArr);
    }
}

window.onload = function () {
    initDom();
};