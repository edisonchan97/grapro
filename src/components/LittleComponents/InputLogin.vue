<template>
  <div class="input-login">
    <div class="input-group col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 ">
      <span class="input-group-addon glyphicon glyphicon-user" id=""></span>
        <input type="text" class="form-control" :placeholder= "placeholder"  aria-describedby="basic-addon1">
    </div>    
  </div>
</template>

<script>
export default {
  name: 'input-login',
  data () {
    return {
      placeholder: "Username"
    }
  }
}
</script>


<style scoped>
  .glyphicon{
    top: 0;
  }
  .input-group{
    margin-bottom: 10px;
  }
</style>
