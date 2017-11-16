var res = {
    head: ['姓名', '语文', '数学', '英语', '总分'],
    data: {
        '小明': [80, 70, 70],
        '小红': [90, 60, 90],
        '小亮': [60, 100, 70]
    }
};
/*
* data: {object}
*
*/
function TableDrawer(datas) {
    var table = document.createElement('table');
    var ths = '';
    var tds = '';

    datas.head.forEach((th) => {
        ths += '<th>' + th + '</th>'
    });
    var thead = '<thead><tr>'+ ths +'</tr></thead>';

    var data = datas.data
    for ( name in data){
        var countScore = 0;
        tds += '<tr>'
        tds += '<td>' + name + '</td>'
        data[name].forEach((score) => {
            countScore += score;
            tds += '<td>' + score + '</td>'
        })
        tds += '<td>' + countScore + '</td>'
        tds += '</tr>'
    }
    var tbody = '<tbody>' + tds + '</tbody>';

    table.innerHTML = thead + tbody;

    table.addEventListener('click' ,function (e) {
        console.log(e)
        switch (e.target.nodeName.toLowerCase()){
            case 'th':
        }
    })
    return table;
}

var table = new TableDrawer(res);
document.querySelector('.table-wrap').appendChild(table)