<template>
  <div class="editPersonalInfo">
	  <div class="personal-home-page">
	      <div class="headerNav">
        <Row>
          <Col span="4"offset="1" >
          <Button type="ghost" style="margin-top:10px;">
            <router-link to="/Personal/Show">
             <Icon type="chevron-left"></Icon>
              Back
            </router-link>
          </Button>
        </Col>
          <Col span="13"offset="1" >
            <h3 style="margin-top:10px;display:inline-block">编辑信息</h3>
          </Col>
        </Row> 
        </div>
	      <Row class="marginHead">
	      	 <Col span="7"offset="1" >
	      	 	<div class="avatar">
            		<img icon="person" :src="avatar"/>
            	</div>
            </Col>
            <Col span="10">
            	<h4>{{name}}</h4><br>
            	<h4 style="cursor:pointer;color:#428bca;" @click="changeAvatar">更改头像</h4>
            	<input type="file" ref="changeHead" style="visibility:hidden" v-on:change="changeHead">
            </Col>
	      </Row>
	    <form id="editInfo">
		<Row>
	        <Col span="10"offset="1" ><label class-name="label">姓名</label></Col>
	        <Col span="20" offset="1"><Input v-model="name"  placeholder="Enter something..." style="width: 100%"></Input></Col>
	    </Row>
	    <Row>
	        <Col span="10"offset="1" ><label class-name="label">账号</label></Col>
	        <Col span="20" offset="1"><Input v-model="username" disabled placeholder="Enter something..." style="width: 100%"></Input></Col>
	    </Row>
	    <Row>
	        <Col span="10"offset="1" ><label class-name="label">地区</label></Col>
	        <Col span="20" offset="1"><Input v-model="address" placeholder="Enter something..." style="width: 100%"></Input></Col>
	    </Row>
	    <Row>
	        <Col span="10"offset="1"><label class-name="label">个人简介</label></Col>
	        <Col span="20" offset="1"><Input v-model="ownDesc"  placeholder="Enter something..." type="textarea" style="width: 100%"></Input></Col>
	    </Row>
	    <Row><Col span="10"offset="1" ><h4 style="color:#495060">私密信息</h4></Col></Row>
	    <Row>
	        <Col span="10"offset="1" ><label class-name="label">性别</label></Col>
	        <Col span="20" offset="1">
	        <Select v-model="sex" style="width:200px" >
		        <Option v-for="item in gender" :value="item.value" :key="item.value">{{ item.label }}</Option>
		    </Select>
	        </Col>
	    </Row>
	    <Row>
	        <Col span="10"offset="1" ><label class-name="label">电话</label></Col>
	        <Col span="20" offset="1"><Input v-model="phone"  placeholder="Enter something..." style="width: 100%"></Input></Col>
	    </Row>
	    <Row>
	        <Col span="10"offset="1"><label class-name="label">邮箱</label></Col>
	        <Col span="20" offset="1"><Input v-model="email"   placeholder="Enter something..." style="width: 100%"></Input></Col>
	    </Row>
	    <Row>	
	    <Col span="16" offset="4" >
	    	<i-button type="primary" shape="circle" size="large" style="margin-top:2rem" long @click="subInfo">保存</i-button>
	    	</Col>
	    </Row>
	      </form>
	  </div>
  </div>
</template>

