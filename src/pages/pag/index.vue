<template>
  <div class="container">
    <div v-text="motto"></div>
    <map></map>
    <switch @bindchange="switch2Change"/>


    <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration">
      <div v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </div>
    </swiper>

  </div>
</template>

<script>
import card from '@/components/card'
import {get,post} from '@/http/api'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      motto: '',
      userInfo: {},
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    }
  },
  components: {
    card
  },
  computed: {
    ...mapGetters([
      'shopId'
    ])
  },
  methods: {
    switch2Change(e){
      console.log(e)
    }
  },
  onLoad(e){
    console.log('这里是vuex保存的数据this.shopId'+this.shopId)
    console.log('onLoad'+e.id)
    this.motto = e.id
    //传递参数 配置发送请求的所需数据
    let params = {
      url:'/community/h5/discussions/1jeeidl/detail',
      data:{
        id:1
      }
    }
    get(params).then((res)=>{
      console.log(res.data)
    })
     // post(params).then((res)=>{
     //   console.log(res.data)
     // })
  },
  onShow (options) {
    console.log(options)
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
