<template>
  <div class="index">
    <Index-header></Index-header>
    <!-- <Top-bar></Top-bar>  -->
    <!-- <div class="carousel">
      
    </div> -->
    <Picture-contain></Picture-contain>
    <Picture-contain></Picture-contain>
    <Index-footer active-key="1"></Index-footer>
  </div>
</template>

<script>
import IndexFooter from "../../components/Footer/Footer"
import IndexHeader from "../../components/Header/IndexHeader"
import PictureContain from "../../components/LittleComponents/PictureContain"
export default {
  name: 'index',
  data () {
    return {
      msg: '中文',
      imgSrc: window.screen.width > 960 ? "/static/logo.png" : "/static/logo-purple.png"
      // : "/static/logo-purple.png" 
    }
  },
  components:{IndexHeader,IndexFooter,PictureContain}
}
</script>


<style scoped>
img{
  /*width: 100%;*/
  height: 100%;
}
.carousel{
  width:80%;
  margin:0 10%;
  height: 10rem;
}
.index{
  padding-bottom: 6rem;
}
</style>
