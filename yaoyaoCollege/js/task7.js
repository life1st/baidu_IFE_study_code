var res = {
    head: [
        {ctx: '姓名', sort: false},
        {ctx: '语文', sort: true},
        {ctx: '数学', sort: true},
        {ctx: '英语', sort: true},
        {ctx: '生物', sort: true},
        {ctx: '地理', sort: true},
        {ctx: '化学', sort: true},
        {ctx: '总分', sort: true},
    ],
    data: [
        {name: '小明',scores: []},
        {name: '小红',scores: []},
        {name: '小张',scores: []},
        {name: '小王',scores: []},
        {name: '小孙',scores: []},
        {name: '小亮',scores: []}
        ],
    //data有6个科目的数据，写死不好看。调用mockData()循环随机数据。
};
function mockData(data) {
    data.data.forEach((student) => {
        var length = data.head.length - 2 - student.scores.length;
        for (var i = 0 ;i < length; i++){
            student.scores.push(Math.floor(Math.random()*70+30)) //magic num.
        }
        console.log(student.scores.length)
    })
}
/*
* datas: {object}
*
*/
function tableDrawer(datas) {
    var table = document.createElement('table');
    var wrap = document.querySelector('.table-wrap');
    var ths = '';
    var tds = '';

    datas.head.forEach((th) => {
        th.sort ?
            ths += '<th>' + th.ctx + '<div class="up"></div><div class="down"></div></th>' :
            ths += '<th>' + th.ctx + '</th>'
    });
    var thead = '<thead><tr>'+ ths +'</tr></thead>';

    var data = datas.data
    data.forEach((student) => {
        var countScore = 0;
        tds += '<tr>'
        tds += '<td>' + student.name + '</td>'
        student.scores.forEach((score) => {
            countScore += score;
            tds += '<td>' + score + '</td>'
        })
        if (student.scores.length < datas.head.length - 1){
            student.scores.push(countScore)
            tds += '<td>' + countScore + '</td>'
        }
        tds += '</tr>'
    })

    var tbody = '<tbody>' + tds + '</tbody>';

    table.innerHTML = thead + tbody;

    table.addEventListener('click' ,function (e) {
        var nodeName = e.target.nodeName.toLowerCase();
        var className = e.target.className.toLowerCase();
        var tag = 0
        switch (e.target.innerText || e.target.parentNode.innerText) {
            case '语文':
                tag = 0;
                break;
            case '数学':
                tag = 1;
                break;
            case '英语':
                tag = 2;
                break;
            case '生物':
                tag = 3;
                break;
            case '地理':
                tag = 4;
                break;
            case '化学':
                tag = 5;
                break;
            case '总分':
                tag = 6;
                break;
            default:
                console.log('error data.')
        }
        switch (className) {
            case 'up':
                console.log('up case ' + tag)
                tableDrawer(sortArr(res, tag).up())
                break;
            case 'down':
            default:
                console.log('down case ' + tag)
                tableDrawer(sortArr(res, tag).down())
                break;
        }
    })
    wrap.innerHTML = ''
    wrap.appendChild(table)
    return table;
}

function sortArr(res,i) {
    this.up = function () {
        res.data.sort((a,b) => {
            return a.scores[i] - b.scores[i]
        })
        return res;
    }
    this.down = function () {
        res.data.sort((a,b) => {
            return b.scores[i] - a.scores[i]
        })
        return res;
    }

    return this;
}

window.onload = function () {
    mockData(res)
    console.log(res)
    var table = tableDrawer(res);
}

/*
* 排序：Array.sort()
* sort() 中可以指定排序规则
* 规则可以是数组中元素对象的某一个属性
* */