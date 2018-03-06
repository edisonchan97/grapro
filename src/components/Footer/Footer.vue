<template>
	<div class="footer layout">
	     <Menu mode="horizontal" :active-name="activeKey" ref="footName">
            <div class="layout-assistant">
                <router-link to="/"><Menu-item name="1" ><Icon type="ios-home"></Icon></Menu-item></router-link>
                <router-link to="/Search"><Menu-item name="2" ><Icon type="search"></Icon></Menu-item></router-link>
                <router-link to="/Publish"><Menu-item name="3" ><Icon type="android-add-circle"></Icon></Menu-item></router-link>
                <router-link to="/Dynamic"><Menu-item name="4" ><Icon type="android-favorite-outline"></Icon></Menu-item></router-link>
                <router-link to="/Personal/"><Menu-item name="5" ><Icon type="ios-person"></Icon></Menu-item></router-link>
            </div>
        </Menu>
	</div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  },
  props:{
    activeKey:String
  }
}
</script>

<style scoped>
  .layout-assistant{
    width: 100%;
    margin: 0 auto;
    height: inherit;
    text-align: center;
  }
  .layout-assistant li{
    width: 20%;
  }
  .footer{
    margin: 0 auto;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid red;
    z-index:901;
    /*padding:0 1rem; */
  }
    /*屏幕大于960px*/
  @media screen and (min-width: 960px) {
    .footer{
    margin: 0 auto;
    width: 60%;
    margin: 0 20%;
    position: fixed;
    bottom: 0;
    border: 1px solid #f1f1f1;
    /*padding:0 1rem; */
  }
}
@media screen and (max-width: 960px) {
  .footer{
    margin: 0 auto;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid red;
    /*padding:0 1rem; */
  }
}
  i{
    font-size: 3rem;
  }
</style>
