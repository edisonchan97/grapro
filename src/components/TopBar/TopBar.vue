<template>
	<div>
		<i-input>
	        <i-select :model.sync="selectType" slot="prepend" style="width: 80px">
	            <i-option value="content">内容</i-option>
	            <i-option value="user">用户</i-option>
	            <i-option value="label">标签</i-option>
	        </i-select>
	        <i-button slot="append" icon="ios-search"></i-button>
	    </i-input>
	</div>
</template>
<script>
export default {
  name: 'top-bar',
  data () {
    return {
      selectType:""
    }
  }
}
</script>

<style scoped>
  div{
  	font-size: ;
  }
</style>
