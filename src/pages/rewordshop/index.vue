<template>
  <div class="wrapper">
    <img @click="saveImg" style="display: block;margin: 0 auto" src="https://img2.qufaya.com/f7b8c67c-b390-4a86-a39d-9c027a775c122018-07-026.jpeg">
    <div class="getUserBox"  v-show="logStates">
      <button open-type="getUserInfo" class="logBtn" @getuserinfo="bindGetUserInfo">获取用户信息</button>
    </div>
    <div class="headerBox">
      <div class="item" @click="goEcharh">
        <img src="https://img2.qufaya.com/rewordShop/img/userReword.png">
        <div class="myScore">
          <p>我的积分</p>
          <p class="score">{{dat.points}}</p>
        </div>
      </div>
      <div class="item" @click="goReword">
        <img src="https://img2.qufaya.com/rewordShop/img/reword.png">
        <div class="myReword">
          兑换记录
        </div>
      </div>
    </div>
    <div class="shopList">
      商品列表
    </div>
    <div class="shopContent">
      <div class="shopItem" v-for="item in dat.list" :key="item.id" @click="goDetail(item.id)">
        <div class="shopImg">
          <img :src="item.thumbnail">
        </div>
        <div class="shopName">
          <p class="name">{{item.name}}</p>
          <p class="num">
            <span class="shopNum">{{item.price}}</span><span class="shopText">积分</span>
          </p>
        </div>
      </div>
    </div>
        <div class="noMessage">没有更多商品了呦～</div>

  </div>
</template>

<script>
  import {get,post} from '@/http/api'
  import {getCookie} from '@/common/cookie'
  export default {
    name: "rewordshop",
    data(){
      return{
        dat:{},
        userInfo:{},
        logStates:true,
        url:'pages/rewordshop/main'
      }
    },
    onPageScroll(e){  // 页面发生滚动
      console.log(e)
      console.log('页面滚动事件触发')
    },
    onLoad(){  // 页面加载完毕
      console.log(wx.getStorageSync('userName'))
      if(wx.getStorageSync('userName').length !== 0){
        this.logStates = false
      }else{
        this.logStates = true
      }
      wx.setStorageSync('token','d95c9ffe-39ae-4ee3-a6ab-500759d7722e')

      // 发送请求
      let parems = {
        url:'/pointsshop/goods/list?token='+wx.getStorageSync('token'),
        data:{}
      }
      get(parems).then((res)=>{
        console.log(res.data)
        this.dat = res.data
      })
    },
    onShareAppMessage(options) { // 点击右上角  绑定分享事件
      return {
        title: '新城的小店',
        path: this.url,
        imageUrl: 'https://img2.qufaya.com/weui/shareImg.png',
        success: function (res) {
          // that.web_url = return_url
          // 转发成功
          //   wx.showToast({
          //     title: "转发成功",
          //     icon: 'success',
          //     duration: 2000
          //   })
          wx.showShareMenu({ // 显示发送目标信息
           // 要求小程序返回分享目标信息
            withShareTicket: true
          });
             wx.showModal({  // 微信提示信息
              title: '提示',
              content: '确定要加入该成员分享的账本吗？',
              confirmColor: '#FFBE00',
              success: function (res) {
                if (res.confirm) {
                  // console.log("这个是点击分享进来的哦---->>>>>", options);
                  // wx.showLoading({
                  //   title: '加载中……',
                  // })
                  // wx.request({
                  //   url: apiUrl + 'wxapp/join/' + options.hasCode + '/2/joined',
                  //   method: 'GET',
                  //   header: { Authorization: wx.getStorageSync('token') },
                  //   success: function (res) {
                  //     wx.redirectTo({
                  //       url: '/pages/account/aaBookIndex/index?id=' + options.groupId
                  //     })
                  //   }
                  // })

                } else if (res.cancel) {
                  // wx.redirectTo({
                  //   url: '/pages/account/index/index'
                  // })
                }
              }
            })

        },
        fail: function (res) {
          // 转发失败
        }
      }
    },
    methods:{
      saveImg(){
        //'',   参考地址
        //  https://www.jianshu.com/p/5479041607fa
      var imgSrc = "https://img2.qufaya.com/f7b8c67c-b390-4a86-a39d-9c027a775c122018-07-026.jpeg"
          wx.downloadFile({  //  2。需要先将网络图片进行下载
            url: imgSrc,
            success: function (res) {
              console.log(res);
              //图片保存到本地

              wx.saveImageToPhotosAlbum({   // 1。不能保存网络图片路径
                filePath: res.tempFilePath,
                success: function (data) {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                  })
                },
                fail: function (err) {
                  console.log(err);
                  if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
                    console.log("当初用户拒绝，再次发起授权")
                    wx.openSetting({
                      success(settingdata) {
                        console.log(settingdata)
                        if (settingdata.authSetting['scope.writePhotosAlbum']) {
                          console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                        } else {
                          console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                        }
                      }
                    })
                  }
                },
                complete(res){
                  console.log(res);
                }
              })
            }
          })

      },
      goEcharh(){
        wx.navigateTo({
          url:'/pages/echart/main'
        })
      },
      goReword(){
        wx.navigateTo({
          url:'/pages/shopReword/main'
        })
      },
      goDetail(id){
        wx.navigateTo({
          url: '/pages/shopDetail/main?id='+id+'&goodName=123'
        })
      },
      bindGetUserInfo (e) {
        this.logStates = false
        console.log(e.target.userInfo.nickName)
        wx.setStorageSync('userName',e.target.userInfo.nickName)
      }
    }
  }
