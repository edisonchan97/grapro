<template>
	<div>
	<router-view></router-view>
  <Index-footer active-key="5"></Index-footer>
	</div>
</template>
<script>
import IndexFooter from "../../components/Footer/Footer"
export default {
  name: '',
  data () {
    return {
      selectType:""
    }
  },
  components:{IndexFooter},
  mounted:function(){
  	console.log(this.$refs.footName)
  }
}
</script>

<style scoped>
  div{
  	font-size: ;
  }
</style>
