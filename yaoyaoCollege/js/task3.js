var schools = {
    'beijing' :[
        ['pku', '北京大学'],
        ['tsinghua', '清华大学']
    ],
    'shanghai':[
        ['sjtu', '上海交通大学'],
        ['fudan', '复旦大学']
    ]
}

document.querySelector('.radio-box').addEventListener('click',function (e) {
    switch (e.toElement.id){
        case 'student':
            document.querySelector('.un_student').style.display = 'none';
            document.querySelector('.student').style.display = 'block';
            break;
        case 'un_student':
            document.querySelector('.student').style.display = 'none';
            document.querySelector('.un_student').style.display = 'block';
            break;
    }
})

document.querySelector('#city').addEventListener('change',function (e) {
    var city = this.selectedOptions[0].value;
    var schoolNode = document.querySelector('#school');
    schoolNode.innerHTML = '';
    var tempNode,
        tempData;
    switch (city){
        case 'beijing':
            tempData = schools.beijing;
            break;
        case 'shanghai':
            tempData = schools.shanghai;
            break;
    }
    tempData.forEach(function (e) {
        tempNode += '<option value="'+e[0]+'">'+e[1]+'</option>'
    })
    schoolNode.innerHTML = tempNode;
})