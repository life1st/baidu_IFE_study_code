var left_enter = document.getElementById('left_enter'),
    right_enter = document.getElementById('right_enter'),
    left_out = document.getElementById('left_out'),
    right_out = document.getElementById('right_out');
var add = document.getElementById('add');
var numArr = [];

function initNum(numArr) {
    console.log(numArr);
    var box = document.getElementById('num_box');
    box.innerText = '';
    for(let i = 0;i<numArr.length;i++){
        var pNode = document.createElement('p');
        pNode.innerText = numArr[i];
        box.appendChild(pNode);
        pNode.onclick = function () {
            alert('你点击的第'+(i+1)+'个元素：'+numArr[i]+'，将被删除。')
            numArr.splice(i,1);
            initNum(numArr);//重新绑定点击事件，所有数据都是从数组中更新，保持数据纯洁~
        }
    }
}

function addNum() {
    var numNode = document.getElementById('num');
    var num = numNode.value||' ';
    if(Number(num)||Number(num)===0){
        numNode.value = '';
        return num;
    }else {
        numNode.value = '输入有误.';
        setTimeout(function () {
            numNode.value = ''
        },1000);
        return false;
    }
}

left_enter.onclick = function () {
    var num = addNum();
    if(num!==' '){
        numArr.unshift(num);
        initNum(numArr);
    }
};
right_enter.onclick = function () {
    var num = addNum();
    if(num!==' '){
        numArr.push(num);
        initNum(numArr);
    }
};
left_out.onclick = function () {
    numArr.shift();
    initNum(numArr);
};
right_out.onclick = function () {
    numArr.pop();
    initNum(numArr);
};

add.onclick = function () {
    var num = Math.floor(Math.random()*100);
    var numNode = document.getElementById('num');
    numNode.value = '';
    numNode.value = num;
}

