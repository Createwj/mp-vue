<template>
  <div>
    <div class="shopItem">
      <div class="item">
         <img src="https://img2.qufaya.com/675d91f1-fe25-4ecb-a9db-12c29b0b79d1.png">
      </div>
      <div class="item">
        <p class="name">圈子账本抱枕</p>
        <p class="state">已发货</p>
      </div>
    </div>
    <div class="noMessage">没有更多商品了呦～</div>
  </div>
</template>

<script>
  // https://quanzi.qufaya.com/pointsshop/order/list?token=d95c9ffe-39ae-4ee3-a6ab-500759d7722e
import {get,post} from '@/http/api'
export default {
  name: "index",
  data(){
    return{
      shopContent:''
    }
  },
  onLoad(){
    this.getData()
  },
  methods:{
    getData(){
      let params = {
        url:'/pointsshop/order/list?token='+wx.getStorageSync('token'),
        data:{}
      }
      get(params).then((res)=>{
        console.log(res)
        this.shopContent = res.data
      })
    }
  }
}
</script>

<style>
page{
  background: #f6f6f6;
}
.shopItem{
  position: relative;
  display: flex;
  background: #fff;
  height: 180rpx;
  box-sizing: border-box;
  border-top: 1rpx solid #ebebeb;
}
.shopItem:before{
  content:' ';
  display: inline-block;
  position: absolute;
  right: 50rpx;
  top: 47%;
  transform: rotate(-45deg) translateY(-50%);
  width: 15rpx;
  height: 15rpx;
  border-bottom: 1px solid #999;
  border-right: 1px solid #999;
}
.item img{
  width: 120rpx;
  height: 120rpx;
  margin-left: 37rpx;
  margin-top: 25rpx;
}
.name{
  margin-top: 36rpx;
  margin-left: 33rpx;
  font-size: 30rpx;
  font-family: PingFangSC-Regular;
}
.state{
  margin-left: 33rpx;
  font-size: 12px;
  display: inline-block;
  border: 1px solid #fcad3b;
  color: #fcad3b;
  border-radius: 5rpx;
  padding: 3rpx 5rpx;
}
.noMessage {
  color: #ccc;
  text-align: center;
  margin-top: 30rpx;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>
