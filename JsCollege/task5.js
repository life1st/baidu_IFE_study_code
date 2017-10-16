var left_enter = document.getElementById('left_enter'),
    right_enter = document.getElementById('right_enter'),
    left_out = document.getElementById('left_out'),
    right_out = document.getElementById('right_out');
var add = document.getElementById('add');
var bubble_sort = document.getElementById('bubble_sort'),
    quick_sort = document.getElementById('quick_sort');
var numArr = [];

var SORT = {
    bubbleSort:function (numArr) {
        for(let i = 0;i<numArr.length;i++){
            for(let j = i+1;j<numArr.length;j++){
                setTimeout(function () {
                    if (numArr[i] > numArr[j]) {
                        numArr[i] = numArr[i]+numArr[j];
                        numArr[j] = numArr[i]-numArr[j];
                        numArr[i] = numArr[i]-numArr[j];
                        NUM.initNum(numArr);
                    }
                },i*j*5)
            }
        }
    },
    veryQuickSort:function (numArr) {
        NUM.initNum(numArr.sort());
    }
};

var NUM = {
    addNum:function () {
        var numNode = document.getElementById('num');
        var num = numNode.value||' ';
        if(Number(num)>9&&Number(num)<101){
            numNode.value = '';
            return Number(num);
        }else {
            numNode.value = '输入有误.';
            setTimeout(function () {
                numNode.value = ''
            },1000);
            return false;
        }
    },

    initNum:function (numArr) {
        console.log(numArr);
        var box = document.getElementById('num_box');
        box.innerText = '';
        for(let i = 0;i<numArr.length;i++){
            var pNode = document.createElement('p');
            pNode.style.height = numArr[i]*2+'px';
            box.appendChild(pNode);
            pNode.onclick = function () {
                alert('你点击的第'+(i+1)+'个元素：'+numArr[i]+'，将被删除。')
                numArr.splice(i,1);
                initNum(numArr);//重新绑定点击事件，所有数据都是从数组中更新，保持数据纯洁~
            }
        }
    },

    randomNum:function (n,m) {
        var c = m-n+1;
        return Math.floor(Math.random()*c+n);
    }
};


left_enter.onclick = function () {
    if(numArr.length>60){
        alert('队列达到最大');
    }else{
        var num = NUM.addNum()||NUM.randomNum(10,100);
        if(num!==' '){
            numArr.unshift(num);
            NUM.initNum(numArr);
        }
    }
};
right_enter.onclick = function () {
    if(numArr.length>60){
        alert('队列达到最大');
    }else{
        var num = NUM.addNum()||NUM.randomNum(10,100);
        if(num!==' '){
            numArr.push(num);
            NUM.initNum(numArr);
        }
    }
};

left_out.onclick = function () {
    alert('你删除的元素是：'+numArr[0]);
    numArr.shift();
    NUM.initNum(numArr);
};
right_out.onclick = function () {
    alert('你删除的元素是：'+numArr[numArr.length-1]);
    numArr.pop();
    NUM.initNum(numArr);
};

add.onclick = function () {
    var num = Math.floor(Math.random()*100);
    var numNode = document.getElementById('num');
    numNode.value = '';
    numNode.value = num;
};

bubble_sort.onclick = function () {
    SORT.bubbleSort(numArr);
}
quick_sort.onclick = function () {
    SORT.veryQuickSort(numArr);
}