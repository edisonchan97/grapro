<template>
<div>
    <Index-header></Index-header>
    <form id="upPic">
        <div class="form-group">
            <input type="file" name="image[]" multiple="multiple" class="form-control" @change="onFileChange">  
        </div>
        <div class="form-group" v-if="image" v-for="(img,index) in image">
            <div class="imgC">
                <img src="" alt="" :src="img" :id="index" class="imgArr">
                <!-- <div> -->
                    <i-button type="ghost" icon="ios-trash" :data="index" ref="data" @click="removeImg(index)"></i-button>
                <i-button type="ghost" icon="eye" :data="index" @click="viewImg(index)"></i-button>
                <!-- </div> -->
            </div>
        </div>
        <i-input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..." v-model="imgDesc"></i-input>
        <i-button type="success" @click="subImage">确认提交</i-button>
        <i-button type="error" @click="gary">灰度</i-button>
    </form>
    <Row >
        <Tag type="border" color="red" closable v-for="l,index in type" :typeIdx="index" @on-close="handleClose(index)">{{l}}</Tag>
        <Button icon="ios-plus-empty" type="dashed" size="small"  @click="handleRender">添加标签</Button>

    </Row> 
    <div class="modalImg">
        <div style="width:80%;padding:0 10%;margin:0"></div>
    </div>
    <Modal v-model="modalView" width="360">
        <div style="text-align:center">
            <img :src="imgName" alt="" style="width:80%;" >
        </div>
        <div slot="footer">
            <i-button type="primary" shape="circle" size="large" long @click="modalView = false">OK</i-button>
        </div>
    </Modal>
    <Index-footer active-key="3"></Index-footer>
</div>
</template>
<script>
import axios from "axios"
import '../../assets/js/base.js'
import IndexFooter from "../../components/Footer/Footer"
import IndexHeader from "../../components/Header/IndexHeader"
import $ from 'jquery'
    export default {
        data () {
            return {
                image:[],
                form:"",
                imgList:[],
                imgName:"",
                file:[],
                modalView:false,
                imgDesc:"",
                type:["美人","美景","美物"],
                value:""
            }
        },
        computed: {
            
        },
components:{IndexFooter,IndexHeader},
        methods: {
            onFileChange:function(e){
                if(this.image.length>=5){alert("最多上传5张照片");return;}
                this.imgName = this.imgName+1;
                var files = e.target.files || e.dataTransfer.files;
                if(!files.length){
                        return;
                    }else{
                        for(let i = 0;i<files.length;i++){
                            if(files[i].size>2097152){
                                this.$Message.info("图片最大2M");return;
                            }
                            this.createImage(files[i]);

                        this.form.append("image["+(this.image.length+i)+"]",files[i])
                        }
                        
                        // this.file.push(files[0]);
                        console.log(this.file,1)
                    }
                

            },
            createImage(file){
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) =>{
                    // vm.image = e.target.result;
                    vm.image.push(e.target.result);
                };
                    reader.readAsDataURL(file);
            },
            removeImg:function(id){
                let tmp=[];
                let tmpKey=[];
                this.image.splice(id,1)
                console.log(this.image)
                this.form.delete("image["+id+"]")//删除formData中对应的图片数据
                for(let pic of this.form){
                    tmp.push(pic[1])//获取formData剩余的图片的值
                    tmpKey.push(pic[0])//获取formData剩余的图片的键
                }
                for(let j=0;j<=tmpKey.length;j++){
                    this.form.delete(tmpKey[j])//删除所有的键
                }
                for(let i=0;i<tmp.length;i++){
                    this.form.set("image["+i+"]",tmp[i])//将剩余的赋值
                }
            },
            viewImg:function(id){
                console.log(this.modalView)
                this.modalView = true;
                this.imgName = this.image[id]
            },
            subImage:function(){
                    let flag=false;
                this.form.set("imgDesc",this.imgDesc)
                this.form.set("u_id",localStorage.getItem("u_name"))
                for(var form of this.form.entries()){
                    console.log(form[0],form[1])
                    if(form[0]=="image[0]"){
                        flag =true;
                    }
                }
                if(flag){
                    let timestamp=new Date().getTime()
                let type=this.type.join("|") +"|"
                this.form.set("time",timestamp)
                this.form.set("type",type)
                axios({
                    method:'post',
                    url:'http://127.0.0.1/garpro/Upload/uploadFile',
                    processData:false,
                    contentType:false,
                    // headers:{"Content-Type":"text/plain;charset=utf-8"},
                    data:this.form
                  }).then(res=>{//
                    console.log(res.data)
                    if(res.data == true){
                        this.$Message.info("发布成功");
                        this.$router.push({path:"/"})
                    }
                  }).catch(res=>{
                    console.log(error)
                  })
              }else{
                this.$Message.info("请上传图片")
                return;
              }
                
            },
            gary:function(){
                $(".imgArr").grayImg(100);
                this.form.set("style","filter: grayscale(100%);")
            },
            handleClose:function(e){
                console.log(e);
                this.type.splice(e,1);
                console.log(this.type)
            },
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your type...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    },
                    onOk:()=>{
                        if(this.value.indexOf("|")>-1){
                            this.$Message.info("请勿输入非法字符");
                            return;
                        }else{
                            this.type.push(this.value);
                        console.log(this.type)
                        }
                        
                    }
                })
            }
        },mounted:function(){

            this.form = new FormData($("#upPic")[0]);
            this.form.delete("image[]")
            this.form.set("style","")
        }
    }
</script>
<style>
    .imgArr{
        width: 100px;
    }
    .modalImg{
        /*display: none;*/
        position: fixed;
        background: #f7f7f9;
    }
    .labelType{
        padding: 5px 10px;
        background: #563729;
        max-width: 10rem;
        border-radius: 10px;
        margin: 5px;
        color: #fff;
        /*width: 2rem;*/
    }
</style>