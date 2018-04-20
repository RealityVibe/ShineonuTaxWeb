var dom = document.getElementById("graph_container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 1; i < 32; i++) {
    xAxisData.push(i + '号' );
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 50 + 1000);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 50 + 1000);
}

option = {
    title: {
        text: '本月概况'
    },
    legend: {
        data: ['追缴', '涉税'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: '追缴',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: '涉税',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/* ------------------------------------------------------------f分类*/
var dom = document.getElementById("pie_container");
var myChart = echarts.init(dom);
var app = {};

app.title = '环形图';

option1 = {
    title: {
        text: '数据分类'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['土地交易', '股权变化','税务法规','司法关联'
        , '资本变化 ', '不动产变化', '无形资产变化', '资金变动', '工资福利'
        , ' 杂项','其他数据']
    },
    
    calculable : false,   //拖拽
    series: [
        {
            name:'数据类型',
            type:'pie',
            radius: ['50%', '80%'],
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
            /*'土地交易', '股权变化','税务法规','司法关联'
        , '资本变化 ', '不动产变化', '无形资产变化', '资金变动', '工资福利'
        , ' 杂项','其他数据'*/
                {value:335, name:'土地交易'},
                {value:310, name:'股权变动'},
                {value:234, name:'税务法规'},
                {value:135, name:'司法关联'},
                {value:90, name:'资本变化'},
                {value:165, name:'不动产变化'},
                {value:310, name:'无形资产变化'},
                {value:534, name:'资金变动'},
                {value:135, name:'工资福利'},
                {value:848, name:'杂项'},
                {value:165, name:'其他数据'},

            ]
        }
    ]
    };

if (option1 && typeof option1 === "object") {
    myChart.setOption(option1, true);
}
    var data_url=['land_deals.html','country_policy.html','other_data.html','tax_law.html','news_notice.html']; 
 
    function everyClick(param,i,txt,url){    //程序这边的url需要传入
    if(param.seriesIndex==0&&param.dataIndex==i){
        /*confirm("是否进入详情页面？")&&*/window.open (url,'_parent','height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
        } 
    }
     
  
 
    //增加监听事件
    function eConsole(param) {
        //var mes = '【' + param.type + '】';
        if (typeof param.seriesIndex != 'undefined') {
        // mes += '  seriesIndex : ' + param.seriesIndex;
        // mes += '  dataIndex : ' + param.dataIndex;
            if (param.type == 'click') {     
                var peiLenght= option1.legend.data.length;
                //alert(peiLenght);// 获取总共给分隔的扇形数
                for(var i=0;i<peiLenght;i++){
                    everyClick(param,i,option1.legend.data[i],data_url[i])
                }  
            }else{
                document.getElementById('hover-console').innerHTML = 'Event Console : ' + param.dataIndex;
                //alert();
            }   
        }
    }
 
   myChart.on("click", eConsole);
   myChart.on("hover", eConsole);

/*失信名单*/
var dom = document.getElementById("promise_container");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '坐标轴刻度与标签对齐';

option = {
     title: {
        text: '税务危楼'
    },
    color: ['#558ED5'],
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
            'axisLabel': {
                'interval':0
            },
            data : ['苏龙发电', '海澜集团', '申达集团', '华西集团', '西中地大', '中达方友', '瑞利达', '古地投资', '中核恒通'],
            axisTick: {
                alignWithLabel: true,
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
            name:'避税指数',
            type:'bar',
            barWidth: '60%',
            data:[98, 95, 93, 91, 88, 85, 83, 75, 70]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}