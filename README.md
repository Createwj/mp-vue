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


微信复制文本
商品详情点击商品详情 触发复制商品详情的函数 复制文本 弹窗显示复制成功


小程序公用一个页面显示商品的时候 添加加载动画 通过变量控制加载动画的显示
当小程序onLoad的时候将加载动画显示 数据成功返回的时候控制加载动画进行隐藏
