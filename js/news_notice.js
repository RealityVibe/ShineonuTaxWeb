/*土地交易*/
var dom = document.getElementById("news_container");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '坐标轴刻度与标签对齐';

option = {
    title: {
        text: '新闻公告'
    },
    color: ['#3398DB'],
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
            name:'新闻公告',
            type:'bar',
            barWidth: '60%',
            data:[30, 52, 100, 34, 30, 60, 120, 50, 50, 50, 40, 40]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}