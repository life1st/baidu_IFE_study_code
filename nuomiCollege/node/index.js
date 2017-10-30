var webPage = require('webpage');
var system = require('system'); //输入模块

var page = webPage.create();
var keyword = system.args[1];

var t = Date.now();
page.open('https://www.baidu.com/s?wd='+keyword,function(status){
    if (status!='success'){
        console.log('fail');
        var res = {
            code: 0,
            msg: '抓取失败',
            time: Date.now() - t,
            keyword: keyword,
        }
        console.log(JSON.stringify(res));
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
            var result = document.querySelectorAll('#content_left .c-container');

            for(var i = 0;i<result.length;i++){
                var picSrc = '',
                    infoText = '';
                result[i].querySelector('.c-img')===null ? picSrc = '无图片' : picSrc = result[i].querySelector('.c-img').src;
                result[i].querySelector('.c-abstract')===null ? infoText = '无详情' : infoText = result[i].querySelector('.c-abstract').innerText;
                res.dataList.push({
                    pic: picSrc,
                    link: result[i].querySelector('h3 a').href,
                    info: infoText,
                    title: result[i].querySelector('h3').innerText
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
