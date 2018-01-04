<template>
  <div class="forget-pwd">
    <div class="container from-group">
      <h1 id="title">Welcome To Grapro</h1>
    </div>
    <div class="container from-group">
      <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
        <span class="input-group-addon glyphicon glyphicon-envelope" id=""></span>
        <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">
      </div>
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


</style>
