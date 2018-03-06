<template>
  <div class="index">
    <div class="layout">
        <div class="layout-ceiling">
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <i-col span="6">
        <a class="navbar-brand" href="#">
          <img alt="Grapro" :src='imgSrc' >
        </a>
        </i-col>
        <i-col span="12">
          <i-input icon="ios-clock-outline" placeholder="请输入..." style="width: 200px" v-if="searchShow"></i-input>
        </i-col>
        <i-col span="3" offset="2" >
          <!-- <span @click="logout = true"> -->
            <!-- <Icon type="ios-paperplane" ></Icon> -->
          <!-- </span> --><Dropdown trigger="click" style="margin-left: 20px">
            <a href="javascript:void(0)">
                <Icon type="ios-paperplane" style="font-size:5rem;cursor:pointer;"></Icon>
            </a>
            <DropdownMenu slot="list" style="z-index:0;position:fixed;top:7rem;right:1rem;background-color:#f3f3f3">
                <span @click="logout = true;logMessage='添加用户'"><DropdownItem >添加用户</DropdownItem></span>
                <span @click="logout = true;logMessage='退出登陆'"><DropdownItem >退出登陆</DropdownItem></span>
            </DropdownMenu>
        </Dropdown>
        </i-col>
        </Row>
          
      </div>
      </div>
      <Modal v-model="logout" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled" ></Icon>
            <span>温馨提示</span>
        </p>
        <div style="text-align:center">
            <p>请问您确认<strong>{{logMessage}}</strong>吗</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long v-if="logMessage=='添加用户'" @click="addUser">确认</Button>
            <Button type="error" size="large" long v-else="logMessage=='退出登陆'" @click="loginout">确认</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
import TopBar from "../../components/TopBar/TopBar"
export default {
  name: 'index',
  data () {
    return {
      msg: '中文',
      imgSrc: window.screen.width > 960 ? "/static/logo.png" : "/static/logo-purple.png",
      searchShow: window.screen.width > 960 ? true : false,
      logout:false,
      logMessage:""
      // : "/static/logo-purple.png" 
    }
  },
  create:function(){
      // window.screen.width > 960 ? imgSrc = "/static/logo-purple.png" : imgSrc = "/static/logo-purple.png"
  },
  components:{TopBar},
  methods:{
    loginout:function(){
      this.$router.push({name:"Login"})
    },
    addUser:function(){
      this.$router.push({name:"Reg"})
    }
  }
}
</script>


<style scoped>
img{
  /*width: 100%;*/
  height: 100%;
}
.layout{
        border: 1px solid #d7dde4;
        background: #f8f8f8;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-ceiling{
        background: #f8f8f8;
        padding: 10px 0;
        overflow: hidden;
    }
</style>
