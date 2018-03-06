<template>
  <div>
  <div class="personal-home-page">
      <Index-header></Index-header>
      <div style="overflow:hidden;margin-top:1rem;">
      <div id="show-head" class="col-md-4 col-xs-6 col-lg-3">
        <img src="" alt="">
      </div>
      <div id="person-set" class="col-md-4 col-xs-6 col-lg-3">
        <span id="emailName">{{emailName}}</span>
        <router-link to="/Personal/EditInfo"><Button long>编辑个人资料</Button></router-link>
      </div>
      </div> 
      <Row >
        <Col span="20" offset="2" class="userDesc">没有 谁能够想到 你会 出现我身旁 也许 是命运开的玩笑不敢 太靠近你的身边怕你会嫌烦</Col>
      </Row>     
      <hr>
      <Row> 
      <Menu mode="horizontal"  active-name="1" >
      <Col span="8">
        <MenuItem name="1" style="width:auto">
            <Icon type="ios-paper"></Icon>
            帖子
        </MenuItem>
      </Col>
      <Col span="8">
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            关注者
        </MenuItem>
      </Col>
      <Col span="8">
        <MenuItem name="3">
            <Icon type="stats-bars"></Icon>
            正在关注
        </MenuItem>
      </Col>
        
        
        
    </Menu>
    </Row>
      <!-- <hr> -->
      
  </div>
  
    <router-view></router-view>
  <Index-footer></Index-footer>
  </div>
</template>

<script>
import IndexHeader from "../../components/Header/IndexHeader"
import IndexFooter from "../../components/Footer/Footer"
import {mapState} from "vuex";
export default {
  name: 'PersonalHomePage',
  data () {
    return {
      emailName:"edisonzhuozhou", 
      nickName:"edisonChan", 
    }
  },
  components:{IndexHeader,IndexFooter},
  mounted:function(){
    // this.$store.dispatch("ChangePage",5)
  }
}
</script>


<style scoped>
  #show-head{
    border-radius: 50%;
    overflow: hidden;
    width: 15rem;
    height: 15rem;
    border: 1px solid blue; 
    margin-left: 2rem;
  }
  img{
    width: 100%;
    height: 100%;
  }
  #person-set{
    font-size:2rem;
    margin-top: 5rem;
  }
  .userDesc{
    /*height: 3rem;*/
    line-height: 3rem;
    max-height: 6rem;
    font-size:1.2rem;
    word-wrap : break-word ;
    word-break : break-all;
  }
  /*屏幕大于960px*/
  @media screen and (min-width: 960px) {
    .personal-home-page{
        width: 60%;
        margin:0 20%;
      }
}
@media screen and (max-width: 960px) {
  .personal-home-page{
      width: 100%;
      margin: 0;
    }
}
  
</style>
