/*土地交易*/
var dom = document.getElementById("container10");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '坐标轴刻度与标签对齐';

option = {
   
    color: ['#558ED7'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['五月','六月','七月','八月','九月','十月', '十一月', '十二月', '一月', '二月', '三月', '四月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'缴税',
            type:'bar',
            barWidth: '60%',
            data:[30, 52, 100, 34, 30, 60, 120, 50, 50, 50, 40, 40]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


var dom = document.getElementById("container11");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    color: ['#558ED7'],
    xAxis: {
        type: 'category',
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [16, 22, 31, 34, 29, 33, 20, 35 , 23 , 25 ,37 , 29],
        type: 'line'
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var dom = document.getElementById("container12");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['资本变化','不动产变化','资金变动','司法关联','工资福利']
    },
    series: [
        {
            name:'税务分布',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'资本变化'},
                {value:310, name:'不动产变化'},
                {value:234, name:'资金变动'},
                {value:135, name:'司法关联'},
                {value:1548, name:'工资福利'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}