<template>
  <div class="reset-pwd">
    <div class="container from-group">
      <h1 id="title">Welcome To Grapro</h1>
    </div>
    <div class="container from-group">
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-envelope" id=""></span>
        <input type="text" class="form-control" disabled v-model="userEmail" aria-describedby="basic-addon1">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-lock" id=""></span>
        <input type="text" class="form-control" placeholder="Password" v-model="pwd" aria-describedby="basic-addon1">
      </div>
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-lock" id=""></span>
        <input type="text" class="form-control" placeholder="Password Again" v-model="pwd1" aria-describedby="basic-addon1">
      </div> 
    <Row class="Row">
      <i-col span="6" offset="9">
        <i-button type="primary" long @click="resetPwd">重置密码</i-button>
      </i-col>
    </Row> 
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
      pwd1:"",
      pwd:"",
      userEmail:""
    }
  },
  components:{Grapro},
  methods:{
    resetPwd:function() {
    
    },
    resetPwd:function(){
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
  .Row{
    margin-bottom: 1rem;
  }

</style>