<script>
import IndexFooter from "../../components/Footer/Footer"
import axios from "axios"
export default {
  name: 'EditPersonalInfo',
  data () {
    return {
      name:this.$store.state.nickname,
      username:this.$store.state.name,
      phone:this.$store.state.phone,
      email:this.$store.state.email,
      ownDesc:this.$store.state.introduce,
      address:this.$store.state.address,
      sex:this.$store.state.sex,
      avatar:this.$store.state.avatarUrl,
      avatarAds:"",
      gender: [
                {
                    value: 'male',
                    label: '男'
                },
                {
                    value: 'female',
                    label: '女'
                },
                {
                    value: 'uncheck',
                    label: '未指定'
                },],
      form:""

    }
  },
  components:{IndexFooter},
  mounted:function(){
  	this.form = new FormData($("#editInfo")[0]);
  },
  methods:{
  	changeAvatar:function(){
  		this.$refs.changeHead.click()
  		},
  	changeHead:function(e){
  		var files = e.target.files || e.dataTransfer.files;
        	if(!files.length){
                return;
            }else{
                this.createImage(files[0]);
            	this.form.set("avatarPic",files[0])
            	axios({
  			        method:'post',
  			        url:'http://127.0.0.1/garpro/user/changeAvatar',
  			        processData:false,
  			        contentType:false,
  			        // headers:{"Content-Type":"text/plain;charset=utf-8"},
  			        data:this.form
  			      }).then(res=>{//
  			        this.avatar = res.data.url;
                // this.avatarAds = this.avatar;
  			      }).catch(res=>{
  			        console.log(error)
  			      })
            }
        },
    createImage(file){
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) =>{
            vm.avatar=e.target.result;
        };
            reader.readAsDataURL(file);
    },
    subInfo:function(){
    	this.form.set("email",this.email);
    	this.form.set("sex",this.sex);
    	this.form.set("ownDesc",this.ownDesc);
    	this.form.set("username",this.username);
    	this.form.set("phone",this.phone);
    	this.form.set("name",this.name);
    	this.form.set("avatarUrl",this.avatar);
    	this.form.set("address",this.address);
      this.form.set("u_id",localStorage.getItem("u_id"))
    	axios({
	        method:'post',
	        url:'http://127.0.0.1/garpro/user/editInfo',
	        processData:false,
	        contentType:false,
	        // headers:{"Content-Type":"text/plain;charset=utf-8"},
	        data:this.form
	      }).then(res=>{//
	        if(res.data==true){
            this.$store.state.nickname = this.name;
            this.$store.state.name = this.username;
            this.$store.state.avatarUrl = this.avatar;
            this.$store.state.introduce = this.ownDesc;
            // this.$store.state.user_id = res.data.data[0].user_id;
            this.$store.state.sex = this.sex;
            this.$store.state.phone = this.phone;
            this.$store.state.address = this.address;
            this.$store.state.email = this.email;
            // localStorage.setItem("u_name",this.$store.state.name); 
            this.$Message.info("修改成功");

            this.$router.push({path:"/Personal/Show"})
          }else{

          }
	      }).catch(res=>{
	        console.log(error)
          this.$Message.info("修改失败")
	      })
    }
  }
}
</script>


<style scoped>
  /*屏幕大于960px*/
  @media screen and (min-width: 960px) {
    .personal-home-page{
        width: 60%;
        margin:0 20%;
        padding-top: 5rem;
        margin-bottom: 8rem
      }
      .headerNav{
   	position:fixed;
   	margin:0 auto;
   	width: 60%;
   	top: 0;
   	background: #f1f1f1;
   	text-align: center;
   	height: 5rem;
   	z-index: 9;
   }
   .avatar{
  	width: 150px;
  	height: 150px;
  }
}
@media screen and (max-width: 960px) {
  .personal-home-page{
      width: 100%;
      margin: 0;
      padding-top: 5rem;
      margin-bottom: 8rem
    }
    .headerNav{
   	position:fixed;
   	margin:0 auto;
   	width: 100%;
   	top: 0;
   	background: #f1f1f1;
   	text-align: center;
   	height: 5rem;
   	z-index: 9;
   }
   .avatar{
  	width: 100px;
  	height: 100px;
  }
}
  .label{
  	font-weight: bold;
  }
  .avatar img{
  	width: 100%;
  	height: 100%;
  }
  .avatar{
  	border-radius: 100%;
  	overflow: hidden;
  }
  .marginHead{
  	margin:3rem 0;
  }
</style>
