var nodeArr = [];

function animation(arr,j) {
    console.log(arr);
    var i = 0;
    var speed = 500;
    var t = setInterval(function () {
        if(i<arr.length){
            if(i>0){
                if (arr[i-1][1] === 'null'){
                    arr[i-1][0].style.backgroundColor = '#fff';
                }else if (arr[i-1][1] === 'select') {
                    arr[i-1][0].style.backgroundColor = '#9195ff';
                }
            }
            arr[i++][0].style.backgroundColor = '#cc5a59';
        }else {
            clearInterval(t);
            arr[arr.length-1][0].style.backgroundColor = '#fff';
            if (j===0){
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
    var j = 0;
    for (let i = 0;i<nodeArr.length;i++){
        var nodeText = nodeArr[i][0].dataset.value;
        if (nodeText.match(text)) {
            j++;
            nodeArr[i][1] = 'select';
        }
        console.log(nodeArr[i]);
    }
    return j;
}

window.onload = function () {
    var rootNode = document.querySelector('.rootNode');

    document.getElementById('order').onclick = function () {
        nodeArr = [];
        order(rootNode);
        animation(nodeArr,1);
        console.log(nodeArr)
    }

    document.getElementById('search_btn').onclick = function () {
        nodeArr = [];
        order(rootNode);
        var j = search();
        animation(nodeArr,j);
    }

    document.querySelector('body').addEventListener('click',function (e) {
        if (e.target.nodeName.toUpperCase() =='DIV') {
            e.toElement.style.backgroundColor = '#1dd17c'
        }
    })

}