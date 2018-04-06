<template>
  <div>
  <div class="personal-home-page">
      <Index-header></Index-header>
      <div style="overflow:hidden;margin-top:1rem;">
      <div id="show-head" class="col-md-4 col-xs-6 col-lg-3">
        <img :src=avatarUrl alt="">
      </div>
      <div id="person-set" class="col-md-4 col-xs-6 col-lg-3">
        <span id="emailName">{{name}}</span>
        <router-link to="/Personal/EditInfo"><Button long>编辑个人资料</Button></router-link>
      </div>
      </div> 
      <Row >
        <Col span="20" offset="2" class="userDesc">简介：{{introduce}}</Col>
      </Row>     
      <hr>
      <Row> 
      <Menu mode="horizontal"  active-name="1" >
      <Col span="8">
      <router-link to="/Personal/Show/Dynamic">
        <MenuItem name="1" style="width:auto">
            <Icon type="ios-paper"></Icon>
            帖子
        </MenuItem>
        </router-link>
      </Col>
      <Col span="8">
      <router-link to="/Personal/Show/FollwerU">
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            关注者
        </MenuItem>
        </router-link>
      </Col>
      <Col span="8">
      <router-link to="/Personal/Show/UFollwer">
        <MenuItem name="3">
            <Icon type="stats-bars"></Icon>
            正在关注
        </MenuItem>
        </router-link>
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
import axios from "axios"
export default {
  name: 'PersonalHomePage',
  data () {
    return {
      name:this.$store.state.nickname,
      introduce:this.$store.state.introduce,
      avatarUrl:this.$store.state.avatarUrl
    }
  },
  components:{IndexHeader,IndexFooter},
  mounted:function(){
    axios({
        method:'get',
        url:'http://127.0.0.1/garpro/search/onesInfo',
        params:{
          userid:localStorage.getItem("u_id")
        }
      }).then(res=>{//注册成功返回'loginsuc'
        console.log(res.data)
      }).catch(res=>{
        console.log(error)
      })
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
