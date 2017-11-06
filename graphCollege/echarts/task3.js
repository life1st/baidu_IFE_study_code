// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart'));
myChart.showLoading();


// 异步加载数据
$.get('data/china.json')
    .done(function (data) {
        echarts.registerMap('china', data);
        // 填入数据
        myChart.setOption({
            backgroundColor: '#8ab7b3',
            title: {
                text: '中国地图',
                textStyle: {
                    color: '#fff'
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {show: true}
                }
            },
            series: {
                type: 'map',
                map: 'china',
                roam: true,
                nameMap: {
                    '重庆市': 'chongqing'
                },
                itemStyle: {
                    normal: {
                        areaColor: '#425060',
                        borderColor: '#ccc'
                    },
                    emphasis: {
                        color: '#fff',
                        borderColor: '#787878',
                        borderWidth: 1,
                        shadowColor: '#b1b1b1',
                        shadowOffsetX: 1,
                        shadowOffsetY: 3,
                        shadowBlur: 2
                    }
                },
                label: {
                    emphasis: {
                        show: true
                    }
                },
                tooltip: {
                    textStyle: {
                        color: '#fff'
                    }
                },

            }
        });
        myChart.hideLoading();
    });


