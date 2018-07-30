<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div @click="jumpShop">积分商城</div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
      <view class="picker">
        支持原生小程序时间选择器{{date}}
      </view>
    </picker>


    <picker mode="time" :value="time"  @change="bindTimeChange">
      <view class="picker">
        支持原生小程序时间选择器{{time}}
      </view>
    </picker>


     <picker mode="region" :value="region"  @change="bindRegionChange">
      <view class="picker">
        支持原生小程序地区选择器{{region}}
      </view>
    </picker>


  <div @click="popInfo('自定义提示信息')">自定义弹窗</div>
    <div @click="wxPop">微信弹窗</div>
    <div @click="loadding">微信加载</div>
    <div @click="confir">微信二次确认</div>
    <div @click="confirs">微信底部上拉选择</div>
    <div @click="setTitle">设置title</div>
    <div @click="setbg">设置顶部背景ios</div>
    <div @click="scrollTop">滚动到顶部</div>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">123跳到Vuex页面</a>

    <a href="/pages/pag/main" class="counter">跳到新的页面</a>
    <a href="/pages/scroll/main" class="counter">上拉加载更多 下拉刷新</a>
    <div @click="jump('123',$event)">跳转传参数&&发送请求&&使用原生小程序的组件</div>
    <popMessage v-if="infoBox" :text="info"></popMessage>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo()">获取用户信息</button>
  </div>
</template>

<script>
import card from '@/components/card'
import popMessage from '@/components/popMessage'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      date:'2015-11-01',
      info:'请求数据有误',
      infoBox:false,
      time:'12:12',
      region:''
    }
  },

  components: {
    card,
    popMessage
  },
  onLoad(){
    this.getUserInfo()
    this.setShopId(123)
    console.log('log')
    console.log(wx.getUserInfo())
    console.log('log')
    wx.setStorageSync('token','d95c9ffe-39ae-4ee3-a6ab-500759d7722e')
  },
  methods: {
    onPullDownRefresh(e){
      console.log(e)
    },
    onGotUserInfo: function(e) {
      console.log(e)
      console.log(e.detail.errMsg)
      console.log(e.detail.userInfo)
      console.log(e.detail.rawData)
    },
    wxPop(){
       wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000,
         mask:true
      })
    },
    jumpShop(){
      // 小程序跳转页面
      wx.navigateTo({
        url: '/pages/rewordshop/main'
      })
    },
    loadding(){
      wx.showLoading({
        title: '加载中',
      })

      setTimeout(function(){
        wx.hideLoading()
      },2000)
    },
    confir(){
      wx.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    confirs(){
      wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success: function(res) {
          console.log(res.tapIndex)
        },
        fail: function(res) {
          console.log(res.errMsg)
        }
      })
    },
    setTitle(){
      wx.setNavigationBarTitle({
        title: '当前页面'
      })
    },
    setbg(){
      wx.setBackgroundColor({
        backgroundColorTop: '#444444', // 顶部窗口的背景色为白色
        backgroundColorBottom: '#999999', // 底部窗口的背景色为白色
      })
    },
    scrollTop(){
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },
    bindDateChange(e,q){
      console.log(e)
      console.log(q)
    },
    bindTimeChange(e){
      console.log(e)
    },
    popInfo(res){
      this.infoBox=true
      this.info=res
      setTimeout(()=>{
        this.infoBox=false
      },1500)

    },
    bindRegionChange(e){
      console.log(e)
    },
    jump(){
      let url = '/pages/pag/main?id='+this.motto
      wx.navigateTo({url})
    },
    bindViewTap () {
      const url = '/pages/pag/main'
      wx.navigateTo({ url })
    },

    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },


    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    ...mapMutations({
      setShopId: 'SET_SHOPID'
    })
  },

  created () {

    // 调用应用实例的方法获取全局数据

  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
