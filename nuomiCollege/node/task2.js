var fs = require('fs');

var webPage = require('webpage');
var system = require('system'); //输入模块
var page = webPage.create();
var keyword = system.args[1];
if (system.args.length === 1) {
    console.log('未输入关键词.')
    phantom.exit();
}

var devices = JSON.parse(fs.read('devices.json'));

//设置设备信息
var device = devices.default;
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
        page.render('example.jpeg', {format: 'jpeg', quality: 100,});//截图debug.

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
