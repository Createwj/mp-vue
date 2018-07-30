<template>
  <div>
    <div class="shopItem">
      <div class="item">
         <img src="https://img2.qufaya.com/675d91f1-fe25-4ecb-a9db-12c29b0b79d1.png">
      </div>
      <div class="item">
        <p>圈子账本抱枕</p>
        <p>已发货</p>
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
  display: flex;
  background: #fff;
  height: 180rpx;
  box-sizing: border-box;
  border-top: 1rpx solid #ebebeb;
}
.item img{
  width: 120rpx;
  height: 120rpx;
  margin-left: 37rpx;
  margin-top: 25rpx;
}
.noMessage {
  color: #ccc;
  text-align: center;
  margin-top: 30rpx;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>
