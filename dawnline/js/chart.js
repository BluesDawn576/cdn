    var arr1=[],arr2=[],arr3=[];
    var  myChart = echarts.init(document.getElementById('chart'));
    function arrTest(){
                $.ajax({
                  type:"get",
                  async:false,
                  url:"level.php",
                  data:{},
                  dataType:"json",
                  success:function(result){
                    if (result) {
						for (var i = 0; i < result.length; i++) {
                          arr1.push(result[i].Name);
                          arr2.push(result[i].pass);
                          arr3.push(result[i].perfect); 
                      }
                    }
                  }
                })
                return arr1,arr2,arr3;
              }
              arrTest();
	option = {
	tooltip: {
        show: true,
        /*trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }*/
    },
    legend: {
        data: ['Pass','Perfect'],
        textStyle: {
            color: '#4F94CD'
        }
    },
    xAxis: {
        type: 'category',
        //boundaryGap: false,
        data: arr1,
        axisLine: {
            lineStyle: {
                color: '#4F94CD'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#4F94CD'
            }
        }
    },
    series: [
    	{
    	name: 'Pass',
        data: arr2,
        type: 'bar',
        areaStyle: {},
        markPoint : {
        	data:[
            {type : 'max', name: 'max'},
            {type : 'min', name: 'min'}
            ]
        }
    },
    {
    	name: 'Perfect',
        data: arr3,
        type: 'bar',
        areaStyle: {},
        markPoint : {
        	data:[
            {type : 'max', name: 'max'},
            {type : 'min', name: 'min'}
            ]
        }
    },
    ],
};

	if (option && typeof option === "object") {
    	myChart.setOption(option, true);
    }
    window.onresize = function (){
    	_resize();
	}
	var a = document.getElementById('main-drawer');
	a.addEventListener('opened.mdui.drawer', function (){
		_resize();
	});
	a.addEventListener('closed.mdui.drawer', function (){
		_resize();
	});
	function _resize()
	{
		myChart.resize();
	}