</script>

<style>
page{
  height: 100%;
}
.wrapper{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: #f6f6f6;
}
.headerBox{
  height: 188rpx;
  background: #fff;
  display: flex;
}
.item{
  display: flex;
  width: 50%;
  margin-top: 48rpx;
  height: 106rpx;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 16px;
}
.item:first-child{
  border-right:1rpx solid #f6f6f6;
}
.item img{
  width: 90rpx;
  height: 90rpx;
  margin-left: 60rpx;
}
.score{
  color:#49c8b0 ;
}
.myScore{
  margin-left: 20rpx;
  height: 90rpx;
}
.myReword{
  margin-left: 20rpx;
  height: 90rpx;
  line-height: 90rpx;
}
.getUserBox{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
}
.logBtn{
  display: block;
  width: 80%;
  margin: 0 auto;
  background: blue;
  color: #fff;
}
.shopList{
  font-family: PingFangSC-Regular;
  color: #333;
  margin-top: 30rpx;
  font-size: 15px;
  margin-left: 50rpx;
  position: relative;
  margin-bottom: 30rpx;
}
.shopList:before{
  position: absolute;
  top: 7rpx;
  left: -15rpx;
  content:' ';
  display: inline-block;
  width: 8rpx;
  height: 33rpx;
  border-radius: 5rpx;
  background: #fcad3b;
}
.shopContent{
  display: flex;
  justify-content:space-between;
  width: 100%;
  flex-direction:row;
  flex-wrap:wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: PingFangSC-Medium;
}
.shopItem{
  margin-top: 25rpx;
  width: 48.8%;
  background: #fff;
  height: 330rpx;
}
.shopImg{
  width: 100%;
  height: 187rpx;
}
.shopImg img{
  width: 100%;
  height: 100%;
}
.shopName{
  font-size: 15px;
  padding: 26rpx 30rpx;
}
.name{
      text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.shopNum{
  font-family: PingFangSC-Medium;
  color: #fcad3b;
  font-size: 16px;
}
.shopText{
  font-size: 9px;
  margin-left: 10rpx;
  color: #777;
}
.num{
  margin-top: 5rpx;
}
.noMessage {
  color: #ccc;
  text-align: center;
  margin-top: 30rpx;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>
