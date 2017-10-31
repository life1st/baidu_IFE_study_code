var webPage = require('webpage');
var system = require('system'); //输入模块

var page = webPage.create();
var keyword = system.args[1];
if (system.args.length === 1) {
    console.log('未输入关键词.')
    phantom.exit();
}

var url = encodeURI('https://www.baidu.com/s?wd='+keyword);//中文关键词编码
var t = Date.now();
page.open(url,function(status){
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

        //截图debug.
        page.viewportSize= {
            width: 1920
        }
        page.render('example.png',{
            format: 'jpeg',
            quality: 85,
        });

        //在打开的页面内操作，无法使用外部定义的变量
        var dom = page.evaluate(function(){
            var res = {
                code: 1,
                msg: '抓取成功',
                dataList: [],
                keyword:document.getElementById('kw').value
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
            return res;
        });

        //格式化数据
        dom.time = t;
        console.log(JSON.stringify(dom));
    }
    phantom.exit();
})
