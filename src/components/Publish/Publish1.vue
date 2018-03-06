<template>
<div>
    <i-button type="primary" @click="modal1 = true">显示对话框</i-button>
    <Modal v-model="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</div>
    
</template>
<script>

import Modal from 'iview';
import 'iview/dist/styles/iview.css'; 
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            dataURItoBlob:function(base64Data) {
                var byteString;
                if (base64Data.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(base64Data.split(',')[1]);
                else
                byteString = unescape(base64Data.split(',')[1]);
                var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ia], {type:mimeString});
                },
                formDataHandle:function(){
                    var blob = dataURItoBlob(imageBase64); // 上一步中的函数
                var canvas = document.createElement('canvas');
                var dataURL = canvas.toDataURL('image/jpeg', 0.5);
                var fd = new FormData(document.forms[0]);
                fd.append("the_file", blob, 'image.png');
                }
                
        }
    }
</script>