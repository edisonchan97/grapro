<template>
  <div class="index">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Grapro" :src='imgSrc' >
          
        </a>
      </div>
      </div>
    </nav> 
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '中文',
      imgSrc: window.screen.width > 960 ? "/static/logo.png" : "/static/logo-purple.png"
      // : "/static/logo-purple.png" 
    }
  },
  create:function(){
      // window.screen.width > 960 ? imgSrc = "/static/logo-purple.png" : imgSrc = "/static/logo-purple.png"
  }
}
</script>


<style scoped>
img{
  /*width: 100%;*/
  height: 100%;
}
</style>
