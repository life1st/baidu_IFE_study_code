function animation(arr) {
    console.log(arr)
    var i = 0;
    var speed = 500;
    var t = setInterval(function () {
        if(i<arr.length){
            if(i>0){
                arr[i-1][0].style.backgroundColor = '#fff';
            }
            arr[i++][0].style.backgroundColor = '#cc5a59';
        }else {
            clearInterval(t);
            arr[arr.length-1][0].style.backgroundColor = '#fff';
        }
    },speed)
}

//若二叉树为空，则空操作返回，否则先访问根结点，然后前序遍历左子树，再前序遍历右子树。
function perOrder(node) {
    if(node!='null'){
        nodeArr.push([node,node.innerText]);
        if (!!node.firstElementChild){
            perOrder(node.firstElementChild);
        }
        if(!!node.lastElementChild){
            perOrder(node.lastElementChild);
        }
    }
}

//若树为空，则空操作返回，否则从根结点开始（注意并不是先访问根结点），中序遍历根结点的左子树，然后是访问根结点，最后中序遍历右子树。
function inOrder(node) {
    if(node!='null'){
        if (!!node.firstElementChild){
            inOrder(node.firstElementChild);
        }
        nodeArr.push([node,node.innerText]);
        if(!!node.lastElementChild){
            inOrder(node.lastElementChild);
        }
    }
}

//若树为空，则空操作返回，否则从左到右先叶子后结点的方式遍历访问左右子树，最后访问根结点。
function postOrder(node) {
    if(node!='null'){
        if (!!node.firstElementChild){
            postOrder(node.firstElementChild);
        }
        if(!!node.lastElementChild){
            postOrder(node.lastElementChild);
        }
        nodeArr.push([node,node.innerText]);
    }
}

var nodeArr = [];
window.onload = function () {
    var rootNode = document.querySelector('.rootNode');

    document.getElementById('per_order').onclick = function () {
        nodeArr = [];
        perOrder(rootNode);
        animation(nodeArr);
    };
    document.getElementById('in_order').onclick = function () {
        nodeArr = [];
        inOrder(rootNode);
        animation(nodeArr);
    };
    document.getElementById('post_order').onclick = function () {
        nodeArr = [];
        postOrder(rootNode);
        animation(nodeArr);
    };
}