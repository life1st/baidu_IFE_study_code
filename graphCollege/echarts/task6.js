var myChart = echarts.init(document.getElementById('chart'));
myChart.showLoading();

//加载数据
$.get('data/task6/us-football.gexf')
.done(function (res) {
    var graph = echarts.dataTool.gexf.parse(res);
    //需要引入dataTool.min.js 在3.7.2的relase是独立文件，自己去github下。

    console.log(graph);
    var categories = [];
    for (var i = 0; i < 9; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }
    myChart.setOption({
        title: {
            text: 'us-football',
            textStyle: {
                color: '#fcc'
            },
            left: 'center'
        },
        toolbox: {
            feature: {
                saveAsImage: {show: true}
            }
        },
        series: {
            type: 'graph',
            name: 'test',
            symbolSize: 30,
            data: graph.nodes,
            links: graph.links,
            categories: categories,
            focusNodeAdjacency: true,
            layout: 'circular',  //图的布局。'none','circular','force'
            roam: true,
            legend: [{
                // selectedMode: 'single',
                data: categories.map(function (a) {
                    return a.name;
                })
            }],
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B'
                        ];
                        var str = params.dataIndex;
                        var a = str%10;
                        return colorList[a]
                    }
                }
            }

        }
    });
    myChart.hideLoading();
})