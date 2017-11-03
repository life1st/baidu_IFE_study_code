// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart'));

var option = {
    title: {
        show: true,
        text: '折柱混合',
        link: 'http://ife.baidu.com/course/detail/id/42',
        textStyle: {
            color: '#C23531',
            textShadowColor: '#919191',
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textShadowBlur: 10
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            crossStyle: {
                color: '#999',
                textShadowColor: '#666',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textShadowBlur: 10
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {   type: 'value',
            name: '水量',
            min: 0,
            max: 200,
            interval: 25,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {   type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            animationDelay: function(idx) {
                return idx*30
            }
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            animationDelay: function(idx) {
                return idx*50+20
            },
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            animationDelay: function(idx) {
                return idx*50+20
            },
            animationEasing: 'circularInOut',
        }
    ],
    animationEasing: 'elasticInOut',
    animationDelayUpdate: function (idx) {
        return idx * 50;
    }
};

myChart.setOption(option);