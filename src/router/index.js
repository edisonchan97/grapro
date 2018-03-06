import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import IndexHeader from '@/components/Header/IndexHeader'
import Index from '@/components/Index/Index'
import Reg from '@/components/Login/Reg'
import Login from '@/components/Login/Login'
import ForgetPwd from '@/components/Login/ForgetPwd'
import ResetPwd from '@/components/Login/ResetPwd'
import InputLogin from '@/components/LittleComponents/InputLogin'
import Grapro from '@/components/LittleComponents/Grapro'
import Test from '@/components/LittleComponents/Test'
import BgHead from '@/components/LittleComponents/BgHead'
import PersonalHomePage from '@/components/PersonalHomePage/PersonalHomePage'
import Personal from '@/components/PersonalHomePage/Personal'
import EditPersonalInfo from '@/components/PersonalHomePage/EditPersonalInfo'
import Swiper from '@/components/Swiper/Swiper'
import Home from '@/components/Swiper/Home'
import Search from '@/components/Search/Search'
import Publish from '@/components/Publish/Publish'
import Dynamic from '@/components/Dynamic/Dynamic'
// import TopBar from '@/components/TopBar/TopBar'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ForgetPwd',
      name: 'ForgetPwd',
      component: ForgetPwd
    },
    {
      path: '/ResetPwd',
      name: 'ResetPwd',
      component: ResetPwd
    },
    {
      path: '/BgHead',
      name: 'BgHead',
      component: BgHead
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Personal',
      redirect:'/Personal/Show'
    }
    ,
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal,
      children:[
      {path:'/Personal/EditInfo',component:EditPersonalInfo},
      {path:'/Personal/Show',component:PersonalHomePage}
      ]
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic
    }
  ]
})
