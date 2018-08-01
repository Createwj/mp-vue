<template>
  <div>
    <div class="container">
      <ec-canvas class="canvas" id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec"></ec-canvas>
    </div>
  </div>
</template>

<script>

const options  = {
    color:['#FEDA66', '#F97494','#A1E5B9','#F97494'],  //配置饼状图的颜色
    animation: false, // 禁止动画
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['25%', '35%'],  //控制环形的大小
            data:[
                {value:335, name:'直达 99%'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:102, name:'其他'}
            ]
        }
    ]
};

export default {
  data () {
    return {
      ec: {
        options: options,  // 传 options
      }
    }
  }
}
</script>
<style>
.container{
  position: relative;
}
.modal{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 10000000;
  background: red;
}
ec-canvas {
  width: 300px;
  height: 300px;
}

</style>
