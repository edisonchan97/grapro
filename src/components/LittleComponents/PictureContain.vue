<template>
  <div class="pictureContain">
    <div style="background:#eee;padding: 5px" >
        <Card :bordered="false" >
          <div>
           <router-link to="/">
           <Avatar icon="person" size="large" style="background-color:#87d068"  :src="avatar" /> {{name}}
           </router-link>
          </div>
          <hr>
          <div class="picCar">
            <Carousel dots="none">
              <Carousel-item v-for="url in iUrl">
                  <div class="demo-carousel"><img :src="url" alt=""></div>
              </Carousel-item>
            </Carousel>
          <Tag type="dot"  color="red" v-for="t,index in type">{{t}}</Tag>
          </div>
          <hr>
          <Row>
              <i-col :xs="{ span: 10, offset: 14 }" :lg="{ span: 6, offset: 18 }" style="font-size:1rem;text-align:right">{{time.slice(0,16)}}</i-col>
          </Row>
          <div>
          <Row>
              <i-col span="24">{{dContent}}</i-col>
          </Row>
          <Row>              
              <i-col span="2" offset="18" ><span v-bind:class="{ 'class-a': isA, 'class-b': !isA}" @click="toggle"><Icon type="heart" size="25"></Icon></span></i-col>
              <i-col span="2" offset="1" ><span @click="comment" v-bind:class="{ 'class-c': isA, 'class-d': !isA}"><Icon type="chatbubble-working" size="25" ></Icon></span></i-col>
          </Row>
          <Row>
              <i-col span="22" offset="" ><i-input :value.sync="value" placeholder="请输入评论..." style="" type="textarea" v-show="show
              "></i-input></span></i-col>
          </Row>

          </div>
        </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pictureContain',
  props:["dContent","iUrl","time","type","name","avatar"],
  data () {
    return {
      listImg: [{
                url: ""
            }, {
                url: ""
            }, {
                url: ""
            }, {
                url: ""
            }, {
                url: ""
            }],
            isA:false,
            value:"",
            show:false
      }
  },methods: {
            toggle: function(){
                this.isA = !this.isA;
            },
            comment: function(){
                this.show = !this.show;
            }
        }}
</script>


<style scoped>
.pictureContain{
  padding: 0 20%;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
@media screen and (max-width: 960px) {
  .pictureContain{
    padding: 0 1rem;
  }
  .picCar img{
    max-height: 20rem;
    max-width: 100%;
    vertical-align: middle;
  }
}
.picCar{
  height: auto;
  width: auto;
  text-align: center;
  overflow: hidden;
  /*display: table;*/
}
.picCar img{
  max-height: 40rem;
  max-width: 100%;
  vertical-align: middle;
}
.demo-carousel{
  /*display: table-cell;
  text-align: center;
  vertical-align: middle;*/
  position: relative;
}
.picDesc{
  width: 80%;
}
.class-a{
  color:#4e4e4e;
}
.class-b{
  color:red;
}
.class-c{
  color:#4e4e4e;
}
</style>
