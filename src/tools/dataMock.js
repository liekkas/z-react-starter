/**
 * Created by liekkas on 16/3/25.
 */
import _ from 'lodash'

const provinces = ['江苏','湖北','安徽','湖南','河北','山东','河南']

export function mockBarChartOption() {
  let barData = []
  const reProvinces = provinces
  const d2 = [1885,870,447,135,88,83,8].reverse()
  const d1 = [1365,800,405,126,87,82,4].reverse()
  const types = ['4G用户数(万户)','3G用户数(万户)']
  for (let j = 0; j < types.length; j++) {
    let d = []
    for (let k = 0; k < reProvinces.length; k++) {
      d.push(j === 0 ? d1[k] : d2[k])
    }

    barData.push({
      name: types[j],
      type:'bar',
      stack: '总量',
      itemStyle : {
        normal: {
          label : {
            show: true,
            position: j === 0 ? 'insideRight' : 'right',
            textStyle: {
              color: '#FFF',
              fontFamily: '黑体'
            }
          }
        }
      },
      barWidth: 14,
//    barGap: '40%',
//    barCategoryGap: '40%',
      data:d
    })
  }

  return {
    color: ['#396cbd','#c94638'],
    legend: {
      data:['4G用户数(万户)','3G用户数(万户)'],
      selectedMode: false,
      textStyle: {
        color: '#5fa4d9',
        fontSize: 13,
        fontFamily: '黑体'
      },
      top: 10,
    },
    grid: {
      left: 50,
//    right: '4%',
      bottom: '4%',
      top: 40,
//    containLabel: true
    },
    xAxis : [
      {
//      type : 'value',
        type : 'log',
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisLabel: {
          show: false,
          textStyle: {
            color: '#314656',
          }
        },
        splitLine: {
          show: false,
        },
      }
    ],
    yAxis : [
      {
        type : 'category',
//      data : provinces,
        data : provinces.reverse(),
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisLabel: {
          right: 20,
          textStyle: {
            color: '#5fa4d9',
            fontSize: 13,
            fontFamily: '黑体'
          },
        },
        splitLine: {
          show: false,
        },
      }
    ],
    series : barData
  }
}

function randomData() {
  return Math.round(Math.random() * 1000);
}

export function mockMapOption() {
  return {
    title: {
      text: '移动联通电信4G用户数',
      subtext: '纯属虚构',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data:['移动','联通','电信']
    },
    visualMap: {
      min: 0,
      max: 2500,
      left: 'right',
      top: 'bottom',
      text: ['高','低'],           // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: '移动',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data:[
          {name: '北京',value: randomData() },
          {name: '天津',value: randomData() },
          {name: '上海',value: randomData() },
          {name: '重庆',value: randomData() },
          {name: '河北',value: randomData() },
          {name: '河南',value: randomData() },
          {name: '云南',value: randomData() },
          {name: '辽宁',value: randomData() },
          {name: '黑龙江',value: randomData() },
          {name: '湖南',value: randomData() },
          {name: '安徽',value: randomData() },
          {name: '山东',value: randomData() },
          {name: '新疆',value: randomData() },
          {name: '江苏',value: randomData() },
          {name: '浙江',value: randomData() },
          {name: '江西',value: randomData() },
          {name: '湖北',value: randomData() },
          {name: '广西',value: randomData() },
          {name: '甘肃',value: randomData() },
          {name: '山西',value: randomData() },
          {name: '内蒙古',value: randomData() },
          {name: '陕西',value: randomData() },
          {name: '吉林',value: randomData() },
          {name: '福建',value: randomData() },
          {name: '贵州',value: randomData() },
          {name: '广东',value: randomData() },
          {name: '青海',value: randomData() },
          {name: '西藏',value: randomData() },
          {name: '四川',value: randomData() },
          {name: '宁夏',value: randomData() },
          {name: '海南',value: randomData() },
          {name: '台湾',value: randomData() },
          {name: '香港',value: randomData() },
          {name: '澳门',value: randomData() }
        ]
      },
      {
        name: '联通',
        type: 'map',
        mapType: 'china',
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data:[
          {name: '北京',value: randomData() },
          {name: '天津',value: randomData() },
          {name: '上海',value: randomData() },
          {name: '重庆',value: randomData() },
          {name: '河北',value: randomData() },
          {name: '安徽',value: randomData() },
          {name: '新疆',value: randomData() },
          {name: '浙江',value: randomData() },
          {name: '江西',value: randomData() },
          {name: '山西',value: randomData() },
          {name: '内蒙古',value: randomData() },
          {name: '吉林',value: randomData() },
          {name: '福建',value: randomData() },
          {name: '广东',value: randomData() },
          {name: '西藏',value: randomData() },
          {name: '四川',value: randomData() },
          {name: '宁夏',value: randomData() },
          {name: '香港',value: randomData() },
          {name: '澳门',value: randomData() }
        ]
      },
      {
        name: '电信',
        type: 'map',
        mapType: 'china',
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data:[
          {name: '北京',value: randomData() },
          {name: '天津',value: randomData() },
          {name: '上海',value: randomData() },
          {name: '广东',value: randomData() },
          {name: '台湾',value: randomData() },
          {name: '香港',value: randomData() },
          {name: '澳门',value: randomData() }
        ]
      }
    ]
  };
}

export function mockChartOption() {
  return {
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
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
        data : ['周一','周二','周三','周四','周五','周六','周日']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'直接访问',
        type:'bar',
        data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
        name:'邮件营销',
        type:'bar',
        stack: '广告',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'bar',
        stack: '广告',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'视频广告',
        type:'bar',
        stack: '广告',
        data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
        name:'搜索引擎',
        type:'bar',
        data:[862, 1018, 964, 1026, 1679, 1600, 1570],
        markLine : {
          lineStyle: {
            normal: {
              type: 'dashed'
            }
          },
          data : [
            [{type : 'min'}, {type : 'max'}]
          ]
        }
      },
      {
        name:'百度',
        type:'bar',
        barWidth : 5,
        stack: '搜索引擎',
        data:[620, 732, 701, 734, 1090, 1130, 1120]
      },
      {
        name:'谷歌',
        type:'bar',
        stack: '搜索引擎',
        data:[120, 132, 101, 134, 290, 230, 220]
      },
      {
        name:'必应',
        type:'bar',
        stack: '搜索引擎',
        data:[60, 72, 71, 74, 190, 130, 110]
      },
      {
        name:'其他',
        type:'bar',
        stack: '搜索引擎',
        data:[62, 82, 91, 84, 109, 110, 120]
      }
    ]
  };
}

export function mockTableColumns(module) {
  let columns = []
  _.range(1,7).map(v =>
    columns.push({
      title: module + '指标' + v,
      dataIndex: 'index' + v,
      key: 'key' + v,
    })
  )
  return columns
}

export function mockTableData(module) {
  const columns = mockTableColumns(module)
  let result = []
  for (let i = 0; i < 50; i++) {
    let v = {uid: i} //需要提供uid保证数据唯一
    columns.map(item =>
      v[item.dataIndex] = _.random(100)
    )
    result.push(v)
  }
  return result
}
