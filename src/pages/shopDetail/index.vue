<template>
  <div class="wrapper">
    <div class="loadding" v-show="loadding">加载动画</div>
    <div class="swiperBox">
      <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration">
      <div v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="180"/>
        </swiper-item>
      </div>
    </swiper>
    </div>
    <div class="title">
      <div class="name">{{detail.name}}</div>
      <div>
        <span class="score">{{detail.price}}</span>
        <span class="text">积分</span>
        <span class="num">库存{{detail.inventory}}件</span>
      </div>
    </div>
    <div class="shopDetail">
      商品详情
    </div>
    <div class="link">
      <div class="desc">
        商品描述
      </div>
       <wxParse :content="article" @preview="preview" @navigate="navigate"/>
    </div>
    <div class="foot">
      <div class="btn">
        积分兑换
      </div>
    </div>
  </div>
</template>

<script>
import {get,post} from '@/http/api'
import wxParse from 'mpvue-wxparse'
export default {
  name: "index",
  components: {
    wxParse
  },
  data(){
    return{
      shopDetail:{},

      loadding:false,
      imgUrls: [],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      article:'',
      detail:{}
    }
  },
  onLoad(e){
    this.loadding = true
    console.log(e.id)
    console.log(e)
    let params = {
      url:'/pointsshop/goods/'+e.id+'/detail?token='+wx.getStorageSync('token'),
      data:{}
    }
    get(params).then((res)=>{
      this.imgUrls = []
      this.detail = res.data
      this.article = res.data.description
      this.imgUrls.push(res.data.banner.substring(1,res.data.banner.length-1).split(',')[0].split('"')[1])
      this.loadding = false
    })
    //
  },
  methods:{
    switch2Change(e){
      console.log(e)
    },
    preview(src, e) {
     console.log(src)
     console.log(e)
    },
    navigate(href, e) {
      // do something
      console.log(e)
    }
  }
}
</script>
<style>
  @import url("~mpvue-wxparse/src/wxParse.css");
page{
  background: #f6f6f6;
}
.wrapper{
  display: block;
  width: 100%;
}
.swiperBox{
  width: 100%;
  height: 360rpx;
}
.slide-image{
  width: 100%;
  height: 100%;
}
swiper{
  height: 100%;
}
.title{
  background: #fff;
  width: 100%;
  height: 200rpx;
  font-family: PingFangSC-Medium;
  font-size: 17px;
  padding: 45rpx 37rpx;
  box-sizing: border-box;
}
.name{
  margin-bottom: 10rpx;
}
.score{
  color: #42c5ad;
  font-size: 24px;
  font-family: PingFangSC-Medium;
}
.text{
  color: #42c5ad;
  font-size: 13px;
  margin-left: 13rpx;
}
.num{
  color: #999;
  border: 1rpx solid #999;
  border-radius: 5rpx;
  text-align: center;
  font-size: 12px;
  padding: 5rpx;
  margin-left: 15px;
}
.shopDetail{
  text-align: center;
  position: relative;
  height: 60rpx;
  line-height: 60rpx;
  color: #999;
  font-size: 12px;
  width: 28%;
  margin: 0 auto;
  background: #f6f6f6;
}
.shopDetail:before{
  content:' ';
  display: inline-block;
  width: 40rpx;
  height: 2rpx;
  background: #999;
  position: absolute;
  left: 0;
  top: 50%;
}
.shopDetail:after{
  position: absolute;
  right: 0;
  content:' ';
  display: inline-block;
  width: 40rpx;
  height: 2rpx;
   top: 50%;
  background: #999;
}
.link{
  background: #fff;
  padding: 0 60rpx 170rpx 30rpx;
}
.desc{
  height: 100rpx;
  line-height: 100rpx;
  font-size: 15px;
  background: #fff;
  margin-left: 20rpx;
  border-bottom: 1rpx solid #ebebeb;
}
.foot{
  padding-top: 20rpx;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  height: 130rpx;
  box-shadow:0 -4px 6px 0 rgba(0,0,0,0.05);
}
.btn{
  background: #fcad3b;
  width: 80%;
  margin: 0 auto;
  border-radius: 8rpx;
  text-align: center;
  font-size: 16px;
  color: #fff;
  height: 88rpx;
  line-height: 88rpx;
}
.btn:active{
  background: #C87F05;
}
.loadding{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  background: #fff;
  z-index: 100;
}
</style>
