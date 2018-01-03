<template>
  <div class="personal-home-page">
      <Index-header></Index-header>
      <div id="show-head" class="col-md-4 col-xs-6 col-lg-1">
        <img src="" alt="">
      </div>
      <div id="person-set" class="col-md-4 col-xs-6 col-lg-1">
        <span id="emailName">{{emailName}}</span><span class="glyphicon glyphicon-cog"></span>
      </div>
  </div>
</template>

<script>
import IndexHeader from "../../components/Header/IndexHeader"
export default {
  name: 'PersonalHomePage',
  data () {
    return {
      emailName:"edisonzhuozhou", 
      nickName:"edisonChan", 
    }
  },
  components:{IndexHeader}
}
</script>


<style scoped>
  #show-head{
    border-radius: 50%;
    overflow: hidden;
  }
</style>
