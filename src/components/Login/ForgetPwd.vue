<template>
  <div class="forget-pwd">
    <div class="container from-group">
      <h1 id="title">Welcome To Grapro</h1>
    </div>
    <div class="container from-group">
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-envelope" id=""></span>
        <input type="text" class="form-control" placeholder="输入注册邮箱" v-model="mailAddress" aria-describedby="basic-addon1">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-qrcode" id=""></span>
        <input type="text" class="form-control" placeholder="输入下方验证码" v-model="captchaCode" aria-describedby="basic-addon1">
      </div> 
    <Row class="Row">
      <i-col span="6" offset="4" id="code">
      <!-- 验证码: -->
      <img :src="captchaUrl" alt="" id="vcode">
      </i-col>
      <i-col span="6" offset="4">
        <i-button type="primary" icon="refresh" @click="changeCaptcha" >换一个</i-button>
      </i-col> 
    </Row>
    <Row class="Row">
      <i-col span="6" offset="9">
        <i-button type="success" long @click="checkCaptcha">确认提交</i-button>
      </i-col>
    </Row> 
    </div> 
    <grapro></grapro>  
  </div>
</template>

<script>
import axios from "axios"
import Grapro from "../../components/LittleComponents/Grapro"
axios.defaults.withCredentials=true;
export default {
  name: 'Login',
  data () {
    return {
    captchaUrl:"http://127.0.0.1/garpro/user/captcha",
    captchaCode:"",
    mailAddress:""
    }
  },
  components:{Grapro},
  methods:{
    changeCaptcha:function() {
    this.captchaUrl = 'http://127.0.0.1/garpro/user/captcha/'+Math.random();
    },
    checkCaptcha:function(){
      axios({
        type:"get",
        url:"http://127.0.0.1/garpro/user/checkCaptcha",
        params:{
          captchaCode:this.captchaCode,
          mailAddress:this.mailAddress,
        }
      }).then(res=>{
        console.log(res.data)
      }).catch(res=>{
        console.log(error)
      })
    }
  }
}
</script>


<style scoped>
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
  #code{
    font-size: 1.5rem;
  }
  #vcode{
    display: inline-block;
  }
  .Row{
    margin-bottom: 1rem;
  }

</style>