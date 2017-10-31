var webPage = require('webpage');
var system = require('system'); //输入模块

var page = webPage.create();
var keyword = system.args[1];
if (system.args.length === 1) {
    console.log('未输入关键词.')
    phantom.exit();
}

var devices = {
    //window.navigator.userAgent
    iPhone5: {
        name: 'iPhone5',
        ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        width: 320,
        height: 568
    },
    iPhone6: {
        name: 'iPhone6',
        ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        width: 375,
        height: 667
    },
    iPad: {
        name: 'iPad',
        ua: "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/10.0 Mobile/13B143 Safari/601.1",
        width: 768,
        height: 1024
    },
    default: {
        name: 'Chrome',
        ua: "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36",
        width: 1440,
        height: 900
    }
}

//设置设备信息
var device = devices.iPad;
page.settings.userAgent = device.ua;
page.viewportSize= {
    width: device.width,
    height: device.height
}

var url = encodeURI('https://www.baidu.com/s?wd='+keyword);//中文关键词编码
var t = Date.now();

//打印evaluate()中的console信息
page.onConsoleMessage = function (msg) {
    console.log(msg);
}

page.open(url,function(status){
    var res = {};

    if (status!='success'){
        console.log('fail');
        res = {
            code: 0,
            msg: '抓取失败',
            time: Date.now() - t,
            keyword: keyword,
        }
    }else {
        page.render('example.png', {format: 'jpeg', quality: 100,});//截图debug.

        //在打开的页面内操作，无法使用外部定义的变量，结果return到res中
        res = page.evaluate(function(device){
            var d = device;
            var pageRes = {
                code: 1,
                msg: '抓取成功',
                dataList: [],
                keyword:document.getElementById('kw').value,
                device:{
                    width: window.innerWidth,
                    height: window.innerHeight,
                    userAgent: window.navigator.userAgent
                }
            }
            var result;
            var picSrc = '',
                infoText = '',
                titleText = '';
            switch (d.name){
                case 'iPhone5':
                case 'iPhone6':
                    result = document.querySelectorAll('.c-clk-recommend');
                    break;
                case 'iPad':
                    result = document.querySelectorAll('.bds-list');
                    break;
                default:
                    result = document.querySelectorAll('#content_left .c-container');
                    break;
            }
            for(var i = 0;i<result.length;i++){
                result[i].querySelector('img')===null ? picSrc = '无图片' : picSrc = result[i].querySelector('img').src;
                result[i].querySelector('.c-abstract')===null ? infoText = '无详情' : infoText = result[i].querySelector('.c-abstract').innerText;
                result[i].querySelector('h3')===null ? titleText = '无' : titleText = result[i].querySelector('h3').innerText;

                pageRes.dataList.push({
                    pic: picSrc,
                    link: result[i].querySelector('a').href,
                    info: infoText,
                    title: titleText
                })
            }
            return pageRes;
        },device);
        res.time = Date.now() - t;
    }

    //格式化为字符串输出
    console.log(JSON.stringify(res));

    phantom.exit();
})
