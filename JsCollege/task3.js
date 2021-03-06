/* getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
    var data = [];
    var dataNode = document.getElementById('source');
    var list = dataNode.getElementsByTagName('li');
    for (var i = 0;i<list.length;i++){
        var listNode = list[i].innerText.split('：');
        data.push([listNode[0], listNode[1]]);
    }
    /* data = [["北京", 90],["北京", 90]……] */
    return data;
}

/* sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
    for (var i = 0;i<data.length;i++){
        for (var j = 0; j < data.length - 1 - i; j++){
            if (data[j][1] > data[j + 1][1]) {
                var temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}
/* render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    var resort = document.getElementById('resort');
    var num = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    for(var i=0;i<data.length;i++){
        var liNode = document.createElement('li');
        var bNode = document.createElement('b');
        bNode.appendChild(document.createTextNode(data[i][1]));
        if(i>10){
            liNode.appendChild(document.createTextNode('第'+(i+1)+'名：'+data[i][0]+'：'));
        }
        liNode.appendChild(document.createTextNode('第'+num[i]+'名：'+data[i][0]+'：'));
        liNode.appendChild(bNode);
        resort.appendChild(liNode);
    }
}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {
    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    var sort_btn = document.getElementById('sort-btn');
    sort_btn.onclick = function () {
        btnHandle();
    }
}

init();