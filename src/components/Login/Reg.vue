<template>
  <div class="Reg">
  <!-- <img src="static/index-bg.jpg" alt="" id="index-bg"> -->
    <div class="container from-group">
      <h1 id="title">Join In Grapro</h1>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3" id="head-sculpture">
        <!-- <router-link class="up-head" to=""> -->
          <span class="input-group-addon glyphicon glyphicon-camera" id="">
            <img :src='picSrc' alt="" id="head-img">
            <up-pic style="position:absolute"></up-pic>  
          </span>
          
        <!-- </router-link> -->
      </div>
    </div>
    <div class="container from-group">
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-user" id=""></span>
        <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-envelope" id=""></span>
        <input type="text" class="form-control" placeholder="Email">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-phone" id=""></span>
        <input type="text" class="form-control" placeholder="Mobile phone">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-lock" id=""></span>
        <input type="password" class="form-control" placeholder="Password">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-lock" id=""></span>
        <input type="password" class="form-control" placeholder="Check Password">
      </div>
      <button type="button" class="btn btn-primary" id="reg">注册</button>
      <router-link id="own-account" to="Login">已有账号！</router-link>
    </div>
    <grapro></grapro>  
  </div>
</template>

<script>
import Grapro from "../../components/LittleComponents/Grapro"
import UpPic from "../../components/LittleComponents/UpPic"
export default {
  name: 'Reg',
  data () {
    return {
      picSrc:""
    }
  },
  components:{Grapro,UpPic},
  methods:{
  }
}
</script>


<style scoped>
  .Reg{
    background: #D5DDDF;
    height: 100%;
    width: 100%;
    position: fixed;
  }
  #title{
    font-size: 3rem;
    text-align: center;
    color: #638;
  }
  .glyphicon{
    top: 0;
  }
  .input-group{
    margin-bottom: 10px;
  }
  #index-bg{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #reg{
    position: absolute;
    left: 40%;
    margin-top: 2rem;
  }
  #head-sculpture{
    height: 10rem;
    width: 10rem;
    margin: 3rem auto;
  }
  #head-sculpture span{
    width: 100px;
    height: 100px;
    font-size: 40px;
    border-radius: 50%;
    background: #888;
    /*border-color: #888;*/
    color: #fff;
    overflow: hidden;
    position:absolute;
    padding-top: 30px;
    padding-right: 50px;
  }
  #head-sculpture span:before{
    /*top:20px;*/
    position: absolute;
  }
  #own-account{
    display: block;
    position: absolute;
    right: 20%;
    margin-top: 2.5rem;
  }
  #head-img{
    width: 100px;
    height:100px;
    position: absolute;
    left: 0px;
    top: -1px;
  }
/*  .up-head{
    display: inline-block;
    width: 100px;
    height: 100px;
    text-decoration: none;
  }*/
  /*屏幕大于1200px*/
  @media screen and (min-width: 960px) {
    #own-account{
      display: block;
      position: absolute;
      left: 50%;
    } 
  }
</style>
