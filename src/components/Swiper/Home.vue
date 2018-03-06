<template>
  <div>
   <Swiper :listImg="listImg"></Swiper>
  </div>
</template>

<script>
 import Swiper from './Swiper.vue'
 import a from '../../../static/011.jpg'
 import b from '../../../static/4.jpg'
 import c from '../../../static/11.jpg'
 import d from '../../../static/12.jpg'
 import e from '../../../static/50.jpg'
     export default {
        name: 'Home',
        data() {
            return {
                listImg: [{
                    url: a
                }, {
                    url: b
                }, {
                    url: c
                }, {
                    url: d
                }, {
                    url: e
                }]
            }
        },
        components: {
            Swiper
        }
    };
    // console.log(listImg)
</script>