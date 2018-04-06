<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu :active-name="showContent" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1" @click.native="changeContent(1)">
                        <Icon type="ios-navigate"></Icon>
                        <span>查看统计</span>
                    </MenuItem>
                    <MenuItem name="2" @click.native="changeContent(2)">
                        <Icon type="search"></Icon>
                        <span>处理举报</span>
                    </MenuItem>
                    <MenuItem name="3" @click.native="changeContent(3)">
                        <Icon type="settings"></Icon>
                        <span>发布消息</span>
                    </MenuItem>
                    <MenuItem name="4" @click.native="changeContent(4)">
                        <Icon type="ios-people"></Icon>
                        <span>管理用户</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '600px'}">
                    <router-view
                    ></router-view>
                </Content> 
            </Layout>
        </Layout>
    </div>
</template>
<script>
import UserManage from './UserManage'
import axios from 'axios'
    export default {
        data () {
            return {
                isCollapsed: false,
                activeName:"1",
                showContent:"1"
                // activeName:1
            }
        },
        components:{
            UserManage
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            showC(){
                return 1;
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            getUsers(){
                axios({
                    method:'get',
                    url:'http://127.0.0.1/garpro/user/adminShowUser',
                    params:{
                      start:0
                    }
                  }).then(res=>{
                    console.log(res.data)
                    this.userInfo = res.data.data
                    this.userInfoTotal = res.data.count
                  }).catch(error=>{
                    console.log(error)
                  })
            },
            changeContent(e){
                switch(e){
                    case 1:
                        this.$router.push({path:"/Admin"});
                        console.log(12)
                        break;
                    case 2:
                        this.$router.push({path:"/Admin/HandleReport"});
                        console.log(23)
                        break;
                    case 3:
                        this.$router.push({path:"/Admin/PublishMessage"});
                        console.log(34)
                        break;
                    case 4:
                        this.$router.push({path:"/Admin/UserManage"});
                        this.getUsers();
                        console.log(45)
                        break;
                }
            }
        },
        mounted:function(){
            let loc = location.href;
            if(loc.indexOf("HandleReport")>-1||loc.indexOf("handlereport")>-1){
                this.showContent = "2"
            }else if(loc.indexOf("PublishMessage")>-1||loc.indexOf("publishmessage")>-1){
                this.showContent = "3"
            }else if(loc.indexOf("UserManage")>-1||loc.indexOf("usermanage")>-1){
                this.showContent = "4";
                // this.getUsers()
            }else{
                this.showContent = "1"
            }
        }
    }
</script>