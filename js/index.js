function index() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));
  var myChart1 = echarts.init(document.getElementById('main1'));
  var myChart2 = echarts.init(document.getElementById('main2'));
  // 指定图表的配置项和数据
    var option = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          
      },
      series: [
      {
          type: 'gauge',
          axisLine:{
            lineStyle: {       // 属性lineStyle控制线条样式
              color: [[0.35, 'red'],[0.65, 'yellow'],[1, 'blue']], 
              width: 9,
            }
          },
          splitLine:{
            show:false,
          },
          axisLabel:{
            show:false,
          },
          axisTick:{
            show:false,
          },
          itemStyle: {            // 仪表盘指针样式。
            color: "white",          // 指针颜色，默认(auto)取数值所在的区间的颜色
            opacity: 1,             // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
            borderWidth: 0,         // 描边线宽,默认 0。为 0 时无描边。
            borderType: "solid",    // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
            borderColor: "#000",    // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
            shadowBlur: 10,         // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
            shadowColor: "#fff",    // 阴影颜色。支持的格式同color。
          },
          pointer:{
              length: "30%",
              width:4
          },
          title:{
            color: 'white',
            fontWeight: 'bolder',
            fontSize: 10,
            offsetCenter:['0%','80%']
          },
          detail: { formatter:'{value}%',
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'white',
                fontWeight: 'bolder',
                fontSize: 8,
          }},
          data: [{value: 50, name: '处置率'}]
      },
      {
          type: 'gauge',
          radius: '66%',
          axisLine:{
              lineStyle:{
                  width:5,
                  opacity:1,
                  color:[[1, '#00D7FE']]
              }
          },
          splitLine:{
            show:false
          },
          axisTick: {             // 刻度(线)样式。
            show: false,             // 是否显示刻度(线),默认 true。
          },
          axisLabel:{
            show:false,
          },
          pointer:{
              width:0
          },
          title:{
              offsetCenter:['-50%','70%']
          },
          detail: {show:false},
          data: [{value: 50}]
      },
      {
          type: 'gauge',
          radius: '60%',
          axisLine:{
              lineStyle:{
                  width:7,
                  opacity:0.5,
                  color:[[1, '#F0FFFF']]
              }
          },
          splitLine:{
            show:false
          },
          axisTick: {             // 刻度(线)样式。
                  show: true,             // 是否显示刻度(线),默认 true。
                  splitNumber: 2,         // 分隔线之间分割的刻度数,默认 5。
                  length: 20,              // 刻度线长。支持相对半径的百分比,默认 8。
                  lineStyle: {            // 刻度线样式。   
                      color: "#00D7FE",              //线的颜色,默认 #eee。
                      opacity: 1,                 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                      width: 1,                   //线度,默认 1。
                      type: "solid",              //线的类型,默认 solid。 此外还有 dashed,dotted
                      shadowBlur: 2,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                      shadowColor: "#00FFFF",        //阴影颜色。支持的格式同color。
                  },
              },
          axisLabel:{
            show:false,
          },
          pointer:{
              width:0
          },
          title:{
              offsetCenter:['-50%','70%']
          },
          detail: {show:false},
          data: [{value: 50}]
      },
      {
          type: 'gauge',
          radius: '50%',
          axisLine:{
              lineStyle:{
                  width:13,
                  opacity:0.3,
                  color:[[1, '#00BFFF']]
              }
          },
          splitLine:{
            show:false
          },
          axisTick: {             // 刻度(线)样式。
            show: false,             // 是否显示刻度(线),默认 true。
          },
          axisLabel:{
            show:false,
          },
          pointer:{
              width:0
          },
          title:{
              offsetCenter:['-50%','70%']
          },
          detail: {show:false},
          data: [{value: 50}]
      },
      {
          type: 'gauge',
          radius: '35%',
          axisLine:{
              lineStyle:{
                  width:8,
                  opacity:0.3,
                  color:[[1, 'white']]
              }
          },
          splitLine:{
            show:false
          },
          axisTick: {             // 刻度(线)样式。
            show: false,             // 是否显示刻度(线),默认 true。
          },
          axisLabel:{
            show:false,
          },
          pointer:{
              width:0
          },
          title:{
              offsetCenter:['-50%','70%']
          },
          detail: {show:false},
          data: [{value: 50}]
      }
      ]
    };
    myChart.setOption(option)
    myChart1.setOption(option)
    myChart2.setOption(option)

    timeTicket = setInterval(function (){
    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    myChart.setOption(option,true);
    myChart1.setOption(option,true);
    myChart2.setOption(option,true);
    },2000)
  }
  index();


   