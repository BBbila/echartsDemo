function chart() {
  // 基于准备好的dom，初始化echarts实例
  var minechart1 = echarts.init(document.getElementById('chart1'));
  option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,215,0,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(255,215,0,0.3);',
        textStyle:{
            color:'#6a717b',
        },
         
    }, 
    grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        top: '10%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: ['信息采集更新',' ','安全隐患发现',' ','政策法规宣传'],
        inverse: true,
        axisTick: {
            alignWithLabel: true, 
        },
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'white'
                }
        },
         axisLine: {
            lineStyle: {
                color: 'rgba(255,215,0,0)'
            }
         },
         
    }],
    xAxis: [{
      show:false,
      type : 'value',
      boundaryGap : [0, 0],
    }],
    
    series: [{
        name: 'Top 5',
        type: 'bar',
        barWidth:12,
        data: [90,80,70,60,50],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#4682B4' //color of value
                }
            }
        },
        
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FFD700' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFD700' // 100% 处的颜色
                }], false),
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
    }]
    }

    minechart1.setOption(option)
  }
  chart();


   