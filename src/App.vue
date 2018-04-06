<template>
  <div id="app">
    <!-- <index-header></index-header> -->
    
    <router-view/>
  </div>
</template>

<script>
// import IndexHeader from "./components/Header/IndexHeader"
export default {
  name: 'app',
  updated:function(){
	// if(localStorage.getItem("name")==undefined){
	// 	this.$Message.warning('请先登陆');
	// 	this.$router.push({path:'/login'})
	// }
}
}
</script>

<style>
#app{
	padding-bottom: 6rem;
}
</style>
