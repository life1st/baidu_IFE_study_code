var webPage = require('webpage');
var system = require('system'); //输入模块

var page = webPage.create();
var keyword = system.args[1];

var t = Date.now();
page.open('https://www.baidu.com/s?wd='+keyword,function(status){
    if (status!='success'){
        console.log('fail');
    }else {
        t = Date.now() - t;
        console.log('loading time:'+ t);
        page.render('example.png'); //截图debug.
        var dom = page.evaluate(function(){
            var res = {
                code: 1,
                msg: '抓取成功',
                dataList: []
            }
            var result = document.querySelectorAll('.result');

            for(var i = 0;i<result.length;i++){
                var picSrc = '';
                if (result[i].querySelector('.c-img')===null){
                    picSrc = '无图片';
                }else {
                    picSrc = result[i].querySelector('.c-img').src;
                }
                res.dataList.push({
                    pic: picSrc,
                    link: result[i].querySelector('.c-showurl').innerText,
                    info: result[i].querySelector('.c-abstract').innerText,
                    title: result[i].querySelector('.t a').innerText
                })
            }
            res.keyword = document.getElementById('kw').value;
            return res;
        });
        dom.time = t;
        console.log(JSON.stringify(dom));
    }
    phantom.exit();
})
