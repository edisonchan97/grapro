import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const state =  {//访问状态对象
    name : "",
    nickname : "",
    introduce:"",
    avatarUrl:"",
    user_id:"",
    sex:"",
    email:"",
    phone:"",
    address:"",
    userInfo:[]
}
const mutations={//访问触发对象

}
const getters ={
    
}
const actions ={

}
export default new Vuex.Store({
    state
})