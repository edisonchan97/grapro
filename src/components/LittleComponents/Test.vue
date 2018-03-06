<template>
  <div>
    <h1>{{count}}==={{$store.state.a.count}}</h1> 
    <span>
      <button @click='$store.commit("add")'>+</button>
    <button @click='sub'>-</button>
    </span>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
  name: 'Test',
  data () {
    return {  
      // count: 0   
    }
  },
   // computed:{
   //  count(){
   //    return this.$store.state.count+1
   //    }
   // }
   // computed:mapState({
   //  count:state=>state.count
   // })
   // computed:mapState(["count"]),
   computed:{
    ...mapState(["count"]),
    // ...mapGetters(["count"])
    count(){
      return this.$store.state.a.count
    }
   },
   methods:mapMutations(['add','sub'])
}
</script>


<style scoped>
  
</style>
