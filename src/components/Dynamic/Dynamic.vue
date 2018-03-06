<template>
<div>
  <div class="dynamic">
    <div class="headerNav"><h3 style="margin-top:10px;">动态</h3></div>
    <div v-for="dy in arr">
      <Row class="follow" v-if="dy.type=='1'">
        <Col span="3" offset="1" style="height:5rem;line-height:5rem;" >
          <Avatar icon="person" size="large" style="background-color:#87d068"  :src="dy.avatar" />
        </Col>
        <Col span="16" offset="" style="height:5rem;line-height:5rem;font-size:1.7rem;">
          <span style="font-weight:bold">{{dy.username}}</span>开始关注你
        </Col>
        <Col span="4" offset="" style="height:5rem;line-height:5rem;text-align:center">
          <i-switch v-model="dy.hasFollow" @on-change="change"></i-switch>
        </Col>
      </Row>
      <Row class="dy" v-else-if="dy.type=='2'">
        <Col span="3" offset="1" style="height:5rem;line-height:5rem">
          <Avatar icon="person" size="large" src="" style="background-color: #87d068" />
        </Col>
        <Col span="16" offset="" style="height:5rem;line-height:5rem;font-size:1.7rem;">
          <span style="font-weight:bold">{{dy.username}}</span>点赞了你的图片
        </Col>
        <Col span="4" offset="" style="height:5rem;line-height:5rem;text-align:center">
          <Avatar shape="square" size="large" :src="dy.dySrc"></Avatar>
        </Col>
      </Row>
      <Row class="comment" v-else-if="dy.type=='3'">
        <Col span="3" offset="1" style="height:5rem;line-height:5rem">
          <Avatar icon="person" size="large" src="" style="background-color: #87d068" />
        </Col>
        <Col span="16" offset="" style=";height:5rem;line-height:5rem;font-size:1.7rem;">
          <span style="font-weight:bold">{{dy.username}}</span>评论了你的图片
        </Col>
        <Col span="4" offset="" style="height:5rem;line-height:5rem;text-align:center">
          <Avatar shape="square" size="large" :src="dy.dySrc"></Avatar>
        </Col>
      </Row>

    </div>    
  </div>
  <Index-footer active-key></Index-footer>
</div>
  
</template>

<script>
import IndexFooter from "../../components/Footer/Footer"
export default {
  name: 'PersonalHomePage',
  data () {
    return {
      username:"chan97",
      flag:true,
      arr:
        [{
         avatar:"http://127.0.0.1/uploads/zz.jpg",
         type:"1",
         username:"tt",
         hasFollow:true,
         dySrc:""
       },{
         avatar:"http://127.0.0.1/uploads/zz.jpg",
         type:"2",
         username:"zz",
         hasFollow:false,
         dySrc:"http://127.0.0.1/uploads/image.jpg"
       } 
      ]
    }
  },
  components:{IndexFooter},
  mounted:function(){
  },methods:{
    change (status) {
              status ? this.$Message.info('关注') : this.$Message.info('取消关注');
            }
  }
}
</script>


<style scoped>
  /*屏幕大于960px*/
  @media screen and (min-width: 960px) {
  .headerNav{
    width: 60%;
   }
  .dynamic{
    margin:0 20%;
    width: 60%;
  }
}
@media screen and (max-width: 960px) {
  .headerNav{
    width: 100%;
   }
  .dynamic{
    margin:0;
    width: 100%;
  }
}
  .headerNav{
    top: 0;
    background: #f1f1f1;
    text-align: center;
    height: 5rem;
    z-index: 9;
    position:fixed;
    margin:0 auto;
  }
  .dynamic{
    padding-top: 5rem;
    margin-bottom: 8rem
  }
</style>
