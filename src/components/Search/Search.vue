<template>
	<div class="search">
    <Index-header></Index-header>
	<Row>
	<i-col span="20" offset="2">
		<span>
			<i-input icon="android-arrow-forward" placeholder="请输入..." style="width: 100%" @on-click="search" v-if="!nine" size="large"></i-input>
		</span>
    </i-col>
    <!-- <i-col span><Icon type="android-arrow-forward"></Icon> -->
	</Row>
	<Row>
		<Menu mode="horizontal"  active-key="1">
	        <i-col :lg="{span:4, offset:4}" :xs="{ span: 8 }" class="search-type">
	        <Menu-item key="1" name="1">
	            <Icon type="fireball"></Icon>
	            热门搜索
	        </Menu-item>
	            </i-col>
	             <i-col :lg="{span:4, offset:4}" :xs="{ span: 8 }" class="search-type">
	        <Menu-item key="2" name="2">
	            <Icon type="person-stalker"></Icon>
	            用户
	        </Menu-item>
	        </i-col>
	         <i-col :lg="{span:4, offset:4}" :xs="{ span: 8 }" class="search-type">
	        <Menu-item key="3" name="3">
	            <Icon type="images"></Icon>
	            图文
	        </Menu-item>
	        </i-col>
	    </Menu>
	</Row>
	<Picture-contain></Picture-contain>
	<!--
	<div class="overNine" v-if="nine">
		dayu
	</div>
	<div class="shortNine" v-else>
		xiaoyu
	</div> -->

    <Index-footer active-key="2"></Index-footer>
	</div>

</template>
<script>
import IndexFooter from "../../components/Footer/Footer"
import IndexHeader from "../../components/Header/IndexHeader"
import PictureContain from "../../components/LittleComponents/PictureContain"
export default {
  name: 'Search-Page',
  data () {
    return {
      nine: window.screen.width > 960 ? true : false
    }
  },components:{IndexFooter,IndexHeader,PictureContain},
  methods:{
	search:function(){
		console.log(1)
	}
	}
}
</script>

<style scoped>
  .search{
  	padding-bottom: 6rem;
  }
  .search-type{
  	/*float: none;*/
  }
</style>
