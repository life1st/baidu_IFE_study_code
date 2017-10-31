var page = require('webpage').create();

console.log('The defualt ua is:' + page.settings.userAgent);
var uas = {
    //window.navigator.userAgent
    defualt: page.settings.userAgent,
    sp:'SpecialAgent',
    Chrome: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
    SafariMobile: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    IE: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
    bot: 'Googlebot/2.1 (+http://www.google.com/bot.html)'
}
page.settings.userAgent = uas.sp;
page.open('https://useragent.openadmintools.com/',function (status) {
    var s = status;
    if (s!=='success'){
        console.log('network fail');
    }else {
        var ua = page.evaluate(function () {
            return document.querySelector('.ua_list .info').textContent;
        });
        console.log(ua);
    }
    phantom.exit();
});