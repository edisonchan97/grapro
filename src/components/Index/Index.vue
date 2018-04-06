<template>
  <div class="index">
    <Index-header></Index-header>
    <!-- <Top-bar></Top-bar>  -->
    <!-- <div class="carousel">
      
    </div> -->
    <div v-for="dynamic in dArray">  
      <Picture-contain :dContent="dynamic.d_content" :name="dynamic.user_nickname" :avatar="dynamic.user_avatar" :iUrl="dynamic.d_img_url" :time="dynamic.d_time" :type="dynamic.d_type"></Picture-contain>
    </div>
    <!-- <Picture-contain></Picture-contain> -->
    <Index-footer active-key="1"></Index-footer>
  </div>
</template>

<script>
import IndexFooter from "../../components/Footer/Footer"
import IndexHeader from "../../components/Header/IndexHeader"
import PictureContain from "../../components/LittleComponents/PictureContain"
import axios from "axios"
export default {
  name: 'index',
  data () {
    return {
      msg: '中文',
      imgSrc: window.screen.width > 960 ? "/static/logo.png" : "/static/logo-purple.png",
      dArray:[],
      lastIndex:0
      // : "/static/logo-purple.png" 
    }
  },
  components:{IndexHeader,IndexFooter,PictureContain},
  mounted:function(){
    // console.log(this.$store.state.nickname)
    axios({
        method:'get',
        url:'http://127.0.0.1/garpro/search/index',
        params:{
          start:this.lastIndex,
          num:10
        }
      }).then(res=>{//注册成功返回'loginsuc'
          let dyArray = res.data;
          for(let i=0;i<=dyArray.length-1;i++){
            dyArray[i].d_img_url = dyArray[i].d_img_url.split("|"); 
            if(dyArray[i].d_type==undefined){
              console.log("undefined")
            }else if(dyArray[i].d_type.indexOf("|")>-1){
               dyArray[i].d_type = dyArray[i].d_type.split("|"); 
               dyArray[i].d_type.pop();
            }else{
            }       
                       
            dyArray[i].d_img_url.pop()
            for(let j=0;j<=dyArray[i].d_img_url.length-1;j++){
              dyArray[i].d_img_url[j] = "http://127.0.0.1" + dyArray[i].d_img_url[j].slice(2)
              // console.log(dyArray[i].d_img_url[j]);
              // console.log()
            }
          }
          this.dArray = dyArray;
          console.log(this.dArray)
      }).catch(res=>{
        console.log(error)
      })
  }
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
  /*padding-bottom: 6rem;*/
}
</style>
