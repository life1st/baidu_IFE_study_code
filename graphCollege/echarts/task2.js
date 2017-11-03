// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart'));

var option = {
    title: [
        {
            show: true,
            left: 20,
            top: 15,
            text: `{a|What's my credit score?}`,
            link: 'http://ife.baidu.com/course/detail/id/45',
            subtext: 'Puerto Rico,% decrease on a year earlier',
            textStyle: {
                fontSize: 28,
                color: '#424446',
                rich: {
                    a: {
                        fontSize: 28,
                    }
                }
            },
            subtextStyle: {
                fontSize: 14,
                color: '#333335'
            }
        },
        {
            subtext: 'Sources:World Bank;Census Bureau;EIU',
            bottom: 10,
            left: 20,
            subtextStyle: {
                color: '#4E5053',
                fontSize: 14
            }
        },
        {
            subtext: `{s| }`,
            left: 0,
            top: 0,
            subtextStyle: {
                rich: {
                    s: {
                        verticalAlign: 'top',
                        borderColor: '#F0494F',
                        borderWidth: 10,
                        height: 60,
                        backgroundColor: '#f00',
                    },
                }
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',//more options need to set.
        },
    },
    toolbox: {
        feature: {
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['Population', 'GDP'],
        zlevel:10,
        top: 90,
        left: 20
    },
    grid: {
        top: 130,

    },
    xAxis: [
        {
            type: 'category',
            data: ['2006', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
            boundaryGap: true,
            axisLine: {
                onZeroAxisIndex: 1,
            },
            axisTick: {
                alignWithLabel: true,
                inside: true
            }
        },
        {
            type: 'category',
            data: [],
            inverse: true,
            offset: 10, //怎么没有效果？？？
            z: 10,
            axisLine: {
                onZeroAxisIndex: 0,
                lineStyle: {
                    color: '#F0494F',
                    width: 2
                }
            },
        }
    ],
    yAxis: [
        {
            minInterval: 1,
            type: 'value',
            inverse: true,
            boundaryGap: [0, 0],
            axisLine: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            }
        },
        {
            show: false,
            type: 'value',
        },
    ],
    series: [
        {
            type: 'bar',
            name: 'Population',
            data: [0.5, 0.7, 0.7, 0.6, 0.6, 1.2, 1.3, 1.1, 1.7, 1.8],
            barGap: '-10%', //文档中说设置到最后一个‘bar’才会生效，但这里仍然有效
            itemStyle: {
                normal: {
                    color: '#32748A'
                }
            },
            barWidth: 14,
            animationDelay: function(idx) {
                return idx*50+20
            },
            animationEasing: 'elasticInOut',
            tooltip: {
                position: [ '50%', '50%']
            }
        },
        {
            type: 'bar',
            name: 'GDP',
            data: [0.9, 3.3, 1.8, 2.4, 2.7, 1.9, 2.8, 0.6, 0.9, 1.0],
            itemStyle: {
                normal: {
                    color: '#32B6E2'
                }
            },
            barWidth: 14,
            animationDelay: function(idx) {
                return idx*50
            },
        },
    ],
    animationEasing: 'elasticInOut',
    backgroundColor: '#D6E4EB'
};

myChart.setOption(option);