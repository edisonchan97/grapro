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
      userEmail:"",
      time:""
    }
  },
  components:{Grapro},
  mounted:function() {
    var emailInfo = location.hash;
    var qindex = emailInfo.indexOf("?");
    var eindex = emailInfo.indexOf("=");
    this.userEmail = emailInfo.substring(qindex+1,eindex).replace("%40","@");
    var time = emailInfo.substring(eindex+1);
    this.time = time;
    console.log(emailInfo.substring(qindex+1,eindex))
    console.log(emailInfo.substring(eindex+1))
    axios({
      type:'get',
      url:'http://127.0.0.1/garpro/user/checkEmail',
      params:{
        email:this.userEmail,
        time:time
      }
    }).then(res=>{
      if(res.data=="canRest"){
        console.log(res.data)
      }else{
        this.$router.replace({path:'/ForgetPwd'});
      }
    }).catch(res=>{
      console.log(res.data)
    })
  },
  methods:{
    resetPwd:function(){
      axios.post("http://127.0.0.1/garpro/user/resetPassword",
        {
          password:this.pwd,
          email:this.userEmail,
          time:this.time,
        }).then(res=>{
        console.log(res.data);
        if(res.data=="resetSuc"){
          this.$router.replace({path:'/login'});
        }
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
