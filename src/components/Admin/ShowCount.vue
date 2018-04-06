<template>
    <div>
        <RadioGroup v-model="typeName" type="button" @on-change=showTypeContent(typeName)>
            <Radio :label=value v-for="(key,value) in type">'{{value}}':{{key}}</Radio>
        </RadioGroup>
        </br>
        <Tabs  type="card">
            <TabPane  :label="typeName"></TabPane>
        </Tabs>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        data () {
            return {
                type:"",
                typeName:"",
                typeContent:""
            }
        },
        methods:{
            showTypeContent(type){
                axios({
                url:"http://127.0.0.1/garpro/search/typeContent",
                method:"get",
                params:{
                    type:type
                }
            }).then(res=>{
                console.log(res.data)
                this.typeContent = res.data
            })
            }
        },
        mounted:function(){
            axios({
                url:"http://127.0.0.1/garpro/search/alltype",
                method:"post"
            }).then(res=>{
                console.log(res.data.typeSum[0])
                this.type = res.data.typeSum[0]
            })
        }
    }
</script>