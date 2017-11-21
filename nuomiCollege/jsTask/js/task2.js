var nodes = [
    {name: "父节点1",
        children: [
            {name: "子节点1"},
            {name: "子节点2"} ]},
    {name: "父节点2",
        children: [
            {name: "子节点3"},
            {name: "子节点4",
                children:[
                    {name:"子节点5"}
                    ]}
        ]}
];

function TreeMenu(node) {
    var o = {
        hasData: false
    };
    this.setData = (res) => {
        o.hasData = true;
        o.data = res;
    };
    this.getData = () => {
        return o.data;
    };
    return this;
} //没啥用...

function drawTree(data) {
    this.data = data;
    var node = document.createElement('ul');
    data.forEach((nodes) => {
        var name = nodes.name;
        var li = document.createElement('li');
        li.innerText = name;
        if (nodes.children){
            var children = nodes.children;
            var childNode = drawTree(children);
            li.appendChild(childNode);
        }
        node.appendChild(li);
    });

    var flag = 1
    node.addEventListener('click', function (e) {
        var nodeName = e.target.nodeName.toLowerCase();
        var node = e.target
        if (nodeName === 'li'){
            if (node.children.length !== 0){
                if (flag === 1){
                    node.children[0].style.display = 'none'
                }else if (flag === -1) {
                    node.children[0].removeAttribute('style');
                }
                flag = -flag;
            }
        }
    })
    return node;
}

var node = document.querySelector('.tree-menu-wrap');

var tree = drawTree(nodes);
node.appendChild(tree);