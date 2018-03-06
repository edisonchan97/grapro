import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const state =  {//访问状态对象
    count : 4
}
const mutations={//访问触发对象
    add(state){
        state.count ++
    },
    sub(state){
        state.count --
    }
}
const getters ={
    count:function(state){
        return state.count +=100
    }
}
const actions ={

}
const moudleA ={
    state,
    mutations,
    getters,
    actions
}
export default new Vuex.Store({
    modules:{
        a:moudleA
    }
})