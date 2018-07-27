<template>
  <div class="wrapper">
    <div class="model"></div>
    <div class="content">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: "popMessage",
    props: ['text']
  }
</script>

<style scoped>
.wrapper{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 0;
}
.model{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  background: rgba(99,99,99,.5);
}
.content{
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  color: #fff;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  /*min-width: 3rem;*/
  height: 1rem;
  line-height:1rem;
  border-radius: .1rem;
  background: #000;
}
</style>
