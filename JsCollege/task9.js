var nodeArr = [];//储存节点遍历状态，推入动画函数延时展示

function animation(arr) {
    console.log(arr);
    var i = 0;
    var speed = 500;
    var flag = 0; //统计搜索是否找到元素
    var t = setInterval(function () {
        if(i<arr.length){
            if(i>0){
                if (arr[i-1][1] === 'null'){
                    arr[i-1][0].style.backgroundColor = '#fff';
                }else if (arr[i-1][1] === 'select') {
                    flag++;
                    arr[i-1][0].style.backgroundColor = '#9195ff';
                }
            }
            arr[i++][0].style.backgroundColor = '#cc5a59';
        }else {
            clearInterval(t);
            arr[arr.length-1][0].style.backgroundColor = '#fff';
            if (flag===0){
                alert('找不到元素.');
            }
        }
    },speed)
}

function order(node) {
    if(node!='null'){
        nodeArr.push([node,'null']);
        var children = node.children;
        for(let i = 0;i<children.length;i++){
            order(children[i]);
        }
    }
}
function search() {
    var text = document.getElementById('search_content').value;
    for (let i = 0;i<nodeArr.length;i++){
        var nodeText = nodeArr[i][0].dataset.value;
        if (nodeText.match(text)) {
            nodeArr[i][1] = 'select';
        }
    }
}

window.onload = function () {
    var rootNode = document.querySelector('.rootNode');
    var addNode = [];

    //绑定开始遍历按钮点击事件
    document.getElementById('order').onclick = function () {
        nodeArr = [];
        order(rootNode);
        animation(nodeArr);
        console.log(nodeArr)
    }

    //绑定搜索按钮事件
    document.getElementById('search_btn').onclick = function () {
        nodeArr = [];
        order(rootNode);
        search();
        animation(nodeArr);
        nodeArr = [];
    }

    //绑定节点点击事件
    document.querySelector('.rootNode').addEventListener('click',function (e) {
        if (e.target.nodeName.toUpperCase() =='DIV') {
                if(addNode.length!==0){
                    addNode[0].style.backgroundColor = '#fff';
                    addNode = [];
                }
                addNode.push(e.target);
                e.toElement.style.backgroundColor = '#1dd17c'
        }
        console.log(addNode)
    });

    //绑定添加节点事件
    document.getElementById('add_node_btn').onclick = function () {
        var nodeName = document.getElementById('node_name').value;
        var newNode  = document.createElement('div');
        newNode.setAttribute('class','new-node');
        newNode.setAttribute('data-value',nodeName);
        newNode.innerText = nodeName;
        if(addNode.length!=0){
            addNode[0].appendChild(newNode);
        }else {
            alert('未选中元素。')
        }
    }

    //绑定删除节点事件
    document.getElementById('remove_node_btn').onclick = function () {
        if(addNode.length!=0){
            addNode[0].remove();
            addNode = [];
        }else {
            alert('未选中元素。')
        }
    }
}