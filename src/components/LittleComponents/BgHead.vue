<template>
  <div class="BgHead">
      <div class="pic-center">
        <img src="static/pika.png" alt="" class="bgImg">
      </div>
      
  </div>
</template>
<script>
export default {
  name: 'BgHead',
  data () {
    return {     
    }
  }
}
</script>


<style scoped>
  .BgHead{
  overflow: hidden;
  height: 15rem;
  }
  .bgImg{
  width: 100%;
  /*position: relative;*/
  /*position: absolute;*/
  top: -50%;
 }
 .pic-center{
  /*position: absolute;*/
  top: 0;
  height: 15rem;
  /*z-index: 11;*/
 }
</style>
