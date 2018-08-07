# mp-vue

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 基本目录简介
** api **
发送请求 获取后台数据

** components **
公共组件

** pages **
根据小程序页面新建pages 每个目录下面存放一个pages

** utils **
放置公共工具方法

** App.vue main.js **
相当于原生小程序中的app.js  app.json

Flyio发送请求 文档地址
https://wendux.github.io/dist/#/doc/flyio/readme


// 配置mpvue基本目录机构文章描述
https://blog.csdn.net/qq_31393401/article/details/80728523

vuex-persistedstate
可以将vuex数据持久化到本地


解析富文本 可以讲后台返回的html或者markdown语法的代码转换成视图
http://npm.taobao.org/package/mpvue-wxparse


// mpvue中使用 echarts图标绘制图标软件

绘图控制对象 options 对echart样式 进行控制

https://github.com/F-loat/mpvue-echarts

```
var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
option = {
    legend: {
        x : 'center',
        y : 'center',
        data:[
            'GoogleMaps','Facebook','Youtube','Google+','Weixin',
            'Twitter', 'Skype', 'Messenger', 'Whatsapp', 'Instagram'
        ]
    },
    title : {
        text: 'The App World',
        subtext: 'from global web index',
        x: 'center'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (params){
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        }
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            type : 'pie',
            center : ['10%', '30%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:46, itemStyle : labelBottom},
                {name:'GoogleMaps', value:54,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '30%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:56, itemStyle : labelBottom},
                {name:'Facebook', value:44,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '30%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:65, itemStyle : labelBottom},
                {name:'Youtube', value:35,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '30%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:70, itemStyle : labelBottom},
                {name:'Google+', value:30,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '30%'],
            radius : radius,
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:73, itemStyle : labelBottom},
                {name:'Weixin', value:27,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['10%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x: '0%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:78, itemStyle : labelBottom},
                {name:'Twitter', value:22,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'20%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:78, itemStyle : labelBottom},
                {name:'Skype', value:22,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:78, itemStyle : labelBottom},
                {name:'Messenger', value:22,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:83, itemStyle : labelBottom},
                {name:'Whatsapp', value:17,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:89, itemStyle : labelBottom},
                {name:'Instagram', value:11,itemStyle : labelTop}
            ]
        }
    ]
};
```

小程序开发文档
基本简介wx对象的简介 以及参数的传递  通过传递参数 进行页面的跳转
https://developers.weixin.qq.com/miniprogram/dev/api/share.html#wxshowsharemenuobject

// 小程序分享基本逻辑
```
 onShareAppMessage: function () {
    var that = this

    wx.request({ // 发送请求后台
      url: apiUrl + 'wxapp/join/code',
      data: {
        type: 2,
        groupId: wx.getStorageSync('storeContent').groupId,
        bookUuid: ''
      },
      method: 'POST',
      header: { Authorization: wx.getStorageSync('token') },
      success: function (res) {
        console.log('----->>>邀请好友的', res.data.code)
        wx.setStorageSync('memberCode', res.data.code)  // 派发生成的数据
      }
    })

    var title = wx.getStorageSync('selfName') + '邀请您加入他的' + wx.getStorageSync('storeContent').aaBookName + '账本'
    var testData = { id: wx.getStorageSync('memberCode'), groupId: wx.getStorageSync('storeContent').groupId }
    return {
      title: title, // 分享标题
      desc: '我们的功能不仅记账', // 分享描述
      imageUrl: 'https://img2.qufaya.com/weui/shareImg.png',   // 使用后台派发的数据 传递参数 感知用户加入aa账本
      path: 'pages/account/shareIndex/index?hasCode=' + wx.getStorageSync('memberCode') + "&groupId=" + wx.getStorageSync('storeContent').groupId, // 分享路径
      success: function(){
        wx.showShareMenu({
          // 要求小程序返回分享目标信息
          withShareTicket: true
        });
      }
    }
  }
```

小程序跳转小程序 （同一个公众号之下的小程序 并非同一个appid）
https://developers.weixin.qq.com/miniprogram/dev/api/navigateToMiniProgram.html


小程序打开公众号文章
