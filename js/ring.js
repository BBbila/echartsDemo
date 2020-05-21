function ring() {
  var myChartRring1 = echarts.init(document.getElementById('mainRing1'));
  var myChartRring2 = echarts.init(document.getElementById('mainRing2'));
  var myChartRring3 = echarts.init(document.getElementById('mainRing3'));
  var myChartRring4 = echarts.init(document.getElementById('mainRing4'));

    option1 = {
        tooltip: {//提示框，可以在全局也可以在
            trigger: 'item',  //提示框的样式
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            color:'#000', //提示框的背景色
            textStyle:{ //提示的字体样式
                color:"white",
            }
        },
        graphic: {
          type: 'text',
          left: '23%',
          top: 'center',
          style: {
            text: '住房总数',
            textAlign: 'center',
            fill: 'rgb(149,162,255)',
            width: 30,
            height: 30,
          }
        },
        legend: {  //图例
            orient: 'vertical',  //图例的布局，竖直    horizontal为水平
            x: 'right',//图例显示在右边
            data:['自住','租住','空闲'],
            top: 'center',
            left: '75%',
            itemWidth: 3, 
            itemHeight: 10,
            textStyle:{    //图例文字的样式
                color:'white',  //文字颜色
                fontSize: 10,    //文字大小
                fontWeight: 'bold',
            }
        },
        series: [
            {
                type:'pie', //环形图的type和饼图相同
                radius: ['50%', '75%'],//饼图的半径，第一个为内半径，第二个为外半径
                center: ['40%', '50%'],
                avoidLabelOverlap: false,
                color:['blue','yellow','red'],
                label: {
                    normal: {  //正常的样式
                        show: false,
                        position: 'left'
                    },
                    emphasis: { //选中时候的样式
                        show: true,
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    }
                },  //提示文字
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:40, name:'自住'},
                    {value:20, name:'租住'},
                    {value:40, name:'空闲'},
                ]
            },
        ]
    };

    option2 = {
      tooltip: {//提示框，可以在全局也可以在
          trigger: 'item',  //提示框的样式
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          color:'#000', //提示框的背景色
          textStyle:{ //提示的字体样式
              color:"white",
          }
      },
      graphic: {
        type: 'text',
        left: '23%',
        top: 'center',
        style: {
          text: '人口总数',
          textAlign: 'center',
          fill: 'rgb(149,162,255)',
          width: 30,
          height: 30,
        }
      },
      legend: {  //图例
          orient: 'vertical',  //图例的布局，竖直    horizontal为水平
          x: 'right',//图例显示在右边
          data:['户籍','流动'],
          top: 'center',
          left: '75%',
          itemWidth: 3, 
          itemHeight: 10,
          textStyle:{    //图例文字的样式
              color:'white',  //文字颜色
              fontSize: 10,    //文字大小
              fontWeight: 'bold',
          }
      },
      series: [
          {
              type:'pie', //环形图的type和饼图相同
              radius: ['50%', '75%'],//饼图的半径，第一个为内半径，第二个为外半径
              center: ['40%', '50%'],
              avoidLabelOverlap: false,
              color:['blue','yellow'],
              label: {
                  normal: {  //正常的样式
                      show: false,
                      position: 'left'
                  },
                  emphasis: { //选中时候的样式
                      show: true,
                      textStyle: {
                          fontSize: '10',
                          fontWeight: 'bold'
                      }
                  }
              },  //提示文字
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:85, name:'户籍'},
                  {value:15, name:'流动'},
              ]
          },
      ]
    };

    option3 = {
      tooltip: {//提示框，可以在全局也可以在
          trigger: 'item',  //提示框的样式
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          color:'#000', //提示框的背景色
          textStyle:{ //提示的字体样式
              color:"white",
          }
      },
      graphic: {
        type: 'text',
        left: '14%',
        top: 'center',
        style: {
          text: '其他总数',
          textAlign: 'center',
          fill: 'rgb(149,162,255)',
          width: 30,
          height: 30,
        }
      },
      legend: {  //图例
          orient: 'vertical',  //图例的布局，竖直    horizontal为水平
          x: 'right',//图例显示在右边
          data:['生产','经营','办公','仓储','其他'],
          top: 'center',
          left: '65%',
          itemWidth: 3, 
          itemHeight: 10,
          textStyle:{    //图例文字的样式
              color:'white',  //文字颜色
              fontSize: 10,    //文字大小
              fontWeight: 'bold',
          }
      },
      series: [
          {
              type:'pie', //环形图的type和饼图相同
              radius: ['50%', '75%'],//饼图的半径，第一个为内半径，第二个为外半径
              center: ['32%', '50%'],
              avoidLabelOverlap: false,
              color:['yellow','red','green','#BA55D3','blue'],
              label: {
                  normal: {  //正常的样式
                      show: false,
                      position: 'left'
                  },
                  emphasis: { //选中时候的样式
                      show: true,
                      textStyle: {
                          fontSize: '10',
                          fontWeight: 'bold'
                      }
                  }
              },  //提示文字
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:3, name:'生产'},
                  {value:70, name:'经营'},
                  {value:23, name:'办公'},
                  {value:2, name:'仓储'},
                  {value:2, name:'其他'},
              ]
          },
      ]
    };
    option4 = {
      tooltip: {//提示框，可以在全局也可以在
          trigger: 'item',  //提示框的样式
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          color:'#000', //提示框的背景色
          textStyle:{ //提示的字体样式
              color:"white",
          }
      },
      graphic: {
        type: 'text',
        left: '14%',
        top: 'center',
        style: {
          text: '移动用户',
          textAlign: 'center',
          fill: 'rgb(149,162,255)',
          width: 30,
          height: 30,
        }
      },
      legend: {  //图例
          orient: 'vertical',  //图例的布局，竖直    horizontal为水平
          x: 'right',//图例显示在右边
          data:['移动'],
          top: 'center',
          left: '65%',
          itemWidth: 3, 
          itemHeight: 10,
          textStyle:{    //图例文字的样式
              color:'white',  //文字颜色
              fontSize: 10,    //文字大小
              fontWeight: 'bold',
          }
      },
      series: [
          {
              type:'pie', //环形图的type和饼图相同
              radius: ['50%', '75%'],//饼图的半径，第一个为内半径，第二个为外半径
              center: ['32%', '50%'],
              avoidLabelOverlap: false,
              color:'red',
              label: {
                  normal: {  //正常的样式
                      show: false,
                      position: 'left'
                  },
                  emphasis: { //选中时候的样式
                      show: true,
                      textStyle: {
                          fontSize: '10',
                          fontWeight: 'bold'
                      }
                  }
              },  //提示文字
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:100, name:'移动'},
              ]
          },
      ]
    };
    myChartRring1.setOption(option1);
    myChartRring2.setOption(option2);
    myChartRring3.setOption(option3);
    myChartRring4.setOption(option4);
}
ring()