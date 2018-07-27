<template>
   <scroll-view  :style="{'height': '100vm'}" :scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll" >
     <div :style="{'height': '200px','background-color':'red'}">tyuiolpo</div>
     <div class=""  :style="{'height': '200px','background-color':'red'}">dsdsd</div>
     <div class=""  :style="{'height': '1200px','background-color':'red'}">grytyju</div>
    </scroll-view>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        scrollY:true
      }
    },
    async onPullDownRefresh() {
        // to doing..
        // 停止下拉刷新
      console.log('开始下拉刷新')
      setTimeout(()=>{
              console.log('停止下拉刷新')

                wx.stopPullDownRefresh();
      },2000)
      },

      // 上拉加载，拉到底部触发
      onReachBottom() {
        // 到这底部在这里需要做什么事情
       console.log('上拉加载更多')
      },
    method:{

      scrollTop(){
        console.log('到达顶部')
      },
      scrolltolower(){
        console.log(7)
      },
      scroll(e) {
        console.log(6)
        console.log(e)
      },
    }
  }
</script>

<style scoped>
._swiper{
  width: 100%;
}
._swiper-item image{
  width: 100%;
  height: 100%;
}
</style>
