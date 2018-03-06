<template>
  <div class="login"  style="overflow:auto">
  <!-- <img src="static/index-bg.jpg" alt="" id="index-bg"> -->
    <div class="container from-group">
      <h1 id="title">Welcome To Grapro</h1>
      <!-- 显示头像开始 登陆过的会有头像的显示，存本地，或者在输入到账号名的存在的时候发请求显示-->
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3" id="head-sculpture">
          <span class="input-group-addon glyphicon glyphicon-camera" id="">
            <img :src='hisHead' alt="" title="你的头像" id="head-img">
          </span>
      </div>
    </div>
    <div class="container from-group">
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-user" id=""></span>
        <input type="text" class="form-control" placeholder="Username" v-model="username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-lock" id=""></span>
        <input type="password" class="form-control" placeholder="Password" v-model="pwd" v-focus="password" aria-describedby="basic-addon1">
      </div>
      <button type="button" class="btn btn-primary" id="login" @click="login" >登陆</button>
      <router-link to="Reg"><button type="button" class="btn btn-primary" id="reg">注册</button></router-link>
      <router-link to="ForgetPwd" id="lost-password">忘记密码?</router-link>
      <!-- <a href="" id="change-account">更换账号登陆</a> -->
    </div>
    <grapro></grapro>  
  </div>
</template>

<script>
import axios from "axios"
import Grapro from "../../components/LittleComponents/Grapro"
export default {
  name: 'Login',
  data () {
    return {
      hisHead:"#",
      username:"",
      pwd:"",
      password:"" 
    }
  },
  components:{Grapro},
  directives:{
    focus: {
      bind: function (el) {
          el.focus();
      }
    }
  },
  methods:{
    login:function(){
      axios({
        method:'get',
        url:'http://127.0.0.1/garpro/user/userLogin',
        params:{
          username:this.username,
          pwd:this.pwd
        }
      }).then(res=>{//注册成功返回'loginsuc'
        console.log(res.data)
        if(res.data=="loginsuc"){
          
          this.$router.push({path:'/'})//跳转页面
        }else{
          this.password = true;
          this.pwd ="";
          this.password = false;
          return;
        }
      }).catch(res=>{
        console.log(error)
      })
    }
  }
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

  #head-img{
    width: 100px;
    height:100px;
    position: absolute;
    left: 0px;
    top: -1px;
  }
  /*屏幕大于960px*/
  @media screen and (min-width: 960px) {
    #lost-password{
      display: block;
      position: absolute;
      left: 47%;
      bottom: 40%;
    }
    #change-account{
    display: block;
    position: absolute;
    left: 46%;
    bottom: 37%;
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
/*最大960px*/
  @media screen and (max-width: 960px) {
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
}
</style>
