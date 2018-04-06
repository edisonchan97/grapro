<template>
<div>
    <Table border :columns="columns7" :data="userInfo" width="1000"></Table>
    <Page :total="userInfoTotal" :current="1" show-total :page-size=pageSize @on-change="change" ></Page>
</div>
    
</template>
<script>
import axios from 'axios'
    export default {
        // props:["userInfo","userInfoTotal"],
        data () {
            return {
                columns7: [
                    {
                        title: 'Name',
                        fixed: 'left',
                        width: 200,
                        key: 'user_name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.user_name)
                            ]);
                        }
                    },
                    {
                        title: 'NickName',
                        width: 150,
                        key: 'user_nickname'
                    },
                    {
                        title: 'Sex',
                        width: 60,
                        key: 'user_sex',
                        render:(h,params)=>{
                            return h('span',params.row.user_sex==="female"? "女" : "男")
                        }
                    },
                    {
                        title: 'Phone',
                        width: 160,
                        key: 'user_phone'
                    },
                    {
                        title: 'Email',
                        width: 200,
                        key: 'user_email'
                    },
                    {
                        title: 'CreateTime',
                        width: 200,
                        key: 'user_create_time',
                        render:(h,params)=>{
                            return h('span',params.row.user_create_time.substr(0,16))
                        }
                    },
                    {
                        title: 'Action',
                        key: 'can_use',
                        fixed: 'right',
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small',
                                        disabled: params.row.can_use=="1" ? true : false
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.start(params.index)
                                        }
                                    }
                                }, '启用'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        disabled: params.row.can_use=="0" ? true : false
                                    },
                                    on: {
                                        click: () => {
                                            this.disabled(params.index)
                                        }
                                    }
                                }, '禁用')
                            ]);
                        }
                    }
                ],
                userInfo:[],
                userInfoTotal:0,
                pageSize:2,
                currentPage:1
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.userInfo[index].user_nickname}<br>Age：${this.userInfo[index].user_email}<br>Introduce:${this.userInfo[index].user_introduce}`
                })
            },
            start (index) {
                this.userInfo[index].canuse = 1;
                axios({
                    method:'get',
                    url:'http://127.0.0.1/garpro/user/adminManageUser',
                    params:{
                      user_id:this.userInfo[index].user_id,
                      type:"start"
                    }
                  }).then(res=>{
                    console.log(res.data)
                    this.getUsers(this.currentPage)
                  }).catch(error=>{
                    console.log(error)
                  })
            },
            disabled(index){
                this.userInfo[index].canuse = 0;

                console.log(this.userInfo[index])
                axios({
                    method:'get',
                    url:'http://127.0.0.1/garpro/user/adminManageUser',
                    params:{
                      user_id:this.userInfo[index].user_id,
                      type:"disable"
                    }
                  }).then(res=>{
                    console.log(res.data)
                    this.getUsers(this.currentPage)
                  }).catch(error=>{
                    console.log(error)
                  })
            },
            getUsers(page){
                let start = !!page? (page-1)*this.pageSize :0
                console.log(start)
                axios({
                    method:'get',
                    url:'http://127.0.0.1/garpro/user/adminShowUser',
                    params:{
                      start:start
                    }
                  }).then(res=>{
                    console.log(res.data)
                    this.userInfo = res.data.data
                    this.userInfoTotal = res.data.count
                  }).catch(error=>{
                    console.log(error)
                  })
            },
            change(page){
                this.currentPage = page; 
                console.log(page)
                this.getUsers(page)

            }
        },
        mounted:function(){
            console.log(this.userInfo);
            this.getUsers()
        }
    }
</script>