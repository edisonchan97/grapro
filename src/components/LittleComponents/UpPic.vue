<template>
  <div id="UpPic">
      <input type="file" id="upload-head" @change="change" width="100px">
  </div>
</template>
<script>
export default {
  name: 'UpPic',
  // 定义数据
  data () {
    return {     
    }
  },//定义事件
   methods:{
      html5Reader(file) {
            console.log("666")
           var file = file.files[0];
           var reader = new FileReader();
           reader.readAsDataURL(file);
           reader.onload = function(e){
           var pic = document.getElementById("head-img");
           console.log(this.result)
               pic.src=this.result;
           }
       },
      change() {
      var pic = document.getElementById("head-img"),
      file = document.getElementById("upload-head");
      console.log(file);
        
  var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();

     // gif在IE浏览器暂时无法显示
     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
         alert("图片的格式必须为png或者jpg或者jpeg格式！"); 
     return;
     }
   var isIE = navigator.userAgent.match(/MSIE/)!= null,
     isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;

   if(isIE) {
    file.select();
    var reallocalpath = document.selection.createRange().text;

    // IE6浏览器设置img的src为本地路径可以直接显示图片
         if (isIE6) {
      pic.src = reallocalpath;
     }else {
      // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
             // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
     }
   }else {
    // html5Reader(file);
    console.log("666")
         var file = file.files[0];
         var reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = function(e){
         var pic = document.getElementById("head-img");
         console.log(this.result)
             pic.src=this.result;
         }
   }
},
  html5Reader(file){
          
     },


  },
}
</script>


<style scoped>
  #upload-head{
    position: absolute;
    opacity: 0;
    width: 100px;
    display: inline-block;
    height: 100px;
    overflow: hidden;
    top: -30px;
    left: -12px;
    border-radius: 50%;
  }
</style>
