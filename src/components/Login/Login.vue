<template>
  <div class="login">
  <!-- <img src="static/index-bg.jpg" alt="" id="index-bg"> -->
    <div class="container from-group">
      <h1 id="title">Welcome To Grapro</h1>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3" id="head-sculpture">
          <span class="input-group-addon glyphicon glyphicon-camera" id=""></span>
      </div>
    </div>
    <div class="container from-group">
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-user" id=""></span>
        <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-lock" id=""></span>
        <input type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
      </div>
      <router-link to="/"><button type="button" class="btn btn-primary" id="login">登陆</button></router-link>
      <router-link to="Reg"><button type="button" class="btn btn-primary" id="reg">注册</button></router-link>
      <a href="" id="lost-password">忘记密码?</a>
      <a href="" id="change-account">更换账号登陆</a>
    </div>
    <grapro></grapro>  
  </div>
</template>

<script>
import Grapro from "../../components/LittleComponents/Grapro"
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  components:{Grapro}
}
</script>


<style scoped>
  .login{
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
  #login{
    position: absolute;
    left: 30%;
    margin-top: 2rem;
  }
  #reg{
    position: absolute;
    left: 55%;
    margin-top: 2rem;
  }
  #head-sculpture{
    height: 10rem;
    width: 10rem;
    margin: 5rem auto;
  }
  #head-sculpture span{
    width: 100px;
    height: 100px;
    font-size: 40px;
    border-radius: 50%;
    background: #888;
    /*border-color: #888;*/
    color: #fff;
  }
  #lost-password{
    display: block;
    position: absolute;
    bottom: 10rem;
    left: 40%;
  }
  #change-account{
    display: block;
    position: absolute;
    bottom: 8rem;
    left: 40%;
  }
/*  .up-head{
    display: inline-block;
    width: 100px;
    height: 100px;
    text-decoration: none;
  }*/
  /*屏幕大于960px*/
  @media screen and (min-width: 960px) {
    #lost-password{
      display: block;
      position: absolute;
      left: 45%;
      bottom: 42%;
    }
    #change-account{
    display: block;
    position: absolute;
    left: 45%;
    bottom: 47%;
  }
  #login{
    position: absolute;
    left: 40%;
    margin-top: 2rem;
  }
  #reg{
    position: absolute;
    left: 55%;
    margin-top: 2rem;
  }
}
</style>
